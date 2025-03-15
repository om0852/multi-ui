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
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean; $disabled?: boolean }>`
  position: relative;
  width: 100%;
  background: ${props => props.$disabled ? '#f3f4f6' : '#ffffff'};
  border-radius: 4px 4px 0 0;
  transition: all 0.2s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: ${props => {
      if (props.$hasError) return '#b91c1c';
      if (props.$isSuccess) return '#15803d';
      return props.$isFocused ? '#6366f1' : '#e5e7eb';
    }};
    transition: all 0.2s ease;
  }

  &::after {
    height: 2px;
    transform: scaleX(${props => props.$isFocused ? 1 : 0});
    transform-origin: center;
  }

  &:hover::before {
    background: ${props => {
      if (props.$hasError) return '#b91c1c';
      if (props.$isSuccess) return '#15803d';
      return '#6366f1';
    }};
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 20px 16px 6px;
  padding-left: ${props => props.$hasIcon ? '48px' : '16px'};
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  border: none;
  font-family: 'Roboto', sans-serif;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: transparent;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '48px' : '16px'};
  top: ${props => (props.$isFocused || props.$hasValue) ? '8px' : '16px'};
  font-size: ${props => (props.$isFocused || props.$hasValue) ? '12px' : '16px'};
  color: ${props => {
    if (props.$hasError) return '#b91c1c';
    if (props.$isSuccess) return '#15803d';
    return props.$isFocused ? '#6366f1' : '#6b7280';
  }};
  font-family: 'Roboto', sans-serif;
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
    if (props.$hasError) return '#b91c1c';
    if (props.$isSuccess) return '#15803d';
    return props.$isFocused ? '#6366f1' : '#9ca3af';
  }};
  transition: all 0.2s ease;
`;

const HelperText = styled.div<{ $isError: boolean; $isSuccess: boolean }>`
  position: absolute;
  left: 16px;
  top: 100%;
  margin-top: 4px;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  color: ${props => {
    if (props.$isError) return '#b91c1c';
    if (props.$isSuccess) return '#15803d';
    return '#6b7280';
  }};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MaterialInput: React.FC<InputFieldProps> = ({
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
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
        $disabled={disabled}
      >
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
      {(error || success) && (
        <HelperText $isError={!!error} $isSuccess={!!success}>
          {error || 'Valid input'}
        </HelperText>
      )}
    </Container>
  );
};

export default MaterialInput; 