'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const frostSpread = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
`;

const crystalGrow = keyframes`
  0% {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
  }
  25% {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%, 50% 0%);
  }
  100% {
    clip-path: polygon(0% 15%, 50% 0%, 100% 15%, 85% 100%, 15% 100%, 0% 15%);
  }
`;

const StyledFrostButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #e0f7ff 0%, #87ceeb 100%);
  color: #1e3f66;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(135, 206, 235, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${props => props.$isActive && css`
    background: linear-gradient(135deg, #e0f7ff 0%, #a5d8e6 100%);
    color: #0a2540;
    box-shadow: 
      0 6px 30px rgba(135, 206, 235, 0.6),
      inset 0 0 10px rgba(255, 255, 255, 0.8);

    &::before {
      opacity: 1;
    }

    .frost-crystal {
      animation: ${crystalGrow} 0.5s forwards;
    }

    .frost-overlay {
      opacity: 1;
      animation: ${frostSpread} 0.5s forwards;
    }
  `}

  .frost-crystal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.2)
    );
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
    pointer-events: none;
  }

  .frost-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8),
      transparent
    );
    opacity: 0;
    pointer-events: none;
  }

  span {
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #1e3f66, #0a2540);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const FrostButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledFrostButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="frost-crystal" />
      <div className="frost-overlay" />
      <span>{children}</span>
    </StyledFrostButton>
  );
};

export default FrostButton; 