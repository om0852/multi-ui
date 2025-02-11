"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  padding-top: 16px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${props => {
      if (props.$hasError) return '#f44336';
      if (props.$isSuccess) return '#4caf50';
      if (props.$isFocused) return '#2196f3';
      return '#e0e0e0';
    }};
    transform-origin: center;
    transform: scaleX(${props => props.$isFocused ? 1 : 0});
    transition: transform 0.3s ease;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 8px 0;
  padding-left: ${props => props.$hasIcon ? '32px' : '0'};
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background: transparent;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  &:disabled {
    color: #9e9e9e;
    cursor: not-allowed;
    border-bottom-style: dotted;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasError: boolean }>`
  position: absolute;
  left: ${props => props.$hasValue ? '0' : '32px'};
  top: ${props => (props.$isFocused || props.$hasValue) ? '0' : '24px'};
  font-size: ${props => (props.$isFocused || props.$hasValue) ? '12px' : '16px'};
  color: ${props => {
    if (props.$hasError) return '#f44336';
    if (props.$isFocused) return '#2196f3';
    return '#757575';
  }};
  pointer-events: none;
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 0;
  bottom: 8px;
  color: ${props => props.$isFocused ? '#2196f3' : '#757575'};
  transition: color 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #f44336;
  font-size: 12px;
  margin-top: 4px;
`;

const MaterialInput: React.FC<InputFieldProps> = ({
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
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={success}>
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        {label && (
          <Label $isFocused={isFocused} $hasValue={!!localValue} $hasError={!!error}>
            {label}{required && ' *'}
          </Label>
        )}
        <StyledInput
          type={type}
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused ? placeholder : ''}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default MaterialInput; 