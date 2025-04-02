"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(var(--glow-color), 0.2), 0 0 8px rgba(var(--glow-color), 0.3), 0 0 12px rgba(var(--glow-color), 0.4); }
  50% { box-shadow: 0 0 10px rgba(var(--glow-color), 0.3), 0 0 15px rgba(var(--glow-color), 0.4), 0 0 20px rgba(var(--glow-color), 0.5); }
  100% { box-shadow: 0 0 5px rgba(var(--glow-color), 0.2), 0 0 8px rgba(var(--glow-color), 0.3), 0 0 12px rgba(var(--glow-color), 0.4); }
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
  --glow-color: ${({ $hasError, $isSuccess, $color }) => {
    if ($hasError) return '239, 68, 68';
    if ($isSuccess) return '34, 197, 94';
    return {
      purple: '147, 51, 234',
      green: '34, 197, 94',
      pink: '236, 72, 153',
      blue: '59, 130, 246'
    }[$color] || '59, 130, 246';
  }};

  ${({ $isFocused }) => $isFocused && css`
    animation: ${glowAnimation} 1.5s ease-in-out infinite;
  `}
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '40px' : '16px')};
  font-size: 16px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid ${({ $hasError, $isSuccess, $color }) => {
    if ($hasError) return '#ef4444';
    if ($isSuccess) return '#22c55e';
    return {
      purple: '#9333ea',
      green: '#22c55e',
      pink: '#ec4899',
      blue: '#3b82f6'
    }[$color] || '#3b82f6';
  }};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.9);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 12px;
  top: -20px;
  font-size: 14px;
  color: ${({ $color }) => ({
    purple: '#9333ea',
    green: '#22c55e',
    pink: '#ec4899',
    blue: '#3b82f6'
  }[$color] || '#3b82f6')};
  transition: all 0.3s ease;
  text-shadow: 0 0 8px rgba(var(--glow-color), 0.5);
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ $color }) => ({
    purple: '#9333ea',
    green: '#22c55e',
    pink: '#ec4899',
    blue: '#3b82f6'
  }[$color] || '#3b82f6')};
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
  text-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
`;

const NeonInput = ({
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
  color = 'blue',
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
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success} $color={color}>
        {icon && <IconWrapper $isFocused={isFocused} $color={color}>{icon}</IconWrapper>}
        {label && (
          <Label $isFocused={isFocused} $hasValue={!!localValue} $color={color}>
            {label}{required && ' *'}
          </Label>
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
          $hasError={!!error}
          $isSuccess={!!success}
          $color={color}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default NeonInput;
