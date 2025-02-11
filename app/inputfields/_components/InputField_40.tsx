"use client";
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

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
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: #ffffff;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isSuccess) return '#10b981';
    return props.$isFocused ? '#6366f1' : '#e5e7eb';
  }};
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => {
      if (props.$hasError) return '#ef4444';
      if (props.$isSuccess) return '#10b981';
      return '#6366f1';
    }};
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  padding-top: 20px;
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: transparent;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
    background: #f9fafb;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: ${props => (props.$isFocused || props.$hasValue) ? '8px' : '18px'};
  font-size: ${props => (props.$isFocused || props.$hasValue) ? '12px' : '16px'};
  color: ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isSuccess) return '#10b981';
    return props.$isFocused ? '#6366f1' : '#6b7280';
  }};
  font-family: 'Inter', sans-serif;
  pointer-events: none;
  transform-origin: left top;
  transition: all 0.2s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isSuccess) return '#10b981';
    return props.$isFocused ? '#6366f1' : '#9ca3af';
  }};
  transition: all 0.2s ease;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  font-family: 'Inter', sans-serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '•';
    font-size: 16px;
  }
`;

const FloatingLabelInput: React.FC<InputFieldProps> = ({
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

export default FloatingLabelInput; 