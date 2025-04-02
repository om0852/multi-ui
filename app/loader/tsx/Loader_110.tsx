import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const scan = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const glitch = keyframes`
  0%, 100% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
  }
  10% {
    clip-path: inset(10% 0 80% 0);
    transform: translateX(-2px);
  }
  20% {
    clip-path: inset(80% 0 10% 0);
    transform: translateX(2px);
  }
  30% {
    clip-path: inset(30% 0 60% 0);
    transform: translateX(-1px);
  }
  40% {
    clip-path: inset(60% 0 30% 0);
    transform: translateX(1px);
  }
  50% {
    clip-path: inset(20% 0 70% 0);
    transform: translateX(-3px);
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
    opacity: 0.8;
  }
  50% {
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
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
`;

const HologramContent = styled.div<{ $color: string }>`
  position: relative;
  width: 70%;
  height: 70%;
  border: 2px solid ${props => props.$color}80;
  border-radius: 50%;
  animation: ${rotate} 4s linear infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  &::before {
    border-top-color: ${props => props.$color};
    animation: ${rotate} 3s linear infinite;
  }

  &::after {
    border-bottom-color: ${props => props.$color};
    animation: ${rotate} 2s linear infinite reverse;
  }
`;

const ScanLine = styled.div<{ $color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(
    to bottom,
    transparent,
    ${props => props.$color}40,
    transparent
  );
  animation: ${scan} 2s linear infinite;
  opacity: 0.5;
`;

const GlitchLayer = styled.div<{ $color: string; $delay: number }>`
  position: absolute;
  inset: 0;
  background: ${props => props.$color}20;
  animation: ${glitch} 2s step-end infinite;
  animation-delay: ${props => props.$delay}s;
  mix-blend-mode: overlay;
`;

const Scanlines = styled.div`
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 0.5%,
    transparent 1%
  );
  animation: ${pulse} 4s ease-in-out infinite;
  pointer-events: none;
`;

const HologramLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);

  return (
    <Container $size={sizeValue} className={className}>
      <HologramContent $color={color} />
      <ScanLine $color={color} />
      <GlitchLayer $color={color} $delay={0} />
      <GlitchLayer $color={color} $delay={0.1} />
      <GlitchLayer $color={color} $delay={0.2} />
      <Scanlines />
    </Container>
  );
};

export default HologramLoader;