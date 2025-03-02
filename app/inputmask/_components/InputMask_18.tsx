"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface InputMaskProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  mask: string;
  maskChar?: string;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const glow = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);

  ${props => props.$isFocused && css`
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.25);
  `}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      125deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    opacity: ${props => props.$isFocused ? 1 : 0.5};
    transition: opacity 0.3s ease;
  }
`;

const RippleEffect = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transform: scale(0);
  animation: ${ripple} 1s linear forwards;
  pointer-events: none;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  background: transparent;
  border: none;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;

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

  &::selection {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 16px;
  top: -24px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${props => props.$isFocused && css`
    animation: ${glow} 2s ease-in-out infinite;
  `}
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, ${props => props.$isFocused ? 0.9 : 0.6});
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: rgba(255, 99, 99, 0.9);
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Poppins', sans-serif;
  padding-left: 16px;
  animation: ${float} 3s ease-in-out infinite;
  text-shadow: 0 2px 4px rgba(255, 99, 99, 0.2);
`;

const MaskGuide = styled.div<{ $visible: boolean }>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.3);
  font-family: 'Poppins', sans-serif;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const GlassmorphicMaskInput: React.FC<InputMaskProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  mask,
  maskChar = '_',
  error,
  success,
  disabled,
  required,
  icon,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const formatValue = (input: string): string => {
    let result = '';
    let inputIndex = 0;

    for (let i = 0; i < mask.length && inputIndex < input.length; i++) {
      if (mask[i] === '9') {
        if (/\d/.test(input[inputIndex])) {
          result += input[inputIndex];
          inputIndex++;
        } else {
          result += maskChar;
        }
      } else {
        result += mask[i];
        if (input[inputIndex] === mask[i]) {
          inputIndex++;
        }
      }
    }

    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    const formattedValue = formatValue(newValue);
    setLocalValue(formattedValue);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ripple = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setRipples(prev => [...prev, ripple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 1000);
  };

  const getRemainingMask = () => {
    if (!localValue) return '';
    return mask.slice(localValue.length).replace(/9/g, maskChar);
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
        onClick={handleClick}
      >
        {ripples.map(ripple => (
          <RippleEffect
            key={ripple.id}
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        <StyledInput
          type="text"
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || mask.replace(/9/g, maskChar)}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
          maxLength={mask.length}
        />
        <MaskGuide $visible={isFocused && !!localValue}>
          {getRemainingMask()}
        </MaskGuide>
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default GlassmorphicMaskInput; 