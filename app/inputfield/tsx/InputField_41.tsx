"use client";
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

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

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: #e0e5ec;
  border-radius: 12px;
  padding: 2px;
  transition: all 0.3s ease;

  ${props => !props.$isFocused && css`
    box-shadow: 
      6px 6px 12px #b8bec7,
      -6px -6px 12px #ffffff;
  `}

  ${props => props.$isFocused && css`
    box-shadow: 
      inset 4px 4px 8px #b8bec7,
      inset -4px -4px 8px #ffffff;
  `}

  ${props => props.$hasError && css`
    background: #ffe5e5;
    box-shadow: 
      ${props.$isFocused ? 'inset' : ''} 4px 4px 8px #ffb8b8,
      ${props.$isFocused ? 'inset' : ''} -4px -4px 8px #ffffff;
  `}

  ${props => props.$isSuccess && css`
    background: #e5ffe5;
    box-shadow: 
      ${props.$isFocused ? 'inset' : ''} 4px 4px 8px #b8ffb8,
      ${props.$isFocused ? 'inset' : ''} -4px -4px 8px #ffffff;
  `}
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '48px' : '16px'};
  font-size: 16px;
  color: #2d3748;
  background: transparent;
  border: none;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a0aec0;
  }

  &:disabled {
    color: #a0aec0;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '48px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: #4a5568;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;

  ${props => props.$isFocused && css`
    color: #2d3748;
    transform: translateY(-2px);
  `}
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#2d3748' : '#a0aec0'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Poppins', sans-serif;
  padding-left: 16px;
  font-weight: 500;
`;

const NeumorphicInput: React.FC<InputFieldProps> = ({
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

export default NeumorphicInput; 