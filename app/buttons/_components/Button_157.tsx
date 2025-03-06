'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface SmokeButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const smoke = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(2);
    opacity: 0;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const generateSmokeStyles = (index: number) => {
  const left = 20 + (index * 4);
  const duration = 1 + Math.random();
  const delay = index * 0.1;

  return css`
    left: ${left}%;
    animation: ${smoke} ${duration}s ease-out infinite;
    animation-delay: ${delay}s;
  `;
};

const SmokeParticle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  filter: blur(5px);

  ${[...Array(15)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateSmokeStyles(i)}
    }
  `)}
`;

const Button = styled.button`
  background: #2C3E50;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    background: #34495E;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(44, 62, 80, 0.4);

    & ~ ${SmokeParticle} {
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
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const SmokeButton: React.FC<SmokeButtonProps> = ({
  children = 'Smoke',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      {[...Array(15)].map((_, i) => (
        <SmokeParticle key={i} />
      ))}
    </ButtonContainer>
  );
};

export default SmokeButton; 