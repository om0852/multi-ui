'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface CyberpunkButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const borderFlash = keyframes`
  0%, 100% {
    border-color: #00ff00;
    box-shadow: 
      0 0 10px #00ff00,
      inset 0 0 10px #00ff00;
  }
  33% {
    border-color: #ff00ff;
    box-shadow: 
      0 0 10px #ff00ff,
      inset 0 0 10px #ff00ff;
  }
  66% {
    border-color: #00ffff;
    box-shadow: 
      0 0 10px #00ffff,
      inset 0 0 10px #00ffff;
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

const glitch = keyframes`
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  20% {
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  }
  40% {
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
  }
  60% {
    clip-path: polygon(5% 0, 95% 0, 95% 100%, 5% 100%);
  }
  80% {
    clip-path: polygon(0 15%, 100% 5%, 100% 85%, 0 95%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const Button = styled.button`
  background: #000;
  color: #0f0;
  border: 2px solid #0f0;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50%,
      #0f0 50%,
      #0f0 100%
    );
    background-size: 4px 100%;
    opacity: 0.5;
    animation: ${scanline} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      transparent 0%,
      rgba(0, 255, 0, 0.1) 50%,
      transparent 100%
    );
    animation: ${scanline} 2s linear infinite;
  }

  &:hover {
    color: #fff;
    background: #000;
    animation: ${borderFlash} 2s linear infinite;
    text-shadow: 
      0 0 5px #0f0,
      0 0 10px #0f0,
      0 0 15px #0f0;
    transform: translateY(-2px);

    &::before {
      opacity: 1;
    }

    &::after {
      animation: ${glitch} 0.2s linear infinite;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const CyberpunkButton: React.FC<CyberpunkButtonProps> = ({
  children = 'Cyberpunk',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CyberpunkButton; 