'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface NeonPulseButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 8px #39ff14,
                0 0 16px #39ff14,
                0 0 24px #39ff14;
  }
  50% {
    box-shadow: 0 0 16px #39ff14,
                0 0 24px #39ff14,
                0 0 32px #39ff14;
  }
  100% {
    box-shadow: 0 0 8px #39ff14,
                0 0 16px #39ff14,
                0 0 24px #39ff14;
  }
`;

const Button = styled.button`
  background: transparent;
  color: #39ff14;
  border: 2px solid #39ff14;
  padding: 15px 30px;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  text-shadow: 0 0 8px #39ff14;

  &:hover {
    background: rgba(57, 255, 20, 0.1);
    animation: ${pulse} 1.5s infinite;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const NeonPulseButton: React.FC<NeonPulseButtonProps> = ({
  children = 'Neon',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default NeonPulseButton; 