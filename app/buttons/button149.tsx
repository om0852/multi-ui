'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

interface PerspectiveTiltButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonContainer = styled.div`
  perspective: 1000px;
  width: fit-content;
`;

const Button = styled.button<{ $rotateX: number; $rotateY: number }>`
  background: #673AB7;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: rotateX(${props => props.$rotateX}deg) rotateY(${props => props.$rotateY}deg);
  transition: transform 0.1s ease, background 0.3s ease;

  &:hover {
    background: #7E57C2;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: rgba(255, 255, 255, 0.1);
    transform: translateZ(-10px);
    border-radius: 8px;
  }
`;

const PerspectiveTiltButton: React.FC<PerspectiveTiltButtonProps> = ({
  children = 'Tilt',
  className = '',
  onClick
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <ButtonContainer className={className}>
      <Button
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        $rotateX={rotation.x}
        $rotateY={rotation.y}
      >
        {children}
      </Button>
    </ButtonContainer>
  );
};

export default PerspectiveTiltButton; 