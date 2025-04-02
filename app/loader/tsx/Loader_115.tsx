import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const drip = keyframes`
  0% {
    transform: translateY(-100%) scale(0.7);
    opacity: 0;
  }
  30% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const wobble = keyframes`
  0%, 100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate(0, 0);
  }
  25% {
    border-radius: 58% 42% 30% 70% / 55% 55% 45% 45%;
    transform: translate(-2px, 2px);
  }
  50% {
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    transform: translate(0, 0);
  }
  75% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate(2px, -2px);
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

const Drop = styled.div<{ $color: string }>`
  width: 30%;
  height: 30%;
  background: ${props => props.$color};
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  position: relative;
  animation: ${wobble} 4s ease-in-out infinite;
  filter: drop-shadow(0 0 10px ${props => props.$color}80);

  &::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 15%;
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    filter: blur(2px);
  }
`;

const DripEffect = styled.div<{ $color: string; $delay: number }>`
  position: absolute;
  width: 20%;
  height: 40%;
  top: -40%;
  background: ${props => props.$color};
  border-radius: 0 0 20px 20px;
  animation: ${drip} 2s ease-in infinite;
  animation-delay: ${props => props.$delay}s;
  filter: blur(1px);
`;

const RippleEffect = styled.div<{ $color: string; $delay: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid ${props => props.$color};
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  animation: ${ripple} 2s ease-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;
`;

const LiquidDropLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const ripples = Array.from({ length: 3 }, (_, i) => ({
    delay: i * 0.3
  }));

  const drips = Array.from({ length: 2 }, (_, i) => ({
    delay: i * 1
  }));

  return (
    <Container $size={sizeValue} className={className}>
      {drips.map((drip, index) => (
        <DripEffect
          key={`drip-${index}`}
          $color={color}
          $delay={drip.delay}
        />
      ))}
      <Drop $color={color} />
      {ripples.map((ripple, index) => (
        <RippleEffect
          key={`ripple-${index}`}
          $color={color}
          $delay={ripple.delay}
        />
      ))}
    </Container>
  );
};

export default LiquidDropLoader; 