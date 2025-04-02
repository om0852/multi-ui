import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
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
  perspective: 1000px;
`;

const Helix = styled.div<{ $color: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${rotate} 3s linear infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: ${props => props.$color};
    transform-origin: 50% 50%;
  }

  &::before {
    transform: translateX(-50%) rotateX(60deg);
  }

  &::after {
    transform: translateX(-50%) rotateX(-60deg);
  }
`;

const Base = styled.div<{ $index: number; $color: string }>`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.$color};
  left: calc(50% - 5px);
  transform-origin: 50% 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.$index * 0.1}s;
  box-shadow: 0 0 10px ${props => props.$color}80;
`;

const DNALoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const baseCount = 12;
  const bases = Array.from({ length: baseCount }, (_, i) => ({
    top: `${(i * 100) / baseCount}%`,
    transform: `rotateX(${(i * 360) / baseCount}deg) translateZ(20px)`
  }));

  return (
    <Container $size={sizeValue} className={className}>
      <Helix $color={color}>
        {bases.map((base, index) => (
          <Base
            key={index}
            $index={index}
            $color={color}
            style={{
              top: base.top,
              transform: base.transform
            }}
          />
        ))}
      </Helix>
    </Container>
  );
};

export default DNALoader; 