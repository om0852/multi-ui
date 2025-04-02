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

const morph = keyframes`
  0% {
    border-radius: 50%;
    transform: rotate(0deg) scale(1);
  }
  25% {
    border-radius: 0;
    transform: rotate(90deg) scale(0.8);
  }
  50% {
    border-radius: 25%;
    transform: rotate(180deg) scale(1.2);
  }
  75% {
    border-radius: 0;
    transform: rotate(270deg) scale(0.8);
  }
  100% {
    border-radius: 50%;
    transform: rotate(360deg) scale(1);
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

const Shape = styled.div<{ $color: string; $delay: number }>`
  position: absolute;
  width: 40%;
  height: 40%;
  background-color: ${props => props.$color};
  animation: ${morph} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: 0.7;
`;

const MorphingLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const shapes = Array.from({ length: 3 }, (_, i) => i);

  return (
    <Container $size={sizeValue} className={className}>
      {shapes.map((_, index) => (
        <Shape
          key={index}
          $color={color}
          $delay={index * 0.5}
        />
      ))}
    </Container>
  );
};

export default MorphingLoader; 