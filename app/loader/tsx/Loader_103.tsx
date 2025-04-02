import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const wave = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  25% {
    transform: translateY(-15px) scale(1.1);
  }
  50% {
    transform: translateY(0) scale(1);
  }
  75% {
    transform: translateY(15px) scale(0.9);
  }
`;

const orbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(0) rotate(0deg);
  }
  30% {
    transform: rotate(120deg) translateX(20px) rotate(-120deg);
  }
  70% {
    transform: rotate(240deg) translateX(-20px) rotate(-240deg);
  }
  100% {
    transform: rotate(360deg) translateX(0) rotate(-360deg);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px currentColor;
  }
  50% {
    box-shadow: 0 0 40px currentColor;
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

const Core = styled.div<{ $color: string }>`
  width: 20%;
  height: 20%;
  background: ${props => props.$color};
  border-radius: 50%;
  position: relative;
  animation: ${glow} 2s ease-in-out infinite;
  color: ${props => props.$color};

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    border: 2px solid currentColor;
    border-radius: 50%;
    opacity: 0.3;
  }
`;

const Particle = styled.div<{ $color: string; $delay: number; $scale: number }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${props => props.$color};
  border-radius: 50%;
  animation: 
    ${wave} 2s ease-in-out infinite,
    ${orbit} 4s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  transform: scale(${props => props.$scale});
  filter: blur(1px);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${props => props.$color}40;
    border-radius: 50%;
    z-index: -1;
    animation: ${glow} 2s ease-in-out infinite;
    animation-delay: ${props => props.$delay}s;
  }
`;

const QuantumLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const particles = Array.from({ length: 6 }, (_, i) => ({
    delay: i * 0.3,
    scale: 1 - (i * 0.1)
  }));

  return (
    <Container $size={sizeValue} className={className}>
      <Core $color={color} />
      {particles.map((particle, index) => (
        <Particle
          key={index}
          $color={color}
          $delay={particle.delay}
          $scale={particle.scale}
          style={{
            transform: `rotate(${index * 60}deg) translateX(${sizeValue}/4)`
          }}
        />
      ))}
    </Container>
  );
};

export default QuantumLoader; 