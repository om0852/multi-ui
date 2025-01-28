'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LiquidFillButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const liquidFill = keyframes`
  0% {
    transform: translateY(150%);
  }
  100% {
    transform: translateY(-10%);
  }
`;

const liquidWave = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Button = styled.button`
  background: transparent;
  color: #00bcd4;
  border: 2px solid #00bcd4;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  transition: color 0.3s ease;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00bcd4;
    transform: translateY(150%);
    transition: transform 0.5s ease;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-100%);
    z-index: -1;
  }

  &:hover {
    color: white;

    &::before {
      animation: ${liquidFill} 0.5s forwards;
    }

    &::after {
      animation: ${liquidWave} 0.8s infinite linear;
    }
  }
`;

const LiquidFillButton: React.FC<LiquidFillButtonProps> = ({
  children = 'Liquid',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default LiquidFillButton; 