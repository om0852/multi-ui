'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LightningButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const lightning = keyframes`
  0%, 5%, 95%, 100% {
    filter: brightness(1);
    text-shadow: none;
  }
  10%, 90% {
    filter: brightness(1.1);
    text-shadow: 0 0 10px #FFD700;
  }
  15%, 85% {
    filter: brightness(1);
    text-shadow: none;
  }
  20%, 80% {
    filter: brightness(1.2);
    text-shadow: 0 0 20px #FFD700;
  }
  25%, 75% {
    filter: brightness(1.1);
    text-shadow: 0 0 10px #FFD700;
  }
  30% {
    filter: brightness(1.3);
    text-shadow: 0 0 30px #FFD700;
  }
`;

const spark = keyframes`
  0% {
    transform: rotate(0deg) translateY(-50%);
  }
  100% {
    transform: rotate(360deg) translateY(-50%);
  }
`;

const Button = styled.button`
  background: #FFB700;
  color: #000;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      #FFD700,
      transparent
    );
    transform-origin: center right;
    animation: ${spark} 2s linear infinite;
    opacity: 0;
  }

  &::before {
    left: -100%;
  }

  &::after {
    right: -100%;
    animation-delay: 1s;
  }

  &:hover {
    animation: ${lightning} 2s linear infinite;
    background: #FFC800;
    box-shadow: 
      0 0 10px #FFD700,
      0 0 20px #FFD700,
      0 0 30px #FFD700;

    &::before,
    &::after {
      opacity: 1;
    }
  }
`;

const LightningButton: React.FC<LightningButtonProps> = ({
  children = 'Lightning',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default LightningButton; 