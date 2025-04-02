import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
`;

const flow = keyframes`
  0% {
    stroke-dashoffset: 100;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: -100;
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
`;

const SVGContainer = styled.svg`
  width: 100%;
  height: 100%;
`;

const Node = styled.circle<{ $color: string; $delay: number }>`
  fill: ${props => props.$color};
  animation: ${pulse} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  filter: drop-shadow(0 0 2px ${props => props.$color});
`;

const Connection = styled.path<{ $color: string; $delay: number }>`
  stroke: ${props => props.$color};
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 100;
  stroke-linecap: round;
  animation: ${flow} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;
`;

const NeuralLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const numSize = parseInt(sizeValue);
  
  // Define node positions
  const nodes = [
    // Input layer
    { x: numSize * 0.2, y: numSize * 0.3 },
    { x: numSize * 0.2, y: numSize * 0.7 },
    // Hidden layer
    { x: numSize * 0.5, y: numSize * 0.2 },
    { x: numSize * 0.5, y: numSize * 0.5 },
    { x: numSize * 0.5, y: numSize * 0.8 },
    // Output layer
    { x: numSize * 0.8, y: numSize * 0.4 },
    { x: numSize * 0.8, y: numSize * 0.6 }
  ];

  // Define connections between nodes
  const connections = [
    // Input to hidden connections
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 },
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    // Hidden to output connections
    { from: 2, to: 5 },
    { from: 2, to: 6 },
    { from: 3, to: 5 },
    { from: 3, to: 6 },
    { from: 4, to: 5 },
    { from: 4, to: 6 }
  ];

  return (
    <Container $size={sizeValue} className={className}>
      <SVGContainer viewBox={`0 0 ${numSize} ${numSize}`}>
        {/* Draw connections first */}
        {connections.map((conn, index) => (
          <Connection
            key={`conn-${index}`}
            $color={color}
            $delay={index * 0.1}
            d={`M ${nodes[conn.from].x} ${nodes[conn.from].y} 
                Q ${(nodes[conn.from].x + nodes[conn.to].x) / 2} 
                  ${(nodes[conn.from].y + nodes[conn.to].y) / 2 + 10}
                  ${nodes[conn.to].x} ${nodes[conn.to].y}`}
          />
        ))}
        {/* Draw nodes on top */}
        {nodes.map((node, index) => (
          <Node
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r={numSize * 0.05}
            $color={color}
            $delay={index * 0.2}
          />
        ))}
      </SVGContainer>
    </Container>
  );
};

export default NeuralLoader; 