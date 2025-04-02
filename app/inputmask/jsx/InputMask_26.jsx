"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const secureAnimation = keyframes`
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-2px) scale(1.02); }
  100% { transform: translateY(0) scale(1); }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'IBM Plex Mono', monospace;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: ${({ $isPrivate }) => ($isPrivate ? '#1a1a1a' : '#ffffff')};
  border: 2px solid ${({ $isFocused, $hasError, $isSuccess }) => 
    $hasError ? '#dc2626' : $isSuccess ? '#059669' : $isFocused ? '#6366f1' : '#d1d5db'};
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: ${({ $isPrivate }) => ($isPrivate ? '0 4px 6px -1px rgba(0, 0, 0, 0.2)' : 'none')};
  ${({ $isPrivate, $isFocused }) => $isPrivate && $isFocused && `animation: ${secureAnimation} 0.6s ease-in-out;`}
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '40px' : '12px')};
  font-size: 16px;
  color: ${({ $isPrivate }) => ($isPrivate ? '#ffffff' : '#1f2937')};
  background: transparent;
  border: none;
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: ${({ $isPrivate }) => ($isPrivate ? '0.2em' : 'normal')};
  &:focus { outline: none; }
  &::placeholder { color: ${({ $isPrivate }) => ($isPrivate ? '#4b5563' : '#9ca3af')}; }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: ${({ $isPrivate }) => ($isPrivate ? '#e5e7eb' : '#4b5563')};
  font-weight: 500;
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: ${({ $isPrivate }) => ($isPrivate ? '#ef4444' : '#dc2626')};
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const PrivacyToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ $isPrivate }) => ($isPrivate ? '#6366f1' : '#9ca3af')};
  cursor: pointer;
  padding: 4px;
  &:hover { color: ${({ $isPrivate }) => ($isPrivate ? '#818cf8' : '#6b7280')}; }
`;

const SSNMaskInput = ({
  label,
  placeholder,
  value = '',
  onChange,
  error,
  success,
  disabled,
  required,
  className,
  isPrivate: initialPrivate = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [isPrivate, setIsPrivate] = useState(initialPrivate);

  useEffect(() => { setLocalValue(value); }, [value]);

  const formatSSN = (input) => {
    const cleaned = input.replace(/\D/g, '');
    const matches = cleaned.match(/^(\d{0,3})(\d{0,2})(\d{0,4})$/);
    if (!matches) return '';
    const [, first, second, third] = matches;
    if (!second) return first;
    if (!third) return `${first}-${second}`;
    return `${first}-${second}-${third}`;
  };

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/[^\d-]/g, '');
    const formattedValue = formatSSN(newValue);
    setLocalValue(formattedValue);
    if (onChange) onChange(formattedValue);
  };

  const getDisplayValue = () => {
    if (!localValue) return '';
    if (!isPrivate) return localValue;
    const parts = localValue.split('-');
    if (parts.length !== 3) return localValue;
    return `***-**-${parts[2]}`;
  };

  return (
    <Container className={className}>
      {label && <Label $isPrivate={isPrivate}>{label}{required && '*'}</Label>}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success} $isPrivate={isPrivate}>
        <StyledInput
          type="text"
          value={getDisplayValue()}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || '000-00-0000'}
          disabled={disabled}
          required={required}
          maxLength={11}
          $isPrivate={isPrivate}
        />
        <PrivacyToggle type="button" onClick={() => setIsPrivate(!isPrivate)} $isPrivate={isPrivate}>
          {isPrivate ? '👁️' : '🔒'}
        </PrivacyToggle>
      </InputWrapper>
      {error && <ErrorMessage $isPrivate={isPrivate}>{error}</ErrorMessage>}
    </Container>
  );
};

export default SSNMaskInput;