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

const writeIn = keyframes`
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
  font-family: 'Architects Daughter', cursive;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: #fff;
  background-image: linear-gradient(#e1e1e1 1px, transparent 1px);
  background-size: 100% 2rem;
  border-radius: 8px;
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.12),
    0 1px 2px rgba(0,0,0,0.24),
    inset 0 0 0 1px rgba(0,0,0,0.1);
  padding: 0.5rem;
  border-left: 2px solid #ff9999;

  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #ff9999;
  }

  ${props => props.$hasError && css`
    border-left-color: #ef4444;
    &::before {
      background: #ef4444;
    }
  `}

  ${props => props.$isSuccess && css`
    border-left-color: #10b981;
    &::before {
      background: #10b981;
    }
  `}
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 8px 12px;
  padding-left: ${props => props.$hasIcon ? '3rem' : '2.5rem'};
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
  color: #2c3e50;
  background: transparent;
  border: none;
  line-height: 2rem;
  
  &:focus {
    outline: none;
    animation: ${writeIn} 0.5s ease-out forwards;
  }

  &::placeholder {
    color: #94a3b8;
    font-style: italic;
  }

  &:disabled {
    color: #94a3b8;
    cursor: not-allowed;
    font-style: italic;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 500;
  
  ${props => props.$isFocused && css`
    color: #3b82f6;
  `}

  &::after {
    content: '';
    display: block;
    width: ${props => (props.$isFocused || props.$hasValue) ? '100%' : '0'};
    height: 1px;
    background: #3b82f6;
    transition: width 0.3s ease;
  }
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#3b82f6' : '#94a3b8'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-style: italic;
  padding-left: 2.5rem;

  &::before {
    content: '✗';
    margin-right: 0.5rem;
  }
`;

const SuccessMessage = styled.div`
  color: #10b981;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-style: italic;
  padding-left: 2.5rem;

  &::before {
    content: '✓';
    margin-right: 0.5rem;
  }
`;

const PaperInput: React.FC<InputFieldProps> = ({
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
      {success && !error && <SuccessMessage>Looks good!</SuccessMessage>}
    </Container>
  );
};

export default PaperInput; 