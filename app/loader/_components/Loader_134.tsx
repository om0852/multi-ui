import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const stagger = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-15px);
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Dot = styled.div<{ $color: string; $size: string; $delay: number }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  background-color: ${props => props.$color};
  border-radius: 50%;
  animation: ${stagger} 1s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const StaggeredDotsLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const dotSize = parseInt(sizeValue) * 0.15 + 'px';
  const dots = Array.from({ length: 5 }, (_, i) => i);

  return (
    <Container $size={sizeValue} className={className}>
      {dots.map((_, index) => (
        <Dot
          key={index}
          $color={color}
          $size={dotSize}
          $delay={index * 0.15}
        />
      ))}
    </Container>
  );
};

export default StaggeredDotsLoader; 