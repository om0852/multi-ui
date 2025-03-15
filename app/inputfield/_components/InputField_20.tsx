"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

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

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  padding: 2px;
  border-radius: 12px;
  background: ${props => {
    if (props.$hasError) return 'linear-gradient(45deg, #ff6b6b, #ffa8a8)';
    if (props.$isSuccess) return 'linear-gradient(45deg, #69db7c, #40c057)';
    return 'linear-gradient(90deg, #4f46e5, #7c3aed, #2563eb)';
  }};
  background-size: 200% 200%;

  ${props => props.$isFocused && css`
    animation: ${gradientAnimation} 3s ease infinite;
  `}

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    background: #ffffff;
    border-radius: 11px;
    z-index: 0;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  position: relative;
  width: 100%;
  padding: 14px 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  border: none;
  border-radius: 10px;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasError: boolean }>`
  position: absolute;
  left: 4px;
  top: -24px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isFocused) return '#4f46e5';
    return '#4b5563';
  }};
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#4f46e5' : '#9ca3af'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
  padding-left: 4px;
`;

const GradientInput: React.FC<InputFieldProps> = ({
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
        <Label $isFocused={isFocused} $hasValue={!!localValue} $hasError={!!error}>
          {label}{required && ' *'}
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

export default GradientInput; 