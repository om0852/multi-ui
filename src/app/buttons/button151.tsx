'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface PixelButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const pixelate = keyframes`
  0% {
    background-size: 100% 100%;
  }
  50% {
    background-size: 10% 10%;
  }
  100% {
    background-size: 100% 100%;
  }
`;

const Button = styled.button`
  background-image: linear-gradient(45deg, #FF4081 25%, #F50057 25%, #F50057 50%, #FF4081 50%, #FF4081 75%, #F50057 75%);
  background-size: 100% 100%;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  image-rendering: pixelated;

  &:hover {
    animation: ${pixelate} 0.8s steps(10) infinite;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(245, 0, 87, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #FF4081, #F50057);
    z-index: -1;
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const PixelButton: React.FC<PixelButtonProps> = ({
  children = 'Pixel',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default PixelButton; 