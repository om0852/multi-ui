'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

interface SpotlightButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = styled.button<{ $mouseX: number; $mouseY: number }>`
  background: #6200EA;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
    top: ${props => props.$mouseY}px;
    left: ${props => props.$mouseX}px;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    background: #7C4DFF;
    
    &::before {
      opacity: 1;
    }
  }
`;

const SpotlightButton: React.FC<SpotlightButtonProps> = ({
  children = 'Spotlight',
  className = '',
  onClick
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      className={className}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      $mouseX={mousePosition.x}
      $mouseY={mousePosition.y}
    >
      {children}
    </Button>
  );
};

export default SpotlightButton; 