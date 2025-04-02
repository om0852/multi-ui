"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
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
  border: 2px solid ${({ $isFocused, $hasError, $isSuccess }) => 
    $hasError ? '#ff6b6b' : $isSuccess ? '#51cf66' : $isFocused ? '#339af0' : '#dee2e6'};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '44px' : '16px')};
  font-size: 16px;
  color: #495057;
  background: transparent;
  border: none;
  font-family: 'Quicksand', sans-serif;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #adb5bd;
  }
`;

const Label = styled.label`
  position: absolute;
  left: ${({ $hasIcon }) => ($hasIcon ? '44px' : '16px')};
  top: -24px;
  font-size: 14px;
  color: ${({ $isFocused, $hasError, $isSuccess }) => 
    $hasError ? '#ff6b6b' : $isSuccess ? '#51cf66' : $isFocused ? '#339af0' : '#495057'};
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  animation: ${float} 3s ease-in-out infinite;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ $isFocused, $hasError, $isSuccess }) => 
    $hasError ? '#ff6b6b' : $isSuccess ? '#51cf66' : $isFocused ? '#339af0' : '#adb5bd'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 4px;
  font-family: 'Quicksand', sans-serif;
  padding-left: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  &::before {
    content: '~';
    font-size: 16px;
  }
`;

const LiquidFillInput = ({
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
        <Label 
          $isFocused={isFocused} 
          $hasValue={!!localValue}
          $hasIcon={!!icon}
          $hasError={!!error}
          $isSuccess={!!success}
        >
          {label}{required && ' *'}
        </Label>
      )}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && (
          <IconWrapper 
            $isFocused={isFocused}
            $hasError={!!error}
            $isSuccess={!!success}
          >
            {icon}
          </IconWrapper>
        )}
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

export default LiquidFillInput;
