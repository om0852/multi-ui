"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateZ(20px) rotateX(10deg);
  }
  50% {
    transform: translateZ(30px) rotateX(12deg);
  }
`;

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%);
  border: 2px solid ${props =>
    props.$hasError ? '#ff4d4d' : props.$isSuccess ? '#4CAF50' : props.$isFocused ? '#2196F3' : '#e0e0e0'};
  border-radius: 12px;
  padding: 2px;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  animation: ${props => (props.$isFocused ? css`${float} 3s ease-in-out infinite` : 'none')};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: ${props => (props.$hasIcon ? '44px' : '16px')};
  font-size: 16px;
  color: #333;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  position: absolute;
  left: ${props => (props.$hasIcon ? '44px' : '16px')};
  top: -24px;
  font-size: 14px;
  color: ${props => (props.$isFocused ? '#2196F3' : '#666')};
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => (props.$isFocused ? '#2196F3' : '#999')};
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ff4d4d;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Inter', sans-serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  &::before {
    content: '!';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background: #ff4d4d;
    color: white;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
  }
`;

const PerspectiveInput = ({
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
        <Label $isFocused={isFocused} $hasValue={!!localValue} $hasIcon={!!icon}>
          {label}{required && ' *'}
        </Label>
      )}
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

export default PerspectiveInput;
