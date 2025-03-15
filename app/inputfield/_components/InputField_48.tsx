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

const float = keyframes`
  0%, 100% {
    transform: translateZ(20px) rotateX(10deg);
  }
  50% {
    transform: translateZ(30px) rotateX(12deg);
  }
`;

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%);
  border: 2px solid ${props => {
    if (props.$hasError) return '#ff4d4d';
    if (props.$isSuccess) return '#4CAF50';
    return props.$isFocused ? '#2196F3' : '#e0e0e0';
  }};
  border-radius: 12px;
  padding: 2px;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  animation: ${props => props.$isFocused ? css`${float} 3s ease-in-out infinite` : 'none'};

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => {
        if (props.$hasError) return 'rgba(255, 77, 77, 0.2)';
        if (props.$isSuccess) return 'rgba(76, 175, 80, 0.2)';
        return 'rgba(33, 150, 243, 0.2)';
      }},
      transparent
    );
    background-size: 200% 100%;
    border-radius: 14px;
    z-index: -1;
    animation: ${shine} 3s linear infinite;
    opacity: ${props => props.$isFocused ? 1 : 0};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    pointer-events: none;
  }

  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08),
    inset 0 2px 2px rgba(255, 255, 255, 0.1);

  transform: ${props => props.$isFocused ? 
    'translateZ(20px) rotateX(10deg)' : 
    'translateZ(0) rotateX(0deg)'};
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #333;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  transform-style: preserve-3d;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #999;
    transition: color 0.3s ease;
  }

  &:disabled {
    color: #999;
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(33, 150, 243, 0.2);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#2196F3' : '#666'};
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transform-style: preserve-3d;
  transform: translateZ(40px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%) translateZ(10px);
  color: ${props => props.$isFocused ? '#2196F3' : '#999'};
  transition: all 0.3s ease;
  transform-style: preserve-3d;
`;

const ErrorMessage = styled.div`
  color: #ff4d4d;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Inter', sans-serif;
  padding-left: 16px;
  transform: translateZ(30px);
  display: flex;
  align-items: center;
  gap: 8px;
  text-shadow: 0 1px 2px rgba(255, 77, 77, 0.1);

  &::before {
    content: '!';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background: #ff4d4d;
    color: white;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
  }
`;

const PerspectiveInput: React.FC<InputFieldProps> = ({
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

export default PerspectiveInput;