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

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const paperSlide = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
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
  background: #f8f9fa;
  border: none;
  border-bottom: 2px solid ${props => {
    if (props.$hasError) return '#ff6b6b';
    if (props.$isSuccess) return '#51cf66';
    return props.$isFocused ? '#212529' : '#adb5bd';
  }};
  padding: 2px;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 1px;
    background: #e9ecef;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: 0;
    width: 4px;
    height: 16px;
    background: ${props => props.$isFocused ? '#212529' : 'transparent'};
    animation: ${blink} 1s step-end infinite;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #212529;
  background: transparent;
  border: none;
  font-family: 'Courier Prime', monospace;
  letter-spacing: 0.1em;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #adb5bd;
    font-style: italic;
  }

  &:disabled {
    color: #adb5bd;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '40px' : '12px'};
  top: -24px;
  font-size: 14px;
  color: #495057;
  font-family: 'Courier Prime', monospace;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 1s steps(30, end);

  ${props => props.$isFocused && css`
    color: #212529;
  `}
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#212529' : '#adb5bd'};
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 4px;
  font-family: 'Courier Prime', monospace;
  padding-left: 12px;
  animation: ${paperSlide} 0.3s ease-out;

  &::before {
    content: '> ';
    color: #ff6b6b;
  }
`;

const TypewriterInput: React.FC<InputFieldProps> = ({
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

export default TypewriterInput; 