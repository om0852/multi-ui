'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface QuantumTunnelButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const tunnel = keyframes`
  0% {
    transform: perspective(500px) translateZ(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: perspective(500px) translateZ(200px);
    opacity: 0;
  }
`;

const quantumFlicker = keyframes`
  0%, 100% {
    opacity: 1;
    filter: brightness(1) blur(0);
  }
  33% {
    opacity: 0.8;
    filter: brightness(1.2) blur(1px);
  }
  66% {
    opacity: 0.9;
    filter: brightness(0.8) blur(2px);
  }
`;

const generateTunnelStyles = (index: number) => {
  const delay = index * 0.2;
  const opacity = 1 - (index * 0.1);
  const scale = 1 + (index * 0.2);
  
  return css`
    transform: perspective(500px) translateZ(${index * 10}px) scale(${scale});
    opacity: ${opacity};
    animation: ${tunnel} 2s ease-in infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
  perspective: 1000px;
`;

const TunnelLayer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: linear-gradient(
    45deg,
    rgba(0, 255, 255, 0.2),
    rgba(255, 0, 255, 0.2)
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transform-origin: center;
  transform-style: preserve-3d;
  pointer-events: none;
  opacity: 0;

  ${[...Array(8)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateTunnelStyles(i)}
    }
  `)}
`;

const QuantumField = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(
    circle,
    rgba(0, 255, 255, 0.1),
    rgba(255, 0, 255, 0.1) 50%,
    transparent 70%
  );
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #2E3192, #1BFFFF);
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
    animation: ${quantumFlicker} 1s infinite;
    box-shadow: 
      0 5px 15px rgba(46, 49, 146, 0.4),
      0 0 30px rgba(27, 255, 255, 0.2);

    & ~ ${TunnelLayer} {
      opacity: 1;
    }

    & ~ ${QuantumField} {
      opacity: 1;
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

const QuantumTunnelButton: React.FC<QuantumTunnelButtonProps> = ({
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
      {[...Array(8)].map((_, i) => (
        <TunnelLayer key={i} />
      ))}
    </ButtonContainer>
  );
};

export default QuantumTunnelButton; 