'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface RetroWaveButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const retroGlow = keyframes`
  0% {
    text-shadow: 0 0 10px #ff00ff,
                 0 0 20px #ff00ff,
                 0 0 30px #ff00ff;
  }
  50% {
    text-shadow: 0 0 20px #00ffff,
                 0 0 40px #00ffff,
                 0 0 60px #00ffff;
  }
  100% {
    text-shadow: 0 0 10px #ff00ff,
                 0 0 20px #ff00ff,
                 0 0 30px #ff00ff;
  }
`;

const gridMove = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
`;

const Button = styled.button`
  background: #1a0033;
  color: #fff;
  border: 2px solid #ff00ff;
  padding: 15px 30px;
  font-size: 18px;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  background-image: 
    linear-gradient(45deg, rgba(255, 0, 255, 0.1) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255, 0, 255, 0.1) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(255, 0, 255, 0.1) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255, 0, 255, 0.1) 75%);
  background-size: 20px 20px;

  &:hover {
    color: #fff;
    background-color: #2a0066;
    border-color: #00ffff;
    box-shadow: 
      0 0 10px rgba(0, 255, 255, 0.5),
      0 0 20px rgba(0, 255, 255, 0.3),
      0 0 30px rgba(0, 255, 255, 0.1);
    animation: ${retroGlow} 2s ease infinite,
               ${gridMove} 1s linear infinite;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const RetroWaveButton: React.FC<RetroWaveButtonProps> = ({
  children = 'Retro',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default RetroWaveButton; 