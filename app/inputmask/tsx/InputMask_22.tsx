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

const neonFlicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      -0.2rem -0.2rem 1rem #fff,
      0.2rem 0.2rem 1rem #fff,
      0 0 2rem var(--neon-text),
      0 0 4rem var(--neon-text),
      0 0 6rem var(--neon-text),
      0 0 8rem var(--neon-text),
      0 0 10rem var(--neon-text);
    box-shadow: 
      0 0 .5rem #fff,
      inset 0 0 .5rem #fff,
      0 0 2rem var(--neon),
      inset 0 0 2rem var(--neon),
      0 0 4rem var(--neon),
      inset 0 0 4rem var(--neon);
  }
  20%, 24%, 55% {
    text-shadow: none;
    box-shadow: none;
  }
`;

const neonPulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Orbitron', sans-serif;
  --neon: #f09;
  --neon-text: #f09;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: #1a1a1a;
  border: 0.2rem solid ${props => {
    if (props.$hasError) return '#f00';
    if (props.$isSuccess) return '#0f0';
    return props.$isFocused ? '#f09' : '#666';
  }};
  border-radius: 4px;
  padding: 2px;
  animation: ${neonFlicker} 1.5s infinite alternate;
  --neon: ${props => {
    if (props.$hasError) return '#f00';
    if (props.$isSuccess) return '#0f0';
    return '#f09';
  }};
  --neon-text: ${props => {
    if (props.$hasError) return '#f00';
    if (props.$isSuccess) return '#0f0';
    return '#f09';
  }};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 5%,
      rgba(255, 0, 153, 0.1) 50%,
      transparent 95%
    );
    pointer-events: none;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #fff;
  background: transparent;
  border: none;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
  text-shadow: 0 0 5px #fff,
               0 0 10px #fff,
               0 0 20px #f09,
               0 0 30px #f09,
               0 0 40px #f09;

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
    background: rgba(255, 0, 153, 0.3);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #fff;
  text-shadow: 0 0 5px #fff,
               0 0 10px #fff,
               0 0 20px #f09,
               0 0 30px #f09,
               0 0 40px #f09;
  animation: ${neonPulse} 2s infinite;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  text-shadow: 0 0 5px #fff,
               0 0 10px #fff,
               0 0 20px #f09,
               0 0 30px #f09,
               0 0 40px #f09;
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
  text-shadow: 0 0 5px #fff,
               0 0 10px #fff,
               0 0 20px #f00,
               0 0 30px #f00,
               0 0 40px #f00;
  padding-left: 4px;
  animation: ${neonPulse} 2s infinite;
`;

const MaskGuide = styled.div<{ $visible: boolean }>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Orbitron', sans-serif;
  opacity: ${props => props.$visible ? 1 : 0};
  text-shadow: 0 0 5px rgba(255, 0, 153, 0.5);
  transition: opacity 0.3s ease;
`;

const NeonMaskInput: React.FC<InputMaskProps> = ({
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

export default NeonMaskInput; 