'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const twinkle = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.5);
  }
`;

const nebulaPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    filter: hue-rotate(0deg);
  }
  50% {
    transform: scale(1.1);
    filter: hue-rotate(180deg);
  }
`;

const StyledGalaxyButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #000033, #000066);
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0, 0, 102, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 60%
    );
    transform-origin: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${props => props.$isActive && css`
    background: linear-gradient(135deg, #000066, #000033);
    box-shadow: 
      0 6px 30px rgba(0, 0, 102, 0.5),
      inset 0 0 20px rgba(255, 255, 255, 0.3);

    &::before {
      opacity: 1;
      animation: ${rotate} 10s linear infinite;
    }

    .nebula {
      opacity: 0.7;
      animation: ${nebulaPulse} 4s ease infinite;
    }

    .star {
      animation: ${twinkle} 1s ease infinite;
    }
  `}

  .nebula {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 30% 50%,
      rgba(255, 0, 255, 0.2),
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 50%,
      rgba(0, 255, 255, 0.2),
      transparent 50%
    );
    opacity: 0;
    mix-blend-mode: screen;
    transition: opacity 0.3s ease;
  }

  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
  }

  ${Array.from({ length: 30 }).map((_, i) => css`
    .star:nth-child(${i + 1}) {
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 1}s;
      width: ${1 + Math.random() * 2}px;
      height: ${1 + Math.random() * 2}px;
      box-shadow: 0 0 ${3 + Math.random() * 3}px white;
    }
  `)}

  span {
    position: relative;
    z-index: 1;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
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

const GalaxyButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledGalaxyButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="nebula" />
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="star" />
      ))}
      <span>{children}</span>
    </StyledGalaxyButton>
  );
};

export default GalaxyButton; 