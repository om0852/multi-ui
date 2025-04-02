"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const magneticPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;

const particleFloat = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(0);
    opacity: 0;
  }
`;

const fieldWave = keyframes`
  0% {
    transform: translateX(-100%) scale(0.9);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(100%) scale(1.1);
    opacity: 0;
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
  background: #2d3436;
  border: 2px solid ${props => {
    if (props.$hasError) return '#e74c3c';
    if (props.$isSuccess) return '#00b894';
    return props.$isFocused ? '#0984e3' : '#636e72';
  }};
  border-radius: 8px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: ${props => {
      if (props.$hasError) return 'linear-gradient(45deg, #e74c3c, #d63031)';
      if (props.$isSuccess) return 'linear-gradient(45deg, #00b894, #00cec9)';
      return 'linear-gradient(45deg, #0984e3, #00cec9)';
    }};
    opacity: ${props => props.$isFocused ? 0.3 : 0};
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  ${props => props.$isFocused && css`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(9, 132, 227, 0.2),
        transparent
      );
      animation: ${fieldWave} 2s linear infinite;
    }
  `}
`;

const MagneticField = styled.div`
  position: absolute;
  inset: -20px;
  pointer-events: none;
  opacity: ${props => props.$isFocused ? 1 : 0};
  transition: opacity 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(9, 132, 227, 0.2),
      transparent 50%
    );
    animation: ${magneticPulse} 2s ease-in-out infinite;
  }
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #0984e3;
  border-radius: 50%;
  pointer-events: none;
  --tx: ${() => Math.random() * 100 - 50}px;
  --ty: ${() => Math.random() * 100 - 50}px;
  animation: ${particleFloat} 1s ease-out forwards;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #dfe6e9;
  background: transparent;
  border: none;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #636e72;
    transition: color 0.3s ease;
  }

  &:disabled {
    color: #636e72;
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(9, 132, 227, 0.3);
  }
`;

const MagneticInput = ({
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
        {icon && <span>{icon}</span>}
        <StyledInput
          type={type}
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
      </InputWrapper>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default MagneticInput;
