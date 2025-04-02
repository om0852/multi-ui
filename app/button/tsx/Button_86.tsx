'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface PerspectiveButtonProps {
  style?: 'cyber' | 'retro' | 'modern' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

interface StyledButtonProps {
  $style: NonNullable<PerspectiveButtonProps['style']>;
  $size: NonNullable<PerspectiveButtonProps['size']>;
  $rotateX: number;
  $rotateY: number;
}

const shine = keyframes`
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
`;

const styleVariants = {
  cyber: {
    background: 'linear-gradient(135deg, #00f2fe, #4facfe)',
    border: '2px solid #4facfe',
    textShadow: '0 0 5px rgba(0, 242, 254, 0.7)',
    boxShadow: '0 0 15px rgba(79, 172, 254, 0.5)',
  },
  retro: {
    background: 'linear-gradient(135deg, #ff6b6b, #feca57)',
    border: '2px solid #ff6b6b',
    textShadow: '2px 2px 0px #cc5555',
    boxShadow: '4px 4px 0px #cc5555',
  },
  modern: {
    background: 'linear-gradient(135deg, #a8edea, #fed6e3)',
    border: '2px solid #a8edea',
    textShadow: 'none',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  minimal: {
    background: '#ffffff',
    border: '2px solid #e0e0e0',
    textShadow: 'none',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

const StyledPerspectiveButton = styled.button<StyledButtonProps>`
  position: relative;
  padding: ${props =>
    props.$size === 'sm' ? '10px 20px' : props.$size === 'md' ? '14px 28px' : '18px 36px'};
  font-size: ${props =>
    props.$size === 'sm' ? '14px' : props.$size === 'md' ? '16px' : '18px'};
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  background: ${props => styleVariants[props.$style].background};
  border: ${props => styleVariants[props.$style].border};
  color: ${props => (props.$style === 'minimal' ? '#333333' : '#ffffff')};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  transform: perspective(1000px) 
             rotateX(${props => props.$rotateX}deg) 
             rotateY(${props => props.$rotateY}deg);
  text-shadow: ${props => styleVariants[props.$style].textShadow};
  box-shadow: ${props => styleVariants[props.$style].boxShadow};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }

  &:hover {
    transform: perspective(1000px) 
               rotateX(${props => props.$rotateX * 1.5}deg) 
               rotateY(${props => props.$rotateY * 1.5}deg) 
               scale(1.05);

    &::before {
      animation: ${shine} 1s ease-in-out;
    }
  }

  &:active {
    transform: perspective(1000px) 
               rotateX(${props => props.$rotateX * 0.5}deg) 
               rotateY(${props => props.$rotateY * 0.5}deg) 
               scale(0.95);
  }
`;

const PerspectiveButton: React.FC<PerspectiveButtonProps> = ({
  style = 'cyber',
  size = 'md',
  children,
  onClick,
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <StyledPerspectiveButton
      $style={style}
      $size={size}
      $rotateX={rotation.x}
      $rotateY={rotation.y}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </StyledPerspectiveButton>
  );
};

export default PerspectiveButton; 