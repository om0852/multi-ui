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

const scanEffect = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const dataFlow = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`;

const hologramFlicker = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.99);
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
  background: rgba(16, 24, 48, 0.8);
  border: 2px solid;
  border-color: ${props => {
    if (props.$hasError) return '#ff3366';
    if (props.$isSuccess) return '#33ff99';
    return props.$isFocused ? '#66ffff' : '#334466';
  }};
  border-radius: 12px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(102, 255, 255, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: ${dataFlow} 3s linear infinite;
    pointer-events: none;
  }

  ${props => props.$isFocused && css`
    box-shadow: 0 0 15px rgba(102, 255, 255, 0.3),
                inset 0 0 15px rgba(102, 255, 255, 0.3);
  `}
`;

const ScanLine = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    #66ffff,
    transparent
  );
  opacity: ${props => props.$isFocused ? 1 : 0};
  animation: ${scanEffect} 2s linear infinite;
  pointer-events: none;
`;

const HologramOverlay = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(90deg, rgba(102, 255, 255, 0.1) 1px, transparent 1px) 0 0 / 20px 20px,
    linear-gradient(0deg, rgba(102, 255, 255, 0.1) 1px, transparent 1px) 0 0 / 20px 20px;
  opacity: ${props => props.$isFocused ? 0.5 : 0.2};
  animation: ${hologramFlicker} 2s ease-in-out infinite;
  pointer-events: none;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #66ffff;
  background: transparent;
  border: none;
  font-family: 'Exo 2', sans-serif;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(102, 255, 255, 0.4);
    text-transform: uppercase;
  }

  &:disabled {
    color: rgba(102, 255, 255, 0.2);
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(102, 255, 255, 0.3);
    color: #ffffff;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#66ffff' : '#334466'};
  font-family: 'Exo 2', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  text-shadow: ${props => props.$isFocused ? 
    '0 0 10px rgba(102, 255, 255, 0.5)' : 
    'none'
  };

  &::before {
    content: '[';
    margin-right: 4px;
    opacity: ${props => props.$isFocused ? 1 : 0};
  }

  &::after {
    content: ']';
    margin-left: 4px;
    opacity: ${props => props.$isFocused ? 1 : 0};
  }
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#66ffff' : '#334466'};
  transition: all 0.3s ease;
  z-index: 1;
  filter: ${props => props.$isFocused ? 
    'drop-shadow(0 0 5px rgba(102, 255, 255, 0.5))' : 
    'none'
  };
`;

const ErrorMessage = styled.div`
  color: #ff3366;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Exo 2', sans-serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    content: '>';
    color: #ff3366;
  }
`;

const FuturisticInput: React.FC<InputFieldProps> = ({
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
        <HologramOverlay $isFocused={isFocused} />
        <ScanLine $isFocused={isFocused} />
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

export default FuturisticInput; 