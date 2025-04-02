"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const circuitFlow = keyframes`
  0% {
    background-position: -300% 0;
  }
  100% {
    background-position: 300% 0;
  }
`;

const neonPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px #0ff,
                0 0 10px #0ff,
                0 0 20px #0ff,
                0 0 40px #0ff;
  }
  50% {
    box-shadow: 0 0 10px #0ff,
                0 0 20px #0ff,
                0 0 40px #0ff,
                0 0 80px #0ff;
  }
`;

const dataTransfer = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
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
  background: #1a1a1a;
  border: 2px solid ${props => props.$hasError ? '#ff3333' : props.$isSuccess ? '#33ff33' : props.$isFocused ? '#00ffff' : '#333'};
  border-radius: 8px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(0, 255, 255, 0.1) 10px,
      rgba(0, 255, 255, 0.1) 20px
    );
    mask: linear-gradient(90deg, transparent, #000 20%, #000 80%, transparent);
    animation: ${circuitFlow} 20s linear infinite;
    opacity: ${props => (props.$isFocused ? 1 : 0.3)};
  }

  ${props => props.$isFocused && css`
    animation: ${neonPulse} 2s ease-in-out infinite;
  `}
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: ${props => (props.$hasIcon ? '44px' : '16px')};
  font-size: 16px;
  color: #00ffff;
  background: transparent;
  border: none;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 255, 255, 0.3);
    transition: color 0.3s ease;
  }

  &:disabled {
    color: rgba(0, 255, 255, 0.2);
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(0, 255, 255, 0.2);
    color: #fff;
  }
`;

const NeonCircuitInput = ({
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
      {label && (
        <label style={{ color: isFocused ? '#00ffff' : 'rgba(0, 255, 255, 0.7)' }}>
          {label}{required && '*'}
        </label>
      )}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}>{icon}</span>}
        <StyledInput
          type={type}
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
        />
      </InputWrapper>
      {error && <div style={{ color: '#ff3333', fontSize: '12px', marginTop: '8px' }}>{error}</div>}
    </Container>
  );
};

export default NeonCircuitInput;