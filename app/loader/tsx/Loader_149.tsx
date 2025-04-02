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

const rotateOuter = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotateInner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
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

const Triangle = styled.div<{ 
  $color: string;
  $size: number;
  $isOuter: boolean;
}>`
  position: absolute;
  width: ${props => props.$size}%;
  height: ${props => props.$size * 0.866}%;
  animation: ${props => props.$isOuter ? rotateOuter : rotateInner} 3s linear infinite;
  opacity: ${props => props.$isOuter ? 0.7 : 1};

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: ${props => props.$size / 2}% solid transparent;
    border-right: ${props => props.$size / 2}% solid transparent;
    border-bottom: ${props => props.$size * 0.866}% solid ${props => props.$color};
  }
`;

const RotatingTrianglesLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);

  return (
    <Container $size={sizeValue} className={className}>
      <Triangle $color={color} $size={80} $isOuter={true} />
      <Triangle $color={color} $size={60} $isOuter={false} />
    </Container>
  );
};

export default RotatingTrianglesLoader; 