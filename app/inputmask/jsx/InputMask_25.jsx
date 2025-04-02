"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'JetBrains Mono', monospace;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #1e293b;
  border: 2px solid ${({ $isFocused, $hasError, $isSuccess }) =>
    $hasError ? '#ef4444' : $isSuccess ? '#10b981' : $isFocused ? '#3b82f6' : '#475569'};
  border-radius: 8px;
  transition: all 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: ${({ $isFocused, $hasError, $isSuccess }) =>
      $hasError ? '#ef444420' : $isSuccess ? '#10b98120' : $isFocused ? '#3b82f620' : 'transparent'};
    border-radius: 10px;
    animation: ${pulse} 2s infinite;
    z-index: -1;
  }
`;

const OctetGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
`;

const Octet = styled.input`
  width: 3ch;
  padding: 4px;
  font-size: 16px;
  color: #e2e8f0;
  background: #334155;
  border: 1px solid #475569;
  border-radius: 4px;
  text-align: center;
  font-family: 'JetBrains Mono', monospace;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: #1e293b;
  }

  &::placeholder {
    color: #64748b;
  }

  &:disabled {
    color: #64748b;
    cursor: not-allowed;
  }
`;

const Separator = styled.span`
  color: #64748b;
  font-weight: bold;
  user-select: none;
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #e2e8f0;
  font-weight: 500;
  transition: all 0.2s ease;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ $isFocused }) => ($isFocused ? '#3b82f6' : '#64748b')};
  transition: all 0.2s ease;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const IPAddressMaskInput = ({
  label,
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
  const [octets, setOctets] = useState(['', '', '', '']);

  useEffect(() => {
    if (value) {
      setOctets(value.split('.'));
    }
  }, [value]);

  const validateOctet = (value) => {
    const num = parseInt(value, 10);
    return !isNaN(num) && num >= 0 && num <= 255;
  };

  const handleOctetChange = (index, value) => {
    if (value.length > 3) return;

    const newValue = value.replace(/[^\d]/g, '');
    const newOctets = [...octets];
    newOctets[index] = newValue;

    setOctets(newOctets);

    if (onChange) {
      onChange(newOctets.join('.'));
    }

    if (validateOctet(newValue) && newValue.length > 0 && index < 3) {
      const nextInput = document.querySelector(`input[name="octet-${index + 1}"]`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !octets[index] && index > 0) {
      const prevInput = document.querySelector(`input[name="octet-${index - 1}"]`);
      if (prevInput) {
        prevInput.focus();
      }
    } else if (e.key === '.' && index < 3) {
      const nextInput = document.querySelector(`input[name="octet-${index + 1}"]`);
      if (nextInput) {
        nextInput.focus();
      }
      e.preventDefault();
    }
  };

  return (
    <Container className={className}>
      {label && <Label>{label}{required && '*'}</Label>}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        <OctetGroup>
          {octets.map((octet, index) => (
            <React.Fragment key={index}>
              <Octet
                type="text"
                name={`octet-${index}`}
                value={octet}
                onChange={(e) => handleOctetChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="000"
                disabled={disabled}
                maxLength={3}
              />
              {index < 3 && <Separator>.</Separator>}
            </React.Fragment>
          ))}
        </OctetGroup>
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default IPAddressMaskInput;
