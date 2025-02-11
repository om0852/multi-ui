import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const wave = keyframes`
  0%, 100% {
    transform: scaleY(0.5);
  }
  50% {
    transform: scaleY(1.5);
  }
`;

const glow = keyframes`
  0%, 100% {
    filter: brightness(1) blur(0px);
  }
  50% {
    filter: brightness(1.5) blur(1px);
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
  gap: 2px;
`;

const Bar = styled.div<{ 
  $color: string;
  $index: number;
  $height: number;
}>`
  width: 3px;
  height: ${props => props.$height}%;
  background: ${props => props.$color};
  border-radius: 2px;
  animation: ${wave} 1s ease-in-out infinite;
  animation-delay: ${props => props.$index * 0.1}s;
  transform-origin: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: inherit;
    filter: blur(1px);
    opacity: 0.7;
    animation: ${glow} 2s ease-in-out infinite;
    animation-delay: ${props => props.$index * 0.1}s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      ${props => props.$color},
      transparent
    );
    opacity: 0.3;
    filter: blur(2px);
  }
`;

const generateBars = () => {
  const baseHeights = [40, 60, 80, 90, 100, 90, 80, 60, 40];
  const randomizedHeights = baseHeights.map(height => ({
    height,
    variation: Math.random() * 20 - 10 // Random variation between -10 and 10
  }));
  return randomizedHeights;
};

const SoundWaveLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const bars = generateBars();

  return (
    <Container $size={sizeValue} className={className}>
      {bars.map((bar, index) => (
        <Bar
          key={index}
          $color={color}
          $index={index}
          $height={bar.height + bar.variation}
        />
      ))}
    </Container>
  );
};

export default SoundWaveLoader; 