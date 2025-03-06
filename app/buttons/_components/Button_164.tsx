'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface PlasmaOrbButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const generatePlasmaStyles = (index: number) => {
  const rotation = index * (360 / 8);
  const delay = index * 0.1;
  
  return css`
    transform: rotate(${rotation}deg) translateX(20px);
    animation: ${pulse} 2s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const PlasmaOrb = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #4A90E2;
  border-radius: 50%;
  filter: blur(2px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${[...Array(8)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generatePlasmaStyles(i)}
    }
  `)}
`;

const OrbContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform-origin: center;
  animation: ${rotate} 4s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #1E3A8A, #2563EB);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: visible;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(37, 99, 235, 0.4),
      0 0 20px rgba(37, 99, 235, 0.2);

    & ~ ${OrbContainer} {
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

const PlasmaOrbButton: React.FC<PlasmaOrbButtonProps> = ({
  children = 'Plasma',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <OrbContainer>
        {[...Array(8)].map((_, i) => (
          <PlasmaOrb key={i} />
        ))}
      </OrbContainer>
    </ButtonContainer>
  );
};

export default PlasmaOrbButton; 