import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

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

const wave = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(10px) scale(0.8);
  }
`;

const Container = styled.div<{ $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-30deg);
`;

const Strand = styled.div<{ $isLeft: boolean }>`
  position: relative;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, currentColor 20%, currentColor 80%, transparent 100%);
  margin: 0 8px;
  transform: ${props => props.$isLeft ? 'rotate(30deg)' : 'rotate(-30deg)'};
`;

const Dot = styled.div<{ $color: string; $index: number }>`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: ${props => props.$color};
  border-radius: 50%;
  left: -2px;
  animation: ${wave} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.$index * 0.1}s;
  top: ${props => 10 + props.$index * 20}%;
`;

const DNALoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const dots = Array.from({ length: 4 }, (_, i) => i);

  return (
    <Container $size={sizeValue} className={className}>
      <Strand $isLeft={true}>
        {dots.map((_, index) => (
          <Dot key={`left-${index}`} $color={color} $index={index} />
        ))}
      </Strand>
      <Strand $isLeft={false}>
        {dots.map((_, index) => (
          <Dot key={`right-${index}`} $color={color} $index={index} />
        ))}
      </Strand>
    </Container>
  );
};

export default DNALoader; 