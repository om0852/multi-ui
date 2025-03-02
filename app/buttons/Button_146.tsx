'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ShutterButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const shutterOpen = keyframes`
  0% {
    clip-path: circle(0% at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
  }
`;

const Button = styled.button`
  background: #333;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #E91E63;
    clip-path: circle(0% at 50% 50%);
    transition: clip-path 0.5s ease;
  }

  &:hover::before {
    animation: ${shutterOpen} 0.5s ease forwards;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const ShutterButton: React.FC<ShutterButtonProps> = ({
  children = 'Shutter',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      <span>{children}</span>
    </Button>
  );
};

export default ShutterButton; 