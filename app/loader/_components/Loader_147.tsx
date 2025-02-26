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

const swingLeft = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-45deg); }
  50% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const swingRight = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(0deg); }
  50% { transform: rotate(45deg); }
  75% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const Container = styled.div<{ $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 4px;
  background-color: currentColor;
  position: absolute;
  top: 20%;
`;

const Ball = styled.div<{ 
  $color: string;
  $position: 'first' | 'middle' | 'last';
}>`
  width: 20%;
  aspect-ratio: 1;
  background-color: ${props => props.$color};
  border-radius: 50%;
  position: absolute;
  top: 20%;
  transform-origin: top center;
  animation: ${props => {
    switch (props.$position) {
      case 'first':
        return swingLeft;
      case 'last':
        return swingRight;
      default:
        return 'none';
    }
  }} 1.4s ease-in-out infinite;
  margin-top: 20px;
  
  &:before {
    content: '';
    position: absolute;
    width: 2px;
    height: 20px;
    background-color: currentColor;
    top: -20px;
    left: calc(50% - 1px);
  }
`;

const NewtonsCradleLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);

  return (
    <Container $size={sizeValue} className={className}>
      <Line />
      <div style={{ display: 'flex', gap: '2px', position: 'relative' }}>
        <Ball $color={color} $position="first" />
        <Ball $color={color} $position="middle" />
        <Ball $color={color} $position="middle" />
        <Ball $color={color} $position="middle" />
        <Ball $color={color} $position="last" />
      </div>
    </Container>
  );
};

export default NewtonsCradleLoader; 