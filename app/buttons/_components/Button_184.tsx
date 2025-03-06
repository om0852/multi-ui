'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface QuantumEntanglementButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const particleOrbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(20px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(20px) rotate(-360deg);
  }
`;

const quantumFlicker = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const connectionPulse = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: scaleX(1);
  }
  50% {
    opacity: 0.8;
    transform: scaleX(1.2);
  }
`;

const generateParticleStyles = (index: number) => {
  const delay = index * 0.2;
  const duration = 3 + Math.random();
  const size = 4 + Math.random() * 2;
  
  return css`
    width: ${size}px;
    height: ${size}px;
    animation: 
      ${particleOrbit} ${duration}s linear infinite,
      ${quantumFlicker} 2s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const QuantumParticle = styled.div`
  position: absolute;
  background: #00FFFF;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  box-shadow: 0 0 10px #00FFFF;
  transform-origin: center;

  ${[...Array(8)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateParticleStyles(i)}
    }
  `)}
`;

const QuantumConnection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00FFFF, transparent);
  transform-origin: center;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  filter: blur(1px);
  animation: ${connectionPulse} 2s ease-in-out infinite;

  ${[...Array(4)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      transform: translate(-50%, -50%) rotate(${i * 45}deg);
      animation-delay: ${i * 0.2}s;
    }
  `)}
`;

const QuantumField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle,
    rgba(0, 255, 255, 0.2),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  filter: blur(10px);
`;

const Button = styled.button`
  background: linear-gradient(145deg, #001e3c, #000d1a);
  color: #00FFFF;
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
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(0, 255, 255, 0.3),
      0 0 30px rgba(0, 255, 255, 0.2);
    color: white;

    & ~ ${QuantumParticle},
    & ~ ${QuantumConnection},
    & ~ ${QuantumField} {
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
      rgba(0, 255, 255, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const QuantumEntanglementButton: React.FC<QuantumEntanglementButtonProps> = ({
  children = 'Quantum',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <QuantumField />
      {[...Array(4)].map((_, i) => (
        <QuantumConnection key={`connection-${i}`} />
      ))}
      {[...Array(8)].map((_, i) => (
        <QuantumParticle key={`particle-${i}`} />
      ))}
    </ButtonContainer>
  );
};

export default QuantumEntanglementButton; 