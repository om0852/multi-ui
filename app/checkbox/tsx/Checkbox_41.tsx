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

interface ContainerProps {
  size: string;
  disabled?: boolean;
}

const CheckboxContainer = styled.div<ContainerProps>`
  display: inline-block;
  vertical-align: middle;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled(motion.div)<{ 
  checked: boolean; 
  size: string;
  disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => {
    switch(props.size) {
      case 'small': return '18px';
      case 'large': return '28px';
      default: return '22px';
    }
  }};
  height: ${props => {
    switch(props.size) {
      case 'small': return '18px';
      case 'large': return '28px';
      default: return '22px';
    }
  }};
  background: ${props => props.checked ? 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)' : 'white'};
  border: 2px solid ${props => props.checked ? '#4F46E5' : '#CBD5E0'};
  border-radius: 6px;
  transition: all 0.2s ease;
  box-shadow: ${props => props.checked ? '0 2px 4px rgba(79, 70, 229, 0.2)' : 'none'};

  &:hover {
    ${props => !props.disabled && `
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
    `}
  }
`;

const CheckIcon = styled(motion.svg)<{ size: string }>`
  width: ${props => {
    switch(props.size) {
      case 'small': return '12px';
      case 'large': return '18px';
      default: return '14px';
    }
  }};
  height: ${props => {
    switch(props.size) {
      case 'small': return '12px';
      case 'large': return '18px';
      default: return '14px';
    }
  }};
  color: white;
  stroke-width: 3;
`;

const checkVariants = {
  checked: { 
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  unchecked: { 
    scale: 0,
    opacity: 0
  }
};

const containerVariants = {
  checked: { 
    scale: [1, 1.1, 1],
    transition: { duration: 0.3 }
  },
  unchecked: { 
    scale: 1
  }
};

export default function Checkbox_41({ 
  value, 
  onChange, 
  disabled = false, 
  size = "medium" 
}: CheckboxProps) {
  const handleChange = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <CheckboxContainer 
      size={size} 
      onClick={handleChange}
      disabled={disabled}
    >
      <HiddenCheckbox 
        checked={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <StyledCheckbox
        checked={value}
        size={size}
        disabled={disabled}
        variants={containerVariants}
        animate={value ? "checked" : "unchecked"}
        initial={false}
      >
        <CheckIcon
          size={size}
          variants={checkVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M20 6L9 17L4 12"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={value ? 0 : 1}
            transition={{ duration: 0.2 }}
          />
        </CheckIcon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
} 