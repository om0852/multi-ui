import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const grow = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const shimmer = keyframes`
  0%, 100% {
    opacity: 0.5;
    filter: brightness(1);
  }
  50% {
    opacity: 1;
    filter: brightness(1.3);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const getSizeValue = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return '60px';
    case 'large':
      return '120px';
    default:
      return '80px';
  }
};

const Container = styled.div<{ $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Crystal = styled.div<{ 
  $color: string;
  $angle: number;
  $delay: number;
  $size: number;
}>`
  position: absolute;
  width: ${props => props.$size}%;
  height: ${props => props.$size}%;
  background: ${props => props.$color}40;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transform-origin: center;
  transform: rotate(${props => props.$angle}deg);
  animation: ${grow} 2s ease-out forwards;
  animation-delay: ${props => props.$delay}s;
  backdrop-filter: blur(2px);

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    background: ${props => props.$color}20;
    clip-path: inherit;
    animation: ${shimmer} 3s ease-in-out infinite;
    animation-delay: ${props => props.$delay}s;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      45deg,
      transparent,
      ${props => props.$color}60,
      transparent
    );
    clip-path: inherit;
    animation: ${rotate} 4s linear infinite;
    animation-delay: ${props => props.$delay}s;
  }
`;

const Core = styled.div<{ $color: string }>`
  position: absolute;
  width: 20%;
  height: 20%;
  background: ${props => props.$color};
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: ${shimmer} 2s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: ${props => props.$color}40;
    clip-path: inherit;
    filter: blur(4px);
  }
`;

const CrystalLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const crystals = [
    { angle: 0, delay: 0, size: 90 },
    { angle: 45, delay: 0.2, size: 70 },
    { angle: 90, delay: 0.4, size: 50 },
    { angle: 135, delay: 0.6, size: 40 },
    { angle: 180, delay: 0.8, size: 30 },
    { angle: 225, delay: 1.0, size: 25 },
    { angle: 270, delay: 1.2, size: 20 },
    { angle: 315, delay: 1.4, size: 15 }
  ];

  return (
    <Container $size={sizeValue} className={className}>
      {crystals.map((crystal, index) => (
        <Crystal
          key={index}
          $color={color}
          $angle={crystal.angle}
          $delay={crystal.delay}
          $size={crystal.size}
        />
      ))}
      <Core $color={color} />
    </Container>
  );
};

export default CrystalLoader; 