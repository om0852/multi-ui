'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface NeutronStarButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const corePulse = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    filter: brightness(1) blur(5px);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    filter: brightness(1.5) blur(8px);
  }
`;

const magneticSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const particleFlow = keyframes`
  0% {
    transform: translateX(0) translateY(0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: 
      translateX(${() => (Math.random() - 0.5) * 100}px)
      translateY(${() => (Math.random() - 0.5) * 100}px)
      scale(0);
    opacity: 0;
  }
`;

const generateFieldLineStyles = (index: number) => {
  const rotation = index * (360 / 12);
  const delay = index * 0.2;
  
  return css`
    transform: rotate(${rotation}deg);
    animation: ${magneticSpin} 10s linear infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const NeutronCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  background: radial-gradient(
    circle,
    #FFFFFF,
    #00BFFF,
    transparent
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  animation: ${corePulse} 1s ease-in-out infinite;
`;

const MagneticField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(0, 191, 255, 0.8),
    transparent
  );
  transform-origin: left;
  pointer-events: none;
  opacity: 0;
  filter: blur(1px);

  ${[...Array(12)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateFieldLineStyles(i)}
    }
  `)}
`;

const EnergyParticle = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background: #00BFFF;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  box-shadow: 0 0 5px #00BFFF;

  ${[...Array(20)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      top: ${50 + (Math.random() - 0.5) * 50}%;
      left: ${50 + (Math.random() - 0.5) * 50}%;
      animation: ${particleFlow} ${2 + Math.random()}s ease-out infinite;
      animation-delay: ${i * 0.1}s;
    }
  `)}
`;

const IntensityField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(0, 191, 255, 0.2),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  filter: blur(15px);
`;

const Button = styled.button`
  background: linear-gradient(145deg, #00688B, #104E8B);
  color: #87CEFA;
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
  text-shadow: 0 0 10px rgba(135, 206, 250, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(0, 191, 255, 0.3),
      0 0 30px rgba(0, 191, 255, 0.2);
    color: white;

    & ~ ${NeutronCore},
    & ~ ${MagneticField},
    & ~ ${EnergyParticle},
    & ~ ${IntensityField} {
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
      rgba(135, 206, 250, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const NeutronStarButton: React.FC<NeutronStarButtonProps> = ({
  children = 'Neutron Star',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <IntensityField />
      <NeutronCore />
      {[...Array(12)].map((_, i) => (
        <MagneticField key={`field-${i}`} />
      ))}
      {[...Array(20)].map((_, i) => (
        <EnergyParticle key={`particle-${i}`} />
      ))}
    </ButtonContainer>
  );
};

export default NeutronStarButton; 