'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface CosmicStringsButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const stringVibrate = keyframes`
  0% {
    transform: scaleY(1) translateY(-50%);
    filter: brightness(1);
  }
  50% {
    transform: scaleY(1.5) translateY(-50%);
    filter: brightness(1.2);
  }
  100% {
    transform: scaleY(1) translateY(-50%);
    filter: brightness(1);
  }
`;

const energyFlow = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const generateStringStyles = (index: number) => {
  const position = index * (100 / 12);
  const delay = index * 0.1;
  const duration = 1 + Math.random();
  const color = `hsl(${index * 30}, 100%, 70%)`;
  
  return css`
    left: ${position}%;
    background: ${color};
    animation: ${stringVibrate} ${duration}s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
  overflow: hidden;
`;

const CosmicString = styled.div`
  position: absolute;
  top: 50%;
  width: 2px;
  height: 150%;
  transform-origin: center;
  pointer-events: none;
  opacity: 0;
  filter: blur(1px);
  box-shadow: 0 0 8px currentColor;

  ${[...Array(12)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateStringStyles(i)}
    }
  `)}
`;

const EnergyParticle = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  pointer-events: none;
  opacity: 0;
  filter: blur(2px);

  ${[...Array(5)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      top: ${20 + i * 20}%;
      animation: ${energyFlow} ${2 + i * 0.5}s linear infinite;
      animation-delay: ${i * 0.2}s;
    }
  `)}
`;

const StringField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.1),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  filter: blur(20px);
`;

const Button = styled.button`
  background: linear-gradient(145deg, #4B0082, #800080);
  color: #DDA0DD;
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
  text-shadow: 0 0 10px rgba(221, 160, 221, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(221, 160, 221, 0.3),
      0 0 30px rgba(221, 160, 221, 0.2);
    color: white;

    & ~ ${CosmicString},
    & ~ ${EnergyParticle},
    & ~ ${StringField} {
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
      rgba(221, 160, 221, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CosmicStringsButton: React.FC<CosmicStringsButtonProps> = ({
  children = 'Cosmic Strings',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <StringField />
      {[...Array(12)].map((_, i) => (
        <CosmicString key={`string-${i}`} />
      ))}
      {[...Array(5)].map((_, i) => (
        <EnergyParticle key={`particle-${i}`} />
      ))}
    </ButtonContainer>
  );
};

export default CosmicStringsButton; 