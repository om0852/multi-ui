"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const neonPulse = keyframes`
  0% {
    box-shadow: 0 0 5px var(--neon-color), 0 0 10px var(--neon-color);
  }
  50% {
    box-shadow: 0 0 20px var(--neon-color), 0 0 30px var(--neon-color);
  }
  100% {
    box-shadow: 0 0 5px var(--neon-color), 0 0 10px var(--neon-color);
  }
`;

const textGlow = keyframes`
  0% {
    text-shadow: 0 0 2px var(--neon-color), 0 0 4px var(--neon-color);
  }
  50% {
    text-shadow: 0 0 4px var(--neon-color), 0 0 8px var(--neon-color);
  }
  100% {
    text-shadow: 0 0 2px var(--neon-color), 0 0 4px var(--neon-color);
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
  --neon-color: ${({ $hasError, $isSuccess, $color }) => {
    if ($hasError) return '#ff0000';
    if ($isSuccess) return '#00ff00';
    return {
      pink: '#ff00ff',
      green: '#00ff00',
      purple: '#9d00ff',
      blue: '#00ffff'
    }[$color] || '#00ffff';
  }};
  background: #1a1a1a;
  border: 2px solid var(--neon-color);
  border-radius: 4px;
  transition: all 0.3s ease;
  overflow: hidden;
  ${({ $isFocused }) => $isFocused && css`animation: ${neonPulse} 1.5s ease-in-out infinite;`}
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '40px' : '12px')};
  font-size: 16px;
  color: #ffffff;
  background: transparent;
  border: none;
  font-family: 'Courier New', monospace;
  &:focus { outline: none; }
  &::placeholder { color: rgba(255, 255, 255, 0.5); }
  &:disabled { color: rgba(255, 255, 255, 0.3); cursor: not-allowed; }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--neon-color);
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
  ${({ $isFocused }) => $isFocused && css`animation: ${textGlow} 1.5s ease-in-out infinite;`}
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--neon-color);
  transition: all 0.3s ease;
  ${({ $isFocused }) => $isFocused && css`animation: ${textGlow} 1.5s ease-in-out infinite;`}
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin-top: 4px;
  font-family: 'Courier New', monospace;
  animation: ${textGlow} 1.5s ease-in-out infinite;
  --neon-color: #ff0000;
`;

const NeonBorderInput = ({
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
    if (onChange) onChange(newValue);
  };

  return (
    <Container className={className}>
      {label && <Label $isFocused={isFocused} $color={color}>{label}{required && ' *'}</Label>}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success} $color={color}>
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

export default NeonBorderInput;
