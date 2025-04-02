'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface CosmicRaysButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const rayExpand = keyframes`
  0% {
    transform: scaleX(0) translateY(-50%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scaleX(1) translateY(-50%);
    opacity: 0;
  }
`;

const rayGlow = keyframes`
  0%, 100% {
    filter: brightness(1) blur(5px);
  }
  50% {
    filter: brightness(1.5) blur(8px);
  }
`;

const generateRayStyles = (index: number) => {
  const rotation = index * (360 / 12);
  const delay = index * 0.2;
  const duration = 2 + Math.random();
  const color = `hsl(${index * 30}, 100%, 70%)`;
  
  return css`
    transform-origin: left;
    transform: rotate(${rotation}deg);
    animation: ${rayExpand} ${duration}s ease-in-out infinite;
    animation-delay: ${delay}s;
    background: linear-gradient(90deg, ${color}, transparent);
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const CosmicRay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 3px;
  pointer-events: none;
  opacity: 0;
  filter: blur(2px);

  ${[...Array(12)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateRayStyles(i)}
    }
  `)}
`;

const RaySource = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.4),
    transparent
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  animation: ${rayGlow} 2s ease-in-out infinite;
`;

const RayField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #4B0082, #2E0854);
  color: #E6E6FA;
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
  text-shadow: 0 0 10px rgba(230, 230, 250, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(230, 230, 250, 0.3),
      0 0 30px rgba(230, 230, 250, 0.2);
    color: white;

    & ~ ${CosmicRay},
    & ~ ${RaySource},
    & ~ ${RayField} {
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
      rgba(230, 230, 250, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CosmicRaysButton: React.FC<CosmicRaysButtonProps> = ({
  children = 'Cosmic Rays',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <RayField />
      <RaySource />
      {[...Array(12)].map((_, i) => (
        <CosmicRay key={i} />
      ))}
    </ButtonContainer>
  );
};

export default CosmicRaysButton; 