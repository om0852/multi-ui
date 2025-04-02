'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const prism = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%) skewX(-15deg);
  }
  50% {
    opacity: 0.75;
  }
  100% {
    opacity: 0;
    transform: translateX(100%) skewX(-15deg);
  }
`;

const StyledRainbowButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(
    90deg,
    #ff0000 0%,
    #ff7f00 15%,
    #ffff00 30%,
    #00ff00 45%,
    #0000ff 60%,
    #4b0082 75%,
    #8f00ff 90%,
    #ff0000 100%
  );
  background-size: 200% auto;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 0 0 2px rgba(255, 255, 255, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${props => props.$isActive && css`
    animation: ${shimmer} 3s linear infinite;
    box-shadow: 
      0 6px 30px rgba(0, 0, 0, 0.3),
      inset 0 0 0 2px rgba(255, 255, 255, 0.5);

    &::before {
      opacity: 0.5;
    }

    .prism-effect {
      animation: ${prism} 2s linear infinite;
    }
  `}

  .prism-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transform: translateX(-100%) skewX(-15deg);
    opacity: 0;
  }

  .rainbow-border {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: inherit;
    background: inherit;
    filter: blur(6px);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);

    .rainbow-border {
      opacity: 0.5;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  span {
    position: relative;
    z-index: 1;
    background: linear-gradient(
      180deg,
      #fff,
      #f0f0f0
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
  }
`;

const RainbowButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledRainbowButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="rainbow-border" />
      <div className="prism-effect" />
      <span>{children}</span>
    </StyledRainbowButton>
  );
};

export default RainbowButton; 