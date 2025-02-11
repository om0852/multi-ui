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

const morphAnimation = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`;

const liquidFill = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
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
  border: 2px solid transparent;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  animation: ${morphAnimation} 8s ease-in-out infinite;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => {
      if (props.$hasError) return 'linear-gradient(45deg, #ff0055, #ff5555)';
      if (props.$isSuccess) return 'linear-gradient(45deg, #00ff88, #00ffcc)';
      if (props.$isFocused) return 'linear-gradient(45deg, #4facfe, #00f2fe)';
      return 'linear-gradient(45deg, #8f9aff, #a259ff)';
    }};
    opacity: 0.1;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => {
      if (props.$hasError) return 'linear-gradient(45deg, #ff0055, #ff5555)';
      if (props.$isSuccess) return 'linear-gradient(45deg, #00ff88, #00ffcc)';
      if (props.$isFocused) return 'linear-gradient(45deg, #4facfe, #00f2fe)';
      return 'linear-gradient(45deg, #8f9aff, #a259ff)';
    }};
    opacity: 0.2;
    transform: translateY(100%);
    transition: transform 0.5s ease;
    ${props => props.$isFocused && css`
      animation: ${liquidFill} 0.5s ease forwards;
    `}
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #2d3748;
  background: transparent;
  border: none;
  position: relative;
  z-index: 2;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(45, 55, 72, 0.6);
  }

  &:disabled {
    color: rgba(45, 55, 72, 0.4);
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.$isFocused ? '#4facfe' : '#4a5568'};
  transition: all 0.3s ease;
  transform-origin: left;
  transform: ${props => (props.$isFocused || props.$hasValue) ? 'scale(0.85)' : 'scale(1)'};
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#4facfe' : '#a0aec0'};
  transition: all 0.3s ease;
  z-index: 2;
`;

const ErrorMessage = styled.div`
  color: #ff0055;
  font-size: 14px;
  margin-top: 8px;
  padding-left: 16px;
  opacity: 0.8;
`;

const MorphicInput: React.FC<InputFieldProps> = ({
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

export default MorphicInput; 