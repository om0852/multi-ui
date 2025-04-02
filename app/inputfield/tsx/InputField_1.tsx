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
`;

const StyledInput = styled.input<{ hasError: boolean; outlinecolor: string }>`
  width: 100%;
  padding: 1rem 0.5rem;
  font-size: 1rem;
  border: 2px solid ${(props) => (props.hasError ? 'red' : props.outlinecolor || '#212121')};
  border-radius: 4px;
  color: #212121;
  background: transparent;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    color: ${(props) => (props.hasError ? 'red' : '#fab700')};
  }
`;

const StyledLabel = styled(motion.label)<{ labelColor: string; labelSize: string }>`
  position: absolute;
  left: 0.5rem;
  top: 1rem;
  background: white;
  padding: 0 0.25rem;
  font-weight: bold;
  color: ${(props) => props.labelColor || '#212121'};
  font-size: ${(props) => props.labelSize || '1rem'};
  pointer-events: none;
  transform-origin: left top;
`;

const ErrorText = styled.span`
  color: red;
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
