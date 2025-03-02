import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const expand = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const particleDrift = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty));
    opacity: 0;
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

const Ring = styled.div<{ $color: string; $delay: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid ${props => props.$color};
  border-radius: 50%;
  animation: ${expand} 2s ease-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;
`;

const CoreRing = styled.div<{ $color: string }>`
  position: absolute;
  width: 40%;
  height: 40%;
  border: 4px solid ${props => props.$color};
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 4px solid transparent;
    border-radius: 50%;
  }

  &::before {
    border-top-color: ${props => props.$color};
    animation: ${rotate} 3s linear infinite;
  }

  &::after {
    border-bottom-color: ${props => props.$color};
    animation: ${rotate} 1.5s linear infinite reverse;
  }
`;

const Particle = styled.div<{ $color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 50%;
  animation: ${particleDrift} 1.5s ease-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    filter: blur(2px);
  }
`;

const PulseRingLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const rings = Array.from({ length: 3 }, (_, i) => ({
    delay: i * 0.3
  }));

  const particles = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30) * Math.PI / 180;
    const distance = 20;
    return {
      style: {
        '--tx': `${Math.cos(angle) * distance}px`,
        '--ty': `${Math.sin(angle) * distance}px`,
        left: '50%',
        top: '50%',
        transform: `rotate(${angle}rad)`,
        animationDelay: `${(i * 0.1)}s`
      }
    };
  });

  return (
    <Container $size={sizeValue} className={className}>
      {rings.map((ring, index) => (
        <Ring key={index} $color={color} $delay={ring.delay} />
      ))}
      <CoreRing $color={color} />
      {particles.map((particle, index) => (
        <Particle
          key={`particle-${index}`}
          $color={color}
          style={particle.style as React.CSSProperties}
        />
      ))}
    </Container>
  );
};

export default PulseRingLoader; 