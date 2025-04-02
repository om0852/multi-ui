"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: ${({ $disabled }) => ($disabled ? '#f3f4f6' : '#ffffff')};
  border-radius: 4px 4px 0 0;
  transition: all 0.2s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: ${({ $hasError, $isSuccess, $isFocused }) => {
      if ($hasError) return '#b91c1c';
      if ($isSuccess) return '#15803d';
      return $isFocused ? '#6366f1' : '#e5e7eb';
    }};
    transition: all 0.2s ease;
  }

  &::after {
    height: 2px;
    transform: scaleX(${({ $isFocused }) => ($isFocused ? 1 : 0)});
    transform-origin: center;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 20px 16px 6px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '48px' : '16px')};
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  border: none;
  font-family: 'Roboto', sans-serif;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: transparent;
  }
`;

const Label = styled.label`
  position: absolute;
  left: ${({ $hasIcon }) => ($hasIcon ? '48px' : '16px')};
  top: ${({ $isFocused, $hasValue }) => ($isFocused || $hasValue ? '8px' : '16px')};
  font-size: ${({ $isFocused, $hasValue }) => ($isFocused || $hasValue ? '12px' : '16px')};
  color: ${({ $hasError, $isSuccess, $isFocused }) => {
    if ($hasError) return '#b91c1c';
    if ($isSuccess) return '#15803d';
    return $isFocused ? '#6366f1' : '#6b7280';
  }};
  font-family: 'Roboto', sans-serif;
  transition: all 0.2s ease;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ $hasError, $isSuccess, $isFocused }) => {
    if ($hasError) return '#b91c1c';
    if ($isSuccess) return '#15803d';
    return $isFocused ? '#6366f1' : '#9ca3af';
  }};
  transition: all 0.2s ease;
`;

const HelperText = styled.div`
  position: absolute;
  left: 16px;
  top: 100%;
  margin-top: 4px;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  color: ${({ $isError, $isSuccess }) => ($isError ? '#b91c1c' : $isSuccess ? '#15803d' : '#6b7280')};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MaterialInput = ({
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
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
        $disabled={disabled}
      >
        {icon && (
          <IconWrapper 
            $isFocused={isFocused}
            $hasError={!!error}
            $isSuccess={!!success}
          >
            {icon}
          </IconWrapper>
        )}
        {label && (
          <Label 
            $isFocused={isFocused} 
            $hasValue={!!localValue}
            $hasIcon={!!icon}
            $hasError={!!error}
            $isSuccess={!!success}
          >
            {label}{required && ' *'}
          </Label>
        )}
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
      {(error || success) && (
        <HelperText $isError={!!error} $isSuccess={!!success}>
          {error || 'Valid input'}
        </HelperText>
      )}
    </Container>
  );
};

export default MaterialInput;