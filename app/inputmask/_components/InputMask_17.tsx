"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

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

const glitch = keyframes`
  0% {
    transform: translate(0);
    text-shadow: -2px 0 #0ff, 2px 0 #f0f;
  }
  25% {
    transform: translate(-2px, 2px);
    text-shadow: 2px -2px #0ff, -2px 2px #f0f;
  }
  50% {
    transform: translate(2px, -2px);
    text-shadow: -2px 2px #0ff, 2px -2px #f0f;
  }
  75% {
    transform: translate(-2px, -2px);
    text-shadow: 2px 2px #0ff, -2px -2px #f0f;
  }
  100% {
    transform: translate(0);
    text-shadow: -2px 0 #0ff, 2px 0 #f0f;
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

const neonPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px #0ff,
                0 0 10px #0ff,
                0 0 20px #0ff,
                0 0 40px #0ff;
  }
  50% {
    box-shadow: 0 0 10px #f0f,
                0 0 20px #f0f,
                0 0 40px #f0f,
                0 0 80px #f0f;
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
  background: #1a1a2e;
  border: 2px solid;
  border-color: ${props => {
    if (props.$hasError) return '#ff0033';
    if (props.$isSuccess) return '#00ff66';
    return props.$isFocused ? '#0ff' : '#333';
  }};
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;

  ${props => props.$isFocused && css`
    animation: ${neonPulse} 2s infinite;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    animation: ${scanline} 2s linear infinite;
    opacity: ${props => props.$isFocused ? 1 : 0};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      transparent 0%,
      rgba(0, 255, 255, 0.05) 0.5%,
      transparent 1%
    );
    pointer-events: none;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #0ff;
  background: transparent;
  border: none;
  font-family: 'Orbitron', monospace;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 255, 255, 0.3);
    text-transform: uppercase;
  }

  &:disabled {
    color: #666;
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(0, 255, 255, 0.2);
    color: #fff;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 16px;
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#0ff' : '#666'};
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  ${props => props.$isFocused && css`
    animation: ${glitch} 2s infinite;
  `}
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#0ff' : '#666'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ff0033;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: ${glitch} 2s infinite;
`;

const MaskGuide = styled.div<{ $visible: boolean }>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0, 255, 255, 0.3);
  font-family: 'Orbitron', monospace;
  letter-spacing: 2px;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const CyberpunkMaskInput: React.FC<InputMaskProps> = ({
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

export default CyberpunkMaskInput; 