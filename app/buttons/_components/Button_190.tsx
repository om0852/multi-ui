'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface QuasarButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const jetPulse = keyframes`
  0% {
    transform: scaleY(0.5);
    opacity: 0.3;
    filter: blur(5px);
  }
  50% {
    transform: scaleY(1.2);
    opacity: 1;
    filter: blur(8px);
  }
  100% {
    transform: scaleY(0.5);
    opacity: 0.3;
    filter: blur(5px);
  }
`;

const accretionSpin = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const energyFlare = keyframes`
  0%, 100% {
    transform: scale(1);
    filter: hue-rotate(0deg) brightness(1);
  }
  50% {
    transform: scale(1.5);
    filter: hue-rotate(180deg) brightness(1.5);
  }
`;

const generateJetParticleStyles = (index: number) => {
  const delay = index * 0.1;
  const duration = 1 + Math.random();
  const offset = (Math.random() - 0.5) * 20;
  
  return css`
    left: calc(50% + ${offset}px);
    animation: ${jetPulse} ${duration}s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const QuasarCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  background: radial-gradient(
    circle,
    #FF1493,
    #FF00FF,
    transparent
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  animation: ${energyFlare} 2s ease-in-out infinite;
`;

const AccretionDisk = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 20px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 20, 147, 0.5),
    rgba(255, 0, 255, 0.5),
    transparent
  );
  transform-origin: center;
  pointer-events: none;
  opacity: 0;
  filter: blur(2px);
  animation: ${accretionSpin} 5s linear infinite;
`;

const EnergyJet = styled.div`
  position: absolute;
  width: 10px;
  height: 100px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 20, 147, 0.8),
    rgba(255, 0, 255, 0.8),
    transparent
  );
  pointer-events: none;
  opacity: 0;
  filter: blur(3px);

  &.top {
    bottom: 50%;
    transform-origin: bottom;
  }

  &.bottom {
    top: 50%;
    transform-origin: top;
  }

  ${[...Array(10)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateJetParticleStyles(i)}
    }
  `)}
`;

const QuasarGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 20, 147, 0.2),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  filter: blur(20px);
`;

const Button = styled.button`
  background: linear-gradient(145deg, #8B0A50, #8B008B);
  color: #FFB6C1;
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
  text-shadow: 0 0 10px rgba(255, 182, 193, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(255, 20, 147, 0.3),
      0 0 30px rgba(255, 0, 255, 0.2);
    color: white;

    & ~ ${QuasarCore},
    & ~ ${AccretionDisk},
    & ~ ${EnergyJet},
    & ~ ${QuasarGlow} {
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
      rgba(255, 182, 193, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const QuasarButton: React.FC<QuasarButtonProps> = ({
  children = 'Quasar',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <QuasarGlow />
      <QuasarCore />
      <AccretionDisk />
      {[...Array(10)].map((_, i) => (
        <EnergyJet key={`jet-top-${i}`} className="top" />
      ))}
      {[...Array(10)].map((_, i) => (
        <EnergyJet key={`jet-bottom-${i}`} className="bottom" />
      ))}
    </ButtonContainer>
  );
};

export default QuasarButton; 