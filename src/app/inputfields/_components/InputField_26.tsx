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
  perspective: 1000px;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  transform: ${props => props.$isFocused ? 'rotateX(2deg) rotateY(-2deg)' : 'rotateX(0) rotateY(0)'};
  transition: transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => {
      if (props.$hasError) return '#ef4444';
      if (props.$isSuccess) return '#10b981';
      return '#3b82f6';
    }};
    transform: translateZ(-20px);
    border-radius: 12px;
    opacity: 0.3;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 
      inset 0 0 0 2px ${props => {
        if (props.$hasError) return '#ef4444';
        if (props.$isSuccess) return '#10b981';
        return '#3b82f6';
      }},
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
    transform: translateZ(-10px);
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '48px' : '16px'};
  font-size: 16px;
  color: #1f2937;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  transform: translateZ(0);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 
      0 0 0 4px rgba(59, 130, 246, 0.1),
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    background: #f3f4f6;
    border-color: #d1d5db;
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  transform: translateZ(10px);
  transition: all 0.3s ease;

  ${props => props.$isFocused && `
    color: #3b82f6;
    transform: translateZ(20px);
  `}
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%) translateZ(0);
  color: ${props => props.$isFocused ? '#3b82f6' : '#9ca3af'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
  padding-left: 16px;
  transform: translateZ(10px);
`;

const ThreeDInput: React.FC<InputFieldProps> = ({
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

export default ThreeDInput; 