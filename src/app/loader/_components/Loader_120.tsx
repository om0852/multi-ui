import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const energyPulse = keyframes`
  0%, 100% {
    transform: scale(0.8);
    filter: brightness(1) blur(2px);
  }
  50% {
    transform: scale(1.1);
    filter: brightness(1.3) blur(4px);
  }
`;

const plasmaFlow = keyframes`
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% {
    border-radius: 40% 60% 30% 70% / 70% 30% 50% 40%;
  }
  75% {
    border-radius: 60% 40% 70% 30% / 30% 70% 40% 60%;
  }
`;

const energyField = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const particleFloat = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(var(--tx), var(--ty)) scale(1.2);
    opacity: 1;
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

const PlasmaCore = styled.div<{ $color: string }>`
  width: 50%;
  height: 50%;
  background: ${props => props.$color};
  position: relative;
  animation: 
    ${energyPulse} 2s ease-in-out infinite,
    ${plasmaFlow} 6s ease-in-out infinite;
  filter: blur(2px);

  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    background: ${props => props.$color}40;
    border-radius: inherit;
    filter: blur(6px);
  }
`;

const EnergyField = styled.div<{ $color: string; $reverse?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-radius: 50%;
  animation: ${energyField} 4s linear infinite;
  animation-direction: ${props => props.$reverse ? 'reverse' : 'normal'};

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid transparent;
    border-radius: inherit;
    background: linear-gradient(
      45deg,
      ${props => props.$color}00,
      ${props => props.$color}40,
      ${props => props.$color}00
    ) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
                 linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

const EnergyParticle = styled.div<{ 
  $color: string;
  $size: number;
  $tx: number;
  $ty: number;
  $delay: number;
}>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  --tx: ${props => props.$tx}px;
  --ty: ${props => props.$ty}px;
  animation: ${particleFloat} 3s ease-in-out infinite;
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

const PlasmaLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const numSize = parseInt(sizeValue);

  const energyFields = Array.from({ length: 3 }, (_, i) => ({
    reverse: i % 2 === 0
  }));

  const particles = Array.from({ length: 15 }, (_, i) => ({
    size: Math.random() * 4 + 2,
    tx: (Math.random() - 0.5) * numSize * 0.5,
    ty: (Math.random() - 0.5) * numSize * 0.5,
    delay: Math.random() * 2
  }));

  return (
    <Container $size={sizeValue} className={className}>
      {energyFields.map((field, index) => (
        <EnergyField
          key={`field-${index}`}
          $color={color}
          $reverse={field.reverse}
        />
      ))}
      <PlasmaCore $color={color} />
      {particles.map((particle, index) => (
        <EnergyParticle
          key={`particle-${index}`}
          $color={color}
          $size={particle.size}
          $tx={particle.tx}
          $ty={particle.ty}
          $delay={particle.delay}
        />
      ))}
    </Container>
  );
};

export default PlasmaLoader; 