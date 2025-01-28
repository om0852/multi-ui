'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface HologramButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const flicker = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
`;

const scan = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const glitch = keyframes`
  0% {
    clip-path: inset(80% 0 0 0);
    transform: translate(-2px, 2px);
  }
  10% {
    clip-path: inset(10% 0 85% 0);
    transform: translate(2px, -2px);
  }
  20% {
    clip-path: inset(30% 0 55% 0);
    transform: translate(-1px, 1px);
  }
  30% {
    clip-path: inset(50% 0 30% 0);
    transform: translate(1px, -1px);
  }
  40% {
    clip-path: inset(20% 0 75% 0);
    transform: translate(2px, 2px);
  }
  50% {
    clip-path: inset(60% 0 20% 0);
    transform: translate(-2px, -2px);
  }
  60% {
    clip-path: inset(10% 0 85% 0);
    transform: translate(1px, -1px);
  }
  70% {
    clip-path: inset(40% 0 43% 0);
    transform: translate(-1px, 1px);
  }
  80% {
    clip-path: inset(80% 0 5% 0);
    transform: translate(2px, -2px);
  }
  90% {
    clip-path: inset(5% 0 85% 0);
    transform: translate(-2px, 2px);
  }
  100% {
    clip-path: inset(80% 0 0 0);
    transform: translate(2px, 2px);
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const HologramOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(32, 223, 255, 0.2),
    transparent
  );
  pointer-events: none;
  animation: ${scan} 2s linear infinite;
`;

const Button = styled.button`
  background: rgba(32, 223, 255, 0.1);
  color: #20DFFF;
  border: 2px solid #20DFFF;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  backdrop-filter: blur(5px);
  animation: ${flicker} 0.5s infinite;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    animation: ${glitch} 2s infinite;
  }

  &::before {
    text-shadow: 2px 0 #ff00ff;
    animation-delay: -1s;
  }

  &::after {
    text-shadow: -2px 0 #00ffff;
    animation-delay: -0.5s;
  }

  &:hover {
    background: rgba(32, 223, 255, 0.2);
    box-shadow: 
      0 0 10px #20DFFF,
      0 0 20px #20DFFF,
      0 0 30px #20DFFF;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const HologramButton: React.FC<HologramButtonProps> = ({
  children = 'Hologram',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick} data-text={children}>
        {children}
      </Button>
      <HologramOverlay />
    </ButtonContainer>
  );
};

export default HologramButton; 