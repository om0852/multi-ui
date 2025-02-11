'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface DimensionalPortalButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const portalSpin = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    filter: hue-rotate(0deg);
  }
  50% {
    transform: rotate(180deg) scale(1.5);
    filter: hue-rotate(180deg);
  }
  100% {
    transform: rotate(360deg) scale(1);
    filter: hue-rotate(360deg);
  }
`;

const energyPulse = keyframes`
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const generatePortalStyles = (index: number) => {
  const rotation = index * (360 / 12);
  const scale = 1 - (index * 0.05);
  const delay = index * 0.1;
  const hue = index * 30;
  
  return css`
    transform: rotate(${rotation}deg) scale(${scale});
    filter: hue-rotate(${hue}deg);
    animation: ${portalSpin} 4s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
  perspective: 1000px;
`;

const PortalRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  border: 4px solid transparent;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    #FF1493,
    #4B0082,
    #0000FF,
    #00FF00,
    #FFFF00,
    #FF0000
  );
  background-size: 600% 600%;
  transform-origin: center;
  transform-style: preserve-3d;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${[...Array(12)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generatePortalStyles(i)}
    }
  `)}
`;

const EnergyField = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(
    circle,
    rgba(255, 20, 147, 0.2),
    transparent 70%
  );
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #FF1493, #4B0082);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  z-index: 1;

  &:hover {
    transform: translateY(-2px) translateZ(50px);
    box-shadow: 
      0 5px 15px rgba(255, 20, 147, 0.4),
      0 0 30px rgba(75, 0, 130, 0.2);

    & ~ ${PortalRing} {
      opacity: 1;
    }

    & ~ ${EnergyField} {
      opacity: 1;
      animation: ${energyPulse} 2s ease-in-out infinite;
    }
  }

  &:active {
    transform: translateY(1px) translateZ(25px);
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const DimensionalPortalButton: React.FC<DimensionalPortalButtonProps> = ({
  children = 'Portal',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <EnergyField />
      {[...Array(12)].map((_, i) => (
        <PortalRing key={i} />
      ))}
    </ButtonContainer>
  );
};

export default DimensionalPortalButton; 