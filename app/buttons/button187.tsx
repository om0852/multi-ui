'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface EventHorizonButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const horizonPulse = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    filter: blur(5px);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    filter: blur(8px);
  }
`;

const lightBend = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg) scale(0.8);
    filter: hue-rotate(360deg);
  }
`;

const generateLightRayStyles = (index: number) => {
  const rotation = index * (360 / 8);
  const delay = index * 0.5;
  const duration = 4 + Math.random() * 2;
  
  return css`
    transform-origin: center;
    transform: rotate(${rotation}deg);
    animation: ${lightBend} ${duration}s linear infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const EventHorizonRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.8),
    transparent 70%
  );
  animation: ${horizonPulse} 3s ease-in-out infinite;
`;

const LightRay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  transform-origin: left;
  pointer-events: none;
  opacity: 0;
  filter: blur(1px);

  ${[...Array(8)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateLightRayStyles(i)}
    }
  `)}
`;

const SpaceDistortion = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    transparent 30%,
    rgba(0, 0, 0, 0.3) 60%,
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: multiply;
  filter: blur(10px);
`;

const Button = styled.button`
  background: linear-gradient(145deg, #000000, #1a1a1a);
  color: #FFFFFF;
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
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(0, 0, 0, 0.2);
    color: #00FFFF;

    & ~ ${EventHorizonRing},
    & ~ ${LightRay},
    & ~ ${SpaceDistortion} {
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
      rgba(255, 255, 255, 0.1),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const EventHorizonButton: React.FC<EventHorizonButtonProps> = ({
  children = 'Event Horizon',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <SpaceDistortion />
      <EventHorizonRing />
      {[...Array(8)].map((_, i) => (
        <LightRay key={i} />
      ))}
    </ButtonContainer>
  );
};

export default EventHorizonButton; 