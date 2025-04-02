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
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const LiquidBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 50%;
  background: linear-gradient(45deg, #FF3366, #FF6B6B);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(${props => props.checked ? '0%' : '100%'});
    transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
  }
`;

const CheckMark = styled(motion.svg)`
  width: 60%;
  height: 60%;
  color: white;
`;

const liquidVariants = {
  checked: {
    scale: [1, 1.2, 0.9, 1.1, 1],
    borderRadius: ["50%", "30%", "50%"],
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  },
  unchecked: {
    scale: 1,
    borderRadius: "50%"
  }
};

const checkMarkVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3
    }
  },
  unchecked: {
    pathLength: 0,
    opacity: 0
  }
};

export default function Checkbox_43({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <LiquidBox
        checked={value}
        size={size}
        variants={liquidVariants}
        animate={value ? "checked" : "unchecked"}
      >
        {value && (
          <CheckMark
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M20 6L9 17L4 12"
              variants={checkMarkVariants}
              initial="unchecked"
              animate="checked"
            />
          </CheckMark>
        )}
      </LiquidBox>
    </Container>
  );
} 