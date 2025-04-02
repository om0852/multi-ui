import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
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
`;

const Hexagon = styled.div<{ $color: string; $delay: number; $rotation: number }>`
  position: absolute;
  width: 20%;
  height: 20%;
  background-color: ${props => props.$color};
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  transform: rotate(${props => props.$rotation}deg) translateX(100%);
`;

const CenterHexagon = styled.div<{ $color: string }>`
  width: 25%;
  height: 25%;
  background-color: ${props => props.$color};
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

const HexagonLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const hexagons = Array.from({ length: 6 }, (_, i) => i);

  return (
    <Container $size={sizeValue} className={className}>
      <CenterHexagon $color={color} />
      {hexagons.map((_, index) => (
        <Hexagon
          key={index}
          $color={color}
          $delay={index * 0.2}
          $rotation={index * 60}
        />
      ))}
    </Container>
  );
};

export default HexagonLoader; 