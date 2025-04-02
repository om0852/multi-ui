'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LiquidMetalButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const flow = keyframes`
  0% {
    background-position: 0% 50%;
    filter: brightness(1);
  }
  50% {
    background-position: 100% 50%;
    filter: brightness(1.2);
  }
  100% {
    background-position: 0% 50%;
    filter: brightness(1);
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const Button = styled.button`
  background: linear-gradient(
    45deg,
    #303030,
    #808080,
    #a0a0a0,
    #808080,
    #303030
  );
  background-size: 200% 200%;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 
    0 2px 5px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }

  &:hover {
    background-size: 200% 200%;
    animation: ${flow} 3s ease infinite;
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);

    &::before {
      left: 100%;
    }

    &::after {
      animation: ${ripple} 1s ease-out;
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 
      0 2px 5px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
`;

const LiquidMetalButton: React.FC<LiquidMetalButtonProps> = ({
  children = 'Liquid Metal',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default LiquidMetalButton; 