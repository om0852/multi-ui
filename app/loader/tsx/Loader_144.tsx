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

const bounce = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.3);
    opacity: 0.5;
  }
`;

const Container = styled.div<{ $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 4px;
  padding: 4px;
`;

const Cell = styled.div<{ $color: string; $delay: number }>`
  background-color: ${props => props.$color};
  border-radius: 2px;
  animation: ${bounce} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const BouncingGridLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const cells = Array.from({ length: 9 }, (_, i) => i);

  const getDelay = (index: number) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return (row + col) * 0.1;
  };

  return (
    <Container $size={sizeValue} className={className}>
      {cells.map((_, index) => (
        <Cell
          key={index}
          $color={color}
          $delay={getDelay(index)}
        />
      ))}
    </Container>
  );
};

export default BouncingGridLoader; 