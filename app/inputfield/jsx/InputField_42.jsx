"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0; }
  94% { opacity: 1; }
  95% { opacity: 0; }
  96% { opacity: 1; }
`;

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 8px rgba(0, 255, 0, 0.6); }
  50% { text-shadow: 0 0 12px rgba(0, 255, 0, 0.8); }
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
  background: #0a0a0a;
  border: 2px solid ${props => (props.$hasError ? '#ff0000' : '#00ff00')};
  border-radius: 4px;
  padding: 2px;
  overflow: hidden;
  animation: ${flicker} 5s infinite;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  padding-left: ${props => (props.$hasIcon ? '40px' : '12px')};
  font-family: 'VT323', monospace;
  font-size: 18px;
  color: #00ff00;
  background: transparent;
  border: none;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
  animation: ${glow} 2s ease-in-out infinite;
`;

const Label = styled.label`
  position: absolute;
  left: ${props => (props.$hasIcon ? '40px' : '12px')};
  top: -24px;
  font-family: 'VT323', monospace;
  font-size: 16px;
  color: #00ff00;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #00ff00;
  opacity: ${props => (props.$isFocused ? 1 : 0.7)};
  transition: opacity 0.3s ease;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-family: 'VT323', monospace;
  font-size: 14px;
  margin-top: 4px;
  padding-left: 12px;
  text-shadow: 0 0 8px rgba(255, 0, 0, 0.6);
`;

const RetroTerminalInput = ({
  label,
  placeholder,
  type = 'text',
  value = '',
  onChange,
  error,
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
        <Label $hasIcon={!!icon}>{label}{required && '*'}</Label>
      )}
      <InputWrapper $hasError={!!error}>
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

export default RetroTerminalInput;