'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const circuitFlow = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const StyledCircuitButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: #1a1a1a;
  color: #00ff00;
  border: 2px solid #00ff00;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(90deg, #1a1a1a 21px, transparent 1%) center,
      linear-gradient(#1a1a1a 21px, transparent 1%) center,
      #00ff00;
    background-size: 22px 22px;
    opacity: 0.1;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  path {
    fill: none;
    stroke: #00ff00;
    stroke-width: 2;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    opacity: 0.5;
  }

  ${props => props.$isActive && css`
    background: rgba(0, 255, 0, 0.1);
    box-shadow: 
      0 0 10px rgba(0, 255, 0, 0.2),
      inset 0 0 10px rgba(0, 255, 0, 0.2);

    path {
      animation: ${circuitFlow} 2s linear forwards;
    }

    .glow {
      animation: ${pulse} 1s infinite;
    }
  `}

  span {
    position: relative;
    z-index: 1;
  }

  .glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #00ff00;
    border-radius: 4px;
    box-shadow: 
      0 0 5px #00ff00,
      inset 0 0 5px #00ff00;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    
    .glow {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const CircuitButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledCircuitButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <svg>
        <path d="M0,20 H40 L60,40 H100 L120,20 H160" />
        <path d="M20,0 V40 L40,60 V100" />
        <path d="M180,20 H140 L120,40 H80 L60,20 H20" />
        <path d="M160,0 V40 L140,60 V100" />
      </svg>
      <div className="glow" />
      <span>{children}</span>
    </StyledCircuitButton>
  );
};

export default CircuitButton; 