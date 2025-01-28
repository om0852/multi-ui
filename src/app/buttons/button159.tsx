'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface CrystalButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const prismShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const shine = keyframes`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(200%) rotate(45deg);
  }
`;

const Button = styled.button`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #ff0000,
      #ff7f00,
      #ffff00,
      #00ff00,
      #0000ff,
      #4b0082,
      #8f00ff
    );
    background-size: 200% 100%;
    mix-blend-mode: color;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transform: translateX(-100%) rotate(45deg);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(255, 255, 255, 0.2),
      0 0 30px rgba(255, 255, 255, 0.1);

    &::before {
      opacity: 0.3;
      animation: ${prismShift} 3s linear infinite;
    }

    &::after {
      animation: ${shine} 1.5s infinite;
    }
  }
`;

const CrystalButton: React.FC<CrystalButtonProps> = ({
  children = 'Crystal',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CrystalButton; 