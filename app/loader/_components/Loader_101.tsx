import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const orbitAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.5;
  }
`;

const starTwinkle = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.5);
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

const LoaderContainer = styled.div<{ $size: string; $color: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CentralStar = styled.div<{ $size: string; $color: string }>`
  width: ${props => `calc(${props.$size} * 0.2)`};
  height: ${props => `calc(${props.$size} * 0.2)`};
  background: ${props => props.$color};
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 0 20px ${props => props.$color},
              0 0 60px ${props => props.$color}40;
  animation: ${pulseAnimation} 2s ease-in-out infinite;
  z-index: 2;
`;

const OrbitRing = styled.div<{ $size: string; $color: string; $duration: string; $delay: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid ${props => props.$color}20;
  border-radius: 50%;
  animation: ${orbitAnimation} ${props => props.$duration} linear infinite;
  animation-delay: ${props => props.$delay};

  &::before {
    content: '';
    position: absolute;
    width: ${props => `calc(${props.$size} * 0.1)`};
    height: ${props => `calc(${props.$size} * 0.1)`};
    background: ${props => props.$color};
    border-radius: 50%;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px ${props => props.$color};
  }
`;

const StarField = styled.div<{ $size: string }>`
  position: absolute;
  width: 100%;
  height: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    animation: ${starTwinkle} 1.5s ease-in-out infinite;
  }

  &::before {
    top: 20%;
    left: 20%;
    animation-delay: 0.5s;
  }

  &::after {
    bottom: 20%;
    right: 20%;
    animation-delay: 1s;
  }
`;

const CosmicLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);

  return (
    <LoaderContainer $size={sizeValue} $color={color} className={className}>
      <StarField $size={sizeValue} />
      <OrbitRing $size={sizeValue} $color={color} $duration="3s" $delay="0s" />
      <OrbitRing $size={sizeValue} $color={color} $duration="5s" $delay="0.5s" style={{ transform: 'rotate(60deg)' }} />
      <OrbitRing $size={sizeValue} $color={color} $duration="7s" $delay="1s" style={{ transform: 'rotate(-60deg)' }} />
      <CentralStar $size={sizeValue} $color={color} />
    </LoaderContainer>
  );
};

export default CosmicLoader; 