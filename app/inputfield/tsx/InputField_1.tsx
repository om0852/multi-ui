"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  outlinecolor?: string;
  labelColor?: string;
  labelSize?: string;
  className?: string;
}

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
  
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --input-bg: #2d3748;
    --input-text: #e2e8f0;
    --input-border: #4a5568;
    --input-placeholder: #a0aec0;
    --label-bg: #1a202c;
  }
  
  @media (prefers-color-scheme: light) {
    --input-bg: #ffffff;
    --input-text: #1a202c;
    --input-border: #e2e8f0;
    --input-placeholder: #a0aec0;
    --label-bg: #ffffff;
  }
`;

const StyledInput = styled.input<{ hasError: boolean; outlinecolor: string }>`
  width: 100%;
  padding: 1rem 0.5rem;
  font-size: 1rem;
  border: 2px solid ${(props) => (props.hasError ? 'red' : props.outlinecolor || 'var(--input-border)')};
  border-radius: 4px;
  color: var(--input-text);
  background-color: var(--input-bg);
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--input-placeholder);
    opacity: 0.7;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    color: ${(props) => (props.hasError ? 'red' : props.outlinecolor || '#4f46e5')};
    background-color: var(--label-bg);
  }
`;

const StyledLabel = styled(motion.label)<{ labelColor: string; labelSize: string }>`
  position: absolute;
  left: 0.5rem;
  top: 1rem;
  background: var(--label-bg);
  padding: 0 0.25rem;
  font-weight: 500;
  color: ${(props) => props.labelColor || 'var(--input-text)'};
  font-size: ${(props) => props.labelSize || '1rem'};
  pointer-events: none;
  transform-origin: left top;
  transition: all 0.2s ease;
`;

const ErrorText = styled.span`
  color: #f56565;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  error,
  outlinecolor = '#212121',
  labelColor = '#212121',
  labelSize = '1rem',
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder=" "
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        hasError={!!error} // Ensuring boolean value here
        outlinecolor={outlinecolor || '#212121'}
        className={className}
      />
      <StyledLabel
        initial={{ y: 0, scale: 1 }}
        animate={isFocused || value ? { y: -20, scale: 0.8 } : { y: 0, scale: 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        labelColor={labelColor || '#212121'}
        labelSize={labelSize || '1rem'}
      >
        {label}
      </StyledLabel>
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default InputField;
