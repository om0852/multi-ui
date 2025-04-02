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

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.8;
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

const Ring = styled.div<{ $color: string; $size: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${pulse} 2s ease-in-out infinite;

  svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: ${props => props.$color};
    stroke-width: 4;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

const InnerCircle = styled.div<{ $color: string }>`
  position: absolute;
  width: 20%;
  height: 20%;
  background-color: ${props => props.$color};
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
`;

const PulseRingLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);

  return (
    <Container $size={sizeValue} className={className}>
      <Ring $color={color} $size={sizeValue}>
        <svg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" />
        </svg>
        <InnerCircle $color={color} />
      </Ring>
    </Container>
  );
};

export default PulseRingLoader; 