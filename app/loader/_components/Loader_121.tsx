import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const tunnel = keyframes`
  0% {
    transform: perspective(500px) translateZ(0px) rotateX(0deg);
  }
  100% {
    transform: perspective(500px) translateZ(200px) rotateX(360deg);
  }
`;

const distort = keyframes`
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
  }
  34% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
  }
`;

const starField = keyframes`
  0% {
    transform: translateZ(-100px) rotateX(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateZ(100px) rotateX(360deg);
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
  perspective: 1000px;
  transform-style: preserve-3d;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
`;

const WormholeRing = styled.div<{ 
  $color: string;
  $index: number;
  $total: number;
}>`
  position: absolute;
  width: ${props => 100 - (props.$index * (70 / props.$total))}%;
  height: ${props => 100 - (props.$index * (70 / props.$total))}%;
  border: 2px solid ${props => props.$color};
  border-radius: 50%;
  animation: ${tunnel} ${props => 3 + props.$index * 0.5}s linear infinite;
  transform-style: preserve-3d;
  opacity: ${props => 1 - (props.$index / props.$total) * 0.7};

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid transparent;
    border-radius: inherit;
    animation: ${distort} ${props => 4 + props.$index}s ease-in-out infinite;
    animation-delay: ${props => props.$index * -0.5}s;
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

const Star = styled.div<{ 
  $color: string;
  $size: number;
  $x: number;
  $y: number;
  $delay: number;
}>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  animation: ${starField} 2s linear infinite;
  animation-delay: ${props => props.$delay}s;
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: inherit;
    border-radius: inherit;
    filter: blur(1px);
  }
`;

const EventHorizon = styled.div<{ $color: string }>`
  position: absolute;
  width: 30%;
  height: 30%;
  background: radial-gradient(
    circle at center,
    ${props => props.$color},
    ${props => props.$color}00 70%
  );
  border-radius: 50%;
  filter: blur(5px);
  transform-style: preserve-3d;
  animation: ${distort} 4s ease-in-out infinite;
`;

const WormholeLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const rings = Array.from({ length: 6 }, (_, i) => ({
    index: i,
    total: 6
  }));

  const stars = Array.from({ length: 20 }, () => ({
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <Container $size={sizeValue} className={className}>
      {rings.map((ring) => (
        <WormholeRing
          key={ring.index}
          $color={color}
          $index={ring.index}
          $total={ring.total}
        />
      ))}
      {stars.map((star, index) => (
        <Star
          key={index}
          $color={color}
          $size={star.size}
          $x={star.x}
          $y={star.y}
          $delay={star.delay}
        />
      ))}
      <EventHorizon $color={color} />
    </Container>
  );
};

export default WormholeLoader; 