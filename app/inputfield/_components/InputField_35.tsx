"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

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

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: linear-gradient(
    45deg,
    rgba(16, 16, 32, 0.8),
    rgba(32, 16, 48, 0.8)
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    inset: -100%;
    background: linear-gradient(
      45deg,
      #ff61d5,
      #7c4dff,
      #00b3ff,
      #7c4dff,
      #ff61d5
    );
    background-size: 200% 200%;
    animation: ${nebulaPulse} 15s linear infinite;
    opacity: 0.1;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    top: 50%;
    right: -20px;
    box-shadow: 0 0 3px #ffffff, 0 0 5px #ffffff;
    opacity: ${props => props.$isFocused ? 1 : 0};
    animation: ${props => props.$isFocused ? css`${meteorShower} 1s linear infinite` : 'none'};
  }

  ${props => props.$isFocused && css`
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 20px rgba(124, 77, 255, 0.3);
  `}
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #ffffff;
  background: transparent;
  border: none;
  letter-spacing: 0.5px;
  font-family: 'Space Mono', monospace;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 12px;
  top: -24px;
  font-size: 14px;
  color: #ffffff;
  font-family: 'Space Mono', monospace;
  letter-spacing: 1px;

  &::after {
    content: '★';
    margin-left: 4px;
    opacity: ${props => props.$isFocused ? 1 : 0.5};
    animation: ${starTwinkle} 1.5s ease-in-out infinite;
  }
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, ${props => props.$isFocused ? 0.9 : 0.6});
  transition: all 0.3s ease;
  animation: ${starTwinkle} 2s ease-in-out infinite;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 4px;
  font-family: 'Space Mono', monospace;
  letter-spacing: 0.5px;
  
  &::before {
    content: '✧ ';
    color: #ff6b6b;
  }
`;

const CosmicInput: React.FC<InputFieldProps> = ({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Container className={className}>
      {label && (
        <Label $isFocused={isFocused} $hasValue={!!localValue}>
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

export default CosmicInput; 