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
  0% { transform: scale(1); }
  50% { transform: scale(1.01); }
  100% { transform: scale(1); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
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
  background: #2d2d2d;
  border: 4px solid ${props => {
    if (props.$hasError) return '#ff4444';
    if (props.$isSuccess) return '#44ff44';
    return props.$isFocused ? '#ffffff' : '#888888';
  }};
  box-shadow: inset -4px -4px 0px #1a1a1a, inset 4px 4px 0px #404040;
  padding: 2px;
  image-rendering: pixelated;
  
  ${props => props.$isFocused && css`
    animation: ${pixelate} 0.3s ease;
  `}
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 8px;
  padding-left: ${props => props.$hasIcon ? '36px' : '8px'};
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  color: #33ff33;
  background: transparent;
  border: none;
  text-shadow: 2px 2px #000000;
  
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

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 8px;
  top: -24px;
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: #33ff33;
  text-shadow: 2px 2px #000000;
  
  &::after {
    content: '_';
    display: ${props => props.$isFocused ? 'inline-block' : 'none'};
    animation: ${blink} 1s step-end infinite;
  }
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #33ff33;
  opacity: ${props => props.$isFocused ? 1 : 0.7};
  transition: opacity 0.3s ease;
  filter: drop-shadow(2px 2px #000000);
`;

const ErrorMessage = styled.div`
  font-family: 'Press Start 2P', monospace;
  color: #ff4444;
  font-size: 10px;
  margin-top: 8px;
  text-shadow: 2px 2px #000000;
  
  &::before {
    content: '! ';
  }
`;

const PixelInput: React.FC<InputFieldProps> = ({
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
        <Label $isFocused={isFocused} $hasValue={!!localValue}>
          {label}{required && '*'}
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

export default PixelInput;