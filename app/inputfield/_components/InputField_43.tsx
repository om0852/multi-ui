"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

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

const wave = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
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
  background: #ffffff;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ff6b6b';
    if (props.$isSuccess) return '#51cf66';
    return props.$isFocused ? '#339af0' : '#dee2e6';
  }};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${props => props.$isFocused ? '100%' : '0'};
    background: ${props => {
      if (props.$hasError) return 'rgba(255, 107, 107, 0.1)';
      if (props.$isSuccess) return 'rgba(81, 207, 102, 0.1)';
      return 'rgba(51, 154, 240, 0.1)';
    }};
    transition: height 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => {
        if (props.$hasError) return 'rgba(255, 107, 107, 0.2)';
        if (props.$isSuccess) return 'rgba(81, 207, 102, 0.2)';
        return 'rgba(51, 154, 240, 0.2)';
      }},
      transparent
    );
    animation: ${wave} 2s linear infinite;
    display: ${props => props.$isFocused ? 'block' : 'none'};
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #495057;
  background: transparent;
  border: none;
  font-family: 'Quicksand', sans-serif;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #adb5bd;
  }

  &:disabled {
    color: #adb5bd;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: ${props => {
    if (props.$hasError) return '#ff6b6b';
    if (props.$isSuccess) return '#51cf66';
    return props.$isFocused ? '#339af0' : '#495057';
  }};
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  animation: ${float} 3s ease-in-out infinite;
`;

const IconWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => {
    if (props.$hasError) return '#ff6b6b';
    if (props.$isSuccess) return '#51cf66';
    return props.$isFocused ? '#339af0' : '#adb5bd';
  }};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 4px;
  font-family: 'Quicksand', sans-serif;
  padding-left: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '~';
    font-size: 16px;
  }
`;

const LiquidFillInput: React.FC<InputFieldProps> = ({
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
        <Label 
          $isFocused={isFocused} 
          $hasValue={!!localValue}
          $hasIcon={!!icon}
          $hasError={!!error}
          $isSuccess={!!success}
        >
          {label}{required && ' *'}
        </Label>
      )}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && (
          <IconWrapper 
            $isFocused={isFocused}
            $hasError={!!error}
            $isSuccess={!!success}
          >
            {icon}
          </IconWrapper>
        )}
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

export default LiquidFillInput; 