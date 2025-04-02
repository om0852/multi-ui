"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const highlight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Roboto Mono', monospace;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #f8fafc;
  border: 2px solid ${props =>
    props.$hasError ? '#ef4444' : props.$isSuccess ? '#10b981' : props.$isFocused ? '#3b82f6' : '#e2e8f0'};
  border-radius: 8px;
  transition: all 0.3s ease;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: #1e293b;
  background: transparent;
  border: none;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #475569;
  font-weight: 500;
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const VINMaskInput = ({
  label,
  placeholder,
  value = '',
  onChange,
  error,
  success,
  disabled,
  required,
  className
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const formatVIN = input => {
    return input.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '').slice(0, 17);
  };

  const handleChange = e => {
    const formattedValue = formatVIN(e.target.value);
    setLocalValue(formattedValue);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  return (
    <Container className={className}>
      {label && <Label>{label}{required && '*'}</Label>}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        <StyledInput
          type="text"
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || '1HGCM82633A123456'}
          disabled={disabled}
          required={required}
          maxLength={17}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default VINMaskInput;
