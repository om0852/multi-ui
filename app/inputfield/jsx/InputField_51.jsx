"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const bubbleFloat = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
    transform: translate(var(--tx, 20px), var(--ty, -30px)) scale(1.2);
  }
  100% {
    transform: translate(var(--tx, 40px), var(--ty, -60px)) scale(0);
    opacity: 0;
  }
`;

const liquidWave = keyframes`
  0% {
    transform: translateX(-100%) translateY(2px) rotate(10deg);
  }
  50% {
    transform: translateX(50%) translateY(-2px) rotate(-5deg);
  }
  100% {
    transform: translateX(200%) translateY(2px) rotate(10deg);
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
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
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${({ $hasError, $isSuccess, $isFocused }) =>
    $hasError ? '#ff6b6b' : $isSuccess ? '#51cf66' : $isFocused ? '#339af0' : '#dee2e6'};
  border-radius: 20px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;
`;

const LiquidEffect = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ $isFocused }) => ($isFocused ? '100%' : '30%')};
  background: ${({ $isFocused }) =>
    $isFocused
      ? 'linear-gradient(180deg, rgba(51, 154, 240, 0.1) 0%, rgba(51, 154, 240, 0.2) 100%)'
      : 'linear-gradient(180deg, rgba(51, 154, 240, 0.05) 0%, rgba(51, 154, 240, 0.1) 100%)'};
  transition: height 0.3s ease;
  pointer-events: none;
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(90deg, transparent, rgba(51, 154, 240, 0.2), transparent);
    animation: ${liquidWave} 3s ease-in-out infinite;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '44px' : '16px')};
  font-size: 16px;
  color: #495057;
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #adb5bd;
    transition: color 0.3s ease;
  }
  &:disabled {
    color: #adb5bd;
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  position: absolute;
  left: ${({ $hasIcon }) => ($hasIcon ? '44px' : '16px')};
  top: -24px;
  font-size: 14px;
  color: ${({ $isFocused }) => ($isFocused ? '#339af0' : '#868e96')};
  font-weight: 600;
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 8px;
  padding-left: 16px;
`;

const LiquidBubbleInput = ({
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
        <Label $isFocused={isFocused} $hasIcon={!!icon}>
          {label}{required && ' *'}
        </Label>
      )}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        <LiquidEffect $isFocused={isFocused} />
        {icon && <div style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }}>{icon}</div>}
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
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default LiquidBubbleInput;
