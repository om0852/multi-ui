'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const wave = keyframes`
  0% {
    transform: translateX(-100%) translateZ(0);
  }
  100% {
    transform: translateX(100%) translateZ(0);
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const StyledWaterButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #006994, #003366);
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 
    0 4px 15px rgba(0, 105, 148, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%) translateZ(0);
  }

  ${props => props.$isActive && css`
    background: linear-gradient(135deg, #0088bb, #004477);
    animation: ${float} 2s ease-in-out infinite;

    &::before {
      animation: ${wave} 2s linear infinite;
    }

    .water-ripple {
      animation: ${ripple} 2s linear infinite;
    }

    .bubble {
      opacity: 1;
    }
  `}

  .water-ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
  }

  .bubble {
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${Array.from({ length: 10 }).map((_, i) => css`
    .bubble:nth-child(${i + 1}) {
      width: ${4 + Math.random() * 6}px;
      height: ${4 + Math.random() * 6}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: ${float} ${2 + Math.random()}s ease-in-out infinite;
      animation-delay: ${Math.random()}s;
    }
  `)}

  .water-surface {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.1)
    );
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 6px 20px rgba(0, 105, 148, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);

    .water-surface {
      transform: scaleY(1.2);
    }
  }

  &:active {
    transform: translateY(1px);
  }

  span {
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    background: linear-gradient(
      180deg,
      #fff,
      #e0f3ff
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const WaterButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledWaterButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="water-ripple" />
      <div className="water-surface" />
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="bubble" />
      ))}
      <span>{children}</span>
    </StyledWaterButton>
  );
};

export default WaterButton; 