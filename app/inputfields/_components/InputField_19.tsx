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
  background: #e0e5ec;
  border-radius: 12px;
  transition: all 0.3s ease;

  ${props => !props.$isFocused && `
    box-shadow: 6px 6px 10px rgba(163, 177, 198, 0.6),
                -6px -6px 10px rgba(255, 255, 255, 0.8);
  `}

  ${props => props.$isFocused && `
    box-shadow: inset 4px 4px 8px rgba(163, 177, 198, 0.6),
                inset -4px -4px 8px rgba(255, 255, 255, 0.8);
  `}

  ${props => props.$hasError && `
    box-shadow: inset 4px 4px 8px rgba(239, 68, 68, 0.2),
                inset -4px -4px 8px rgba(255, 255, 255, 0.8);
  `}

  ${props => props.$isSuccess && `
    box-shadow: inset 4px 4px 8px rgba(34, 197, 94, 0.2),
                inset -4px -4px 8px rgba(255, 255, 255, 0.8);
  `}
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #2d3748;
  background: transparent;
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease;

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

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasError: boolean }>`
  position: absolute;
  left: 4px;
  top: -24px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isFocused) return '#3b82f6';
    return '#4a5568';
  }};
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#3b82f6' : '#a0aec0'};
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
  padding-left: 4px;
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
        <Label $isFocused={isFocused} $hasValue={!!localValue} $hasError={!!error}>
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