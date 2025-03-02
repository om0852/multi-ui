'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface PulsarButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const pulsarBeam = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.2;
    filter: blur(5px) brightness(0.8);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 1;
    filter: blur(8px) brightness(1.5);
  }
  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.2;
    filter: blur(5px) brightness(0.8);
  }
`;

const rotateBeams = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const generateBeamStyles = (index: number) => {
  const rotation = index * (360 / 6);
  const delay = index * 0.2;
  
  return css`
    transform: rotate(${rotation}deg);
    animation: ${rotateBeams} 10s linear infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const PulsarCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  background: radial-gradient(
    circle,
    #00FF00,
    #32CD32,
    transparent
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  animation: ${pulsarBeam} 1.5s ease-in-out infinite;
`;

const BeamContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
`;

const Beam = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(50, 205, 50, 0.8),
    transparent
  );
  transform-origin: left;
  pointer-events: none;
  filter: blur(2px);

  ${[...Array(6)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateBeamStyles(i)}
    }
  `)}
`;

const EnergyField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle,
    rgba(50, 205, 50, 0.2),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  filter: blur(10px);
`;

const Button = styled.button`
  background: linear-gradient(145deg, #006400, #228B22);
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
      0 5px 15px rgba(50, 205, 50, 0.3),
      0 0 30px rgba(50, 205, 50, 0.2);
    color: white;

    & ~ ${PulsarCore},
    & ~ ${BeamContainer},
    & ~ ${EnergyField} {
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

const PulsarButton: React.FC<PulsarButtonProps> = ({
  children = 'Pulsar',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <EnergyField />
      <PulsarCore />
      <BeamContainer>
        {[...Array(6)].map((_, i) => (
          <Beam key={i} />
        ))}
      </BeamContainer>
    </ButtonContainer>
  );
};

export default PulsarButton; 