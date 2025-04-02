'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface NebulaButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const nebulaPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    filter: hue-rotate(0deg);
  }
  50% {
    transform: scale(1.2);
    filter: hue-rotate(180deg);
  }
`;

const starTwinkle = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const generateStarStyles = (index: number) => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const delay = index * 0.2;
  const size = 2 + Math.random() * 2;
  
  return css`
    top: ${top}%;
    left: ${left}%;
    width: ${size}px;
    height: ${size}px;
    animation: ${starTwinkle} ${1 + Math.random()}s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const Star = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${[...Array(20)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateStarStyles(i)}
    }
  `)}
`;

const NebulaCloud = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(
    circle at center,
    rgba(255, 0, 255, 0.2),
    rgba(0, 255, 255, 0.2),
    transparent 70%
  );
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  mix-blend-mode: screen;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #2D1F3D, #7B2F9D);
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
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    animation: ${nebulaPulse} 3s infinite;
    box-shadow: 
      0 5px 15px rgba(123, 47, 157, 0.4),
      0 0 30px rgba(123, 47, 157, 0.2);

    & ~ ${Star} {
      opacity: 1;
    }

    & ~ ${NebulaCloud} {
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

const NebulaButton: React.FC<NebulaButtonProps> = ({
  children = 'Nebula',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <NebulaCloud />
      {[...Array(20)].map((_, i) => (
        <Star key={i} />
      ))}
    </ButtonContainer>
  );
};

export default NebulaButton; 