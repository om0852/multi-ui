"use client";
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ComboBoxProps {
  className?: string;
  placeholder?: string;
  inputType?: string;
  name: string;
  id: string;
  label?: string;
  error?: string;
  options?: string[];
  leadingIcon?: string; // Leading icon URL
  trailingIcon?: string; // Trailing icon URL
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --input-bg: #2d3748;
    --input-text: #e2e8f0;
    --input-border: #4a5568;
    --input-placeholder: #a0aec0;
    --label-color: #e2e8f0;
    --datalist-bg: #2d3748;
    --datalist-text: #e2e8f0;
  }
  
  @media (prefers-color-scheme: light) {
    --input-bg: #ffffff;
    --input-text: #1a202c;
    --input-border: #e2e8f0;
    --input-placeholder: #a0aec0;
    --label-color: #4a5568;
    --datalist-bg: #ffffff;
    --datalist-text: #1a202c;
  }
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  font-weight: 500;
  color: var(--label-color);
  transition: color 0.3s ease;
`;

const ComboBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img<{ position: 'left' | 'right' }>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ position }) => (position === 'left' ? 'left: 10px;' : 'right: 10px;')}
  pointer-events: none; // Prevents the icon from interfering with clicks in the input
`;

const Input = styled.input<{ hasLeadingIcon: boolean; hasTrailingIcon: boolean }>`
  font: inherit;
  padding: 0.5em 0.5em;
  border: 1px solid var(--input-border);
  border-radius: 4px;
  width: 100%;
  background-color: var(--input-bg);
  color: var(--input-text);
  transition: all 0.3s ease;
  padding-left: ${({ hasLeadingIcon }) => (hasLeadingIcon ? '35px' : '10px')};
  padding-right: ${({ hasTrailingIcon }) => (hasTrailingIcon ? '35px' : '10px')};
  
  &::placeholder {
    color: var(--input-placeholder);
    opacity: 0.7;
  }
  
  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 1px #4f46e5;
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  color: #f56565;
  font-size: 0.8em;
  margin-top: 0.5em;
  transition: color 0.3s ease;
`;

const StyledDataList = styled.datalist`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid var(--input-border);
  border-radius: 4px;
  background: var(--datalist-bg);
  color: var(--datalist-text);
  z-index: 10;
  
  option {
    padding: 8px 12px;
    cursor: pointer;
    
    &:hover {
      background-color: rgba(79, 70, 229, 0.1);
    }
  }
`;

const InputField_2: React.FC<ComboBoxProps> = ({
  className,
  placeholder,
  inputType = "text",
  name,
  id,
  label,
  error,
  options,
  leadingIcon,
  trailingIcon,
}) => {
  return (
    <InputWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <ComboBoxWrapper>
        {leadingIcon && <Icon src={leadingIcon} alt="leading icon" position="left" />}
        <Input
          type={inputType}
          name={name}
          id={id}
          className={className}
          placeholder={placeholder}
          list={`${id}-options`}
          autoComplete="off"
          hasLeadingIcon={!!leadingIcon}
          hasTrailingIcon={!!trailingIcon}
        />
        {trailingIcon && <Icon src={trailingIcon} alt="trailing icon" position="right" />}
        <StyledDataList id={`${id}-options`}>
          {options && options.map((option, index) => (
            <motion.option key={index} value={option} whileHover={{ scale: 1.05 }}>
              {option}
            </motion.option>
          ))}
        </StyledDataList>
      </ComboBoxWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default InputField_2;
