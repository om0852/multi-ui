'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface HolographicButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const shimmer = keyframes`
  0% {
    background-position: -200% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

const Button = styled.button`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s linear infinite;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(0, 0, 0, 0.3),
      0 0 10px rgba(255, 255, 255, 0.2),
      0 0 20px rgba(255, 255, 255, 0.1);
    
    &::before {
      animation: ${shimmer} 1.5s linear infinite;
    }
  }
`;

const HolographicButton: React.FC<HolographicButtonProps> = ({
  children = 'Hologram',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default HolographicButton; 