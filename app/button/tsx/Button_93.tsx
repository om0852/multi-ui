'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledHolographicButton = styled.button<{ $rotateX: number; $rotateY: number }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  transform-style: preserve-3d;
  transform: perspective(1000px) 
             rotateX(${props => props.$rotateX}deg) 
             rotateY(${props => props.$rotateY}deg);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    opacity: 0;
    transition: 0.5s;
  }

  &:hover {
    box-shadow: 
      0 0 20px rgba(255, 255, 255, 0.2),
      0 0 40px rgba(255, 255, 255, 0.1);

    &::before {
      transform: translateX(100%);
    }

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: perspective(1000px) 
               rotateX(${props => props.$rotateX * 0.5}deg) 
               rotateY(${props => props.$rotateY * 0.5}deg) 
               scale(0.95);
  }
`;

const HolographicButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((centerX - x) / centerX) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <StyledHolographicButton
      $rotateX={rotation.x}
      $rotateY={rotation.y}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </StyledHolographicButton>
  );
};

export default HolographicButton; 