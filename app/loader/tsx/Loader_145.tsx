import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.3);
    opacity: 0.3;
  }
`;

const Container = styled.div<{ $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div<{ 
  $color: string; 
  $index: number; 
  $total: number;
  $radius: number;
}>`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${props => props.$color};
  border-radius: 50%;
  animation: ${pulse} 1.2s ease-in-out infinite;
  animation-delay: ${props => (props.$index / props.$total) * 1.2}s;
  transform-origin: center center;
  left: calc(50% - 4px);
  top: calc(50% - 4px);
  transform: rotate(${props => (props.$index * 360) / props.$total}deg) 
             translateY(${props => props.$radius}px);
`;

const SpiralDotsLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const dots = Array.from({ length: 12 }, (_, i) => i);
  const radius = parseInt(sizeValue) * 0.35;

  return (
    <Container $size={sizeValue} className={className}>
      {dots.map((_, index) => (
        <Dot
          key={index}
          $color={color}
          $index={index}
          $total={dots.length}
          $radius={radius}
        />
      ))}
    </Container>
  );
};

export default SpiralDotsLoader; 