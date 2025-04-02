'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface CosmicEnergyButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const energyFlow = keyframes`
  0% {
    transform: translateX(-100%) rotate(0deg);
    filter: hue-rotate(0deg);
  }
  50% {
    transform: translateX(0%) rotate(180deg);
    filter: hue-rotate(180deg);
  }
  100% {
    transform: translateX(100%) rotate(360deg);
    filter: hue-rotate(360deg);
  }
`;

const energyPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
`;

const generateEnergyStyles = (index: number) => {
  const delay = index * 0.2;
  const baseHue = index * 30;
  const duration = 3 + Math.random() * 2;
  
  return css`
    background: linear-gradient(
      90deg,
      transparent,
      hsla(${baseHue}, 100%, 70%, 0.5),
      hsla(${baseHue + 30}, 100%, 60%, 0.5),
      transparent
    );
    animation: ${energyFlow} ${duration}s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const EnergyStream = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 20px;
  pointer-events: none;
  opacity: 0;
  filter: blur(8px);
  mix-blend-mode: screen;

  ${[...Array(6)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      top: ${(i * 20)}%;
      ${generateEnergyStyles(i)}
    }
  `)}
`;

const EnergyCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.4),
    rgba(255, 140, 0, 0.3),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  animation: ${energyPulse} 2s ease-in-out infinite;
`;

const EnergyField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle,
    transparent 30%,
    rgba(255, 140, 0, 0.1) 60%,
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  filter: blur(4px);

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    right: -10%;
    bottom: -10%;
    border: 2px solid rgba(255, 215, 0, 0.2);
    border-radius: 50%;
    animation: ${energyPulse} 3s ease-in-out infinite;
  }
`;

const Button = styled.button`
  background: linear-gradient(145deg, #FF8C00, #DAA520);
  color: #FFD700;
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
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(255, 140, 0, 0.4),
      0 0 30px rgba(255, 215, 0, 0.2);
    color: white;

    & ~ ${EnergyStream},
    & ~ ${EnergyCore},
    & ~ ${EnergyField} {
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
      rgba(255, 215, 0, 0.4),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CosmicEnergyButton: React.FC<CosmicEnergyButtonProps> = ({
  children = 'Cosmic Energy',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <EnergyCore />
      <EnergyField />
      {[...Array(6)].map((_, i) => (
        <EnergyStream key={i} />
      ))}
    </ButtonContainer>
  );
};

export default CosmicEnergyButton; 