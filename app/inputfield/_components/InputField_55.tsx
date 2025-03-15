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

const gearSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const steamRelease = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-20px) scale(2);
    opacity: 0;
  }
`;

const brassShine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
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
  background: linear-gradient(145deg, #b8860b, #cd7f32);
  border: 4px solid #8b4513;
  border-radius: 8px;
  padding: 2px;
  transition: all 0.3s ease;
  box-shadow: 
    inset 0 2px 4px rgba(255, 255, 255, 0.3),
    inset 0 -2px 4px rgba(0, 0, 0, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 215, 0, 0.4),
      transparent
    );
    background-size: 200% 100%;
    animation: ${props => props.$isFocused ? css`${brassShine} 3s linear infinite` : 'none'};
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm2 2v16h16V2H2z' fill='%23000000' fill-opacity='0.1'/%3E%3C/svg%3E");
    opacity: 0.1;
    pointer-events: none;
  }
`;

const Gear = styled.div<{ $size: number; $speed: number; $x: number; $y: number; $reverse?: boolean }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: #cd7f32;
  border-radius: 50%;
  left: ${props => props.$x}px;
  top: ${props => props.$y}px;
  animation: ${gearSpin} ${props => props.$speed}s linear infinite;
  animation-direction: ${props => props.$reverse ? 'reverse' : 'normal'};
  transform-origin: center;
  box-shadow: 
    inset 0 2px 4px rgba(255, 255, 255, 0.3),
    inset 0 -2px 4px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: 20%;
    background: #8b4513;
    border-radius: 50%;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    inset: -20%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 30deg,
      #cd7f32 30deg,
      #cd7f32 60deg
    );
    animation: inherit;
    border-radius: 15%;
  }
`;

const Steam = styled.div<{ $delay: number }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  filter: blur(4px);
  animation: ${steamRelease} 2s ease-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #2f1810;
  background: #f4d03f;
  border: none;
  font-family: 'IM Fell English', serif;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
  border-radius: 4px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(47, 24, 16, 0.5);
    font-style: italic;
  }

  &:disabled {
    color: rgba(47, 24, 16, 0.3);
    cursor: not-allowed;
    background: #d4b33f;
  }

  &::selection {
    background: rgba(139, 69, 19, 0.2);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -28px;
  font-size: 16px;
  color: #8b4513;
  font-family: 'IM Fell English', serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #8b4513;
  transition: all 0.3s ease;
  z-index: 1;
  opacity: ${props => props.$isFocused ? 1 : 0.7};
`;

const ErrorMessage = styled.div`
  color: #8b0000;
  font-size: 14px;
  margin-top: 8px;
  font-family: 'IM Fell English', serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: italic;

  &::before {
    content: '⚠';
    font-style: normal;
    color: #8b0000;
  }
`;

const SteampunkInput: React.FC<InputFieldProps> = ({
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
  const gears = [
    { size: 30, speed: 10, x: -15, y: -15 },
    { size: 24, speed: 8, x: -10, y: 40, reverse: true },
    { size: 20, speed: 6, x: 280, y: -10 },
    { size: 28, speed: 12, x: 285, y: 35, reverse: true },
  ];
  const steamVents = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
  }));

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
        {gears.map((gear, index) => (
          <Gear
            key={index}
            $size={gear.size}
            $speed={gear.speed}
            $x={gear.x}
            $y={gear.y}
            $reverse={gear.reverse}
          />
        ))}
        {isFocused && steamVents.map(vent => (
          <Steam key={vent.id} $delay={vent.delay} style={{ left: `${30 + vent.id * 30}%`, top: '-10px' }} />
        ))}
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

export default SteampunkInput; 