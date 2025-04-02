'use client';
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const gearSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const steamRelease = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.8; }
  100% { transform: translateY(-20px) scale(2); opacity: 0; }
`;

const brassShine = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
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
  background: linear-gradient(145deg, #b8860b, #cd7f32);
  border: 4px solid #8b4513;
  border-radius: 8px;
  padding: 2px;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.4), transparent);
    background-size: 200% 100%;
    animation: ${props => (props.$isFocused ? css`${brassShine} 3s linear infinite` : 'none')};
    pointer-events: none;
  }
`;

const Gear = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: #cd7f32;
  border-radius: 50%;
  left: ${props => props.$x}px;
  top: ${props => props.$y}px;
  animation: ${gearSpin} ${props => props.$speed}s linear infinite;
  animation-direction: ${props => (props.$reverse ? 'reverse' : 'normal')};
  transform-origin: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: ${props => (props.$hasIcon ? '44px' : '16px')};
  font-size: 16px;
  color: #2f1810;
  background: #f4d03f;
  border: none;
  &:focus { outline: none; }
`;

const SteampunkInput = ({
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
    if (onChange) onChange(newValue);
  };

  return (
    <Container className={className}>
      {label && <label>{label}{required && ' *'}</label>}
      <InputWrapper $isFocused={isFocused}>
        {icon && <span>{icon}</span>}
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
      {error && <div>{error}</div>}
    </Container>
  );
};

export default SteampunkInput;