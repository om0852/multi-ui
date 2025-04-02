import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(0.9);
    opacity: 1;
  }
`;

const colorShift = keyframes`
  0%, 100% {
    filter: hue-rotate(0deg) brightness(1);
  }
  50% {
    filter: hue-rotate(30deg) brightness(1.2);
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
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  overflow: hidden;
`;

const KaleidoscopeLayer = styled.div<{ 
  $color: string;
  $rotation: number;
  $scale: number;
  $delay: number;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: 
    ${rotate} ${props => 6 - props.$delay}s linear infinite,
    ${colorShift} 4s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  transform: rotate(${props => props.$rotation}deg) scale(${props => props.$scale});

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    background: ${props => props.$color};
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    animation: ${pulse} 2s ease-in-out infinite;
    animation-delay: ${props => props.$delay}s;
  }

  &::before {
    top: 0;
    left: 25%;
    transform-origin: bottom center;
  }

  &::after {
    top: 50%;
    left: 25%;
    transform: rotate(180deg);
    transform-origin: top center;
    opacity: 0.7;
  }
`;

const GlowEffect = styled.div<{ $color: string }>`
  position: absolute;
  inset: -20%;
  background: radial-gradient(
    circle at center,
    ${props => props.$color}40 0%,
    transparent 70%
  );
  animation: ${pulse} 4s ease-in-out infinite;
  pointer-events: none;
  mix-blend-mode: screen;
`;

const KaleidoscopeLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const layers = Array.from({ length: 6 }, (_, i) => ({
    rotation: (360 / 6) * i,
    scale: 1 - (i * 0.1),
    delay: i * 0.2
  }));

  return (
    <Container $size={sizeValue} className={className}>
      {layers.map((layer, index) => (
        <KaleidoscopeLayer
          key={index}
          $color={color}
          $rotation={layer.rotation}
          $scale={layer.scale}
          $delay={layer.delay}
        />
      ))}
      <GlowEffect $color={color} />
    </Container>
  );
};

export default KaleidoscopeLoader; 