'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(255, 82, 82, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const StyledPulseButton = styled.button`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(
    45deg,
    #ff5252,
    #ff1744,
    #ff4081,
    #ff5252
  );
  background-size: 300% 300%;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    animation: ${pulse} 1s infinite, ${gradientShift} 3s ease infinite;

    &::before {
      opacity: 0.4;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  span {
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const PulseButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledPulseButton>
      <span>{children}</span>
    </StyledPulseButton>
  );
};

export default PulseButton; 