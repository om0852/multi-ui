'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const gearRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const mechanicalSlide = keyframes`
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-2px);
  }
  40% {
    transform: translateX(2px);
  }
  60% {
    transform: translateX(-1px);
  }
  80% {
    transform: translateX(1px);
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledMetalButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(
    135deg,
    #333333,
    #666666 20%,
    #999999 30%,
    #666666 40%,
    #333333 50%,
    #666666 60%,
    #999999 70%,
    #666666 80%,
    #333333
  );
  background-size: 200% auto;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.3s ease;
  }

  ${props => props.$isActive && css`
    animation: ${shine} 3s linear infinite;
    box-shadow: 
      0 6px 30px rgba(0, 0, 0, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);

    .gear {
      animation: ${gearRotate} 4s linear infinite;
      opacity: 1;
    }

    .plate {
      animation: ${mechanicalSlide} 0.5s ease-in-out;
    }
  `}

  .gear {
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 0.3;
    transition: opacity 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: conic-gradient(
        from 0deg,
        #666666,
        #999999,
        #666666,
        #333333,
        #666666
      );
      border-radius: 50%;
      clip-path: polygon(
        50% 0%,
        65% 15%,
        85% 15%,
        85% 35%,
        100% 50%,
        85% 65%,
        85% 85%,
        65% 85%,
        50% 100%,
        35% 85%,
        15% 85%,
        15% 65%,
        0% 50%,
        15% 35%,
        15% 15%,
        35% 15%
      );
    }
  }

  .gear:first-child {
    top: -15px;
    left: -15px;
  }

  .gear:last-child {
    bottom: -15px;
    right: -15px;
    transform: rotate(180deg);
  }

  .plate {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: linear-gradient(
      135deg,
      #444444,
      #666666
    );
    border-radius: 2px;
    z-index: -1;
  }

  span {
    position: relative;
    z-index: 1;
    background: linear-gradient(
      180deg,
      #ffffff,
      #cccccc
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
  }

  &:hover {
    transform: translateY(-2px);
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const MetalButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledMetalButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="plate" />
      <div className="gear" />
      <div className="gear" />
      <span>{children}</span>
    </StyledMetalButton>
  );
};

export default MetalButton; 