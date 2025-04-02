"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const matrixRain = keyframes`
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
`;

const glitch = keyframes`
  0%, 100% { clip-path: inset(50% 0 30% 0); transform: skew(0.15turn, 2deg); }
  50% { clip-path: inset(20% 0 60% 0); transform: skew(-0.15turn, -2deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; text-shadow: 0 0 10px #0f0; }
  50% { opacity: 0.5; text-shadow: 0 0 5px #0f0; }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Source Code Pro', monospace;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: rgba(0, 10, 0, 0.9);
  border: 1px solid ${props => (props.$hasError ? '#ff0000' : props.$isSuccess ? '#00ff00' : props.$isFocused ? '#00ff00' : '#003300')};
  box-shadow: 0 0 10px ${props => (props.$hasError ? '#ff0000' : props.$isSuccess ? '#00ff00' : props.$isFocused ? '#00ff00' : 'transparent')};
  transition: all 0.3s ease;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  color: #00ff00;
  background: transparent;
  border: none;
  font-family: 'Source Code Pro', monospace;
  text-shadow: 0 0 5px #00ff00;

  &:focus {
    outline: none;
    animation: ${glitch} 0.2s ease-in-out;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
  animation: ${pulse} 2s infinite;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 12px;
  margin-top: 8px;
  text-shadow: 0 0 5px #ff0000;
  animation: ${pulse} 2s infinite;
`;

const MatrixMaskInput = ({
  label,
  placeholder,
  value = '',
  onChange,
  mask,
  maskChar = '_',
  error,
  success,
  disabled,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const formatValue = input => {
    let result = '';
    let inputIndex = 0;
    for (let i = 0; i < mask.length && inputIndex < input.length; i++) {
      if (mask[i] === '9') {
        result += /\d/.test(input[inputIndex]) ? input[inputIndex++] : maskChar;
      } else {
        result += mask[i];
        if (input[inputIndex] === mask[i]) inputIndex++;
      }
    }
    return result;
  };

  const handleChange = e => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    const formattedValue = formatValue(newValue);
    setLocalValue(formattedValue);
    if (onChange) onChange(formattedValue);
  };

  return (
    <Container>
      {label && <Label>{label}{required && '*'}</Label>}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        <StyledInput
          type="text"
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || mask.replace(/9/g, maskChar)}
          disabled={disabled}
          required={required}
          maxLength={mask.length}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default MatrixMaskInput;