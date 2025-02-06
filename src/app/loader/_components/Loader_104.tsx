import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const morph = keyframes`
  0%, 100% {
    border-radius: 50%;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 0;
    transform: rotate(90deg);
  }
  50% {
    border-radius: 25%;
    transform: rotate(180deg);
  }
  75% {
    border-radius: 10px;
    transform: rotate(270deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.8;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
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
  animation: ${float} 3s ease-in-out infinite;
`;

const Shape = styled.div<{ $color: string; $delay: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid ${props => props.$color};
  animation: 
    ${morph} 4s ease-in-out infinite,
    ${pulse} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border: 3px solid transparent;
    background: linear-gradient(45deg, ${props => props.$color}40, transparent) border-box;
    -webkit-mask: 
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    animation: ${morph} 4s ease-in-out infinite;
    animation-delay: ${props => props.$delay}s;
  }
`;

const GeometricLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const shapes = Array.from({ length: 3 }, (_, i) => ({
    delay: i * 0.5,
    scale: 1 - (i * 0.2)
  }));

  return (
    <Container $size={sizeValue} className={className}>
      {shapes.map((shape, index) => (
        <Shape
          key={index}
          $color={color}
          $delay={shape.delay}
          style={{
            transform: `scale(${shape.scale})`
          }}
        />
      ))}
    </Container>
  );
};

export default GeometricLoader; 