'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface SolarFlareButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const flareAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5) rotate(360deg);
    opacity: 0;
  }
`;

const coronaGlow = keyframes`
  0%, 100% {
    filter: brightness(1) blur(5px);
  }
  50% {
    filter: brightness(1.5) blur(7px);
  }
`;

const generateFlareStyles = (index: number) => {
  const delay = index * 0.2;
  const rotation = index * 45;
  
  return css`
    transform-origin: center;
    animation: ${flareAnimation} 3s ease-out infinite;
    animation-delay: ${delay}s;
    transform: rotate(${rotation}deg);
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const SolarFlare = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 20px;
  background: linear-gradient(90deg, transparent, #FFA500, #FF4500, transparent);
  transform-origin: center;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  filter: blur(2px);

  ${[...Array(8)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateFlareStyles(i)}
    }
  `)}
`;

const Corona = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, #FFD700, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  animation: ${coronaGlow} 2s ease-in-out infinite;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #FF8C00, #FF4500);
  color: white;
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
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(255, 69, 0, 0.4),
      0 0 30px rgba(255, 140, 0, 0.2);

    & ~ ${Corona} {
      opacity: 0.8;
    }

    & ~ ${SolarFlare} {
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
      rgba(255, 255, 255, 0.4),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const SolarFlareButton: React.FC<SolarFlareButtonProps> = ({
  children = 'Solar Flare',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <Corona />
      {[...Array(8)].map((_, i) => (
        <SolarFlare key={i} />
      ))}
    </ButtonContainer>
  );
};

export default SolarFlareButton; 