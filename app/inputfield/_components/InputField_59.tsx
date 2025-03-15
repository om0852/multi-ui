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

const neonFlicker = keyframes`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 10px #ff00ff,
                 0 0 20px #ff00ff,
                 0 0 30px #ff00ff;
  }
  33% {
    opacity: 0.8;
    text-shadow: 0 0 5px #ff00ff,
                 0 0 15px #ff00ff;
  }
  66% {
    opacity: 0.9;
    text-shadow: 0 0 15px #ff00ff,
                 0 0 25px #ff00ff;
  }
`;

const gridScroll = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
`;

const synthwaveGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px #ff00ff,
                0 0 20px #ff00ff,
                0 0 30px #ff00ff,
                0 0 40px #ff00ff;
  }
  50% {
    box-shadow: 0 0 15px #00ffff,
                0 0 25px #00ffff,
                0 0 35px #00ffff,
                0 0 45px #00ffff;
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
    if (props.$hasError) return '#ff0000';
    if (props.$isSuccess) return '#00ff00';
    return props.$isFocused ? '#ff00ff' : '#4a4a6a';
  }};
  border-radius: 8px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent 49%, #ff00ff 49%, #ff00ff 51%, transparent 51%),
                linear-gradient(-45deg, transparent 49%, #00ffff 49%, #00ffff 51%, transparent 51%);
    background-size: 8px 8px;
    opacity: ${props => props.$isFocused ? 0.2 : 0.1};
    animation: ${gridScroll} 3s linear infinite;
    pointer-events: none;
  }

  ${props => props.$isFocused && css`
    animation: ${synthwaveGlow} 2s ease-in-out infinite;
  `}
`;

const SynthwaveGrid = styled.div`
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px),
    linear-gradient(0deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  transform: perspective(500px) rotateX(60deg);
  transform-origin: bottom;
  pointer-events: none;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #ffffff;
  background: transparent;
  border: none;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
    text-transform: uppercase;
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.2);
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(255, 0, 255, 0.3);
    color: #ffffff;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#ff00ff' : '#4a4a6a'};
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  animation: ${props => props.$isFocused ? css`${neonFlicker} 2s infinite` : 'none'};
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#ff00ff' : '#4a4a6a'};
  transition: all 0.3s ease;
  z-index: 1;
  filter: ${props => props.$isFocused ? 
    'drop-shadow(0 0 5px #ff00ff) drop-shadow(0 0 10px #ff00ff)' : 
    'none'
  };
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Orbitron', sans-serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  text-shadow: 0 0 10px #ff0000;

  &::before {
    content: 'ERR//';
    color: #ff0000;
  }
`;

const NeonSynthwaveInput: React.FC<InputFieldProps> = ({
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
        <SynthwaveGrid />
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

export default NeonSynthwaveInput;