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

const floatUp = keyframes`
  from {
    transform: translateY(0);
    font-size: 16px;
  }
  to {
    transform: translateY(-24px);
    font-size: 12px;
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
  background: #f8fafc;
  border-radius: 8px;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isSuccess) return '#10b981';
    if (props.$isFocused) return '#6366f1';
    return '#e2e8f0';
  }};
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    border-color: ${props => props.$isFocused ? '#6366f1' : '#cbd5e1'};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 32px;
    background: ${props => {
      if (props.$hasError) return 'rgba(239, 68, 68, 0.05)';
      if (props.$isSuccess) return 'rgba(16, 185, 129, 0.05)';
      if (props.$isFocused) return 'rgba(99, 102, 241, 0.05)';
      return 'transparent';
    }};
    transition: all 0.2s ease;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 24px 16px 8px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #0f172a;
  background: transparent;
  border: none;
  position: relative;
  z-index: 2;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: transparent;
  }

  &:disabled {
    color: #94a3b8;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasError: boolean }>`
  position: absolute;
  left: ${props => props.$hasValue ? '16px' : '44px'};
  top: ${props => (props.$isFocused || props.$hasValue) ? '8px' : '16px'};
  font-size: ${props => (props.$isFocused || props.$hasValue) ? '12px' : '16px'};
  color: ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isFocused) return '#6366f1';
    return '#64748b';
  }};
  pointer-events: none;
  transition: all 0.2s ease;
  z-index: 2;
  
  ${props => (props.$isFocused || props.$hasValue) && css`
    animation: ${floatUp} 0.2s ease forwards;
  `}
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#6366f1' : '#94a3b8'};
  transition: all 0.2s ease;
  z-index: 2;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
  padding-left: 16px;
`;

const FloatingInput: React.FC<InputFieldProps> = ({
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
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        {label && (
          <Label $isFocused={isFocused} $hasValue={!!localValue} $hasError={!!error}>
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

export default FloatingInput; 