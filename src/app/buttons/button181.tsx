'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ConstellationButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const starGlow = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
`;

const lineTrace = keyframes`
  0% {
    stroke-dashoffset: 100;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.6;
  }
`;

const generateStarPosition = (index: number) => {
  // Create a pattern that roughly forms a recognizable shape
  const positions = [
    { x: 20, y: 20 },  // Top left
    { x: 40, y: 30 },  // Top middle
    { x: 60, y: 15 },  // Top right
    { x: 80, y: 40 },  // Right middle
    { x: 70, y: 60 },  // Bottom right
    { x: 40, y: 70 },  // Bottom middle
    { x: 20, y: 50 }   // Left middle
  ];
  
  return positions[index % positions.length];
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const StarContainer = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Star = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  box-shadow: 0 0 10px white;
  animation: ${starGlow} 2s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 50%;
    filter: blur(2px);
  }
`;

const ConstellationSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const ConstellationLine = styled.path`
  fill: none;
  stroke: rgba(255, 255, 255, 0.4);
  stroke-width: 1;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: ${lineTrace} 2s ease-out forwards;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  color: #87CEEB;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: visible;
  z-index: 1;
  text-shadow: 0 0 10px rgba(135, 206, 235, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(135, 206, 235, 0.3),
      0 0 30px rgba(135, 206, 235, 0.2);
    color: white;

    & ~ ${StarContainer} {
      opacity: 1;
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
      rgba(135, 206, 235, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ConstellationButton: React.FC<ConstellationButtonProps> = ({
  children = 'Constellation',
  className = '',
  onClick
}) => {
  const starPositions = Array(7).fill(0).map((_, i) => generateStarPosition(i));
  
  // Generate SVG path for constellation lines
  const generateConstellationPath = () => {
    const path = starPositions.reduce((acc, pos, i) => {
      if (i === 0) return `M ${pos.x} ${pos.y}`;
      return `${acc} L ${pos.x} ${pos.y}`;
    }, '');
    return `${path} Z`; // Close the path
  };

  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <StarContainer>
        {starPositions.map((pos, i) => (
          <Star key={i} $x={pos.x} $y={pos.y} />
        ))}
        <ConstellationSVG>
          <ConstellationLine d={generateConstellationPath()} />
        </ConstellationSVG>
      </StarContainer>
    </ButtonContainer>
  );
};

export default ConstellationButton; 