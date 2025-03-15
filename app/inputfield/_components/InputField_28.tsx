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
  color?: 'blue' | 'pink' | 'green' | 'purple';
}

const neonPulse = keyframes`
  0% {
    box-shadow: 0 0 5px var(--neon-color), 0 0 10px var(--neon-color);
  }
  50% {
    box-shadow: 0 0 20px var(--neon-color), 0 0 30px var(--neon-color);
  }
  100% {
    box-shadow: 0 0 5px var(--neon-color), 0 0 10px var(--neon-color);
  }
`;

const textGlow = keyframes`
  0% {
    text-shadow: 0 0 2px var(--neon-color), 0 0 4px var(--neon-color);
  }
  50% {
    text-shadow: 0 0 4px var(--neon-color), 0 0 8px var(--neon-color);
  }
  100% {
    text-shadow: 0 0 2px var(--neon-color), 0 0 4px var(--neon-color);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
`;

const InputWrapper = styled.div<{ 
  $isFocused: boolean; 
  $hasError: boolean; 
  $isSuccess: boolean;
  $color: string;
}>`
  position: relative;
  width: 100%;
  --neon-color: ${props => {
    if (props.$hasError) return '#ff0000';
    if (props.$isSuccess) return '#00ff00';
    switch(props.$color) {
      case 'pink': return '#ff00ff';
      case 'green': return '#00ff00';
      case 'purple': return '#9d00ff';
      default: return '#00ffff';
    }
  }};
  background: #1a1a1a;
  border: 2px solid var(--neon-color);
  border-radius: 4px;
  transition: all 0.3s ease;
  overflow: hidden;

  ${props => props.$isFocused && css`
    animation: ${neonPulse} 1.5s ease-in-out infinite;
  `}
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #ffffff;
  background: transparent;
  border: none;
  font-family: 'Courier New', monospace;

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
`;

const Label = styled.label<{ 
  $isFocused: boolean; 
  $hasValue: boolean;
  $color: string;
}>`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--neon-color);
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
  
  ${props => props.$isFocused && css`
    animation: ${textGlow} 1.5s ease-in-out infinite;
  `}
`;

const IconWrapper = styled.div<{ 
  $isFocused: boolean;
  $color: string;
}>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--neon-color);
  transition: all 0.3s ease;
  
  ${props => props.$isFocused && css`
    animation: ${textGlow} 1.5s ease-in-out infinite;
  `}
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin-top: 4px;
  font-family: 'Courier New', monospace;
  animation: ${textGlow} 1.5s ease-in-out infinite;
  --neon-color: #ff0000;
`;

const NeonBorderInput: React.FC<InputFieldProps> = ({
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
  color = 'blue',
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
        <Label $isFocused={isFocused} $hasValue={!!localValue} $color={color}>
          {label}{required && ' *'}
        </Label>
      )}
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
        $color={color}
      >
        {icon && (
          <IconWrapper $isFocused={isFocused} $color={color}>
            {icon}
          </IconWrapper>
        )}
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

export default NeonBorderInput; 