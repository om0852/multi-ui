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

const leafSway = keyframes`
  0%, 100% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
`;

const flowerBloom = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
`;

const vineGrow = keyframes`
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
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid;
  border-color: ${props => {
    if (props.$hasError) return '#e74c3c';
    if (props.$isSuccess) return '#2ecc71';
    return props.$isFocused ? '#27ae60' : '#95a5a6';
  }};
  border-radius: 20px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(46, 204, 113, 0.1),
      rgba(39, 174, 96, 0.2)
    );
    opacity: ${props => props.$isFocused ? 1 : 0};
    transition: opacity 0.3s ease;
  }
`;

const Leaf = styled.div<{ $index: number }>`
  position: absolute;
  width: 20px;
  height: 10px;
  background: #27ae60;
  border-radius: 0 100% 0 100%;
  top: ${props => -5 + props.$index * 2}px;
  left: ${props => 10 + props.$index * 30}px;
  transform-origin: 0 50%;
  animation: ${leafSway} ${props => 2 + props.$index * 0.5}s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    transform: scaleX(-1);
    opacity: 0.7;
  }
`;

const Flower = styled.div<{ $isFocused: boolean; $color: string; $size: number; $x: number; $y: number }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  opacity: ${props => props.$isFocused ? 1 : 0};
  transform: scale(0);
  animation: ${props => props.$isFocused ? css`${flowerBloom} 1s forwards` : 'none'};

  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const Vine = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, #27ae60, transparent);
  bottom: 0;
  left: 0;
  right: 0;
  transform-origin: left;
  animation: ${vineGrow} 0.5s ease-out forwards;
  opacity: ${props => props.$isFocused ? 1 : 0};
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #2c3e50;
  background: transparent;
  border: none;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #95a5a6;
    font-style: italic;
  }

  &:disabled {
    color: #bdc3c7;
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(46, 204, 113, 0.2);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#27ae60' : '#7f8c8d'};
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;

  &::before {
    content: '🌱';
    margin-right: 4px;
    opacity: ${props => props.$isFocused ? 1 : 0.7};
  }
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#27ae60' : '#95a5a6'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Quicksand', sans-serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '🍂';
  }
`;

const NatureInput: React.FC<InputFieldProps> = ({
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
  const flowers = [
    { color: '#e74c3c', size: 12, x: 20, y: 20 },
    { color: '#f1c40f', size: 10, x: 40, y: 70 },
    { color: '#e67e22', size: 8, x: 70, y: 30 },
    { color: '#f39c12', size: 14, x: 85, y: 60 },
  ];

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
        <Label 
          $isFocused={isFocused} 
          $hasValue={!!localValue}
          $hasIcon={!!icon}
        >
          {label}{required && ' *'}
        </Label>
      )}
      <InputWrapper $isFocused={isFocused} $hasError={!!error} $isSuccess={!!success}>
        {[...Array(5)].map((_, i) => (
          <Leaf key={i} $index={i} />
        ))}
        {flowers.map((flower, index) => (
          <Flower
            key={index}
            $isFocused={isFocused}
            $color={flower.color}
            $size={flower.size}
            $x={flower.x}
            $y={flower.y}
          />
        ))}
        <Vine $isFocused={isFocused} />
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

export default NatureInput;