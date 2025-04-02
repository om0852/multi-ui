"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const neonFlicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      -0.2rem -0.2rem 1rem #fff,
      0.2rem 0.2rem 1rem #fff,
      0 0 2rem var(--neon-text),
      0 0 4rem var(--neon-text),
      0 0 6rem var(--neon-text),
      0 0 8rem var(--neon-text),
      0 0 10rem var(--neon-text);
    box-shadow: 
      0 0 .5rem #fff,
      inset 0 0 .5rem #fff,
      0 0 2rem var(--neon),
      inset 0 0 2rem var(--neon),
      0 0 4rem var(--neon),
      inset 0 0 4rem var(--neon);
  }
  20%, 24%, 55% {
    text-shadow: none;
    box-shadow: none;
  }
`;

const neonPulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Orbitron', sans-serif;
  --neon: #f09;
  --neon-text: #f09;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #1a1a1a;
  border: 0.2rem solid ${({ $hasError, $isSuccess, $isFocused }) =>
    $hasError ? '#f00' : $isSuccess ? '#0f0' : $isFocused ? '#f09' : '#666'};
  border-radius: 4px;
  padding: 2px;
  animation: ${neonFlicker} 1.5s infinite alternate;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  color: #fff;
  background: transparent;
  border: none;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #f09;
  &:focus { outline: none; }
  &::placeholder { color: rgba(255, 255, 255, 0.5); }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #fff;
  animation: ${neonPulse} 2s infinite;
`;

const ErrorMessage = styled.div`
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #f00;
  animation: ${neonPulse} 2s infinite;
`;

const NeonMaskInput = ({
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
  icon,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const formatValue = (input) => {
    let result = '';
    let inputIndex = 0;
    for (let i = 0; i < mask.length && inputIndex < input.length; i++) {
      if (mask[i] === '9') {
        if (/\d/.test(input[inputIndex])) {
          result += input[inputIndex];
          inputIndex++;
        } else {
          result += maskChar;
        }
      } else {
        result += mask[i];
        if (input[inputIndex] === mask[i]) inputIndex++;
      }
    }
    return result;
  };

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    const formattedValue = formatValue(newValue);
    setLocalValue(formattedValue);
    if (onChange) onChange(formattedValue);
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

export default NeonMaskInput;
