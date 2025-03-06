'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const starTwinkle = keyframes`
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

const galaxySpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledCosmicButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #2d3436, #000000);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(123, 31, 162, 0.5),
      rgba(32, 32, 32, 0.2)
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    animation: ${galaxySpin} 10s linear infinite;
  }

  ${props => props.$isActive && css`
    &::before {
      opacity: 1;
    }
    animation: ${nebulaPulse} 3s infinite;
  `}

  .star {
    position: absolute;
    background: white;
    border-radius: 50%;
    animation: ${starTwinkle} 1s infinite;
  }

  ${Array.from({ length: 20 }).map((_, i) => css`
    .star:nth-child(${i + 1}) {
      width: ${Math.random() * 2 + 1}px;
      height: ${Math.random() * 2 + 1}px;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 2}s;
    }
  `)}

  .cosmic-rays {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.1) 50%, transparent 55%),
      linear-gradient(-45deg, transparent 45%, rgba(255, 255, 255, 0.1) 50%, transparent 55%);
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 
      0 0 30px rgba(123, 31, 162, 0.5),
      0 0 60px rgba(123, 31, 162, 0.3);

    .cosmic-rays {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px) scale(0.95);
  }

  span {
    position: relative;
    z-index: 1;
    background: linear-gradient(to right, #fff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

const CosmicButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledCosmicButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="star" />
      ))}
      <div className="cosmic-rays" />
      <span>{children}</span>
    </StyledCosmicButton>
  );
};

export default CosmicButton; 