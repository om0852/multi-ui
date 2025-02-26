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

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const scale = keyframes`
  0%, 100% {
    transform: scale(0.3);
  }
  50% {
    transform: scale(1);
  }
`;

const Container = styled.div<{ $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 3s linear infinite;
`;

const Square = styled.div<{ $color: string; $index: number }>`
  position: absolute;
  width: 30%;
  height: 30%;
  background-color: ${props => props.$color};
  opacity: ${props => 1 - props.$index * 0.2};
  animation: ${scale} 2s ease-in-out infinite;
  animation-delay: ${props => props.$index * 0.2}s;
  transform-origin: center center;
  transform: rotate(${props => props.$index * 45}deg) translateX(100%);
`;

const RotatingSquaresLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const squares = Array.from({ length: 4 }, (_, i) => i);

  return (
    <Container $size={sizeValue} className={className}>
      {squares.map((_, index) => (
        <Square
          key={index}
          $color={color}
          $index={index}
        />
      ))}
    </Container>
  );
};

export default RotatingSquaresLoader; 