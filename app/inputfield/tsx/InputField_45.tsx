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

const write = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
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
  background: #fff9f0;
  border: none;
  border-bottom: 2px solid ${props => {
    if (props.$hasError) return '#dc2626';
    if (props.$isSuccess) return '#059669';
    return props.$isFocused ? '#1f2937' : '#d1d5db';
  }};
  border-radius: 4px 4px 0 0;
  padding: 2px;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -8px;
    height: 4px;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      ${props => {
        if (props.$hasError) return 'rgba(220, 38, 38, 0.2)';
        if (props.$isSuccess) return 'rgba(5, 150, 105, 0.2)';
        return props.$isFocused ? 'rgba(31, 41, 55, 0.2)' : 'transparent';
      }} 2px,
      ${props => {
        if (props.$hasError) return 'rgba(220, 38, 38, 0.2)';
        if (props.$isSuccess) return 'rgba(5, 150, 105, 0.2)';
        return props.$isFocused ? 'rgba(31, 41, 55, 0.2)' : 'transparent';
      }} 4px
    );
    opacity: ${props => props.$isFocused ? 1 : 0};
    transition: opacity 0.3s ease;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 18px;
  color: #1f2937;
  background: transparent;
  border: none;
  font-family: 'Caveat', cursive;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9ca3af;
    font-style: italic;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -28px;
  font-size: 20px;
  color: ${props => props.$isFocused ? '#1f2937' : '#6b7280'};
  font-family: 'Caveat', cursive;
  transform-origin: left bottom;
  animation: ${float} 3s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    ${props => props.$isFocused && css`
      transform: scaleX(1);
      animation: ${write} 0.3s ease forwards;
    `}
  }
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#1f2937' : '#9ca3af'};
  transition: all 0.3s ease;
  opacity: 0.7;
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 16px;
  margin-top: 4px;
  font-family: 'Caveat', cursive;
  padding-left: 16px;
  font-style: italic;

  &::before {
    content: '✗';
    margin-right: 8px;
  }
`;

const HandwrittenInput: React.FC<InputFieldProps> = ({
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
        >
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

export default HandwrittenInput; 