'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface WarpSpeedButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const warpLines = keyframes`
  0% {
    transform: translateZ(0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateZ(200px) scale(0);
    opacity: 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 10px #4FC3F7,
      0 0 20px #4FC3F7,
      0 0 30px #4FC3F7;
  }
  50% {
    box-shadow: 
      0 0 20px #03A9F4,
      0 0 40px #03A9F4,
      0 0 60px #03A9F4;
  }
`;

const generateWarpStyles = (index: number) => {
  const rotation = index * (360 / 20);
  const delay = index * 0.1;
  const length = 100 + (index * 10);
  
  return css`
    transform: rotate(${rotation}deg);
    width: ${length}px;
    animation: ${warpLines} 1.5s ease-in infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
  perspective: 1000px;
`;

const WarpLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 2px;
  background: linear-gradient(
    90deg,
    #4FC3F7,
    transparent
  );
  transform-origin: left center;
  opacity: 0;
  pointer-events: none;

  ${[...Array(20)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateWarpStyles(i)}
    }
  `)}
`;

const Button = styled.button`
  background: linear-gradient(145deg, #03A9F4, #4FC3F7);
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
    animation: ${glow} 2s infinite;

    & ~ ${WarpLine} {
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

const WarpSpeedButton: React.FC<WarpSpeedButtonProps> = ({
  children = 'Warp',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      {[...Array(20)].map((_, i) => (
        <WarpLine key={i} />
      ))}
    </ButtonContainer>
  );
};

export default WarpSpeedButton; 