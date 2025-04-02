"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const starTwinkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(0.8); }
`;

const nebulaPulse = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const meteorShower = keyframes`
  0% { transform: translateX(0) translateY(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: translateX(-300px) translateY(300px); opacity: 0; }
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
  background: linear-gradient(45deg, rgba(16, 16, 32, 0.8), rgba(32, 16, 48, 0.8));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  ${({ $isFocused }) =>
    $isFocused &&
    css`
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 20px rgba(124, 77, 255, 0.3);
    `}
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '40px' : '12px')};
  font-size: 16px;
  color: #ffffff;
  background: transparent;
  border: none;
  font-family: 'Space Mono', monospace;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Label = styled.label`
  position: absolute;
  left: 12px;
  top: -24px;
  font-size: 14px;
  color: #ffffff;
  font-family: 'Space Mono', monospace;
  &::after {
    content: '★';
    margin-left: 4px;
    opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0.5)};
    animation: ${starTwinkle} 1.5s ease-in-out infinite;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, ${({ $isFocused }) => ($isFocused ? 0.9 : 0.6)});
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 4px;
  font-family: 'Space Mono', monospace;
  &::before {
    content: '✧ ';
    color: #ff6b6b;
  }
`;

const CosmicInput = ({
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
        <Label $isFocused={isFocused}>
          {label}{required && ' *'}
        </Label>
      )}
      <InputWrapper $isFocused={isFocused}>
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

export default CosmicInput;
