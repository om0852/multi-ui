'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const lavaFlow = keyframes`
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

const heatDistortion = keyframes`
  0% {
    transform: scaleY(1) skewX(0deg);
  }
  25% {
    transform: scaleY(1.2) skewX(5deg);
  }
  50% {
    transform: scaleY(0.9) skewX(-5deg);
  }
  75% {
    transform: scaleY(1.1) skewX(3deg);
  }
  100% {
    transform: scaleY(1) skewX(0deg);
  }
`;

const StyledLavaButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(
    45deg,
    #ff4500,
    #ff8c00,
    #ff4500,
    #ff0000,
    #ff4500
  );
  background-size: 400% 400%;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(255, 69, 0, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${props => props.$isActive && css`
    animation: ${lavaFlow} 3s infinite;
    box-shadow: 
      0 6px 30px rgba(255, 69, 0, 0.6),
      inset 0 0 10px rgba(255, 255, 255, 0.5);

    &::before {
      opacity: 1;
    }

    .heat-wave {
      opacity: 1;
      animation: ${heatDistortion} 1s infinite;
    }
  `}

  .heat-wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      transparent 20%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 80%
    );
    opacity: 0;
    pointer-events: none;
  }

  span {
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const LavaButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledLavaButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="heat-wave" />
      <span>{children}</span>
    </StyledLavaButton>
  );
};

export default LavaButton; 