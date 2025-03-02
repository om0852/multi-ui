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

const matrixRain = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const glitch = keyframes`
  0% {
    clip-path: inset(50% 0 30% 0);
    transform: skew(0.15turn, 2deg);
  }
  20% {
    clip-path: inset(20% 0 60% 0);
    transform: skew(-0.15turn, -2deg);
  }
  40% {
    clip-path: inset(10% 0 40% 0);
    transform: skew(0.15turn, 2deg);
  }
  60% {
    clip-path: inset(40% 0 20% 0);
    transform: skew(-0.15turn, -2deg);
  }
  80% {
    clip-path: inset(30% 0 50% 0);
    transform: skew(0.15turn, 2deg);
  }
  100% {
    clip-path: inset(50% 0 30% 0);
    transform: skew(-0.15turn, -2deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 10px #0f0,
                 0 0 20px #0f0,
                 0 0 30px #0f0;
  }
  50% {
    opacity: 0.5;
    text-shadow: 0 0 5px #0f0,
                 0 0 10px #0f0,
                 0 0 15px #0f0;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Source Code Pro', monospace;
`;

const MatrixRain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.3;

  &::before {
    content: '01001010101110101010';
    position: absolute;
    color: #0f0;
    font-size: 12px;
    line-height: 1;
    white-space: nowrap;
    animation: ${matrixRain} 2s linear infinite;
    text-shadow: 0 0 5px #0f0;
  }
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: rgba(0, 10, 0, 0.9);
  border: 1px solid ${props => {
    if (props.$hasError) return '#ff0000';
    if (props.$isSuccess) return '#00ff00';
    return props.$isFocused ? '#00ff00' : '#003300';
  }};
  box-shadow: 0 0 10px ${props => {
    if (props.$hasError) return '#ff0000';
    if (props.$isSuccess) return '#00ff00';
    return props.$isFocused ? '#00ff00' : 'transparent';
  }};
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      transparent 0%,
      rgba(0, 255, 0, 0.1) 50%,
      transparent 100%
    );
    pointer-events: none;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #00ff00;
  background: transparent;
  border: none;
  font-family: 'Source Code Pro', monospace;
  letter-spacing: 1px;
  text-shadow: 0 0 5px #00ff00;

  &:focus {
    outline: none;
    animation: ${glitch} 0.2s ease-in-out;
  }

  &::placeholder {
    color: #006600;
  }

  &:disabled {
    color: #004400;
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(0, 255, 0, 0.2);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
  animation: ${pulse} 2s infinite;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#00ff00' : '#006600'};
  transition: all 0.3s ease;
  text-shadow: 0 0 5px #00ff00;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 12px;
  margin-top: 8px;
  text-shadow: 0 0 5px #ff0000;
  padding-left: 4px;
  animation: ${pulse} 2s infinite;
`;

const MaskGuide = styled.div<{ $visible: boolean }>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #006600;
  font-family: 'Source Code Pro', monospace;
  opacity: ${props => props.$visible ? 1 : 0};
  text-shadow: 0 0 3px #006600;
  transition: opacity 0.3s ease;
`;

const MatrixMaskInput: React.FC<InputMaskProps> = ({
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
        <MatrixRain />
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

export default MatrixMaskInput; 