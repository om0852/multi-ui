"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const holographicShift = keyframes`
  0% {
    filter: hue-rotate(0deg) brightness(1);
    transform: translateX(0);
  }
  25% {
    filter: hue-rotate(90deg) brightness(1.2);
    transform: translateX(2px);
  }
  50% {
    filter: hue-rotate(180deg) brightness(1);
    transform: translateX(0);
  }
  75% {
    filter: hue-rotate(270deg) brightness(1.2);
    transform: translateX(-2px);
  }
  100% {
    filter: hue-rotate(360deg) brightness(1);
    transform: translateX(0);
  }
`;

const scanEffect = keyframes`
  0% {
    transform: translateY(-100%) skewX(45deg);
  }
  100% {
    transform: translateY(100%) skewX(45deg);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Rajdhani', sans-serif;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: rgba(16, 24, 39, 0.8);
  border: 2px solid rgba(147, 197, 253, 0.5);
  border-radius: 8px;
  padding: 2px;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  overflow: hidden;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  background: transparent;
  border: none;
  font-family: 'Rajdhani', sans-serif;
  letter-spacing: 1px;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: rgba(147, 197, 253, 0.9);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
`;

const FuturisticMaskInput = ({
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
      {label && <Label>{label}{required && '*'}</Label>}
      <InputWrapper>
        {icon && <div>{icon}</div>}
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
      {error && <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>}
    </Container>
  );
};

export default FuturisticMaskInput;
