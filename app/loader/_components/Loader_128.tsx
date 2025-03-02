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

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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

const Ring = styled.div<{ 
  $size: number; 
  $color: string; 
  $direction: 'clockwise' | 'counterclockwise';
  $duration: number;
}>`
  position: absolute;
  width: ${props => props.$size}%;
  height: ${props => props.$size}%;
  border: 2px solid transparent;
  border-top-color: ${props => props.$color};
  border-radius: 50%;
  animation: ${spin} ${props => props.$duration}s linear infinite;
  animation-direction: ${props => props.$direction === 'clockwise' ? 'normal' : 'reverse'};
`;

const SpinningRingsLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);

  return (
    <Container $size={sizeValue} className={className}>
      <Ring $size={100} $color={color} $direction="clockwise" $duration={2} />
      <Ring $size={75} $color={color} $direction="counterclockwise" $duration={1.5} />
      <Ring $size={50} $color={color} $direction="clockwise" $duration={1} />
    </Container>
  );
};

export default SpinningRingsLoader; 