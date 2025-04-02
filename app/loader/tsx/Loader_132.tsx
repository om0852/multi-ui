import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const wave = keyframes`
  0%, 100% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(15px) scale(0.8);
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const Dot = styled.div<{ $color: string; $delay: number; $isLeft: boolean }>`
  width: 12%;
  height: 12%;
  background-color: ${props => props.$color};
  border-radius: 50%;
  position: absolute;
  left: ${props => props.$isLeft ? '0' : 'auto'};
  right: ${props => props.$isLeft ? 'auto' : '0'};
  animation: ${wave} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const DNALoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const dots = Array.from({ length: 6 }, (_, i) => i);

  return (
    <Container $size={sizeValue} className={className}>
      {dots.map((_, index) => (
        <React.Fragment key={index}>
          <Dot
            $color={color}
            $delay={index * 0.2}
            $isLeft={true}
            style={{ top: `${index * 20}%` }}
          />
          <Dot
            $color={color}
            $delay={index * 0.2 + 0.75}
            $isLeft={false}
            style={{ top: `${index * 20}%` }}
          />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default DNALoader; 