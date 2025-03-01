'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface GammaRayButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const radiationPulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.3;
    filter: brightness(0.8) blur(5px);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 1;
    filter: brightness(1.5) blur(8px);
  }
  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.3;
    filter: brightness(0.8) blur(5px);
  }
`;

const gammaFlash = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const generateRadiationStyles = (index: number) => {
  const angle = index * (360 / 15);
  const delay = index * 0.1;
  const duration = 1 + Math.random();
  
  return css`
    transform: rotate(${angle}deg);
    animation: ${gammaFlash} ${duration}s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const RadiationCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  background: radial-gradient(
    circle,
    #7FFF00,
    #32CD32,
    transparent
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  animation: ${radiationPulse} 1.5s ease-in-out infinite;
`;

const GammaRay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(127, 255, 0, 0.8),
    transparent
  );
  transform-origin: left;
  pointer-events: none;
  opacity: 0;
  filter: blur(1px);

  ${[...Array(15)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateRadiationStyles(i)}
    }
  `)}
`;

const RadiationField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(127, 255, 0, 0.2),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  filter: blur(15px);
`;

const IonizationParticle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #7FFF00;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  box-shadow: 0 0 5px #7FFF00;

  ${[...Array(20)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      top: ${50 + (Math.random() - 0.5) * 100}%;
      left: ${50 + (Math.random() - 0.5) * 100}%;
      animation: ${gammaFlash} ${0.5 + Math.random()}s ease-out infinite;
      animation-delay: ${i * 0.1}s;
    }
  `)}
`;

const Button = styled.button`
  background: linear-gradient(145deg, #228B22, #006400);
  color: #98FB98;
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
  text-shadow: 0 0 10px rgba(152, 251, 152, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(127, 255, 0, 0.3),
      0 0 30px rgba(127, 255, 0, 0.2);
    color: white;

    & ~ ${RadiationCore},
    & ~ ${GammaRay},
    & ~ ${RadiationField},
    & ~ ${IonizationParticle} {
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
      rgba(152, 251, 152, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const GammaRayButton: React.FC<GammaRayButtonProps> = ({
  children = 'Gamma Ray',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <RadiationField />
      <RadiationCore />
      {[...Array(15)].map((_, i) => (
        <GammaRay key={`ray-${i}`} />
      ))}
      {[...Array(20)].map((_, i) => (
        <IonizationParticle key={`particle-${i}`} />
      ))}
    </ButtonContainer>
  );
};

export default GammaRayButton; 