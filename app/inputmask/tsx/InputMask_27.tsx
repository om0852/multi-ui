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
  showValidation?: boolean;
}

const highlight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Roboto Mono', monospace;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: #f8fafc;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isSuccess) return '#10b981';
    return props.$isFocused ? '#3b82f6' : '#e2e8f0';
  }};
  border-radius: 8px;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 8px;
    background: linear-gradient(
      45deg,
      #3b82f6,
      #8b5cf6,
      #3b82f6
    );
    background-size: 200% 200%;
    animation: ${highlight} 3s ease infinite;
    opacity: ${props => props.$isFocused ? 0.5 : 0};
    z-index: -1;
  }
`;

const SegmentGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
`;

const Segment = styled.div<{ $isValid: boolean }>`
  padding: 4px;
  background: ${props => props.$isValid ? '#f0fdf4' : '#ffffff'};
  border-radius: 4px;
  color: ${props => props.$isValid ? '#10b981' : '#64748b'};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #1e293b;
  background: transparent;
  border: none;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #94a3b8;
  }

  &:disabled {
    color: #94a3b8;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #475569;
  font-weight: 500;
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#3b82f6' : '#94a3b8'};
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const ValidationInfo = styled.div<{ $isValid: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  font-size: 12px;
  color: ${props => props.$isValid ? '#10b981' : '#64748b'};
`;

const VINMaskInput: React.FC<InputMaskProps> = ({
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
  showValidation = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const isValidVINCharacter = (char: string): boolean => {
    return /^[A-HJ-NPR-Z0-9]$/i.test(char);
  };

  const validateVIN = (vin: string): boolean => {
    if (vin.length !== 17) return false;

    // Check if all characters are valid
    return vin.split('').every(isValidVINCharacter);
  };

  const formatVIN = (input: string): string => {
    return input
      .toUpperCase()
      .replace(/[^A-HJ-NPR-Z0-9]/g, '')
      .slice(0, 17);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatVIN(e.target.value);
    setLocalValue(formattedValue);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  const getSegments = () => {
    if (!localValue) return [];
    
    // VIN segments: WMI (3) + VDS (6) + VIS (8)
    return [
      localValue.slice(0, 3),    // World Manufacturer Identifier
      localValue.slice(3, 9),    // Vehicle Descriptor Section
      localValue.slice(9, 17),   // Vehicle Identifier Section
    ];
  };

  const segments = getSegments();
  const isValid = validateVIN(localValue);

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
          type="text"
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || '1HGCM82633A123456'}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
          maxLength={17}
        />
      </InputWrapper>
      {showValidation && localValue && (
        <SegmentGroup>
          {segments.map((segment, index) => (
            <React.Fragment key={index}>
              <Segment $isValid={!!segment && segment.length === (index === 0 ? 3 : index === 1 ? 6 : 8)}>
                {segment || '•'.repeat(index === 0 ? 3 : index === 1 ? 6 : 8)}
              </Segment>
              {index < 2 && <span>-</span>}
            </React.Fragment>
          ))}
        </SegmentGroup>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {showValidation && localValue && (
        <ValidationInfo $isValid={isValid}>
          {isValid ? '✓ Valid VIN' : '• Enter a valid 17-character VIN'}
        </ValidationInfo>
      )}
    </Container>
  );
};

export default VINMaskInput; 