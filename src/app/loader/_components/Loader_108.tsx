import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const grow = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    filter: brightness(1) blur(0px);
  }
  50% {
    filter: brightness(1.5) blur(1px);
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

const Branch = styled.div<{ 
  $color: string;
  $angle: number;
  $scale: number;
  $delay: number;
  $level: number;
}>`
  position: absolute;
  width: 2px;
  height: ${props => 20 / (props.$level || 1)}%;
  background: ${props => props.$color};
  transform-origin: bottom center;
  transform: rotate(${props => props.$angle}deg) scaleY(${props => props.$scale});
  animation: 
    ${grow} 0.5s ease-out forwards,
    ${pulse} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 4px;
    background: ${props => props.$color};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    filter: blur(1px);
  }
`;

const Core = styled.div<{ $color: string }>`
  position: absolute;
  bottom: 10%;
  width: 6px;
  height: 6px;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(2px);
  animation: ${pulse} 2s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border: 2px solid ${props => props.$color};
    border-radius: 50%;
    animation: ${rotate} 4s linear infinite;
  }
`;

interface BranchConfig {
  angle: number;
  scale: number;
  delay: number;
  level: number;
}

const generateBranches = (level: number = 1, angle: number = 0, delay: number = 0): BranchConfig[] => {
  if (level > 4) return [];

  const baseConfig: BranchConfig = {
    angle,
    scale: 1,
    delay,
    level
  };

  const branches = [baseConfig];

  if (level < 4) {
    const newDelay = delay + 0.2;
    const angleOffset = 30 / level;
    
    branches.push(
      ...generateBranches(level + 1, angle - angleOffset, newDelay),
      ...generateBranches(level + 1, angle + angleOffset, newDelay)
    );
  }

  return branches;
};

const FractalLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const branches = generateBranches();

  return (
    <Container $size={sizeValue} className={className}>
      <Core $color={color} />
      {branches.map((branch, index) => (
        <Branch
          key={index}
          $color={color}
          $angle={branch.angle}
          $scale={branch.scale}
          $delay={branch.delay}
          $level={branch.level}
        />
      ))}
    </Container>
  );
};

export default FractalLoader;