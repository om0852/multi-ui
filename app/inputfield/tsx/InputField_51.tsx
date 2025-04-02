"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

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

const bubbleFloat = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
    transform: translate(var(--tx, 20px), var(--ty, -30px)) scale(1.2);
  }
  100% {
    transform: translate(var(--tx, 40px), var(--ty, -60px)) scale(0);
    opacity: 0;
  }
`;

const liquidWave = keyframes`
  0% {
    transform: translateX(-100%) translateY(2px) rotate(10deg);
  }
  50% {
    transform: translateX(50%) translateY(-2px) rotate(-5deg);
  }
  100% {
    transform: translateX(200%) translateY(2px) rotate(10deg);
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
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
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${props => {
    if (props.$hasError) return '#ff6b6b';
    if (props.$isSuccess) return '#51cf66';
    return props.$isFocused ? '#339af0' : '#dee2e6';
  }};
  border-radius: 20px;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => {
      if (props.$hasError) return 'linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(255, 107, 107, 0.1))';
      if (props.$isSuccess) return 'linear-gradient(45deg, rgba(81, 207, 102, 0.2), rgba(81, 207, 102, 0.1))';
      return 'linear-gradient(45deg, rgba(51, 154, 240, 0.2), rgba(51, 154, 240, 0.1))';
    }};
    border-radius: 18px;
    z-index: -1;
  }
`;

const LiquidEffect = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${props => props.$isFocused ? '100%' : '30%'};
  background: ${props => props.$isFocused ? 
    'linear-gradient(180deg, rgba(51, 154, 240, 0.1) 0%, rgba(51, 154, 240, 0.2) 100%)' :
    'linear-gradient(180deg, rgba(51, 154, 240, 0.05) 0%, rgba(51, 154, 240, 0.1) 100%)'
  };
  transition: height 0.3s ease;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(90deg, transparent, rgba(51, 154, 240, 0.2), transparent);
    animation: ${liquidWave} 3s ease-in-out infinite;
  }
`;

const Bubble = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(51, 154, 240, 0.3);
  border-radius: 50%;
  pointer-events: none;
  --tx: ${() => Math.random() * 60 - 30}px;
  --ty: ${() => -Math.random() * 60 - 20}px;
  animation: ${bubbleFloat} 2s ease-out forwards;
`;

const RippleEffect = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(51, 154, 240, 0.2);
  pointer-events: none;
  animation: ${ripple} 1s ease-out forwards;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  width: 100%;
  padding: 16px;
  padding-left: ${props => props.$hasIcon ? '44px' : '16px'};
  font-size: 16px;
  color: #495057;
  background: transparent;
  border: none;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #adb5bd;
    transition: color 0.3s ease;
  }

  &:disabled {
    color: #adb5bd;
    cursor: not-allowed;
  }

  &::selection {
    background: rgba(51, 154, 240, 0.2);
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean; $hasIcon: boolean }>`
  position: absolute;
  left: ${props => props.$hasIcon ? '44px' : '16px'};
  top: -24px;
  font-size: 14px;
  color: ${props => props.$isFocused ? '#339af0' : '#868e96'};
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#339af0' : '#adb5bd'};
  transition: all 0.3s ease;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Nunito', sans-serif;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '~';
    font-size: 18px;
    font-weight: bold;
  }
`;

const LiquidBubbleInput: React.FC<InputFieldProps> = ({
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
  const [bubbles, setBubbles] = useState<{ id: number; x: number }[]>([]);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (isFocused) {
      const interval = setInterval(() => {
        const newBubble = {
          id: Date.now(),
          x: Math.random() * 100,
        };
        setBubbles(prev => [...prev, newBubble]);
        setTimeout(() => {
          setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
        }, 2000);
      }, 300);

      return () => clearInterval(interval);
    }
  }, [isFocused]);

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
        onClick={handleClick}
      >
        <LiquidEffect $isFocused={isFocused} />
        {bubbles.map(bubble => (
          <Bubble key={bubble.id} style={{ left: `${bubble.x}%`, bottom: 0 }} />
        ))}
        {ripples.map(ripple => (
          <RippleEffect
            key={ripple.id}
            style={{ left: ripple.x, top: ripple.y }}
          />
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

export default LiquidBubbleInput; 