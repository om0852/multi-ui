import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const burst = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
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

const Star = styled.div<{ $color: string; $size: string; $points: number }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  animation: ${rotate} 3s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.$color};
    clip-path: polygon(
      ${props => {
        const points: string[] = [];
        for (let i = 0; i < props.$points * 2; i++) {
          const radius = i % 2 === 0 ? 50 : 20;
          const angle = (i * 360) / (props.$points * 2);
          const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
          const y = 50 + Math.sin((angle * Math.PI) / 180) * radius;
          points.push(`${x}% ${y}%`);
        }
        return points.join(', ');
      }}
    );
    animation: ${burst} 2s ease-in-out infinite;
  }
`;

const StarBurstLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const starSize = parseInt(sizeValue) * 0.8 + 'px';

  return (
    <Container $size={sizeValue} className={className}>
      <Star $color={color} $size={starSize} $points={8} />
    </Container>
  );
};

export default StarBurstLoader; 