'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface MorphingButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const morphShape = keyframes`
  0% {
    border-radius: 4px;
  }
  50% {
    border-radius: 50% 4px 50% 4px;
  }
  100% {
    border-radius: 4px 50% 4px 50%;
  }
`;

const Button = styled.button`
  background: #009688;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%);
    background-size: 200% 200%;
    transform: scale(1.5);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: #00796B;
    animation: ${morphShape} 1s ease-in-out infinite alternate;
    transform: scale(1.05);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MorphingButton: React.FC<MorphingButtonProps> = ({
  children = 'Morph',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MorphingButton; 