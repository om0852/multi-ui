'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const dataCorruption = keyframes`
  0% {
    clip-path: inset(0 0 0 0);
  }
  5% {
    clip-path: inset(30% -6px 85% 0);
  }
  15% {
    clip-path: inset(15% -6px 65% 0);
  }
  20% {
    clip-path: inset(50% -6px 30% 0);
  }
  25% {
    clip-path: inset(0 -6px 85% 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;

const neonFlash = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 5px #00ffff,
      0 0 10px #00ffff,
      0 0 20px #00ffff;
  }
  50% {
    text-shadow:
      0 0 5px #ff00ff,
      0 0 10px #ff00ff,
      0 0 20px #ff00ff;
  }
`;

const StyledCyberPunkButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: #000;
  color: #0ff;
  border: 2px solid #0ff;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Courier New', monospace;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0ff;
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  &::before {
    z-index: -2;
    transform: skew(-30deg) translate(-100%, 0);
  }

  &::after {
    z-index: -1;
    transform: skew(-30deg) translate(100%, 0);
  }

  ${props => props.$isActive && css`
    color: #000;
    border-color: #ff00ff;
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
    animation: ${neonFlash} 1s infinite;

    &::before,
    &::after {
      transform: skew(-30deg) translate(0, 0);
      background: #ff00ff;
    }

    .glitch {
      animation: ${dataCorruption} 1s infinite;
    }
  `}

  .glitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff00ff;
    mix-blend-mode: multiply;
    opacity: 0;
    z-index: 2;
  }

  span {
    position: relative;
    z-index: 3;
    mix-blend-mode: difference;
  }

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    box-shadow: 
      0 0 10px rgba(0, 255, 255, 0.5),
      inset 0 0 10px rgba(0, 255, 255, 0.5);
  }
`;

const CyberPunkButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledCyberPunkButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="glitch" />
      <span>{children}</span>
    </StyledCyberPunkButton>
  );
};

export default CyberPunkButton; 