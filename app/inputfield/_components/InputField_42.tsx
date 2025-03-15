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

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0; }
  94% { opacity: 1; }
  95% { opacity: 0; }
  96% { opacity: 1; }
`;

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 8px rgba(0, 255, 0, 0.6); }
  50% { text-shadow: 0 0 12px rgba(0, 255, 0, 0.8); }
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
  background: #0a0a0a;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ff0000';
    if (props.$isSuccess) return '#00ff00';
    return '#00ff00';
  }};
  border-radius: 4px;
  padding: 2px;
  overflow: hidden;
  animation: ${flicker} 5s infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      transparent 50%,
      rgba(0, 255, 0, 0.05) 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: rgba(0, 255, 0, 0.1);
    animation: ${scanline} 6s linear infinite;
    pointer-events: none;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-family: 'VT323', monospace;
  font-size: 18px;
  color: #00ff00;
  background: transparent;
  border: none;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
  animation: ${glow} 2s ease-in-out infinite;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 255, 0, 0.5);
  }

  &:disabled {
    color: rgba(0, 255, 0, 0.3);
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(0, 255, 0, 0.3);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '40px' : '12px'};
  top: -24px;
  font-family: 'VT323', monospace;
  font-size: 16px;
  color: #00ff00;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);

  &::before {
    content: '>';
    margin-right: 8px;
  }
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #00ff00;
  opacity: ${props => props.$isFocused ? 1 : 0.7};
  transition: opacity 0.3s ease;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-family: 'VT323', monospace;
  font-size: 14px;
  margin-top: 4px;
  padding-left: 12px;
  text-shadow: 0 0 8px rgba(255, 0, 0, 0.6);

  &::before {
    content: 'ERROR:';
    margin-right: 8px;
  }
`;

const RetroTerminalInput: React.FC<InputFieldProps> = ({
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
          {label}{required && '*'}
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

export default RetroTerminalInput; 