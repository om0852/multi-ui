import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const rotateHand = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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
  border: 3px solid;
  border-color: ${props => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClockHand = styled.div<{ $color: string; $duration: number; $width: string; $height: string }>`
  position: absolute;
  width: ${props => props.$width};
  height: ${props => props.$height};
  background-color: ${props => props.$color};
  border-radius: 2px;
  transform-origin: bottom center;
  animation: ${rotateHand} ${props => props.$duration}s linear infinite;
`;

const Center = styled.div<{ $color: string }>`
  width: 8%;
  height: 8%;
  background-color: ${props => props.$color};
  border-radius: 50%;
  position: absolute;
`;

const ClockLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);

  return (
    <Container $size={sizeValue} className={className} color={color}>
      <ClockHand $color={color} $duration={6} $width="2px" $height="35%" />
      <ClockHand $color={color} $duration={1} $width="2px" $height="25%" />
      <Center $color={color} />
    </Container>
  );
};

export default ClockLoader; 