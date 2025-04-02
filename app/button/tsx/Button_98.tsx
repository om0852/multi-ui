'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
  0% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: inset(80% -6px 5% 0);
    transform: translate(-10px, 5px);
  }
  30% {
    clip-path: inset(25% -6px 65% 0);
    transform: translate(5px, -5px);
  }
  40% {
    clip-path: inset(50% -6px 45% 0);
    transform: translate(-5px, 5px);
  }
  50% {
    clip-path: inset(35% -6px 60% 0);
    transform: translate(5px, -10px);
  }
  60% {
    clip-path: inset(70% -6px 20% 0);
    transform: translate(-10px, 5px);
  }
  70% {
    clip-path: inset(15% -6px 80% 0);
    transform: translate(15px, 10px);
  }
  80% {
    clip-path: inset(60% -6px 30% 0);
    transform: translate(-20px, -5px);
  }
  90% {
    clip-path: inset(40% -6px 50% 0);
    transform: translate(20px, 5px);
  }
  100% {
    clip-path: inset(5% -6px 90% 0);
    transform: translate(-10px, 10px);
  }
`;

const StyledGlitchButton = styled.button<{ $isHovered: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: #2d3748;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    background: #4a5568;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  .content {
    position: relative;
    z-index: 1;
  }

  .glitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${props => props.$isHovered ? 1 : 0};
    
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2d3748;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
    }

    &::before {
      color: #ff00ff;
      animation: ${glitch} 1.5s infinite;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    }

    &::after {
      color: #00ffff;
      animation: ${glitch} 2s infinite reverse;
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    }
  }
`;

const GlitchTextButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledGlitchButton
      $isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="content">{children}</span>
      <div className="glitch" data-text={children}></div>
    </StyledGlitchButton>
  );
};

export default GlitchTextButton; 