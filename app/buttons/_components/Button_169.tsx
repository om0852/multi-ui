'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface VortexButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.5);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;

const generateVortexStyles = (index: number) => {
  const rotation = index * (360 / 10);
  const scale = 1 - (index * 0.1);
  const delay = index * 0.1;
  
  return css`
    transform: rotate(${rotation}deg) scale(${scale});
    animation: ${spin} 3s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const VortexRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(45deg, #FF3D00, #FF9100);
  transform-origin: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${[...Array(10)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateVortexStyles(i)}
    }
  `)}
`;

const Button = styled.button`
  background: linear-gradient(145deg, #FF3D00, #FF9100);
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
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    animation: ${pulse} 2s infinite;
    box-shadow: 
      0 5px 15px rgba(255, 61, 0, 0.4),
      0 0 20px rgba(255, 145, 0, 0.2);

    & ~ ${VortexRing} {
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

const VortexButton: React.FC<VortexButtonProps> = ({
  children = 'Vortex',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      {[...Array(10)].map((_, i) => (
        <VortexRing key={i} />
      ))}
    </ButtonContainer>
  );
};

export default VortexButton; 