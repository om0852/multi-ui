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

const magneticPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;

const particleFloat = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(0);
    opacity: 0;
  }
`;

const fieldWave = keyframes`
  0% {
    transform: translateX(-100%) scale(0.9);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(100%) scale(1.1);
    opacity: 0;
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
  background: #2d3436;
  border: 2px solid ${props => {
    if (props.$hasError) return '#e74c3c';
    if (props.$isSuccess) return '#00b894';
    return props.$isFocused ? '#0984e3' : '#636e72';
  }};
  border-radius: 8px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: ${props => {
      if (props.$hasError) return 'linear-gradient(45deg, #e74c3c, #d63031)';
      if (props.$isSuccess) return 'linear-gradient(45deg, #00b894, #00cec9)';
      return 'linear-gradient(45deg, #0984e3, #00cec9)';
    }};
    opacity: ${props => props.$isFocused ? 0.3 : 0};
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  ${props => props.$isFocused && css`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(9, 132, 227, 0.2),
        transparent
      );
      animation: ${fieldWave} 2s linear infinite;
    }
  `}
`;

const MagneticField = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  inset: -20px;
  pointer-events: none;
  opacity: ${props => props.$isFocused ? 1 : 0};
  transition: opacity 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(9, 132, 227, 0.2),
      transparent 50%
    );
    animation: ${magneticPulse} 2s ease-in-out infinite;
  }
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #0984e3;
  border-radius: 50%;
  pointer-events: none;
  --tx: ${() => Math.random() * 100 - 50}px;
  --ty: ${() => Math.random() * 100 - 50}px;
  animation: ${particleFloat} 1s ease-out forwards;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #dfe6e9;
  background: transparent;
  border: none;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #636e72;
    transition: color 0.3s ease;
  }

  &:disabled {
    color: #636e72;
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(9, 132, 227, 0.3);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#0984e3' : '#b2bec3'};
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  text-shadow: ${props => props.$isFocused ? '0 0 8px rgba(9, 132, 227, 0.5)' : 'none'};
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#0984e3' : '#636e72'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Space Grotesk', sans-serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #e74c3c;
    border-radius: 50%;
    box-shadow: 0 0 8px #e74c3c;
  }
`;

const MagneticInput: React.FC<InputFieldProps> = ({
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
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isFocused) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });

    if (Math.random() > 0.8) {
      const newParticle = {
        id: Date.now(),
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setParticles(prev => [...prev, newParticle]);
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000);
    }
  };

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
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
        onMouseMove={handleMouseMove}
        style={{ '--x': `${mousePos.x}%`, '--y': `${mousePos.y}%` } as React.CSSProperties}
      >
        <MagneticField $isFocused={isFocused} />
        {particles.map(particle => (
          <Particle key={particle.id} style={{ left: particle.x, top: particle.y }} />
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

export default MagneticInput; 