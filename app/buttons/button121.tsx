'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spiral = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0;
  }
  50% {
    transform: rotate(180deg) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg) scale(0);
    opacity: 0;
  }
`;

const portalPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    filter: hue-rotate(0deg);
  }
  50% {
    transform: scale(1.1);
    filter: hue-rotate(180deg);
  }
`;

const StyledVortexButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #1a1a1a, #333333);
  color: #fff;
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
    0 4px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(255, 255, 255, 0.2) 20%,
      transparent 40%,
      rgba(255, 255, 255, 0.2) 60%,
      transparent 80%
    );
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${props => props.$isActive && css`
    background: linear-gradient(135deg, #333333, #1a1a1a);
    box-shadow: 
      0 6px 30px rgba(0, 0, 0, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);

    &::before {
      opacity: 1;
      animation: ${spin} 3s linear infinite;
    }

    .vortex {
      animation: ${spiral} 2s linear infinite;
    }

    .portal {
      opacity: 1;
      animation: ${portalPulse} 2s infinite;
    }
  `}

  .vortex {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: repeating-conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(255, 255, 255, 0.1) 10deg,
      transparent 20deg
    );
    transform-origin: center;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .portal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.3),
      transparent 70%
    );
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    mix-blend-mode: screen;
  }

  .spiral-arms {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  ${Array.from({ length: 6 }).map((_, i) => css`
    .spiral-arm-${i + 1} {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: ${40 + i * 10}%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.8),
        transparent
      );
      transform-origin: top;
      transform: translate(-50%, -50%) rotate(${60 * i}deg);
      opacity: 0.3;
      filter: blur(1px);
    }
  `)}

  span {
    position: relative;
    z-index: 1;
    background: linear-gradient(
      180deg,
      #fff,
      #e0e0e0
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  &:hover {
    transform: translateY(-2px) scale(1.05);
  }

  &:active {
    transform: translateY(1px) scale(0.95);
  }
`;

const VortexButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledVortexButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="vortex" />
      <div className="portal" />
      <div className="spiral-arms">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`spiral-arm-${i + 1}`} />
        ))}
      </div>
      <span>{children}</span>
    </StyledVortexButton>
  );
};

export default VortexButton; 