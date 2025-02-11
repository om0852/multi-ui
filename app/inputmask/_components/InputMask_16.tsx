"use client";
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface InputMaskProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  mask: string; // Example: "999-999-9999" or "(99) 9999-9999" or "99/99/9999"
  maskChar?: string;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const floatIn = keyframes`
  0% {
    transform: translateY(5px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const placeholderSlide = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 0.5;
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
  background: #ffffff;
  border: 2px solid;
  border-color: ${props => {
    if (props.$hasError) return '#ff4d4f';
    if (props.$isSuccess) return '#52c41a';
    return props.$isFocused ? '#1890ff' : '#d9d9d9';
  }};
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isFocused ? 
    '0 0 0 2px rgba(24, 144, 255, 0.2)' : 
    'none'
  };

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(24, 144, 255, 0.1),
      transparent
    );
    background-size: 200% 100%;
    animation: ${props => props.$isFocused ? css`${shimmer} 2s infinite` : 'none'};
    pointer-events: none;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '36px' : '12px'};
  font-size: 16px;
  color: #000000;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bfbfbf;
    animation: ${placeholderSlide} 0.3s ease-out;
  }

  &:disabled {
    color: #d9d9d9;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 12px;
  top: ${props => (props.$isFocused || props.$hasValue) ? '-24px' : '12px'};
  font-size: ${props => (props.$isFocused || props.$hasValue) ? '14px' : '16px'};
  color: ${props => props.$isFocused ? '#1890ff' : '#8c8c8c'};
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  background: ${props => (props.$isFocused || props.$hasValue) ? '#ffffff' : 'transparent'};
  padding: 0 4px;
  pointer-events: none;
  animation: ${floatIn} 0.3s ease-out;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#1890ff' : '#8c8c8c'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
  font-family: 'Inter', sans-serif;
  animation: ${floatIn} 0.3s ease-out;
`;

const MaskGuide = styled.div<{ $visible: boolean }>`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #bfbfbf;
  font-size: 14px;
  opacity: ${props => props.$visible ? 0.5 : 0};
  transition: opacity 0.3s ease;
`;

const DynamicMaskInput: React.FC<InputMaskProps> = ({
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
  const [maskGuide, setMaskGuide] = useState(mask);
  const inputRef = useRef<HTMLInputElement>(null);

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
          {label}{required && ' *'}
        </Label>
      )}
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
      >
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        <StyledInput
          ref={inputRef}
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

export default DynamicMaskInput; 