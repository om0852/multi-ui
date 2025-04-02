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

const wave = keyframes`
  0%, 100% {
    transform: scaleY(0.5);
  }
  50% {
    transform: scaleY(1.5);
  }
`;

const Container = styled.div<{ $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Bar = styled.div<{ $color: string; $delay: number }>`
  width: 12%;
  height: 40%;
  background-color: ${props => props.$color};
  border-radius: 4px;
  animation: ${wave} 1.2s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  transform-origin: center center;
`;

const WaveLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const bars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <Container $size={sizeValue} className={className}>
      {bars.map((_, index) => (
        <Bar
          key={index}
          $color={color}
          $delay={index * 0.1}
        />
      ))}
    </Container>
  );
};

export default WaveLoader; 