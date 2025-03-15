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

const circuitFlow = keyframes`
  0% {
    background-position: -300% 0;
  }
  100% {
    background-position: 300% 0;
  }
`;

const neonPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px #0ff,
                0 0 10px #0ff,
                0 0 20px #0ff,
                0 0 40px #0ff;
  }
  50% {
    box-shadow: 0 0 10px #0ff,
                0 0 20px #0ff,
                0 0 40px #0ff,
                0 0 80px #0ff;
  }
`;

const dataTransfer = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
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
  background: #1a1a1a;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ff3333';
    if (props.$isSuccess) return '#33ff33';
    return props.$isFocused ? '#00ffff' : '#333';
  }};
  border-radius: 8px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(0, 255, 255, 0.1) 10px,
      rgba(0, 255, 255, 0.1) 20px
    );
    mask: linear-gradient(
      90deg,
      transparent,
      #000 20%,
      #000 80%,
      transparent
    );
    animation: ${circuitFlow} 20s linear infinite;
    opacity: ${props => props.$isFocused ? 1 : 0.3};
  }

  ${props => props.$isFocused && css`
    animation: ${neonPulse} 2s ease-in-out infinite;
  `}
`;

const CircuitPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 10px 10px, rgba(0, 255, 255, 0.1) 2px, transparent 2px),
    linear-gradient(0deg, transparent 9px, rgba(0, 255, 255, 0.05) 10px),
    linear-gradient(90deg, transparent 9px, rgba(0, 255, 255, 0.05) 10px);
  background-size: 20px 20px;
  pointer-events: none;
  opacity: 0.5;
`;

const DataStream = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    ${props => props.$isFocused ? '#00ffff' : 'rgba(0, 255, 255, 0.3)'},
    transparent
  );
  animation: ${dataTransfer} 2s linear infinite;
  opacity: ${props => props.$isFocused ? 1 : 0.3};
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #00ffff;
  background: transparent;
  border: none;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 255, 255, 0.3);
    transition: color 0.3s ease;
  }

  &:disabled {
    color: rgba(0, 255, 255, 0.2);
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(0, 255, 255, 0.2);
    color: #fff;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#00ffff' : 'rgba(0, 255, 255, 0.7)'};
  font-family: 'Share Tech Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  text-shadow: ${props => props.$isFocused ? 
    '0 0 5px #0ff, 0 0 10px #0ff' : 
    'none'
  };

  &::before {
    content: '>';
    margin-right: 8px;
    opacity: ${props => props.$isFocused ? 1 : 0};
  }
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#00ffff' : 'rgba(0, 255, 255, 0.5)'};
  transition: all 0.3s ease;
  z-index: 1;
  filter: ${props => props.$isFocused ? 
    'drop-shadow(0 0 5px #0ff)' : 
    'none'
  };
`;

const ErrorMessage = styled.div`
  color: #ff3333;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Share Tech Mono', monospace;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-shadow: 0 0 5px rgba(255, 51, 51, 0.5);

  &::before {
    content: 'ERR:';
    color: #ff3333;
  }
`;

const NeonCircuitInput: React.FC<InputFieldProps> = ({
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
        <CircuitPattern />
        <DataStream $isFocused={isFocused} />
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

export default NeonCircuitInput; 