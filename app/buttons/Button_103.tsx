'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const laserScan = keyframes`
  0% {
    transform: translateX(-100%) skewX(-45deg);
  }
  100% {
    transform: translateX(200%) skewX(-45deg);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px #ff0080,
                0 0 20px #ff0080,
                0 0 30px #ff0080;
  }
  50% {
    box-shadow: 0 0 20px #ff0080,
                0 0 40px #ff0080,
                0 0 60px #ff0080;
  }
`;

const StyledLaserButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: #000;
  color: #ff0080;
  border: 2px solid #ff0080;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  transition: all 0.3s ease;

  ${props => props.$isActive && css`
    animation: ${glow} 1s infinite;
    background: rgba(255, 0, 128, 0.1);
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 0, 128, 0.8),
      transparent
    );
    transform: translateX(-100%) skewX(-45deg);
  }

  &:hover::before {
    animation: ${laserScan} 1s infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid #ff0080;
    border-radius: 4px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
  }

  .text {
    position: relative;
    z-index: 1;
    background: linear-gradient(
      90deg,
      #ff0080,
      #ff00ff,
      #ff0080
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: ${props => props.$isActive ? css`
      ${textShine} 2s linear infinite
    ` : 'none'};
  }
`;

const textShine = keyframes`
  to {
    background-position: 200% center;
  }
`;

const LaserButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledLaserButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <span className="text">{children}</span>
    </StyledLaserButton>
  );
};

export default LaserButton; 