"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Helvetica', 'Arial', sans-serif;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: #ffffff;
  border: 4px solid #000000;
  transform: ${props => props.$isFocused ? 'translate(-4px, -4px)' : 'translate(0, 0)'};
  transition: transform 0.1s ease;

  ${props => props.$isFocused && `
    box-shadow: 4px 4px 0 #000000;
  `}

  ${props => props.$hasError && `
    background: #ff0000;
    border-style: dashed;
  `}

  ${props => props.$isSuccess && `
    background: #00ff00;
    border-style: double;
  `}
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '48px' : '16px'};
  font-family: 'Courier New', monospace;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  background: transparent;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #666666;
    text-transform: uppercase;
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  display: inline-block;
  padding: 4px 8px;
  margin-bottom: 8px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background: #000000;
  text-transform: uppercase;
  transform: ${props => props.$isFocused ? 'rotate(-2deg)' : 'rotate(0)'};
  transition: transform 0.2s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #000000;
  transition: transform 0.2s ease;

  ${props => props.$isFocused && `
    transform: translateY(-50%) scale(1.2);
  `}
`;

const ErrorMessage = styled.div`
  margin-top: 8px;
  padding: 8px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background: #ff0000;
  text-transform: uppercase;
  border: 2px solid #000000;
`;

const RequiredMark = styled.span`
  display: inline-block;
  margin-left: 4px;
  font-size: 18px;
  transform: rotate(15deg);
`;

const BrutalistInput: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  value = '',
  onChange,
  error,
  success,
  disabled,
  required,
  icon,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Container className={className}>
      {label && (
        <Label $isFocused={isFocused} $hasValue={!!localValue}>
          {label}{required && <RequiredMark>*</RequiredMark>}
        </Label>
      )}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        <StyledInput
          type={type}
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default BrutalistInput; 