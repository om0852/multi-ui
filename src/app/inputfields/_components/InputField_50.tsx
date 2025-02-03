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

const prismShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const crystalGlow = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: translateY(-50%) rotate(0deg);
  }
  50% {
    opacity: 0.7;
    transform: translateY(-50%) rotate(180deg);
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%) skewX(-15deg);
  }
  100% {
    transform: translateX(200%) skewX(-15deg);
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
  border-radius: 12px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: ${props => {
      if (props.$hasError) return 'linear-gradient(45deg, #ff6b6b, #ff8787, #ffa8a8)';
      if (props.$isSuccess) return 'linear-gradient(45deg, #69db7c, #8ce99a, #b2f2bb)';
      return 'linear-gradient(45deg, #74c0fc, #a5d8ff, #74c0fc, #a5d8ff)';
    }};
    background-size: 200% 200%;
    animation: ${prismShift} 6s linear infinite;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border-radius: 10px;
  }
`;

const CrystalFacet = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  width: 200%;
  height: 200%;
  top: 50%;
  left: -50%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform-origin: center;
  animation: ${crystalGlow} 8s ease-in-out infinite;
  opacity: ${props => props.$isFocused ? 0.7 : 0.3};
  pointer-events: none;
`;

const ShimmerEffect = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transform: skewX(-15deg);
  animation: ${shimmer} 2s ease-in-out infinite;
  opacity: ${props => props.$isFocused ? 1 : 0};
  pointer-events: none;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #fff;
  background: transparent;
  border: none;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.3s ease;
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#a5d8ff' : 'rgba(255, 255, 255, 0.7)'};
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  text-shadow: ${props => props.$isFocused ? '0 0 10px rgba(165, 216, 255, 0.5)' : 'none'};
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#a5d8ff' : 'rgba(255, 255, 255, 0.5)'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ff8787;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Montserrat', sans-serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-shadow: 0 0 10px rgba(255, 135, 135, 0.3);

  &::before {
    content: '◈';
    color: #ff8787;
    font-size: 14px;
  }
`;

const CrystalInput: React.FC<InputFieldProps> = ({
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
        <CrystalFacet $isFocused={isFocused} />
        <ShimmerEffect $isFocused={isFocused} />
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

export default CrystalInput; 