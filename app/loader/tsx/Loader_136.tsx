import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const rotateClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotateCounterClockwise = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Gear = styled.div<{ $color: string; $size: string; $isClockwise: boolean; $position?: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  background-color: ${props => props.$color};
  border-radius: 50%;
  position: absolute;
  ${props => props.$position && props.$position};
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: inherit;
    clip-path: polygon(
      20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%
    );
  }

  animation: ${props => props.$isClockwise ? rotateClockwise : rotateCounterClockwise} 4s linear infinite;
`;

const GearLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const numSize = parseInt(sizeValue);
  const mainGearSize = numSize * 0.5 + 'px';
  const smallGearSize = numSize * 0.3 + 'px';

  return (
    <Container $size={sizeValue} className={className}>
      <Gear $color={color} $size={mainGearSize} $isClockwise={true} />
      <Gear 
        $color={color} 
        $size={smallGearSize} 
        $isClockwise={false}
        $position="top: 5%; right: 5%;"
      />
      <Gear 
        $color={color} 
        $size={smallGearSize} 
        $isClockwise={false}
        $position="bottom: 5%; left: 5%;"
      />
    </Container>
  );
};

export default GearLoader;