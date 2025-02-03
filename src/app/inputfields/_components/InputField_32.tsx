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

const inkSpread = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(100);
    opacity: 0;
  }
`;

const inkDrop = keyframes`
  0% {
    transform: translateY(-10px) scale(0);
    opacity: 1;
  }
  30% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 0;
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
  border-bottom: 2px solid ${props => {
    if (props.$hasError) return '#dc2626';
    if (props.$isSuccess) return '#059669';
    return props.$isFocused ? '#000000' : '#e5e7eb';
  }};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 2px;
    background: ${props => {
      if (props.$hasError) return '#dc2626';
      if (props.$isSuccess) return '#059669';
      return '#000000';
    }};
    border-radius: 50%;
    opacity: 0;
    transform-origin: center;
    animation: ${props => props.$isFocused ? css`${inkDrop} 0.5s ease-out` : 'none'};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 2px;
    height: 2px;
    background: ${props => {
      if (props.$hasError) return '#dc2626';
      if (props.$isSuccess) return '#059669';
      return '#000000';
    }};
    border-radius: 50%;
    opacity: 0;
    transform-origin: center;
    animation: ${props => props.$isFocused ? css`${inkSpread} 0.5s ease-out` : 'none'};
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #000000;
  background: transparent;
  border: none;
  font-family: 'Crimson Text', serif;

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
  left: ${props => props.$hasIcon ? '40px' : '12px'};
  top: -20px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#000000' : '#6b7280'};
  font-family: 'Crimson Text', serif;
  font-style: italic;
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#000000' : '#9ca3af'};
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 14px;
  margin-top: 4px;
  font-family: 'Crimson Text', serif;
  font-style: italic;
`;

const InkInput: React.FC<InputFieldProps> = ({
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

export default InkInput; 