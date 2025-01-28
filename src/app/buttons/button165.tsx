'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface CosmicPortalButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const spiral = keyframes`
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

const glow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 10px #9C27B0,
      0 0 20px #9C27B0,
      0 0 30px #9C27B0;
  }
  50% {
    box-shadow: 
      0 0 20px #E91E63,
      0 0 40px #E91E63,
      0 0 60px #E91E63;
  }
`;

const generatePortalStyles = (index: number) => {
  const rotation = index * (360 / 12);
  const scale = 1 - (index * 0.1);
  const delay = index * 0.1;
  
  return css`
    transform: rotate(${rotation}deg) scale(${scale});
    animation: ${spiral} 3s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const Portal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(45deg, #9C27B0, #E91E63);
  transform-origin: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${[...Array(12)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generatePortalStyles(i)}
    }
  `)}
`;

const Button = styled.button`
  background: linear-gradient(145deg, #9C27B0, #E91E63);
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
    animation: ${glow} 2s infinite;

    & ~ ${Portal} {
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

const CosmicPortalButton: React.FC<CosmicPortalButtonProps> = ({
  children = 'Portal',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      {[...Array(12)].map((_, i) => (
        <Portal key={i} />
      ))}
    </ButtonContainer>
  );
};

export default CosmicPortalButton; 