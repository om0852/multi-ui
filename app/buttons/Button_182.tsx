'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface DarkMatterButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const distortionPulse = keyframes`
  0%, 100% {
    transform: scale(1) rotate(0deg);
    filter: blur(10px) brightness(0.3);
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    filter: blur(15px) brightness(0.4);
  }
`;

const particleFloat = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translate(
      ${() => (Math.random() - 0.5) * 100}px,
      ${() => (Math.random() - 0.5) * 100}px
    ) scale(0);
    opacity: 0;
  }
`;

const generateParticleStyles = (index: number) => {
  const delay = index * 0.2;
  const size = 2 + Math.random() * 4;
  const duration = 2 + Math.random() * 2;
  
  return css`
    width: ${size}px;
    height: ${size}px;
    animation: ${particleFloat} ${duration}s ease-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const DarkMatterField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(72, 61, 139, 0.3),
    rgba(47, 79, 79, 0.2),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: multiply;
  animation: ${distortionPulse} 4s ease-in-out infinite;
`;

const Particle = styled.div`
  position: absolute;
  background: rgba(138, 43, 226, 0.6);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  filter: blur(2px);
  transform-origin: center;

  ${[...Array(20)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateParticleStyles(i)}
    }
  `)}
`;

const DistortionRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  border: 2px solid rgba(72, 61, 139, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  filter: blur(4px);

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid rgba(47, 79, 79, 0.2);
    border-radius: 50%;
    animation: ${distortionPulse} 4s ease-in-out infinite;
    animation-delay: 0.5s;
  }
`;

const Button = styled.button`
  background: linear-gradient(145deg, #2F4F4F, #483D8B);
  color: #B8A2E3;
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
  text-shadow: 0 0 10px rgba(184, 162, 227, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(72, 61, 139, 0.3),
      0 0 30px rgba(47, 79, 79, 0.2);
    color: white;

    & ~ ${DarkMatterField},
    & ~ ${DistortionRing} {
      opacity: 1;
    }

    & ~ ${Particle} {
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
      rgba(184, 162, 227, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const DarkMatterButton: React.FC<DarkMatterButtonProps> = ({
  children = 'Dark Matter',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <DarkMatterField />
      <DistortionRing />
      {[...Array(20)].map((_, i) => (
        <Particle key={i} />
      ))}
    </ButtonContainer>
  );
};

export default DarkMatterButton; 