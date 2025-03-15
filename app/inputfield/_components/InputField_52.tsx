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

const holographicShift = keyframes`
  0% {
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  50% {
    background-position: 100% 50%;
    filter: hue-rotate(180deg);
  }
  100% {
    background-position: 0% 50%;
    filter: hue-rotate(360deg);
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

const glitch = keyframes`
  0% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(-2px, 2px);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(1px, -3px);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(-1px, 3px);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(3px, 1px);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(-2px, -4px);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(2px, 2px);
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
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      90deg,
      #ff00ff,
      #00ffff,
      #ff00ff,
      #00ffff
    );
    background-size: 300% 100%;
    animation: ${holographicShift} 6s linear infinite;
    opacity: ${props => props.$isFocused ? 1 : 0.3};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    animation: ${scanline} 4s linear infinite;
    pointer-events: none;
  }
`;

const HolographicOverlay = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  pointer-events: none;
  opacity: ${props => props.$isFocused ? 0.8 : 0.4};
  transition: opacity 0.3s ease;
`;

const GlitchEffect = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  inset: 0;
  background: inherit;
  opacity: ${props => props.$isFocused ? 0.5 : 0};
  animation: ${props => props.$isFocused ? css`${glitch} 4s infinite` : 'none'};
  pointer-events: none;
  z-index: -1;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #fff;
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
  color: ${props => props.$isFocused ? '#00ffff' : 'rgba(255, 255, 255, 0.7)'};
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  text-shadow: ${props => props.$isFocused ? 
    '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' : 
    'none'
  };
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#00ffff' : 'rgba(255, 255, 255, 0.5)'};
  transition: all 0.3s ease;
  z-index: 1;
  filter: ${props => props.$isFocused ? 
    'drop-shadow(0 0 5px #00ffff) drop-shadow(0 0 10px #00ffff)' : 
    'none'
  };
`;

const ErrorMessage = styled.div`
  color: #ff00ff;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Rajdhani', sans-serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-shadow: 0 0 5px #ff00ff;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    content: '!';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #ff00ff;
    border-radius: 50%;
    text-align: center;
    line-height: 14px;
    box-shadow: 0 0 5px #ff00ff;
  }
`;

const HolographicInput: React.FC<InputFieldProps> = ({
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
        <HolographicOverlay $isFocused={isFocused} />
        <GlitchEffect $isFocused={isFocused} />
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

export default HolographicInput; 