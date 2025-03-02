'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface NeonScanButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const scanline = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const neonFlicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      -0.2rem -0.2rem 1rem #fff,
      0.2rem 0.2rem 1rem #fff,
      0 0 2rem #f40,
      0 0 4rem #f40,
      0 0 6rem #f40,
      0 0 8rem #f40,
      0 0 10rem #f40;
    box-shadow: 
      0 0 .5rem #fff,
      inset 0 0 .5rem #fff,
      0 0 2rem #f40,
      inset 0 0 2rem #f40,
      0 0 4rem #f40,
      inset 0 0 4rem #f40;
  }
  20%, 24%, 55% {
    text-shadow: none;
    box-shadow: none;
  }
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  border: 2px solid #f40;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    animation: ${neonFlicker} 2s infinite alternate;
    color: #fff;
    background: rgba(255, 68, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      #f40,
      transparent
    );
    top: 0;
    left: 0;
    animation: ${scanline} 2s linear infinite;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const NeonScanButton: React.FC<NeonScanButtonProps> = ({
  children = 'Scan',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default NeonScanButton; 