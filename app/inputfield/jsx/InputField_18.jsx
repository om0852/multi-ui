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

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${({ $hasError, $isSuccess }) => {
      if ($hasError) return '#ef4444';
      if ($isSuccess) return '#22c55e';
      return '#e5e7eb';
    }};
    transition: all 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background: ${({ $hasError }) => ($hasError ? '#ef4444' : '#3b82f6')};
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  ${({ $isFocused }) => $isFocused && `
    &::before {
      width: 100%;
    }
  `}
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 0;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '28px' : '0')};
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  border: none;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9ca3af;
    transition: color 0.3s ease;
  }

  &:focus::placeholder {
    color: #6b7280;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  position: absolute;
  left: ${({ $hasValue }) => ($hasValue ? '0' : '28px')};
  top: ${({ $isFocused, $hasValue }) => ($isFocused || $hasValue ? '-20px' : '8px')};
  font-size: ${({ $isFocused, $hasValue }) => ($isFocused || $hasValue ? '14px' : '16px')};
  color: ${({ $hasError, $isFocused }) => {
    if ($hasError) return '#ef4444';
    if ($isFocused) return '#3b82f6';
    return '#6b7280';
  }};
  pointer-events: none;
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ $isFocused }) => ($isFocused ? '#3b82f6' : '#9ca3af')};
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
`;

const MinimalInput = ({
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

export default MinimalInput;