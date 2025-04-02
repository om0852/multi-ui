"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 12px 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    border-radius: 10px;
    border: 0;
    background-color: ${({ $hasError, $isSuccess }) => $hasError ? '#fff5f5' : $isSuccess ? '#f4fce3' : '#f3f4f6'};
    outline: 2px solid ${({ $hasError, $isSuccess, $isFocused }) => {
      if ($hasError) return '#ff6b6b';
      if ($isSuccess) return '#82c91e';
      if ($isFocused) return '#3b82f6';
      return '#e2e8f0';
    }};
    outline-offset: 2px;
    transition: all 0.25s ease;
    color: #1a1a1a;

    &:focus {
      outline-offset: 4px;
      background-color: ${({ $hasError, $isSuccess }) => $hasError ? '#fff5f5' : $isSuccess ? '#f4fce3' : '#ffffff'};
    }

    &:disabled {
      background-color: #e5e7eb;
      color: #9ca3af;
      cursor: not-allowed;
      outline-color: #d1d5db;
    }

    &::placeholder {
      color: #9ca3af;
      opacity: ${({ $isFocused }) => $isFocused ? '0.7' : '1'};
      transition: opacity 0.25s ease;
    }
  }
`;

const Label = styled.label`
  position: absolute;
  left: ${({ $hasIcon }) => $hasIcon ? '40px' : '4px'};
  top: ${({ $isFocused, $hasValue }) => ($isFocused || $hasValue) ? '-24px' : '12px'};
  font-size: ${({ $isFocused, $hasValue }) => ($isFocused || $hasValue) ? '14px' : '16px'};
  color: ${({ $hasError, $isSuccess, $isFocused }) => {
    if ($hasError) return '#ff6b6b';
    if ($isSuccess) return '#82c91e';
    if ($isFocused) return '#3b82f6';
    return '#64748b';
  }};
  pointer-events: none;
  transition: all 0.25s ease;
  padding: 0 4px;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ $hasError, $isSuccess, $isFocused }) => {
    if ($hasError) return '#ff6b6b';
    if ($isSuccess) return '#82c91e';
    if ($isFocused) return '#3b82f6';
    return '#9ca3af';
  }};
  transition: color 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 14px;
  margin-top: 6px;
  padding-left: 4px;
`;

const SuccessIndicator = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #82c91e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  padding-left: ${({ $hasIcon }) => $hasIcon ? '40px' : '16px'} !important;
`;

const InputField = ({
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
  autoFocus,
  maxLength,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Container className={className}>
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && <IconWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>{icon}</IconWrapper>}
        {label && (
          <Label $isFocused={isFocused} $hasValue={!!localValue} $hasError={!!error} $isSuccess={!!success} $hasIcon={!!icon}>
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
          autoFocus={autoFocus}
          maxLength={maxLength}
          $hasIcon={!!icon}
        />
        {success && <SuccessIndicator>✔</SuccessIndicator>}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default InputField;