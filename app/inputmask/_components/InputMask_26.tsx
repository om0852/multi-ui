"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface InputMaskProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
  isPrivate?: boolean;
}

const secureAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-2px) scale(1.02);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'IBM Plex Mono', monospace;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean; $isPrivate: boolean }>`
  position: relative;
  width: 100%;
  background: ${props => props.$isPrivate ? '#1a1a1a' : '#ffffff'};
  border: 2px solid ${props => {
    if (props.$hasError) return '#dc2626';
    if (props.$isSuccess) return '#059669';
    return props.$isFocused ? '#6366f1' : '#d1d5db';
  }};
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isPrivate ? '0 4px 6px -1px rgba(0, 0, 0, 0.2)' : 'none'};

  ${props => props.$isPrivate && props.$isFocused && `
    animation: ${secureAnimation} 0.6s ease-in-out;
  `}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 8px;
    background: ${props => props.$isPrivate ? 
      'linear-gradient(45deg, #1a1a1a, #2a2a2a)' : 
      'linear-gradient(45deg, #ffffff, #f9fafb)'};
    z-index: -1;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean; $isPrivate: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: ${props => props.$isPrivate ? '#ffffff' : '#1f2937'};
  background: transparent;
  border: none;
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: ${props => props.$isPrivate ? '0.2em' : 'normal'};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.$isPrivate ? '#4b5563' : '#9ca3af'};
  }

  &:disabled {
    color: ${props => props.$isPrivate ? '#4b5563' : '#9ca3af'};
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $isPrivate: boolean }>`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isPrivate ? '#e5e7eb' : '#4b5563'};
  font-weight: 500;
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean; $isPrivate: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => {
    if (props.$isPrivate) {
      return props.$isFocused ? '#6366f1' : '#4b5563';
    }
    return props.$isFocused ? '#6366f1' : '#9ca3af';
  }};
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div<{ $isPrivate: boolean }>`
  color: ${props => props.$isPrivate ? '#ef4444' : '#dc2626'};
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const PrivacyToggle = styled.button<{ $isPrivate: boolean }>`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${props => props.$isPrivate ? '#6366f1' : '#9ca3af'};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.$isPrivate ? '#818cf8' : '#6b7280'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.$isPrivate ? '#6366f120' : '#e5e7eb'};
    border-radius: 4px;
  }
`;

const SSNMaskInput: React.FC<InputMaskProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  error,
  success,
  disabled,
  required,
  icon,
  className,
  isPrivate: initialPrivate = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [isPrivate, setIsPrivate] = useState(initialPrivate);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const formatSSN = (input: string): string => {
    const cleaned = input.replace(/\D/g, '');
    const matches = cleaned.match(/^(\d{0,3})(\d{0,2})(\d{0,4})$/);
    
    if (!matches) return '';
    
    const [, first, second, third] = matches;
    
    if (!second) return first;
    if (!third) return `${first}-${second}`;
    return `${first}-${second}-${third}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^\d-]/g, '');
    const formattedValue = formatSSN(newValue);
    setLocalValue(formattedValue);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  const getDisplayValue = () => {
    if (!localValue) return '';
    if (!isPrivate) return localValue;

    const parts = localValue.split('-');
    if (parts.length !== 3) return localValue;

    return `***-**-${parts[2]}`;
  };

  const togglePrivacy = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <Container className={className}>
      {label && (
        <Label 
          $isFocused={isFocused} 
          $hasValue={!!localValue}
          $isPrivate={isPrivate}
        >
          {label}{required && '*'}
        </Label>
      )}
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
        $isPrivate={isPrivate}
      >
        {icon && <IconWrapper $isFocused={isFocused} $isPrivate={isPrivate}>{icon}</IconWrapper>}
        <StyledInput
          type="text"
          value={getDisplayValue()}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || '000-00-0000'}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
          $isPrivate={isPrivate}
          maxLength={11}
        />
        <PrivacyToggle
          type="button"
          onClick={togglePrivacy}
          $isPrivate={isPrivate}
          tabIndex={0}
          aria-label={isPrivate ? 'Show SSN' : 'Hide SSN'}
        >
          {isPrivate ? '👁️' : '🔒'}
        </PrivacyToggle>
      </InputWrapper>
      {error && <ErrorMessage $isPrivate={isPrivate}>{error}</ErrorMessage>}
    </Container>
  );
};

export default SSNMaskInput; 