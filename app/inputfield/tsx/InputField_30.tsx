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

const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                 0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                 0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                 -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                 -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                 0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                 0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
                 -0.04em -0.025em 0 #fffc00;
  }
`;

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
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
  background: #0a0a0a;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ff073a';
    if (props.$isSuccess) return '#00ff9f';
    return props.$isFocused ? '#0ff' : '#2d2d2d';
  }};
  border-radius: 4px;
  overflow: hidden;
  padding: 2px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      transparent 0%,
      rgba(32, 128, 255, 0.2) 2%,
      rgba(32, 128, 255, 0.8) 3%,
      rgba(32, 128, 255, 0.2) 3%,
      transparent 100%
    );
    animation: ${scanline} 7.5s linear infinite;
    pointer-events: none;
    opacity: ${props => props.$isFocused ? 0.5 : 0};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(32, 128, 255, 0.2) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    animation: ${props => props.$isFocused ? css`${scanline} 3s linear infinite` : 'none'};
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-family: 'Share Tech Mono', monospace;
  font-size: 16px;
  color: #0ff;
  background: transparent;
  border: none;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.8);
  position: relative;
  z-index: 2;

  &:focus {
    outline: none;
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
  font-family: 'Share Tech Mono', monospace;
  font-size: 14px;
  color: #0ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  ${props => props.$isFocused && css`
    animation: ${glitch} 1s linear infinite;
  `}

  &::before {
    content: '>';
    margin-right: 8px;
    color: #0ff;
  }
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#0ff' : 'rgba(0, 255, 255, 0.5)'};
  z-index: 2;
  transition: all 0.3s ease;
  
  ${props => props.$isFocused && css`
    animation: ${glitch} 1s linear infinite;
  `}
`;

const ErrorMessage = styled.div`
  color: #ff073a;
  font-family: 'Share Tech Mono', monospace;
  font-size: 14px;
  margin-top: 8px;
  text-transform: uppercase;
  animation: ${glitch} 1s linear infinite;

  &::before {
    content: '[ERROR]';
    margin-right: 8px;
  }
`;

const CyberpunkInput: React.FC<InputFieldProps> = ({
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

export default CyberpunkInput; 