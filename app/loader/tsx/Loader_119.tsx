import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const spiral = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.5);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const particleSpin = keyframes`
  0% {
    transform: rotate(0deg) translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg) translateY(-20px) scale(0);
    opacity: 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    filter: brightness(1) blur(0px);
  }
  50% {
    filter: brightness(1.5) blur(2px);
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
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  overflow: hidden;
`;

const VortexRing = styled.div<{ 
  $color: string;
  $size: number;
  $delay: number;
  $reverse?: boolean;
}>`
  position: absolute;
  width: ${props => props.$size}%;
  height: ${props => props.$size}%;
  border: 2px solid ${props => props.$color};
  border-radius: 50%;
  animation: ${spiral} 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${props => props.$delay}s;
  animation-direction: ${props => props.$reverse ? 'reverse' : 'normal'};

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid transparent;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      ${props => props.$color}40,
      transparent
    ) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
                 linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

const Particle = styled.div<{ 
  $color: string;
  $angle: number;
  $delay: number;
  $size: number;
}>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  transform-origin: center 150%;
  transform: rotate(${props => props.$angle}deg);
  animation: ${particleSpin} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${props => props.$delay}s;
  filter: blur(1px);

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: inherit;
    border-radius: inherit;
    filter: blur(2px);
    opacity: 0.5;
  }
`;

const Core = styled.div<{ $color: string }>`
  position: absolute;
  width: 20%;
  height: 20%;
  background: ${props => props.$color};
  border-radius: 50%;
  animation: ${glow} 2s ease-in-out infinite;
  filter: blur(2px);

  &::before {
    content: '';
    position: absolute;
    inset: -50%;
    background: radial-gradient(
      circle at center,
      ${props => props.$color}40,
      transparent 70%
    );
  }
`;

const VortexLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const rings = Array.from({ length: 5 }, (_, i) => ({
    size: 100 - i * 15,
    delay: i * 0.2,
    reverse: i % 2 === 0
  }));

  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (360 / 12) * i,
    delay: (i * 0.1) % 1,
    size: Math.max(3, 6 - (i % 3))
  }));

  return (
    <Container $size={sizeValue} className={className}>
      {rings.map((ring, index) => (
        <VortexRing
          key={`ring-${index}`}
          $color={color}
          $size={ring.size}
          $delay={ring.delay}
          $reverse={ring.reverse}
        />
      ))}
      {particles.map((particle, index) => (
        <Particle
          key={`particle-${index}`}
          $color={color}
          $angle={particle.angle}
          $delay={particle.delay}
          $size={particle.size}
        />
      ))}
      <Core $color={color} />
    </Container>
  );
};

export default VortexLoader; 