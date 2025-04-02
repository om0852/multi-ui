"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface InputMaskProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  currencySymbol?: string;
  decimals?: number;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
  max?: number;
}

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Inter', sans-serif;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: white;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isSuccess) return '#10b981';
    return props.$isFocused ? '#6366f1' : '#e5e7eb';
  }};
  border-radius: 8px;
  transition: all 0.2s ease;
  box-shadow: ${props => props.$isFocused ? '0 0 0 3px rgba(99, 102, 241, 0.1)' : 'none'};

  &:hover {
    border-color: ${props => props.$hasError ? '#ef4444' : '#6366f1'};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(99, 102, 241, 0.1),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shimmer} 2s infinite;
    opacity: ${props => props.$isFocused ? 1 : 0};
    border-radius: 6px;
    pointer-events: none;
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(99, 102, 241, 0.2);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
  transition: all 0.2s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#6366f1' : '#9ca3af'};
  transition: all 0.2s ease;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const CurrencySymbol = styled.div<{ $hasIcon?: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '36px' : '12px'};
  top: 50%;
  transform: translateY(-50%);
  color: #4b5563;
  font-weight: 500;
  pointer-events: none;
`;

const CurrencyMaskInput: React.FC<InputMaskProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  currencySymbol = '$',
  decimals = 2,
  error,
  success,
  disabled,
  required,
  icon,
  className,
  max,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const formatValue = (input: string): string => {
    // Remove all non-numeric characters
    const numericValue = input.replace(/[^\d]/g, '');
    
    // Convert to number and divide by 10^decimals to get the decimal value
    const numValue = Number(numericValue) / Math.pow(10, decimals);
    
    // Check if the value exceeds the maximum
    if (max !== undefined && numValue > max) {
      return (max).toFixed(decimals);
    }
    
    // Format with the specified number of decimal places
    return numValue.toFixed(decimals);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^\d.]/g, '');
    const formattedValue = formatValue(newValue);
    setLocalValue(formattedValue);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  const getDisplayValue = () => {
    if (!localValue) return '';
    return localValue;
  };

  return (
    <Container className={className}>
      {label && (
        <Label 
          $isFocused={isFocused} 
          $hasValue={!!localValue}
        >
          {label}{required && '*'}
        </Label>
      )}
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
      >
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        <CurrencySymbol $hasIcon={!!icon}>{currencySymbol}</CurrencySymbol>
        <StyledInput
          type="text"
          value={getDisplayValue()}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || `0.${'0'.repeat(decimals)}`}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
          style={{ paddingLeft: icon ? '56px' : '32px' }}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default CurrencyMaskInput; 