'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface GlowingRingButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(147, 112, 219, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(147, 112, 219, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(147, 112, 219, 0);
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const Ring = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid transparent;
  border-radius: 6px;
  animation: ${rotate} 3s linear infinite;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid #9370DB;
    border-radius: 6px;
    filter: blur(5px);
  }
`;

const Button = styled.button`
  background: #9370DB;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: #8A2BE2;
    animation: ${pulse} 1.5s infinite;
    transform: translateY(-2px);

    & ~ ${Ring} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const GlowingRingButton: React.FC<GlowingRingButtonProps> = ({
  children = 'Ring',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <Ring />
    </ButtonContainer>
  );
};

export default GlowingRingButton; 