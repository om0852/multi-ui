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
  autoFocus?: boolean;
  maxLength?: number;
  className?: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 12px 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    border-radius: 10px;
    border: 0;
    background-color: ${props => props.$hasError ? '#fff5f5' : props.$isSuccess ? '#f4fce3' : '#f3f4f6'};
    outline: 2px solid ${props => {
      if (props.$hasError) return '#ff6b6b';
      if (props.$isSuccess) return '#82c91e';
      if (props.$isFocused) return '#3b82f6';
      return '#e2e8f0';
    }};
    outline-offset: 2px;
    transition: all 0.25s ease;
    color: #1a1a1a;

    &:focus {
      outline-offset: 4px;
      background-color: ${props => props.$hasError ? '#fff5f5' : props.$isSuccess ? '#f4fce3' : '#ffffff'};
    }

    &:disabled {
      background-color: #e5e7eb;
      color: #9ca3af;
      cursor: not-allowed;
      outline-color: #d1d5db;
    }

    &::placeholder {
      color: #9ca3af;
      opacity: ${props => props.$isFocused ? '0.7' : '1'};
      transition: opacity 0.25s ease;
    }
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasError: boolean; $isSuccess: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '40px' : '4px'};
  top: ${props => (props.$isFocused || props.$hasValue) ? '-24px' : '12px'};
  font-size: ${props => (props.$isFocused || props.$hasValue) ? '14px' : '16px'};
  color: ${props => {
    if (props.$hasError) return '#ff6b6b';
    if (props.$isSuccess) return '#82c91e';
    if (props.$isFocused) return '#3b82f6';
    return '#64748b';
  }};
  pointer-events: none;
  transition: all 0.25s ease;
  padding: 0 4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  /* Move label to the left when focused or has value */
  ${props => (props.$isFocused || props.$hasValue) && `
    left: 4px;
  `}
`;

const IconWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => {
    if (props.$hasError) return '#ff6b6b';
    if (props.$isSuccess) return '#82c91e';
    if (props.$isFocused) return '#3b82f6';
    return '#9ca3af';
  }};
  transition: color 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 14px;
  margin-top: 6px;
  padding-left: 4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const SuccessIndicator = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #82c91e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  padding-left: ${props => props.$hasIcon ? '40px' : '16px'} !important;
`;

const InputField: React.FC<InputFieldProps> = ({
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
  autoFocus,
  maxLength,
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
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && (
          <IconWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
            {icon}
          </IconWrapper>
        )}
        {label && (
          <Label 
            $isFocused={isFocused} 
            $hasValue={!!localValue} 
            $hasError={!!error} 
            $isSuccess={!!success}
            $hasIcon={!!icon}
          >
            {label}{required && ' *'}
          </Label>
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
          autoFocus={autoFocus}
          maxLength={maxLength}
          $hasIcon={!!icon}
        />
        {success && (
          <SuccessIndicator>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3334 4L6.00008 11.3333L2.66675 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SuccessIndicator>
        )}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default InputField; 