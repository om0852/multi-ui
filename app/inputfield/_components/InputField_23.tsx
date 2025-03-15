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
  color?: 'indigo' | 'rose' | 'emerald' | 'amber';
}

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 5px var(--glow-color), 0 0 10px var(--glow-color); }
  50% { box-shadow: 0 0 20px var(--glow-color), 0 0 30px var(--glow-color); }
  100% { box-shadow: 0 0 5px var(--glow-color), 0 0 10px var(--glow-color); }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean; $color: string }>`
  position: relative;
  width: 100%;
  --glow-color: ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isSuccess) return '#10b981';
    switch(props.$color) {
      case 'rose': return '#f43f5e';
      case 'emerald': return '#10b981';
      case 'amber': return '#f59e0b';
      default: return '#6366f1';
    }
  }};

  ${props => props.$isFocused && css`
    animation: ${pulseGlow} 2s ease-in-out infinite;
  `}
`;

const StyledInput = styled.input<{ $hasIcon: boolean; $color: string }>`
  width: 100%;
  padding: 12px 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #1f2937;
  background: #ffffff;
  border: 2px solid ${props => {
    switch(props.$color) {
      case 'rose': return '#fda4af';
      case 'emerald': return '#6ee7b7';
      case 'amber': return '#fcd34d';
      default: return '#a5b4fc';
    }
  }};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--glow-color);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    background: #f3f4f6;
    border-color: #d1d5db;
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $color: string }>`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => {
    switch(props.$color) {
      case 'rose': return '#f43f5e';
      case 'emerald': return '#10b981';
      case 'amber': return '#f59e0b';
      default: return '#6366f1';
    }
  }};
  transition: color 0.3s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean; $color: string }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => {
    if (props.$isFocused) {
      switch(props.$color) {
        case 'rose': return '#f43f5e';
        case 'emerald': return '#10b981';
        case 'amber': return '#f59e0b';
        default: return '#6366f1';
      }
    }
    return '#9ca3af';
  }};
  transition: color 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
  padding-left: 4px;
`;

const GlowInput: React.FC<InputFieldProps> = ({
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
  color = 'indigo',
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
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success} $color={color}>
        {icon && <IconWrapper $isFocused={isFocused} $color={color}>{icon}</IconWrapper>}
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
          $color={color}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default GlowInput; 