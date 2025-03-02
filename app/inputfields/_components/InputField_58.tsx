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

const inkSpread = keyframes`
  0% {
    transform: scale(0) translate(-50%, -50%);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 0;
  }
`;

const brushStroke = keyframes`
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
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
  background: #f8f9fa;
  border-bottom: 2px solid;
  border-color: ${props => {
    if (props.$hasError) return '#ff6b6b';
    if (props.$isSuccess) return '#51cf66';
    return props.$isFocused ? '#212529' : '#dee2e6';
  }};
  transition: all 0.3s ease;
  padding: 2px;
  overflow: hidden;
`;

const InkBlot = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  width: 100px;
  height: 100px;
  top: ${props => props.$y}px;
  left: ${props => props.$x}px;
  background: radial-gradient(
    circle at center,
    rgba(33, 37, 41, 0.1) 0%,
    transparent 70%
  );
  transform-origin: top left;
  animation: ${inkSpread} 2s ease-out forwards;
  pointer-events: none;
`;

const Underline = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #212529;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  ${props => props.$isFocused && css`
    animation: ${brushStroke} 0.3s ease-out forwards;
  `}
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #212529;
  background: transparent;
  border: none;
  font-family: 'Noto Sans JP', sans-serif;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #adb5bd;
    font-style: italic;
  }

  &:disabled {
    color: #ced4da;
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(33, 37, 41, 0.1);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#212529' : '#868e96'};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  letter-spacing: 1px;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#212529' : '#adb5bd'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Noto Sans JP', sans-serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.8;

  &::before {
    content: '—';
    color: #ff6b6b;
  }
`;

const MinimalistZenInput: React.FC<InputFieldProps> = ({
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
  const [inkBlots, setInkBlots] = useState<{ id: number; x: number; y: number }[]>([]);

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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newBlot = {
      id: Date.now(),
      x,
      y,
    };
    setInkBlots(prev => [...prev, newBlot]);
    setTimeout(() => {
      setInkBlots(prev => prev.filter(blot => blot.id !== newBlot.id));
    }, 2000);
  };

  return (
    <Container className={className}>
      {label && (
        <Label 
          $isFocused={isFocused} 
          $hasValue={!!localValue}
          $hasIcon={!!icon}
        >
          {label}{required && ' *'}
        </Label>
      )}
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
        onClick={handleClick}
      >
        {inkBlots.map(blot => (
          <InkBlot key={blot.id} $x={blot.x} $y={blot.y} />
        ))}
        <Underline $isFocused={isFocused} />
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

export default MinimalistZenInput; 