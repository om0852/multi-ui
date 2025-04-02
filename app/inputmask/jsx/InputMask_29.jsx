"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Inter', sans-serif;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: white;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isSuccess) return '#10b981';
    return props.$isFocused ? '#6366f1' : '#e5e7eb';
  }};
  border-radius: 8px;
  transition: all 0.2s ease;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#6366f1' : '#9ca3af'};
  transition: all 0.2s ease;
`;

const ToggleVisibility = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
`;

const PasswordMaskInput = ({
  label,
  placeholder,
  value = '',
  onChange,
  error,
  success,
  disabled,
  required,
  icon,
  className,
  minLength = 8,
  requireNumbers = true,
  requireSpecialChars = true,
  requireUppercase = true,
  requireLowercase = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);
  const [requirements, setRequirements] = useState({
    length: false,
    numbers: false,
    special: false,
    uppercase: false,
    lowercase: false,
  });

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    setRequirements({
      length: localValue.length >= minLength,
      numbers: !requireNumbers || /\d/.test(localValue),
      special: !requireSpecialChars || /[!@#$%^&*(),.?":{}|<>]/.test(localValue),
      uppercase: !requireUppercase || /[A-Z]/.test(localValue),
      lowercase: !requireLowercase || /[a-z]/.test(localValue),
    });
  }, [localValue, minLength, requireNumbers, requireSpecialChars, requireUppercase, requireLowercase]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className={className}>
      {label && <Label>{label}{required && '*'}</Label>}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        <StyledInput
          type={showPassword ? 'text' : 'password'}
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || 'Enter password'}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
        />
        <ToggleVisibility type="button" onClick={togglePasswordVisibility}>
          {showPassword ? '👁️' : '🔒'}
        </ToggleVisibility>
      </InputWrapper>
    </Container>
  );
};

export default PasswordMaskInput;
