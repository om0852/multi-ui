'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const shockwave = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  20% {
    opacity: 0.5;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const energyCharge = keyframes`
  0% {
    filter: hue-rotate(0deg) brightness(100%);
  }
  50% {
    filter: hue-rotate(180deg) brightness(150%);
  }
  100% {
    filter: hue-rotate(360deg) brightness(100%);
  }
`;

const StyledShockwaveButton = styled.button<{ $isAnimating: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  z-index: 1;

  ${props => props.$isAnimating && `
    animation: ${energyCharge} 0.5s ease-out;
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 198, 255, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }

  .shockwave {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, 
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
  }

  ${props => props.$isAnimating && `
    .shockwave {
      animation: ${shockwave} 0.5s ease-out;
    }
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const ShockwaveButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <StyledShockwaveButton $isAnimating={isAnimating} onClick={handleClick}>
      <span>{children}</span>
      <div className="shockwave" />
    </StyledShockwaveButton>
  );
};

export default ShockwaveButton; 