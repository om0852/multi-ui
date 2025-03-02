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

const expand = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
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

const Circle = styled.div<{ 
  $color: string; 
  $size: string;
  $index: number;
}>`
  position: absolute;
  width: ${props => props.$size};
  height: ${props => props.$size};
  border: 2px solid ${props => props.$color};
  border-radius: 50%;
  animation: ${expand} 2s ease-out infinite;
  animation-delay: ${props => props.$index * 0.3}s;
`;

const StaggeredCirclesLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const circles = Array.from({ length: 3 }, (_, i) => i);

  return (
    <Container $size={sizeValue} className={className}>
      {circles.map((_, index) => (
        <Circle
          key={index}
          $color={color}
          $size={sizeValue}
          $index={index}
        />
      ))}
    </Container>
  );
};

export default StaggeredCirclesLoader; 