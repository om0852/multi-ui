'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) rotate(2deg);
  }
  75% {
    transform: translateY(8px) rotate(-2deg);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(66, 211, 170, 0.4),
                0 0 30px rgba(66, 211, 170, 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(66, 211, 170, 0.6),
                0 0 50px rgba(66, 211, 170, 0.3);
  }
`;

const StyledFloatingButton = styled.button<{ $x: number; $y: number }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #42d3aa, #3d94eb);
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  animation: ${float} 6s ease-in-out infinite;
  transform-style: preserve-3d;
  transform: 
    perspective(1000px)
    rotateX(${props => props.$x * 0.1}deg)
    rotateY(${props => props.$y * 0.1}deg);

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
    transition: transform 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    animation: ${float} 6s ease-in-out infinite, ${glow} 2s infinite;

    &::before {
      transform: translateX(100%);
    }

    &::after {
      opacity: 1;
    }
  }

  span {
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .parallax-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    
    &::before {
      content: '✨';
      position: absolute;
      font-size: 20px;
      opacity: 0.8;
      transform: translate(
        ${props => props.$x * 0.2}px,
        ${props => props.$y * 0.2}px
      );
    }
  }
`;

const FloatingButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <StyledFloatingButton
      $x={coords.x}
      $y={coords.y}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span>{children}</span>
      <div className="parallax-layer" />
    </StyledFloatingButton>
  );
};

export default FloatingButton; 