import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const morph = keyframes`
  0%, 100% {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform: rotate(0deg);
  }
  33% {
    clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
    transform: rotate(120deg);
  }
  66% {
    clip-path: polygon(50% 100%, 100% 0%, 0% 0%);
    transform: rotate(240deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
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

const MorphingTriangle = styled.div<{ $color: string; $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  background-color: ${props => props.$color};
  animation: ${morph} 3s ease-in-out infinite,
             ${pulse} 3s ease-in-out infinite;
`;

const TriangleMorphLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const triangleSize = parseInt(sizeValue) * 0.6 + 'px';

  return (
    <Container $size={sizeValue} className={className}>
      <MorphingTriangle $color={color} $size={triangleSize} />
    </Container>
  );
};

export default TriangleMorphLoader; 