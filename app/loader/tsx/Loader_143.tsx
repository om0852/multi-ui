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

const rotateHand = keyframes`
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
  border: 2px solid currentColor;
  border-radius: 50%;
`;

const ClockFace = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
`;

const Hand = styled.div<{ $color: string; $duration: number; $width: number; $length: number }>`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: ${props => props.$width}px;
  height: ${props => props.$length}%;
  background-color: ${props => props.$color};
  transform-origin: bottom center;
  border-radius: ${props => props.$width}px;
  animation: ${rotateHand} ${props => props.$duration}s linear infinite;
`;

const Dot = styled.div<{ $color: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${props => props.$color};
  border-radius: 50%;
  left: calc(50% - 4px);
  top: calc(50% - 4px);
`;

const ClockLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);

  return (
    <Container $size={sizeValue} className={className}>
      <ClockFace>
        <Hand $color={color} $duration={6} $width={2} $length={45} />
        <Hand $color={color} $duration={1} $width={2} $length={30} />
        <Dot $color={color} />
      </ClockFace>
    </Container>
  );
};

export default ClockLoader; 