'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface NeonPulseButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const pulse = keyframes`
  0% {
    box-shadow: 
      0 0 5px #ff00ff,
      0 0 10px #ff00ff,
      0 0 20px #ff00ff,
      0 0 40px #ff00ff;
  }
  50% {
    box-shadow: 
      0 0 10px #00ffff,
      0 0 20px #00ffff,
      0 0 40px #00ffff,
      0 0 80px #00ffff;
  }
  100% {
    box-shadow: 
      0 0 5px #ff00ff,
      0 0 10px #ff00ff,
      0 0 20px #ff00ff,
      0 0 40px #ff00ff;
  }
`;

const textFlicker = keyframes`
  0% {
    text-shadow: 
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #ff00ff,
      0 0 80px #ff00ff,
      0 0 90px #ff00ff,
      0 0 100px #ff00ff,
      0 0 150px #ff00ff;
  }
  18% {
    text-shadow: 
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #00ffff,
      0 0 80px #00ffff,
      0 0 90px #00ffff,
      0 0 100px #00ffff,
      0 0 150px #00ffff;
  }
  22% {
    text-shadow: none;
  }
  25% {
    text-shadow: 
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #00ffff,
      0 0 80px #00ffff,
      0 0 90px #00ffff,
      0 0 100px #00ffff,
      0 0 150px #00ffff;
  }
  100% {
    text-shadow: 
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #ff00ff,
      0 0 80px #ff00ff,
      0 0 90px #ff00ff,
      0 0 100px #ff00ff,
      0 0 150px #ff00ff;
  }
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border: 2px solid #ff00ff;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 25%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 75%
    );
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-2px);
    animation: ${textFlicker} 1.5s infinite alternate;

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const NeonPulseButton: React.FC<NeonPulseButtonProps> = ({
  children = 'Neon Pulse',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default NeonPulseButton; 