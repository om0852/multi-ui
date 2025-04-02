'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface RippleButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const rippleEffect = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const Button = styled.button`
  background: #2196F3;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;

  &:hover {
    background: #1976D2;
  }
`;

const RippleContainer = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${rippleEffect} 0.8s ease-out forwards;
`;

const RippleButton: React.FC<RippleButtonProps> = ({
  children = 'Ripple',
  className = '',
  onClick
}) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - button.left;
    const y = e.clientY - button.top;
    
    setRipples(prev => [...prev, { x, y, id: Date.now() }]);
    
    if (onClick) {
      onClick();
    }

    // Clean up ripples after animation
    setTimeout(() => {
      setRipples(prev => prev.slice(1));
    }, 800);
  };

  return (
    <Button className={className} onClick={handleClick}>
      {children}
      {ripples.map(ripple => (
        <RippleContainer key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}
    </Button>
  );
};

export default RippleButton; 