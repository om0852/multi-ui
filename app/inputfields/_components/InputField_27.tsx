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

const slideIn = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
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
  background: transparent;
  border: 1px solid ${props => {
    if (props.$hasError) return '#dc2626';
    if (props.$isSuccess) return '#059669';
    return props.$isFocused ? '#000000' : '#e5e7eb';
  }};
  border-radius: 2px;
  transition: all 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 2px;
    background: #000000;
    transition: all 0.2s ease;
    ${props => props.$isFocused && css`
      animation: ${slideIn} 0.3s ease forwards;
    `}
    ${props => !props.$isFocused && 'width: 0;'}
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean; $hasLabel: boolean }>`
  width: 100%;
  padding: ${props => props.$hasLabel ? '20px 12px 8px' : '12px'};
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 14px;
  color: #000000;
  background: transparent;
  border: none;
  letter-spacing: 0.5px;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9ca3af;
    font-weight: 300;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
    background: #f3f4f6;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '40px' : '12px'};
  top: ${props => (props.$isFocused || props.$hasValue) ? '-24px' : '8px'};
  font-size: ${props => (props.$isFocused || props.$hasValue) ? '12px' : '12px'};
  color: ${props => props.$isFocused ? '#000000' : '#6b7280'};
  pointer-events: none;
  transition: all 0.2s ease;
  font-weight: ${props => (props.$isFocused || props.$hasValue) ? '500' : '400'};
  z-index: 3;
  background: ${props => (props.$isFocused || props.$hasValue) ? '#ffffff' : 'transparent'};
  padding: ${props => (props.$isFocused || props.$hasValue) ? '0 4px' : '0'};
  
  ${props => (props.$isFocused || props.$hasValue) && css`
    left: 0;
  `}
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#000000' : '#9ca3af'};
  transition: all 0.2s ease;
  z-index: 2;
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const MinimalistInput: React.FC<InputFieldProps> = ({
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
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        {label && (
          <Label 
            $isFocused={isFocused} 
            $hasValue={!!localValue}
            $hasIcon={!!icon}
          >
            {label}{required && ' *'}
          </Label>
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
          $hasLabel={!!label}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default MinimalistInput; 