"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface InputMaskProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  mask: string;
  maskChar?: string;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const holographicShift = keyframes`
  0% {
    filter: hue-rotate(0deg) brightness(1);
    transform: translateX(0);
  }
  25% {
    filter: hue-rotate(90deg) brightness(1.2);
    transform: translateX(2px);
  }
  50% {
    filter: hue-rotate(180deg) brightness(1);
    transform: translateX(0);
  }
  75% {
    filter: hue-rotate(270deg) brightness(1.2);
    transform: translateX(-2px);
  }
  100% {
    filter: hue-rotate(360deg) brightness(1);
    transform: translateX(0);
  }
`;

const scanEffect = keyframes`
  0% {
    transform: translateY(-100%) skewX(45deg);
  }
  100% {
    transform: translateY(100%) skewX(45deg);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Rajdhani', sans-serif;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: rgba(16, 24, 39, 0.8);
  border: 2px solid rgba(147, 197, 253, 0.5);
  border-radius: 8px;
  padding: 2px;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(147, 197, 253, 0.2),
      transparent
    );
    transform: translateX(-100%);
    animation: ${scanEffect} 3s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      rgba(147, 197, 253, 0.1),
      rgba(167, 139, 250, 0.1)
    );
    opacity: ${props => props.$isFocused ? 1 : 0};
    transition: opacity 0.3s ease;
  }

  ${props => props.$isFocused && `
    border-color: rgba(147, 197, 253, 1);
    box-shadow: 0 0 20px rgba(147, 197, 253, 0.3);
    transform: scale(1.01);
  `}

  ${props => props.$hasError && `
    border-color: rgba(248, 113, 113, 1);
    box-shadow: 0 0 20px rgba(248, 113, 113, 0.3);
  `}

  ${props => props.$isSuccess && `
    border-color: rgba(52, 211, 153, 1);
    box-shadow: 0 0 20px rgba(52, 211, 153, 0.3);
  `}
`;

const HolographicOverlay = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(147, 197, 253, 0.1),
    rgba(167, 139, 250, 0.1),
    rgba(147, 197, 253, 0.1)
  );
  opacity: ${props => props.$active ? 1 : 0};
  pointer-events: none;
  animation: ${holographicShift} 3s linear infinite;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  background: transparent;
  border: none;
  font-family: 'Rajdhani', sans-serif;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;

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

  &::selection {
    background: rgba(147, 197, 253, 0.3);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: rgba(147, 197, 253, 0.9);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(147, 197, 253, 0.5);
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? 'rgba(147, 197, 253, 0.9)' : 'rgba(255, 255, 255, 0.5)'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: rgba(248, 113, 113, 0.9);
  font-size: 12px;
  margin-top: 8px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgba(248, 113, 113, 0.5);
`;

const MaskGuide = styled.div<{ $visible: boolean }>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.3);
  font-family: 'Rajdhani', sans-serif;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease;
  z-index: 1;
`;

const FuturisticMaskInput: React.FC<InputMaskProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  mask,
  maskChar = '_',
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

  const formatValue = (input: string): string => {
    let result = '';
    let inputIndex = 0;

    for (let i = 0; i < mask.length && inputIndex < input.length; i++) {
      if (mask[i] === '9') {
        if (/\d/.test(input[inputIndex])) {
          result += input[inputIndex];
          inputIndex++;
        } else {
          result += maskChar;
        }
      } else {
        result += mask[i];
        if (input[inputIndex] === mask[i]) {
          inputIndex++;
        }
      }
    }

    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    const formattedValue = formatValue(newValue);
    setLocalValue(formattedValue);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  const getRemainingMask = () => {
    if (!localValue) return '';
    return mask.slice(localValue.length).replace(/9/g, maskChar);
  };

  return (
    <Container className={className}>
      {label && (
        <Label 
          $isFocused={isFocused} 
          $hasValue={!!localValue}
        >
          {label}{required && '*'}
        </Label>
      )}
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
      >
        <HolographicOverlay $active={isFocused} />
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        <StyledInput
          type="text"
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || mask.replace(/9/g, maskChar)}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
          maxLength={mask.length}
        />
        <MaskGuide $visible={isFocused && !!localValue}>
          {getRemainingMask()}
        </MaskGuide>
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default FuturisticMaskInput; 