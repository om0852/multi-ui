'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface AuroraButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const auroraWave = keyframes`
  0% {
    transform: translateX(-100%) translateY(0);
  }
  50% {
    transform: translateX(0) translateY(-20%);
  }
  100% {
    transform: translateX(100%) translateY(0);
  }
`;

const shimmer = keyframes`
  0%, 100% {
    opacity: 0.5;
    filter: hue-rotate(0deg) brightness(1);
  }
  50% {
    opacity: 1;
    filter: hue-rotate(45deg) brightness(1.2);
  }
`;

const generateAuroraStyles = (index: number) => {
  const baseHue = 120; // Green base
  const hueOffset = index * 30;
  const delay = index * 0.5;
  const duration = 3 + index * 0.5;
  
  return css`
    background: linear-gradient(
      90deg,
      transparent,
      hsla(${baseHue + hueOffset}, 100%, 70%, 0.5),
      hsla(${baseHue + hueOffset + 30}, 100%, 60%, 0.5),
      transparent
    );
    animation: 
      ${auroraWave} ${duration}s ease-in-out infinite,
      ${shimmer} 2s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const AuroraLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  filter: blur(8px);

  ${[...Array(5)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateAuroraStyles(i)}
    }
  `)}
`;

const StarField = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(1px 1px at 20% 30%, white, transparent),
    radial-gradient(1px 1px at 40% 70%, white, transparent),
    radial-gradient(1px 1px at 60% 20%, white, transparent),
    radial-gradient(1px 1px at 80% 50%, white, transparent);
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  color: #7FE5F0;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 1;
  text-shadow: 0 0 10px rgba(127, 229, 240, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(127, 229, 240, 0.3),
      0 0 30px rgba(127, 229, 240, 0.2);
    color: white;

    & ~ ${AuroraLayer} {
      opacity: 1;
    }

    & ~ ${StarField} {
      opacity: 0.5;
      transform: scale(1);
    }
  }

  &:active {
    transform: translateY(1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom right,
      rgba(127, 229, 240, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const AuroraButton: React.FC<AuroraButtonProps> = ({
  children = 'Aurora',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <StarField />
      {[...Array(5)].map((_, i) => (
        <AuroraLayer key={i} />
      ))}
    </ButtonContainer>
  );
};

export default AuroraButton; 