import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const neonPulse = keyframes`
  0%, 100% {
    filter: brightness(1) drop-shadow(0 0 5px currentColor);
    transform: scale(1);
  }
  50% {
    filter: brightness(1.5) drop-shadow(0 0 20px currentColor);
    transform: scale(0.98);
  }
`;

const electricFlow = keyframes`
  0% {
    stroke-dashoffset: 1000;
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
`;

const flicker = keyframes`
  0%, 100% {
    opacity: 1;
  }
  41.99% {
    opacity: 1;
  }
  42% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  43.01% {
    opacity: 1;
  }
  47.99% {
    opacity: 1;
  }
  48% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  49.01% {
    opacity: 1;
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
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
`;

const NeonShape = styled.div<{ $color: string }>`
  width: 60%;
  height: 60%;
  border: 4px solid ${props => props.$color};
  border-radius: 12px;
  position: relative;
  animation: ${neonPulse} 2s ease-in-out infinite;
  color: ${props => props.$color};

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border: 4px solid transparent;
    border-radius: 12px;
  }

  &::before {
    border-top-color: currentColor;
    border-right-color: currentColor;
    animation: ${flicker} 2s linear infinite;
  }

  &::after {
    border-bottom-color: currentColor;
    border-left-color: currentColor;
    animation: ${flicker} 2s linear infinite reverse;
    animation-delay: 0.5s;
  }
`;

const SVGContainer = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ElectricPath = styled.path<{ $color: string; $delay: number }>`
  stroke: ${props => props.$color};
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 1000;
  stroke-linecap: round;
  animation: ${electricFlow} 3s linear infinite;
  animation-delay: ${props => props.$delay}s;
  filter: drop-shadow(0 0 2px ${props => props.$color});
`;

const generateElectricPath = (size: number): string => {
  const points = [];
  const segments = 8;
  const radius = size * 0.4;
  
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const variance = Math.random() * 10 - 5;
    const x = size / 2 + Math.cos(angle) * (radius + variance);
    const y = size / 2 + Math.sin(angle) * (radius + variance);
    points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
  }
  
  return points.join(' ') + ' Z';
};

const NeonLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const numSize = parseInt(sizeValue);
  const paths = Array.from({ length: 3 }, (_, i) => ({
    path: generateElectricPath(numSize),
    delay: i * 0.5
  }));

  return (
    <Container $size={sizeValue} className={className}>
      <SVGContainer viewBox={`0 0 ${numSize} ${numSize}`}>
        {paths.map((path, index) => (
          <ElectricPath
            key={index}
            d={path.path}
            $color={color}
            $delay={path.delay}
          />
        ))}
      </SVGContainer>
      <NeonShape $color={color} />
    </Container>
  );
};

export default NeonLoader; 