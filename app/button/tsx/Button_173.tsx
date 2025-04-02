'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface TimeWarpButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const clockSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const timePulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;

const distort = keyframes`
  0% {
    clip-path: circle(50% at 50% 50%);
    transform: rotate(0deg);
  }
  25% {
    clip-path: circle(45% at 55% 45%);
    transform: rotate(90deg);
  }
  50% {
    clip-path: circle(50% at 45% 55%);
    transform: rotate(180deg);
  }
  75% {
    clip-path: circle(45% at 55% 45%);
    transform: rotate(270deg);
  }
  100% {
    clip-path: circle(50% at 50% 50%);
    transform: rotate(360deg);
  }
`;

const generateClockHandStyles = (index: number) => {
  const rotation = index * (360 / 12);
  const length = 30 + (index % 3) * 5;
  const delay = index * 0.1;
  
  return css`
    transform: rotate(${rotation}deg);
    width: ${length}px;
    animation: ${clockSpin} ${3 + delay}s linear infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const ClockHand = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 2px;
  background: #673AB7;
  transform-origin: left center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${[...Array(12)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateClockHandStyles(i)}
    }
  `)}
`;

const TimeDistortion = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(
    circle,
    rgba(103, 58, 183, 0.2),
    transparent 70%
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #673AB7, #9575CD);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: visible;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(103, 58, 183, 0.4),
      0 0 30px rgba(103, 58, 183, 0.2);
    animation: ${distort} 2s linear infinite;

    & ~ ${ClockHand} {
      opacity: 1;
    }

    & ~ ${TimeDistortion} {
      opacity: 1;
      animation: ${timePulse} 2s ease-in-out infinite;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const TimeWarpButton: React.FC<TimeWarpButtonProps> = ({
  children = 'Time Warp',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <TimeDistortion />
      {[...Array(12)].map((_, i) => (
        <ClockHand key={i} />
      ))}
    </ButtonContainer>
  );
};

export default TimeWarpButton; 