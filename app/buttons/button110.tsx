'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const windSwirl = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0;
  }
  50% {
    transform: rotate(180deg) scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 0;
  }
`;

const leafFloat = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(100%, -50%) rotate(90deg);
  }
  50% {
    transform: translate(200%, 0) rotate(180deg);
  }
  75% {
    transform: translate(100%, 50%) rotate(270deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
`;

const StyledWindButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6e9f0 100%);
  color: #4a5568;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

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
    background: linear-gradient(135deg, #e6e9f0 0%, #f0f8ff 100%);
    color: #2d3748;
    box-shadow: 
      0 6px 30px rgba(0, 0, 0, 0.15),
      inset 0 0 10px rgba(255, 255, 255, 0.5);

    &::before {
      opacity: 1;
      animation: ${windSwirl} 2s infinite;
    }

    .leaf {
      opacity: 1;
      animation: ${leafFloat} 3s infinite;
    }
  `}

  .leaf {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(74, 85, 104, 0.2);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    opacity: 0;
    pointer-events: none;
  }

  ${Array.from({ length: 6 }).map((_, i) => css`
    .leaf:nth-child(${i + 1}) {
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation-delay: ${i * 0.5}s;
      transform: scale(${0.8 + Math.random() * 0.4});
    }
  `)}

  .wind-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: skewX(-20deg);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    
    .wind-effect {
      transform: skewX(-20deg) translateX(100%);
    }
  }

  &:active {
    transform: translateY(1px);
  }

  span {
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #4a5568, #2d3748);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const WindButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledWindButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="leaf" />
      ))}
      <div className="wind-effect" />
      <span>{children}</span>
    </StyledWindButton>
  );
};

export default WindButton; 