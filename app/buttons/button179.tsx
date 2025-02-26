'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface MeteorShowerButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const meteorFall = keyframes`
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    transform: translateX(-200px) translateY(200px) rotate(-45deg);
    opacity: 0;
  }
`;

const starTwinkle = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

const generateMeteorStyles = (index: number) => {
  const delay = index * 0.3;
  const duration = 1.5 + Math.random();
  const startX = 50 + (index * 30);
  const startY = -20 - (index * 15);
  
  return css`
    top: ${startY}px;
    left: ${startX}%;
    animation: ${meteorFall} ${duration}s ease-in infinite;
    animation-delay: ${delay}s;
  `;
};

const generateStarStyles = (index: number) => {
  const delay = index * 0.2;
  const size = 1 + Math.random() * 2;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  
  return css`
    width: ${size}px;
    height: ${size}px;
    top: ${posY}%;
    left: ${posX}%;
    animation: ${starTwinkle} 1.5s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const Meteor = styled.div`
  position: absolute;
  width: 100px;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  transform-origin: right;
  pointer-events: none;
  opacity: 0;
  filter: blur(1px);

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 10px white;
  }

  ${[...Array(10)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateMeteorStyles(i)}
    }
  `)}
`;

const Star = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  box-shadow: 0 0 4px white;

  ${[...Array(20)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateStarStyles(i)}
    }
  `)}
`;

const Button = styled.button`
  background: linear-gradient(145deg, #2c3e50, #1a1a2e);
  color: #E0E0E0;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: visible;
  z-index: 1;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(255, 255, 255, 0.2),
      0 0 30px rgba(255, 255, 255, 0.1);
    color: white;

    & ~ ${Meteor} {
      opacity: 1;
    }

    & ~ ${Star} {
      opacity: 1;
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

const MeteorShowerButton: React.FC<MeteorShowerButtonProps> = ({
  children = 'Meteor',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      {[...Array(20)].map((_, i) => (
        <Star key={`star-${i}`} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Meteor key={`meteor-${i}`} />
      ))}
    </ButtonContainer>
  );
};

export default MeteorShowerButton; 