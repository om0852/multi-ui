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

const BubbleBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 50%;
  background: ${props => props.checked ? '#8B5CF6' : 'white'};
  border: 2px solid ${props => props.checked ? '#8B5CF6' : '#D1D5DB'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Ripple = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #8B5CF6;
  opacity: 0.3;
`;

const CheckMark = styled(motion.svg)`
  width: 60%;
  height: 60%;
  color: white;
  z-index: 1;
`;

const rippleVariants = {
  checked: {
    scale: [0, 2],
    opacity: [0.5, 0],
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const bubbleVariants = {
  checked: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  unchecked: {
    scale: 1
  }
};

const checkVariants = {
  checked: {
    scale: [0, 1.2, 1],
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  unchecked: {
    scale: 0,
    opacity: 0
  }
};

export default function Checkbox_46({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <BubbleBox
        checked={value}
        size={size}
        variants={bubbleVariants}
        animate={value ? "checked" : "unchecked"}
      >
        {value && (
          <Ripple
            variants={rippleVariants}
            initial="unchecked"
            animate="checked"
          />
        )}
        <CheckMark
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={checkVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        >
          <motion.path
            d="M20 6L9 17L4 12"
          />
        </CheckMark>
      </BubbleBox>
    </Container>
  );
}