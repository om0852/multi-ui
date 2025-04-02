import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const pulse = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`;

const flow = keyframes`
  0% {
    stroke-dashoffset: 200;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const blink = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.6;
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
`;

const Circuit = styled.path<{ $color: string; $delay: number }>`
  stroke: ${props => props.$color};
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 200;
  animation: ${flow} 3s linear infinite;
  animation-delay: ${props => props.$delay}s;
  filter: drop-shadow(0 0 2px ${props => props.$color});
`;

const Node = styled.circle<{ $color: string; $delay: number }>`
  fill: ${props => props.$color};
  animation: ${blink} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  filter: drop-shadow(0 0 3px ${props => props.$color});
`;

const Component = styled.rect<{ $color: string; $delay: number }>`
  fill: ${props => props.$color}40;
  stroke: ${props => props.$color};
  stroke-width: 1;
  animation: ${pulse} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const CircuitBoardLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const numSize = parseInt(sizeValue);

  // Define circuit paths
  const circuits = [
    `M ${numSize * 0.2} ${numSize * 0.2} 
     h ${numSize * 0.2} 
     v ${numSize * 0.3} 
     h ${numSize * 0.4}`,
    `M ${numSize * 0.2} ${numSize * 0.5} 
     h ${numSize * 0.6}`,
    `M ${numSize * 0.2} ${numSize * 0.8} 
     h ${numSize * 0.3} 
     v ${numSize * -0.2} 
     h ${numSize * 0.3}`
  ];

  // Define component positions
  const components = [
    { x: numSize * 0.3, y: numSize * 0.15, width: 20, height: 10 },
    { x: numSize * 0.6, y: numSize * 0.45, width: 15, height: 15 },
    { x: numSize * 0.4, y: numSize * 0.75, width: 12, height: 12 }
  ];

  // Define node positions
  const nodes = [
    { x: numSize * 0.2, y: numSize * 0.2 },
    { x: numSize * 0.8, y: numSize * 0.5 },
    { x: numSize * 0.2, y: numSize * 0.8 },
    { x: numSize * 0.5, y: numSize * 0.6 }
  ];

  return (
    <Container $size={sizeValue} className={className}>
      <SVGContainer viewBox={`0 0 ${numSize} ${numSize}`}>
        {/* Draw circuits */}
        {circuits.map((path, index) => (
          <Circuit
            key={`circuit-${index}`}
            d={path}
            $color={color}
            $delay={index * 0.5}
          />
        ))}
        
        {/* Draw components */}
        {components.map((comp, index) => (
          <Component
            key={`component-${index}`}
            x={comp.x}
            y={comp.y}
            width={comp.width}
            height={comp.height}
            rx="2"
            $color={color}
            $delay={index * 0.3}
          />
        ))}
        
        {/* Draw nodes */}
        {nodes.map((node, index) => (
          <Node
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r="3"
            $color={color}
            $delay={index * 0.2}
          />
        ))}
      </SVGContainer>
    </Container>
  );
};

export default CircuitBoardLoader; 