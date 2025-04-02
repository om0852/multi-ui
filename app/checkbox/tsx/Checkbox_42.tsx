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

const NeonBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 8px;
  background: ${props => props.checked ? '#00ff00' : '#333'};
  box-shadow: ${props => props.checked ? 
    '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00' : 
    'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const CheckMark = styled(motion.div)`
  color: black;
  font-weight: bold;
`;

const neonVariants = {
  checked: {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  unchecked: {
    scale: 1,
    rotate: 0
  }
};

export default function Checkbox_42({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <NeonBox
        checked={value}
        size={size}
        variants={neonVariants}
        animate={value ? "checked" : "unchecked"}
      >
        {value && (
          <CheckMark
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            ✓
          </CheckMark>
        )}
      </NeonBox>
    </Container>
  );
} 