'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface SupernovaButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const explosion = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
    filter: brightness(2);
  }
  50% {
    transform: scale(2);
    opacity: 0.8;
    filter: brightness(3);
  }
  100% {
    transform: scale(3);
    opacity: 0;
    filter: brightness(1);
  }
`;

const shockwave = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  20% {
    opacity: 0.6;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const generateDebrisStyles = (index: number) => {
  const angle = (index * 24) % 360;
  const delay = index * 0.1;
  const distance = 50 + Math.random() * 50;
  
  return css`
    transform-origin: center;
    animation: ${keyframes`
      0% {
        transform: rotate(${angle}deg) translateX(0) rotate(-${angle}deg);
        opacity: 1;
      }
      100% {
        transform: rotate(${angle}deg) translateX(${distance}px) rotate(-${angle}deg);
        opacity: 0;
      }
    `} 1s ease-out forwards;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const Debris = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #FFD700;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;

  ${[...Array(15)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateDebrisStyles(i)}
    }
  `)}
`;

const ShockwaveRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid #FFD700;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  pointer-events: none;
  opacity: 0;
`;

const ExplosionCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    #FFD700,
    #FFA500,
    #FF4500,
    transparent 70%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #FFD700, #FFA500);
  color: black;
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(255, 215, 0, 0.4),
      0 0 30px rgba(255, 165, 0, 0.2);

    & ~ ${ShockwaveRing} {
      animation: ${shockwave} 1s ease-out infinite;
    }

    & ~ ${ExplosionCore} {
      animation: ${explosion} 2s ease-out infinite;
    }

    & ~ ${Debris} {
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

const SupernovaButton: React.FC<SupernovaButtonProps> = ({
  children = 'Supernova',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <ShockwaveRing />
      <ExplosionCore />
      {[...Array(15)].map((_, i) => (
        <Debris key={i} />
      ))}
    </ButtonContainer>
  );
};

export default SupernovaButton; 