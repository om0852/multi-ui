'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface MatrixButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const matrixRain = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px #00ff00,
                0 0 10px #00ff00,
                0 0 15px #00ff00;
  }
  50% {
    box-shadow: 0 0 10px #00ff00,
                0 0 20px #00ff00,
                0 0 30px #00ff00;
  }
  100% {
    box-shadow: 0 0 5px #00ff00,
                0 0 10px #00ff00,
                0 0 15px #00ff00;
  }
`;

const Button = styled.button`
  background: #000;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 15px 30px;
  font-size: 18px;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '01101001 10100111 11001101';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300%;
    background: linear-gradient(180deg,
      transparent 0%,
      rgba(0, 255, 0, 0.2) 50%,
      transparent 100%
    );
    background-size: 100% 300%;
    animation: ${matrixRain} 2s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: #fff;
    animation: ${glowPulse} 1.5s infinite;
    text-shadow: 0 0 5px #00ff00;

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MatrixButton: React.FC<MatrixButtonProps> = ({
  children = 'Matrix',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MatrixButton; 