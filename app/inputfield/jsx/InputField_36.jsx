"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const unfold = keyframes`
  0% {
    transform: scaleX(0) skewY(30deg);
    opacity: 0;
  }
  50% {
    transform: scaleX(1) skewY(30deg);
    opacity: 0.5;
  }
  100% {
    transform: scaleX(1) skewY(0deg);
    opacity: 1;
  }
`;

const paperRipple = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.3;
  }
  100% {
    transform: scale(2);
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
  background: #ffffff;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(255, 255, 255, 0.5);
  transform-origin: left center;
  transition: all 0.3s ease;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: ${({ $hasError, $isSuccess }) => $hasError ? '#ff4444' : $isSuccess ? '#4caf50' : '#000000'};
    opacity: 0;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ${({ $isFocused }) => $isFocused ? css`${paperRipple} 0.6s ease-out` : 'none'};
  }
  
  ${({ $isFocused }) => $isFocused && css`
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.5);
  `}

  animation: ${unfold} 0.4s ease-out;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  padding-left: ${({ $hasIcon }) => $hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #2c3e50;
  background: transparent;
  border: none;
  font-family: 'Noto Sans', sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #95a5a6;
  }

  &:disabled {
    color: #bdc3c7;
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 12px;
  top: -24px;
  font-size: 14px;
  color: #34495e;
  font-family: 'Noto Sans', sans-serif;
  transform-origin: left center;
  transition: all 0.3s ease;

  ${({ $isFocused }) => $isFocused && css`
    color: #2980b9;
    transform: scale(1.05);
  `}
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ $isFocused }) => $isFocused ? '#2980b9' : '#95a5a6'};
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
  font-family: 'Noto Sans', sans-serif;
  padding-left: 12px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 4px;
    height: 4px;
    background: #e74c3c;
    transform: translateY(-50%) rotate(45deg);
  }
`;

const OrigamiInput = ({
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
      {label && <Label $isFocused={isFocused}>{label}{required && ' *'}</Label>}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
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

export default OrigamiInput;
