"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const liquidWave = keyframes`
  0% { transform: translateX(-100%) translateY(-50%); }
  50% { transform: translateX(0%) translateY(-40%); }
  100% { transform: translateX(100%) translateY(-50%); }
`;

const bubble = keyframes`
  0% { transform: translateY(0) scale(0); opacity: 0; }
  50% { transform: translateY(-20px) scale(1); opacity: 0.8; }
  100% { transform: translateY(-40px) scale(0); opacity: 0; }
`;

const morphBorder = keyframes`
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
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
  background: linear-gradient(135deg, #6ab3f8, #4361ee);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  padding: 2px;
  transition: all 0.3s ease;
  animation: ${morphBorder} 8s ease-in-out infinite;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    top: 50%;
    animation: ${liquidWave} 3s ease-in-out infinite;
    opacity: ${props => (props.$isFocused ? 0.8 : 0.3)};
  }
`;

const InnerWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: inherit;
  padding: 2px;
`;

const Bubble = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  bottom: 0;
  animation: ${bubble} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: ${props => (props.$hasIcon ? '44px' : '16px')};
  font-size: 16px;
  color: #4361ee;
  background: white;
  border: none;
  border-radius: inherit;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;
  &:focus { outline: none; }
  &::placeholder { color: #a8b8f8; }
  &:disabled { color: #ccd6f6; cursor: not-allowed; }
  &::selection { background: rgba(67, 97, 238, 0.2); }
`;

const Label = styled.label`
  position: absolute;
  left: 16px;
  top: -24px;
  font-size: 14px;
  color: #4361ee;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(67, 97, 238, 0.2);
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => (props.$isFocused ? '#4361ee' : '#a8b8f8')};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #f87171;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Quicksand', sans-serif;
  padding-left: 16px;
  font-weight: 500;
`;

const LiquidMaskInput = ({
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

  useEffect(() => { setLocalValue(value); }, [value]);

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
    if (onChange) onChange(formattedValue);
  };

  return (
    <Container className={className}>
      {label && <Label>{label}{required && '*'}</Label>}
      <InputWrapper $isFocused={isFocused}>
        <InnerWrapper>
          {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
          <StyledInput
            type="text"
            value={localValue}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder || mask.replace(/9/g, maskChar)}
            disabled={disabled}
            required={required}
            $hasIcon={!!icon}
            maxLength={mask.length}
          />
        </InnerWrapper>
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default LiquidMaskInput;
