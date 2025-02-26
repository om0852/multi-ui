import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const rotate = keyframes`
  0% {
    transform: rotateX(-37.5deg) rotateY(45deg);
  }
  50% {
    transform: rotateX(-37.5deg) rotateY(225deg);
  }
  100% {
    transform: rotateX(-37.5deg) rotateY(405deg);
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
  perspective: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cube = styled.div<{ $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotate} 2s ease-in-out infinite;
`;

const Face = styled.div<{ $color: string; $transform: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => props.$color};
  opacity: 0.8;
  transform: ${props => props.$transform};
`;

const CubeLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const cubeSize = parseInt(sizeValue) * 0.4 + 'px';

  return (
    <Container $size={sizeValue} className={className}>
      <Cube $size={cubeSize}>
        <Face $color={color} $transform="translateZ(calc(${cubeSize} / 2))" />
        <Face $color={color} $transform="rotateY(180deg) translateZ(calc(${cubeSize} / 2))" />
        <Face $color={color} $transform="rotateY(90deg) translateZ(calc(${cubeSize} / 2))" />
        <Face $color={color} $transform="rotateY(-90deg) translateZ(calc(${cubeSize} / 2))" />
        <Face $color={color} $transform="rotateX(90deg) translateZ(calc(${cubeSize} / 2))" />
        <Face $color={color} $transform="rotateX(-90deg) translateZ(calc(${cubeSize} / 2))" />
      </Cube>
    </Container>
  );
};

export default CubeLoader; 