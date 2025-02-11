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

const ripple = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
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

const Container = styled.div<{ $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 12s linear infinite;
`;

const Hexagon = styled.div<{ 
  $color: string;
  $delay: number;
  $size: string;
}>`
  position: absolute;
  width: ${props => props.$size};
  height: calc(${props => props.$size} * 0.866);
  background-color: transparent;
  border: 2px solid ${props => props.$color};
  animation: ${ripple} 3s ease-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid ${props => props.$color};
    transform-origin: center;
  }

  &:before {
    transform: rotate(60deg);
  }

  &:after {
    transform: rotate(-60deg);
  }
`;

const HexagonRippleLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const baseSize = parseInt(sizeValue) * 0.3;
  const hexagons = Array.from({ length: 3 }, (_, i) => i);

  return (
    <Container $size={sizeValue} className={className}>
      {hexagons.map((_, index) => (
        <Hexagon
          key={index}
          $color={color}
          $delay={index * 0.8}
          $size={`${baseSize}px`}
        />
      ))}
    </Container>
  );
};

export default HexagonRippleLoader; 