"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const glitch = keyframes`
  0% {
    transform: translate(0);
    text-shadow: -2px 0 #0ff, 2px 0 #f0f;
  }
  25% {
    transform: translate(-2px, 2px);
    text-shadow: 2px -2px #0ff, -2px 2px #f0f;
  }
  50% {
    transform: translate(2px, -2px);
    text-shadow: -2px 2px #0ff, 2px -2px #f0f;
  }
  75% {
    transform: translate(-2px, -2px);
    text-shadow: 2px 2px #0ff, -2px -2px #f0f;
  }
  100% {
    transform: translate(0);
    text-shadow: -2px 0 #0ff, 2px 0 #f0f;
  }
`;

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const neonPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;
  }
  50% {
    box-shadow: 0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f, 0 0 80px #f0f;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #1a1a2e;
  border: 2px solid ${props => (props.$hasError ? '#ff0033' : props.$isSuccess ? '#00ff66' : props.$isFocused ? '#0ff' : '#333')};
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  ${props => props.$isFocused && css`animation: ${neonPulse} 2s infinite;`}
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: ${props => (props.$hasIcon ? '44px' : '16px')};
  font-size: 16px;
  color: #0ff;
  background: transparent;
  border: none;
  font-family: 'Orbitron', monospace;
  letter-spacing: 2px;
`;

const Label = styled.label`
  position: absolute;
  left: 16px;
  top: -24px;
  font-size: 14px;
  color: ${props => (props.$isFocused ? '#0ff' : '#666')};
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const CyberpunkMaskInput = ({
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

  const formatValue = input => {
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
        if (input[inputIndex] === mask[i]) {
          inputIndex++;
        }
      }
    }
    return result;
  };

  const handleChange = e => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    const formattedValue = formatValue(newValue);
    setLocalValue(formattedValue);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  return (
    <Container className={className}>
      {label && <Label $isFocused={isFocused}>{label}{required && '*'}</Label>}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && <span>{icon}</span>}
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
      {error && <div>{error}</div>}
    </Container>
  );
};

export default CyberpunkMaskInput;
