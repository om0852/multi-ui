"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const pixelate = keyframes`
  0% {
    transform: scale(1);
    image-rendering: auto;
  }
  50% {
    transform: scale(1.01);
    image-rendering: pixelated;
  }
  100% {
    transform: scale(1);
    image-rendering: auto;
  }
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
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

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Press Start 2P', monospace;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #1a1b1e;
  border: 4px solid ${props => props.$hasError ? '#ff0000' : props.$isSuccess ? '#00ff00' : props.$isFocused ? '#00ffff' : '#32cd32'};
  padding: 2px;
  image-rendering: pixelated;
  box-shadow: 4px 4px 0 #000000;
  transition: all 0.1s steps(2);
  transform: ${props => props.$isFocused ? 'translate(-2px, -2px)' : 'none'};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 14px;
  color: #00ff00;
  background: transparent;
  border: none;
  font-family: 'Press Start 2P', monospace;
  text-shadow: 2px 2px #000000;
  letter-spacing: 2px;
  &:focus {
    outline: none;
    animation: ${pixelate} 0.3s steps(2);
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 10px;
  margin-top: 8px;
  text-shadow: 1px 1px #000000;
  padding-left: 4px;
  letter-spacing: 1px;
`;

const MaskGuide = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #008000;
  font-family: 'Press Start 2P', monospace;
  opacity: ${props => props.$visible ? 1 : 0};
  animation: ${blink} 1s steps(2) infinite;
  text-shadow: 1px 1px #000000;
`;

const RetroGamingMaskInput = ({
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
        if (input[inputIndex] === mask[i]) {
          inputIndex++;
        }
      }
    }
    return result;
  };

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    const formattedValue = formatValue(newValue);
    setLocalValue(formattedValue);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  return (
    <Container className={className}>
      {label && <div>{label}{required && '*'}</div>}
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
        <MaskGuide $visible={isFocused && !!localValue}>{mask.slice(localValue.length).replace(/9/g, maskChar)}</MaskGuide>
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default RetroGamingMaskInput;