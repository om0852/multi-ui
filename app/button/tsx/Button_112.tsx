'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const pixelate = keyframes`
  0% {
    background-size: 100% 100%;
  }
  50% {
    background-size: 10% 10%;
  }
  100% {
    background-size: 100% 100%;
  }
`;

const glitch = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

const StyledPixelButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  font-family: 'Press Start 2P', monospace;
  background: #000;
  color: #0f0;
  border: 4px solid #0f0;
  position: relative;
  cursor: pointer;
  image-rendering: pixelated;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 4px 4px 0 #0f0;
  transition: all 0.1s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 65%,
      rgba(0, 255, 0, 0.2) 75%,
      transparent 85%
    );
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${props => props.$isActive && css`
    animation: ${pixelate} 0.2s steps(5) infinite;
    color: #fff;
    border-color: #fff;
    box-shadow: 4px 4px 0 #fff;

    &::before {
      opacity: 1;
    }

    .pixel-overlay {
      opacity: 1;
      animation: ${glitch} 0.2s steps(2) infinite;
    }
  `}

  .pixel-overlay {
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 255, 0, 0.1),
      rgba(0, 255, 0, 0.1) 2px,
      transparent 2px,
      transparent 4px
    );
    opacity: 0;
    pointer-events: none;
    mix-blend-mode: screen;
  }

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #0f0;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 #0f0;
  }

  span {
    position: relative;
    z-index: 1;
    display: block;
    text-shadow: 2px 2px #000;
  }
`;

const PixelButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledPixelButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="pixel-overlay" />
      <span>{children}</span>
    </StyledPixelButton>
  );
};

export default PixelButton; 