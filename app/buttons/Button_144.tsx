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
    text-shadow: 2px 0 #ff0080, -2px 0 #00ff00;
  }
  40% {
    transform: translate(-2px, -2px);
    text-shadow: 4px 0 #ff0080, -4px 0 #00ff00;
  }
  60% {
    transform: translate(2px, 2px);
    text-shadow: 2px 0 #ff0080, -2px 0 #00ff00;
  }
  80% {
    transform: translate(2px, -2px);
    text-shadow: none;
  }
  100% {
    transform: translate(0);
    text-shadow: none;
  }
`;

const Button = styled.button`
  background: #1a1a1a;
  color: #fff;
  border: 2px solid #ff0080;
  padding: 15px 30px;
  font-size: 18px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: #2a2a2a;
    animation: ${glitch} 0.5s infinite;
    box-shadow: 0 0 10px rgba(255, 0, 128, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    opacity: 0.5;
    mix-blend-mode: difference;
  }
`;

const GlitchButton: React.FC<GlitchButtonProps> = ({
  children = 'Glitch',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default GlitchButton; 