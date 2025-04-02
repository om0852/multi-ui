"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const glitch = keyframes`
  0% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00; }
  15% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00; }
  16% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00; }
  49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00; }
  50% { text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00; }
  99% { text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00; }
  100% { text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #fffc00; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
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
  border: 2px solid ${props => (props.$hasError ? '#ff073a' : props.$isSuccess ? '#00ff9f' : props.$isFocused ? '#0ff' : '#2d2d2d')};
  border-radius: 4px;
  overflow: hidden;
  padding: 2px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 16px;
  color: #0ff;
  background: transparent;
  border: none;
  position: relative;
  z-index: 2;

  &:focus { outline: none; }
  &::placeholder { color: rgba(0, 255, 255, 0.5); }
  &:disabled { color: rgba(0, 255, 255, 0.3); cursor: not-allowed; }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 14px;
  color: #0ff;
  text-transform: uppercase;
  letter-spacing: 2px;

  ${props => props.$isFocused && css` animation: ${glitch} 1s linear infinite; `}
  &::before { content: '>'; margin-right: 8px; color: #0ff; }
`;

const ErrorMessage = styled.div`
  color: #ff073a;
  font-family: 'Share Tech Mono', monospace;
  font-size: 14px;
  margin-top: 8px;
  text-transform: uppercase;
  animation: ${glitch} 1s linear infinite;
  &::before { content: '[ERROR]'; margin-right: 8px; }
`;

const CyberpunkInput = ({
  label,
  placeholder,
  type = 'text',
  value = '',
  onChange,
  error,
  success,
  disabled,
  required,
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
        <Label $isFocused={isFocused}>{label}{required && '*'}</Label>
      )}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
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
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default CyberpunkInput;
ss