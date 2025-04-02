"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface InputMaskProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
  minLength?: number;
  requireNumbers?: boolean;
  requireSpecialChars?: boolean;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
}

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

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
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

  &:focus-within {
    box-shadow: 0 0 0 3px ${props => {
      if (props.$hasError) return 'rgba(239, 68, 68, 0.1)';
      if (props.$isSuccess) return 'rgba(16, 185, 129, 0.1)';
      return 'rgba(99, 102, 241, 0.1)';
    }};
  }
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  padding-right: 40px;
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.1em;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9ca3af;
    letter-spacing: normal;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
  transition: all 0.2s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
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
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: #6366f1;
  }

  &:focus {
    outline: none;
    color: #6366f1;
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const StrengthMeter = styled.div`
  margin-top: 8px;
  padding: 8px;
  background: #f9fafb;
  border-radius: 6px;
  animation: ${slideIn} 0.3s ease;
`;

const StrengthBar = styled.div<{ $strength: number }>`
  height: 4px;
  background: ${props => {
    if (props.$strength < 25) return '#ef4444';
    if (props.$strength < 50) return '#f59e0b';
    if (props.$strength < 75) return '#10b981';
    return '#059669';
  }};
  width: ${props => props.$strength}%;
  border-radius: 2px;
  transition: all 0.3s ease;
`;

const RequirementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Requirement = styled.li<{ $met: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${props => props.$met ? '#10b981' : '#6b7280'};

  &::before {
    content: ${props => props.$met ? '"✓"' : '"•"'};
    color: ${props => props.$met ? '#10b981' : '#9ca3af'};
    font-weight: bold;
  }

  ${props => props.$met && `
    animation: ${pulse} 0.2s ease;
  `}
`;

const PasswordMaskInput: React.FC<InputMaskProps> = ({
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
    const newRequirements = {
      length: localValue.length >= minLength,
      numbers: !requireNumbers || /\d/.test(localValue),
      special: !requireSpecialChars || /[!@#$%^&*(),.?":{}|<>]/.test(localValue),
      uppercase: !requireUppercase || /[A-Z]/.test(localValue),
      lowercase: !requireLowercase || /[a-z]/.test(localValue),
    };
    setRequirements(newRequirements);
  }, [localValue, minLength, requireNumbers, requireSpecialChars, requireUppercase, requireLowercase]);

  const calculateStrength = (): number => {
    const checks = [
      requirements.length,
      requirements.numbers,
      requirements.special,
      requirements.uppercase,
      requirements.lowercase,
    ];
    
    const metRequirements = checks.filter(Boolean).length;
    return (metRequirements / checks.length) * 100;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      {label && (
        <Label 
          $isFocused={isFocused} 
          $hasValue={!!localValue}
        >
          {label}{required && '*'}
        </Label>
      )}
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
      >
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
        <ToggleVisibility
          type="button"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? '👁️' : '🔒'}
        </ToggleVisibility>
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isFocused && (
        <StrengthMeter>
          <StrengthBar $strength={calculateStrength()} />
          <RequirementList>
            <Requirement $met={requirements.length}>
              At least {minLength} characters
            </Requirement>
            {requireNumbers && (
              <Requirement $met={requirements.numbers}>
                Contains numbers
              </Requirement>
            )}
            {requireSpecialChars && (
              <Requirement $met={requirements.special}>
                Contains special characters
              </Requirement>
            )}
            {requireUppercase && (
              <Requirement $met={requirements.uppercase}>
                Contains uppercase letters
              </Requirement>
            )}
            {requireLowercase && (
              <Requirement $met={requirements.lowercase}>
                Contains lowercase letters
              </Requirement>
            )}
          </RequirementList>
        </StrengthMeter>
      )}
    </Container>
  );
};

export default PasswordMaskInput; 