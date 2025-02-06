import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const wave = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-100%);
  }
  75% {
    transform: translateY(100%);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.5;
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

const WaveContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  animation: ${rotate} 12s linear infinite;
`;

const ParticleRing = styled.div<{ $index: number; $total: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%) rotate(${props => (360 / props.$total) * props.$index}deg);
`;

const Particle = styled.div<{ 
  $color: string;
  $delay: number;
  $size: number;
  $distance: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  transform: translate(-50%, -50%) translateX(${props => props.$distance}px);
  animation: 
    ${wave} 2s ease-in-out infinite,
    ${pulse} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${props => props.$color}40;
    border-radius: 50%;
    filter: blur(2px);
    z-index: -1;
  }
`;

const Core = styled.div<{ $color: string }>`
  position: absolute;
  width: 20%;
  height: 20%;
  background: ${props => props.$color};
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
  filter: blur(1px);

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: ${props => props.$color}20;
    border-radius: 50%;
    filter: blur(4px);
  }
`;

const ParticleWaveLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const numSize = parseInt(sizeValue);
  const numRings = 3;
  const particlesPerRing = 8;
  
  const rings = Array.from({ length: numRings }, (_, ringIndex) => {
    const distance = (numSize / 3) * (ringIndex + 1);
    const baseDelay = ringIndex * 0.2;
    
    return Array.from({ length: particlesPerRing }, (_, particleIndex) => ({
      delay: baseDelay + (particleIndex * 0.1),
      size: Math.max(4 - ringIndex, 2),
      distance
    }));
  });

  return (
    <Container $size={sizeValue} className={className}>
      <WaveContainer>
        {rings.map((ring, ringIndex) => (
          ring.map((particle, particleIndex) => (
            <ParticleRing
              key={`${ringIndex}-${particleIndex}`}
              $index={particleIndex}
              $total={particlesPerRing}
            >
              <Particle
                $color={color}
                $delay={particle.delay}
                $size={particle.size}
                $distance={particle.distance}
              />
            </ParticleRing>
          ))
        ))}
      </WaveContainer>
      <Core $color={color} />
    </Container>
  );
};

export default ParticleWaveLoader;