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

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const textGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 4px #ff00ff, 0 0 11px #ff00ff, 0 0 19px #ff00ff;
  }
  50% {
    text-shadow: 0 0 4px #00ffff, 0 0 11px #00ffff, 0 0 19px #00ffff;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'VT323', monospace;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: #120458;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ff0055';
    if (props.$isSuccess) return '#00ff9f';
    return '#ff00ff';
  }};
  border-radius: 4px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      transparent 0%,
      rgba(32, 128, 255, 0.2) 2%,
      rgba(32, 128, 255, 0.8) 3%,
      rgba(32, 128, 255, 0.2) 3%,
      transparent 100%
    );
    animation: ${scanline} 7.5s linear infinite;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15) 0px,
      rgba(0, 0, 0, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-family: 'VT323', monospace;
  font-size: 18px;
  color: #00ffff;
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
    color: #ff00ff;
  }

  &::placeholder {
    color: rgba(0, 255, 255, 0.5);
  }

  &:disabled {
    color: rgba(0, 255, 255, 0.3);
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  display: block;
  margin-bottom: 8px;
  font-family: 'VT323', monospace;
  font-size: 16px;
  color: #ff00ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${textGlow} 3s ease-in-out infinite;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#ff00ff' : '#00ffff'};
  z-index: 1;
  transition: color 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ff0055;
  font-family: 'VT323', monospace;
  font-size: 16px;
  margin-top: 8px;
  text-shadow: 0 0 4px #ff0055, 0 0 11px #ff0055;
`;

const RetroInput: React.FC<InputFieldProps> = ({
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

export default RetroInput; 