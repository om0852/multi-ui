'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 0.99;
    filter: drop-shadow(0 0 1px rgba(252, 211, 77, 0.8))
           drop-shadow(0 0 5px rgba(252, 211, 77, 0.5))
           drop-shadow(0 0 15px rgba(252, 211, 77, 0.3));
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
    filter: none;
  }
`;

const borderFlicker = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
    transform: scale(0.98);
  }
  100% {
    opacity: 1;
  }
`;

const StyledNeonButton = styled.button`
  padding: 16px 32px;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.8);
  color: #fcd34d;
  border: 2px solid #fcd34d;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: bold;
  transition: all 0.3s ease;
  animation: ${flicker} 3s linear infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid #fcd34d;
    border-radius: 4px;
    animation: ${borderFlicker} 1s linear infinite;
  }

  &::after {
    animation-delay: 0.5s;
  }

  &:hover {
    background: rgba(252, 211, 77, 0.1);
    text-shadow: 0 0 8px rgba(252, 211, 77, 0.6);
    box-shadow: 
      0 0 20px rgba(252, 211, 77, 0.2),
      inset 0 0 20px rgba(252, 211, 77, 0.1);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 
      0 0 10px rgba(252, 211, 77, 0.2),
      inset 0 0 10px rgba(252, 211, 77, 0.1);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const NeonFlickerButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledNeonButton>
      <span>{children}</span>
    </StyledNeonButton>
  );
};

export default NeonFlickerButton; 