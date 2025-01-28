'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface GalaxySpiralButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const galaxyRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const starPulse = keyframes`
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
`;

const generateSpiralStyles = (index: number) => {
  const rotation = index * (360 / 3); // 3 spiral arms
  const delay = index * 0.2;
  
  return css`
    transform: rotate(${rotation}deg);
    animation: ${galaxyRotate} 20s linear infinite;
    animation-delay: ${delay}s;
  `;
};

const generateStarStyles = (index: number) => {
  const angle = (index * 10) % 360;
  const distance = 10 + (index % 5) * 10;
  const size = 1 + Math.random() * 2;
  const delay = index * 0.1;
  
  return css`
    width: ${size}px;
    height: ${size}px;
    transform: rotate(${angle}deg) translateX(${distance}px);
    animation: ${starPulse} 2s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const SpiralArm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(147, 112, 219, 0.2),
    rgba(138, 43, 226, 0.4),
    transparent
  );
  transform-origin: center;
  pointer-events: none;
  opacity: 0;
  filter: blur(4px);
  mix-blend-mode: screen;

  ${[...Array(3)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateSpiralStyles(i)}
    }
  `)}
`;

const Star = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  transform-origin: center;
  pointer-events: none;
  opacity: 0;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);

  ${[...Array(30)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateStarStyles(i)}
    }
  `)}
`;

const GalaxyCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(147, 112, 219, 0.8),
    rgba(138, 43, 226, 0.4),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  transition: all 0.3s ease;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  color: #B19CD9;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: visible;
  z-index: 1;
  text-shadow: 0 0 10px rgba(177, 156, 217, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(147, 112, 219, 0.3),
      0 0 30px rgba(138, 43, 226, 0.2);
    color: white;

    & ~ ${SpiralArm} {
      opacity: 1;
    }

    & ~ ${Star} {
      opacity: 1;
    }

    & ~ ${GalaxyCore} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom right,
      rgba(147, 112, 219, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const GalaxySpiralButton: React.FC<GalaxySpiralButtonProps> = ({
  children = 'Galaxy',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <GalaxyCore />
      {[...Array(3)].map((_, i) => (
        <SpiralArm key={`arm-${i}`} />
      ))}
      {[...Array(30)].map((_, i) => (
        <Star key={`star-${i}`} />
      ))}
    </ButtonContainer>
  );
};

export default GalaxySpiralButton; 