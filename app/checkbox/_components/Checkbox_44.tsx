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

const MinimalBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border: 2px solid ${props => props.checked ? '#10B981' : '#9CA3AF'};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${props => !props.checked && '#6B7280'};
  }
`;

const CheckMark = styled(motion.svg)`
  width: 80%;
  height: 80%;
  color: #10B981;
`;

const pathVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  unchecked: {
    pathLength: 0,
    opacity: 0
  }
};

const boxVariants = {
  checked: {
    scale: [1, 0.95, 1],
    transition: {
      duration: 0.2
    }
  },
  unchecked: {
    scale: 1
  }
};

export default function Checkbox_44({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <MinimalBox
        checked={value}
        size={size}
        variants={boxVariants}
        animate={value ? "checked" : "unchecked"}
      >
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
            variants={pathVariants}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        </CheckMark>
      </MinimalBox>
    </Container>
  );
} 