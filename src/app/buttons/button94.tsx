'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const morphAnimation = keyframes`
  0% {
    border-radius: 8px;
    transform: rotate(0deg);
  }
  50% {
    border-radius: 50%;
    transform: rotate(180deg);
  }
  100% {
    border-radius: 8px;
    transform: rotate(360deg);
  }
`;

const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(138, 43, 226, 0.4),
                0 0 10px rgba(138, 43, 226, 0.3),
                0 0 15px rgba(138, 43, 226, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.6),
                0 0 20px rgba(138, 43, 226, 0.4),
                0 0 30px rgba(138, 43, 226, 0.2);
  }
  100% {
    box-shadow: 0 0 5px rgba(138, 43, 226, 0.4),
                0 0 10px rgba(138, 43, 226, 0.3),
                0 0 15px rgba(138, 43, 226, 0.2);
  }
`;

const StyledMorphingButton = styled.button<{ $isHovered: boolean }>`
  padding: ${props => props.$isHovered ? '20px' : '16px 32px'};
  font-size: 18px;
  background: linear-gradient(135deg, #8a2be2, #ba55d3);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease;
  overflow: hidden;
  animation: ${glowPulse} 2s infinite;

  ${props => props.$isHovered && css`
    animation: ${morphAnimation} 1s infinite linear;
  `}

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    transform: scale(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: scale(1);
  }

  span {
    position: relative;
    z-index: 1;
    transition: opacity 0.3s ease;
    opacity: ${props => props.$isHovered ? '0' : '1'};
  }

  &::after {
    content: '✨';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    opacity: ${props => props.$isHovered ? '1' : '0'};
    transition: opacity 0.3s ease;
  }
`;

const MorphingButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledMorphingButton
      $isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{children}</span>
    </StyledMorphingButton>
  );
};

export default MorphingButton; 