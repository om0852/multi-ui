'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const rippleEffect = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const StyledRippleButton = styled.button`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const Ripple = styled.span<{ $x: number; $y: number }>`
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: ${rippleEffect} 0.8s linear;
  left: ${props => props.$x}px;
  top: ${props => props.$y}px;
  width: 20px;
  height: 20px;
`;

const RippleButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 800);
  };

  return (
    <StyledRippleButton onClick={handleClick}>
      {children}
      {ripples.map(ripple => (
        <Ripple key={ripple.id} $x={ripple.x} $y={ripple.y} />
      ))}
    </StyledRippleButton>
  );
};

export default RippleButton; 