'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pixelate = keyframes`
  0% {
    background-size: 100% 100%;
  }
  50% {
    background-size: 105% 105%;
  }
  100% {
    background-size: 100% 100%;
  }
`;

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 2px #4ade80)
            drop-shadow(0 0 4px #4ade80);
  }
  50% {
    filter: drop-shadow(0 0 4px #4ade80)
            drop-shadow(0 0 8px #4ade80);
  }
`;

const StyledRetroButton = styled.button<{ $isPressed: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  font-family: 'Press Start 2P', monospace;
  background: #111827;
  color: #4ade80;
  border: 3px solid #4ade80;
  border-radius: 0;
  cursor: pointer;
  position: relative;
  transition: all 0.1s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${glowPulse} 2s infinite;
  image-rendering: pixelated;
  transform: ${props => props.$isPressed ? 'scale(0.95) translateY(2px)' : 'scale(1)'};
  box-shadow: 
    0 ${props => props.$isPressed ? '2px' : '4px'} 0 #065f46,
    0 ${props => props.$isPressed ? '4px' : '8px'} 0 rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      transparent 0%,
      rgba(74, 222, 128, 0.1) 50%,
      transparent 100%
    );
    animation: ${scanline} 4s linear infinite;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      45deg,
      rgba(74, 222, 128, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(74, 222, 128, 0.1) 50%,
      rgba(74, 222, 128, 0.1) 75%,
      transparent 75%,
      transparent
    );
    background-size: 4px 4px;
    animation: ${pixelate} 0.3s steps(4) infinite;
    pointer-events: none;
    opacity: 0.5;
  }

  span {
    position: relative;
    z-index: 1;
    display: block;
    text-shadow: 
      2px 2px 0 #065f46,
      -2px -2px 0 #065f46,
      2px -2px 0 #065f46,
      -2px 2px 0 #065f46;
  }

  &:hover {
    background: #1f2937;
    transform: translateY(-2px);
    box-shadow: 
      0 6px 0 #065f46,
      0 10px 0 rgba(0, 0, 0, 0.3);

    span {
      animation: ${pixelate} 0.2s steps(2) infinite;
    }
  }

  &:active {
    transform: scale(0.95) translateY(4px);
    box-shadow: 
      0 2px 0 #065f46,
      0 4px 0 rgba(0, 0, 0, 0.3);
  }
`;

const RetroGameButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <StyledRetroButton
      $isPressed={isPressed}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <span>{children}</span>
    </StyledRetroButton>
  );
};

export default RetroGameButton; 