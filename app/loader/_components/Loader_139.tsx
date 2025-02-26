import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
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

const Circle = styled.div<{ $color: string; $delay: number }>`
  position: absolute;
  border: 2px solid ${props => props.$color};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: ${ripple} 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  animation-delay: ${props => props.$delay}s;
`;

const CenterDot = styled.div<{ $color: string }>`
  width: 15%;
  height: 15%;
  background-color: ${props => props.$color};
  border-radius: 50%;
`;

const RippleLoader: React.FC<LoaderProps> = ({
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
          $delay={index * 0.5}
        />
      ))}
      <CenterDot $color={color} />
    </Container>
  );
};

export default RippleLoader;