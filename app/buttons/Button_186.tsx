'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface StellarWindButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const windFlow = keyframes`
  0% {
    transform: translateX(-100%) translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%) translateY(${() => (Math.random() - 0.5) * 50}px);
    opacity: 0;
  }
`;

const particlePulse = keyframes`
  0%, 100% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.5);
    filter: brightness(1.2);
  }
`;

const generateWindParticleStyles = (index: number) => {
  const delay = index * 0.1;
  const duration = 2 + Math.random();
  const size = 2 + Math.random() * 2;
  const yOffset = (index % 5) * 20;
  
  return css`
    width: ${size}px;
    height: ${size}px;
    top: calc(${yOffset}% + ${Math.random() * 10}px);
    animation: 
      ${windFlow} ${duration}s ease-out infinite,
      ${particlePulse} 1s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
  overflow: hidden;
`;

const WindParticle = styled.div`
  position: absolute;
  background: #87CEEB;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  filter: blur(1px);
  box-shadow: 0 0 5px #87CEEB;

  ${[...Array(20)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateWindParticleStyles(i)}
    }
  `)}
`;

const WindStream = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(135, 206, 235, 0.1),
    transparent
  );
  pointer-events: none;
  opacity: 0;
  transform: skewX(-20deg);
  filter: blur(10px);
  animation: ${windFlow} 3s linear infinite;
`;

const AmbientGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle,
    rgba(135, 206, 235, 0.2),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #1E90FF, #4169E1);
  color: #E0FFFF;
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
  text-shadow: 0 0 10px rgba(224, 255, 255, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(135, 206, 235, 0.3),
      0 0 30px rgba(135, 206, 235, 0.2);
    color: white;

    & ~ ${WindParticle},
    & ~ ${WindStream},
    & ~ ${AmbientGlow} {
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
      rgba(224, 255, 255, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const StellarWindButton: React.FC<StellarWindButtonProps> = ({
  children = 'Stellar Wind',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <AmbientGlow />
      <WindStream />
      {[...Array(20)].map((_, i) => (
        <WindParticle key={i} />
      ))}
    </ButtonContainer>
  );
};

export default StellarWindButton; 