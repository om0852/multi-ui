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

const holographicShine = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const glitchEffect = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      90deg,
      #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff
    );
    background-size: 200% 200%;
    animation: ${holographicShine} 6s linear infinite;
    opacity: ${props => props.$isFocused ? 0.5 : 0.2};
    z-index: -1;
  }

  ${props => props.$isFocused && css`
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  `}
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #ffffff;
  background: transparent;
  border: none;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 12px;
  top: -24px;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  animation: ${props => props.$isFocused ? css`${glitchEffect} 2s infinite` : 'none'};
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, ${props => props.$isFocused ? 0.9 : 0.5});
  transition: all 0.3s ease;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 12px;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(255, 68, 68, 0.5);
`;

const HolographicInput: React.FC<InputFieldProps> = ({
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

export default HolographicInput; 