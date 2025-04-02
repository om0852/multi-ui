import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const moveAlongInfinity = keyframes`
  0% {
    offset-distance: 0%;
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    offset-distance: 100%;
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

const InfinityPath = styled.path<{ $color: string }>`
  fill: none;
  stroke: ${props => props.$color};
  stroke-width: 2;
  opacity: 0.3;
`;

const Dot = styled.div<{ $color: string; $delay: number }>`
  width: 12%;
  height: 12%;
  background-color: ${props => props.$color};
  border-radius: 50%;
  position: absolute;
  offset-path: path('M 20,50 C 20,20 50,20 50,50 C 50,80 80,80 80,50 C 80,20 50,20 50,50 C 50,80 20,80 20,50 Z');
  animation: ${moveAlongInfinity} 3s linear infinite;
  animation-delay: ${props => props.$delay}s;
`;

const InfinityLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const dots = Array.from({ length: 3 }, (_, i) => i);

  return (
    <Container $size={sizeValue} className={className}>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <InfinityPath
          $color={color}
          d="M 20,50 C 20,20 50,20 50,50 C 50,80 80,80 80,50 C 80,20 50,20 50,50 C 50,80 20,80 20,50 Z"
        />
      </svg>
      {dots.map((_, index) => (
        <Dot
          key={index}
          $color={color}
          $delay={index * 0.5}
        />
      ))}
    </Container>
  );
};

export default InfinityLoader; 