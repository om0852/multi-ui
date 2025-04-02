'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const spark = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  20% {
    opacity: 1;
    transform: scale(1.4);
  }
  40% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

const lightning = keyframes`
  0%, 100% {
    opacity: 0;
  }
  5%, 95% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  15%, 85% {
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
  30%, 70% {
    opacity: 1;
  }
`;

const energyPulse = keyframes`
  0% {
    box-shadow: 
      0 0 5px #00ffff,
      0 0 10px #00ffff,
      0 0 20px #00ffff,
      inset 0 0 5px #00ffff;
  }
  50% {
    box-shadow: 
      0 0 10px #00ffff,
      0 0 20px #00ffff,
      0 0 40px #00ffff,
      inset 0 0 10px #00ffff;
  }
  100% {
    box-shadow: 
      0 0 5px #00ffff,
      0 0 10px #00ffff,
      0 0 20px #00ffff,
      inset 0 0 5px #00ffff;
  }
`;

const StyledElectricButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: #001a1a;
  color: #00ffff;
  border: 2px solid #00ffff;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;

  ${props => props.$isActive && css`
    animation: ${energyPulse} 1.5s infinite;
    background: #002a2a;

    .lightning-bolt {
      animation: ${lightning} 2s infinite;
    }

    .spark {
      animation: ${spark} 0.5s infinite;
    }
  `}

  .lightning-bolt {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background: #00ffff;
      width: 2px;
      height: 100%;
      top: 0;
      filter: blur(1px);
    }

    &::before {
      left: 30%;
      transform: rotate(45deg);
    }

    &::after {
      right: 30%;
      transform: rotate(-45deg);
    }
  }

  .spark {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00ffff;
    box-shadow: 0 0 10px #00ffff;
    opacity: 0;
  }

  ${Array.from({ length: 10 }).map((_, i) => css`
    .spark:nth-child(${i + 1}) {
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 0.5}s;
    }
  `)}

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 255, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  span {
    position: relative;
    z-index: 1;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }
`;

const ElectricButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledElectricButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="lightning-bolt" />
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="spark" />
      ))}
      <span>{children}</span>
    </StyledElectricButton>
  );
};

export default ElectricButton; 