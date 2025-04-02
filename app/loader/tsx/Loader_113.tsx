import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const twinkle = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.7);
  }
`;

const flow = keyframes`
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: -100;
  }
`;

const drift = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(2px, 2px);
  }
  50% {
    transform: translate(0, 4px);
  }
  75% {
    transform: translate(-2px, 2px);
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
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const SVGContainer = styled.svg`
  width: 100%;
  height: 100%;
  animation: ${drift} 8s ease-in-out infinite;
`;

const Star = styled.circle<{ $color: string; $delay: number }>`
  fill: ${props => props.$color};
  animation: ${twinkle} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  filter: drop-shadow(0 0 2px ${props => props.$color});
`;

const Connection = styled.path<{ $color: string }>`
  stroke: ${props => props.$color};
  stroke-width: 1;
  stroke-dasharray: 100;
  fill: none;
  opacity: 0.3;
  animation: ${flow} 3s linear infinite;
  filter: drop-shadow(0 0 1px ${props => props.$color});
`;

const Particle = styled.div<{ $color: string; $size: number; $top: number; $left: number }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  top: ${props => props.$top}%;
  left: ${props => props.$left}%;
  opacity: 0.3;
  animation: ${twinkle} 3s ease-in-out infinite;
  filter: blur(1px);
`;

const ConstellationLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const numSize = parseInt(sizeValue);
  
  // Define star positions
  const stars = [
    { x: numSize * 0.2, y: numSize * 0.2, size: 3 },
    { x: numSize * 0.8, y: numSize * 0.3, size: 4 },
    { x: numSize * 0.6, y: numSize * 0.7, size: 3 },
    { x: numSize * 0.3, y: numSize * 0.8, size: 4 },
    { x: numSize * 0.5, y: numSize * 0.4, size: 5 }
  ];

  // Define connections between stars
  const connections = [
    `M ${stars[0].x} ${stars[0].y} ${stars[1].x} ${stars[1].y}`,
    `M ${stars[1].x} ${stars[1].y} ${stars[4].x} ${stars[4].y}`,
    `M ${stars[4].x} ${stars[4].y} ${stars[2].x} ${stars[2].y}`,
    `M ${stars[2].x} ${stars[2].y} ${stars[3].x} ${stars[3].y}`,
    `M ${stars[3].x} ${stars[3].y} ${stars[0].x} ${stars[0].y}`
  ];

  // Generate background particles
  const particles = Array.from({ length: 20 }, () => ({
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100
  }));

  return (
    <Container $size={sizeValue} className={className}>
      {particles.map((particle, index) => (
        <Particle
          key={`particle-${index}`}
          $color={color}
          $size={particle.size}
          $top={particle.top}
          $left={particle.left}
        />
      ))}
      <SVGContainer viewBox={`0 0 ${numSize} ${numSize}`}>
        {connections.map((path, index) => (
          <Connection
            key={`connection-${index}`}
            d={path}
            $color={color}
          />
        ))}
        {stars.map((star, index) => (
          <Star
            key={`star-${index}`}
            cx={star.x}
            cy={star.y}
            r={star.size}
            $color={color}
            $delay={index * 0.3}
          />
        ))}
      </SVGContainer>
    </Container>
  );
};

export default ConstellationLoader; 