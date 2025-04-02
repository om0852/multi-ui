'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface GlitchButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const glitch = keyframes`
  0% {
    transform: translate(0);
    text-shadow: none;
  }
  20% {
    transform: translate(-2px, 2px);
    text-shadow: 2px 0 #ff0000, -2px 0 #00ff00;
  }
  40% {
    transform: translate(2px, -2px);
    text-shadow: -2px 0 #0000ff, 2px 0 #ff0000;
  }
  60% {
    transform: translate(-2px, -2px);
    text-shadow: 2px 0 #00ff00, -2px 0 #0000ff;
  }
  80% {
    transform: translate(2px, 2px);
    text-shadow: -2px 0 #ff0000, 2px 0 #00ff00;
  }
  100% {
    transform: translate(0);
    text-shadow: none;
  }
`;

const noise = keyframes`
  0%, 100% {
    clip-path: inset(50% 0 50% 0);
  }
  10% {
    clip-path: inset(10% 0 85% 0);
  }
  20% {
    clip-path: inset(75% 0 20% 0);
  }
  30% {
    clip-path: inset(25% 0 60% 0);
  }
  40% {
    clip-path: inset(50% 0 40% 0);
  }
  50% {
    clip-path: inset(15% 0 70% 0);
  }
  60% {
    clip-path: inset(65% 0 30% 0);
  }
  70% {
    clip-path: inset(35% 0 85% 0);
  }
  80% {
    clip-path: inset(80% 0 15% 0);
  }
  90% {
    clip-path: inset(45% 0 55% 0);
  }
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  border: 2px solid #fff;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::before {
    color: #ff0000;
    z-index: -1;
  }

  &::after {
    color: #00ff00;
    z-index: -2;
  }

  &:hover {
    animation: ${glitch} 0.3s infinite;
    background: #111;
    border-color: #fff;
    box-shadow: 
      0 0 5px rgba(255, 255, 255, 0.5),
      inset 0 0 5px rgba(255, 255, 255, 0.5);

    &::before,
    &::after {
      opacity: 1;
      animation: ${noise} 2s infinite linear alternate-reverse;
    }

    &::before {
      left: 2px;
    }

    &::after {
      left: -2px;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const GlitchButton: React.FC<GlitchButtonProps> = ({
  children = 'Glitch',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick} data-text={children}>
      {children}
    </Button>
  );
};

export default GlitchButton; 