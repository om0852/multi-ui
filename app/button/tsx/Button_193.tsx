'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface DarkEnergyButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const spaceExpand = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.2;
    filter: blur(5px);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0.8;
    filter: blur(10px);
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
    filter: blur(15px);
  }
`;

const energyRipple = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
`;

const generateRippleStyles = (index: number) => {
  const delay = index * 0.5;
  const duration = 3 + Math.random();
  
  return css`
    animation: ${energyRipple} ${duration}s ease-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const DarkEnergyField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(75, 0, 130, 0.3),
    rgba(128, 0, 128, 0.2),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: multiply;
  animation: ${spaceExpand} 4s ease-in-out infinite;
`;

const EnergyRipple = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(147, 112, 219, 0.2);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;

  ${[...Array(5)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateRippleStyles(i)}
    }
  `)}
`;

const SpaceDistortion = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle,
    transparent,
    rgba(75, 0, 130, 0.1) 50%,
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  mix-blend-mode: multiply;
`;

const VoidParticle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(147, 112, 219, 0.6);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  filter: blur(2px);

  ${[...Array(15)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      top: ${50 + (Math.random() - 0.5) * 100}%;
      left: ${50 + (Math.random() - 0.5) * 100}%;
      animation: ${energyRipple} ${2 + Math.random()}s ease-out infinite;
      animation-delay: ${i * 0.2}s;
    }
  `)}
`;

const Button = styled.button`
  background: linear-gradient(145deg, #2E0854, #4B0082);
  color: #9370DB;
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
  text-shadow: 0 0 10px rgba(147, 112, 219, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(75, 0, 130, 0.3),
      0 0 30px rgba(75, 0, 130, 0.2);
    color: white;

    & ~ ${DarkEnergyField},
    & ~ ${EnergyRipple},
    & ~ ${SpaceDistortion},
    & ~ ${VoidParticle} {
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

const DarkEnergyButton: React.FC<DarkEnergyButtonProps> = ({
  children = 'Dark Energy',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <SpaceDistortion />
      <DarkEnergyField />
      {[...Array(5)].map((_, i) => (
        <EnergyRipple key={`ripple-${i}`} />
      ))}
      {[...Array(15)].map((_, i) => (
        <VoidParticle key={`particle-${i}`} />
      ))}
    </ButtonContainer>
  );
};

export default DarkEnergyButton; 