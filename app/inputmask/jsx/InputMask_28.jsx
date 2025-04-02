"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Inter', sans-serif;
`;

const InputWrapper = styled.div`
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
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  font-weight: 500;

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
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
  transition: all 0.2s ease;
`;

const IconWrapper = styled.div`
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

const ColorMaskInput = ({
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
      {label && (
        <Label $isFocused={isFocused} $hasValue={!!localValue}>
          {label}{required && '*'}
        </Label>
      )}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        <StyledInput
          type="text"
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || ''}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default ColorMaskInput;
