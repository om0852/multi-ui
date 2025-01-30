'use client';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

const Container = styled.div<{ disabled?: boolean }>`
  display: inline-block;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  position: relative;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const BlobContainer = styled(motion.div)<{ size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlobSVG = styled(motion.svg)`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: url('#goo');
`;

const CheckMark = styled(motion.svg)`
  width: 65%;
  height: 65%;
  color: white;
  z-index: 1;
  position: relative;
`;

const blobPaths = {
  square: "M3 3 L21 3 L21 21 L3 21 Z",
  blob1: "M12 3C17 3 21 7 21 12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3Z",
  blob2: "M12 3C15 3 18 4 19.5 7C21 10 21 14 19.5 17C18 20 15 21 12 21C9 21 6 20 4.5 17C3 14 3 10 4.5 7C6 4 9 3 12 3Z"
};

const blobVariants = {
  unchecked: {
    d: blobPaths.square,
    fill: "#E5E7EB"
  },
  checking: {
    d: [blobPaths.square, blobPaths.blob1, blobPaths.blob2, blobPaths.blob1],
    fill: ["#E5E7EB", "#06B6D4", "#06B6D4", "#06B6D4"],
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const checkVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3
    }
  }
};

export default function Checkbox_55({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <BlobContainer size={size}>
        <svg width="0" height="0">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <BlobSVG viewBox="0 0 24 24">
          <motion.path
            variants={blobVariants}
            initial="unchecked"
            animate={value ? "checking" : "unchecked"}
          />
        </BlobSVG>
        {value && (
          <CheckMark
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={checkVariants}
            initial="unchecked"
            animate="checked"
          >
            <motion.path d="M20 6L9 17L4 12" />
          </CheckMark>
        )}
      </BlobContainer>
    </Container>
  );
} 