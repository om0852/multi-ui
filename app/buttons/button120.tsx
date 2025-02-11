'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const energyField = keyframes`
  0% {
    filter: hue-rotate(0deg) brightness(1);
    transform: scale(1);
  }
  50% {
    filter: hue-rotate(180deg) brightness(1.2);
    transform: scale(1.05);
  }
  100% {
    filter: hue-rotate(360deg) brightness(1);
    transform: scale(1);
  }
`;

const StyledPlasmaButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #4a00e0, #8e2de2);
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
  box-shadow: 
    0 4px 15px rgba(142, 45, 226, 0.4),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);

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
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${props => props.$isActive && css`
    background: linear-gradient(135deg, #8e2de2, #4a00e0);
    box-shadow: 
      0 6px 30px rgba(142, 45, 226, 0.6),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);

    &::before {
      opacity: 0.1;
      animation: ${rotate} 10s linear infinite;
    }

    .plasma-ball {
      animation: ${pulse} 1.5s ease-in-out infinite;
    }

    .energy-field {
      opacity: 1;
      animation: ${energyField} 3s infinite;
    }
  `}

  .plasma-ball {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(
      circle at center,
      rgba(142, 45, 226, 0.8),
      transparent 70%
    );
    mix-blend-mode: screen;
    pointer-events: none;
  }

  .energy-field {
    position: absolute;
    top: -20%;
    left: -20%;
    right: -20%;
    bottom: -20%;
    background: repeating-conic-gradient(
      from 0deg,
      rgba(142, 45, 226, 0.1) 0deg,
      rgba(74, 0, 224, 0.1) 10deg,
      rgba(142, 45, 226, 0.1) 20deg
    );
    opacity: 0;
    pointer-events: none;
  }

  .plasma-arcs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  ${Array.from({ length: 5 }).map((_, i) => css`
    .plasma-arc-${i + 1} {
      position: absolute;
      width: 2px;
      height: ${30 + Math.random() * 40}%;
      background: rgba(255, 255, 255, 0.6);
      filter: blur(1px);
      transform-origin: bottom;
      animation: ${rotate} ${3 + Math.random() * 2}s linear infinite;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
    }
  `)}

  span {
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    background: linear-gradient(
      180deg,
      #fff,
      #e0e0ff
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const PlasmaButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledPlasmaButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="plasma-ball" />
      <div className="energy-field" />
      <div className="plasma-arcs">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`plasma-arc-${i + 1}`} />
        ))}
      </div>
      <span>{children}</span>
    </StyledPlasmaButton>
  );
};

export default PlasmaButton; 