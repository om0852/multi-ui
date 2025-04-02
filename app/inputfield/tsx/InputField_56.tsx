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

const pixelate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const scanlines = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 32px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  image-rendering: pixelated;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: #202020;
  border: 4px solid;
  border-image-slice: 1;
  border-image-source: ${props => {
    if (props.$hasError) return 'linear-gradient(45deg, #ff0000, #ff6666)';
    if (props.$isSuccess) return 'linear-gradient(45deg, #00ff00, #66ff66)';
    return props.$isFocused ? 
      'linear-gradient(45deg, #ffff00, #ff9900)' : 
      'linear-gradient(45deg, #666666, #999999)';
  }};
  padding: 2px;
  transition: all 0.1s steps(5);
  image-rendering: pixelated;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px,
      transparent 2px
    );
    background-size: 100% 4px;
    animation: ${scanlines} 1s linear infinite;
    pointer-events: none;
    opacity: 0.5;
  }

  ${props => props.$isFocused && css`
    animation: ${pixelate} 0.5s steps(5) infinite;
  `}
`;

const PixelCorner = styled.div<{ $position: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ffff00;
  ${props => {
    switch (props.$position) {
      case 'top-left':
        return 'top: -4px; left: -4px;';
      case 'top-right':
        return 'top: -4px; right: -4px;';
      case 'bottom-left':
        return 'bottom: -4px; left: -4px;';
      case 'bottom-right':
        return 'bottom: -4px; right: -4px;';
      default:
        return '';
    }
  }}
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #33ff33;
  background: transparent;
  border: none;
  font-family: 'Press Start 2P', monospace;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #33ff33;
    opacity: 0.5;
  }

  &:disabled {
    color: #666666;
    cursor: not-allowed;
  }

  &::selection {
    background: #33ff33;
    color: #000000;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 12px;
  color: ${props => props.$isFocused ? '#ffff00' : '#33ff33'};
  font-family: 'Press Start 2P', monospace;
  transition: all 0.1s steps(5);

  &::after {
    content: '_';
    opacity: ${props => props.$isFocused ? 1 : 0};
    animation: ${blink} 1s steps(2) infinite;
  }
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#ffff00' : '#33ff33'};
  transition: all 0.1s steps(5);
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 10px;
  margin-top: 8px;
  font-family: 'Press Start 2P', monospace;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '!';
    color: #ff0000;
    animation: ${blink} 1s steps(2) infinite;
  }
`;

const RetroGamingInput: React.FC<InputFieldProps> = ({
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
        <PixelCorner $position="top-left" />
        <PixelCorner $position="top-right" />
        <PixelCorner $position="bottom-left" />
        <PixelCorner $position="bottom-right" />
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

export default RetroGamingInput; 