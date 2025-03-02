'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const prismShift = keyframes`
  0% {
    filter: hue-rotate(0deg) blur(0px);
    transform: translateX(0) skew(0deg);
  }
  25% {
    filter: hue-rotate(90deg) blur(2px);
    transform: translateX(5px) skew(-5deg);
  }
  75% {
    filter: hue-rotate(270deg) blur(2px);
    transform: translateX(-5px) skew(5deg);
  }
  100% {
    filter: hue-rotate(360deg) blur(0px);
    transform: translateX(0) skew(0deg);
  }
`;

const rainbowFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const StyledPrismButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
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
    background: linear-gradient(
      90deg,
      #ff0000,
      #ff7f00,
      #ffff00,
      #00ff00,
      #0000ff,
      #4b0082,
      #8f00ff,
      #ff0000
    );
    background-size: 800% 100%;
    opacity: 0.5;
    mix-blend-mode: overlay;
    animation: ${rainbowFlow} 8s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 60%
    );
    transform: rotate(0deg);
    transition: transform 0.5s ease;
  }

  ${props => props.$isActive && css`
    transform: scale(1.05);
    animation: ${prismShift} 2s ease infinite;

    &::after {
      transform: rotate(180deg);
    }
  `}

  .refraction {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transform: translateX(-100%) rotate(45deg);
    transition: transform 0.5s ease;
  }

  &:hover .refraction {
    transform: translateX(100%) rotate(45deg);
  }

  .prism-edge {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    
    &.top { top: 0; }
    &.bottom { bottom: 0; }
  }

  span {
    position: relative;
    z-index: 1;
    background: linear-gradient(
      90deg,
      #ffffff,
      #f0f0f0,
      #ffffff
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
  }
`;

const PrismButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledPrismButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="prism-edge top" />
      <div className="prism-edge bottom" />
      <div className="refraction" />
      <span>{children}</span>
    </StyledPrismButton>
  );
};

export default PrismButton; 