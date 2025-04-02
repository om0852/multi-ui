"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const write = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
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
  background: #fff9f0;
  border: none;
  border-bottom: 2px solid ${({ $isFocused, $hasError, $isSuccess }) =>
    $hasError ? '#dc2626' : $isSuccess ? '#059669' : $isFocused ? '#1f2937' : '#d1d5db'};
  border-radius: 4px 4px 0 0;
  padding: 2px;
  transition: all 0.3s ease;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '44px' : '16px')};
  font-size: 18px;
  color: #1f2937;
  background: transparent;
  border: none;
  font-family: 'Caveat', cursive;
  letter-spacing: 0.5px;
  &:focus { outline: none; }
  &::placeholder { color: #9ca3af; font-style: italic; }
  &:disabled { color: #9ca3af; cursor: not-allowed; }
`;

const Label = styled.label`
  position: absolute;
  left: ${({ $hasIcon }) => ($hasIcon ? '44px' : '16px')};
  top: -28px;
  font-size: 20px;
  color: ${({ $isFocused }) => ($isFocused ? '#1f2937' : '#6b7280')};
  font-family: 'Caveat', cursive;
  animation: ${float} 3s ease-in-out infinite;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ $isFocused }) => ($isFocused ? '#1f2937' : '#9ca3af')};
  transition: all 0.3s ease;
  opacity: 0.7;
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 16px;
  margin-top: 4px;
  font-family: 'Caveat', cursive;
  padding-left: 16px;
  font-style: italic;
  &::before { content: '✗'; margin-right: 8px; }
`;

const HandwrittenInput = ({
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

export default HandwrittenInput;
