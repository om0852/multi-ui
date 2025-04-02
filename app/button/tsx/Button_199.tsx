'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface HolographicButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const holographicShimmer = keyframes`
  0% {
    background-position: -200% center;
    opacity: 0.5;
  }
  100% {
    background-position: 200% center;
    opacity: 0.8;
  }
`;

const glitchEffect = keyframes`
  0% {
    clip-path: inset(80% 0 0 0);
    transform: translate(-2px, 2px);
  }
  10% {
    clip-path: inset(10% 0 85% 0);
    transform: translate(2px, -2px);
  }
  20% {
    clip-path: inset(80% 0 0 0);
    transform: translate(-2px, 2px);
  }
  30% {
    clip-path: inset(10% 0 85% 0);
    transform: translate(2px, -2px);
  }
  40% {
    clip-path: inset(50% 0 30% 0);
    transform: translate(-2px, 2px);
  }
  50% {
    clip-path: inset(0% 0 100% 0);
    transform: translate(2px, -2px);
  }
  60% {
    clip-path: inset(100% 0 0% 0);
    transform: translate(-2px, 2px);
  }
  70% {
    clip-path: inset(20% 0 60% 0);
    transform: translate(2px, -2px);
  }
  80% {
    clip-path: inset(80% 0 5% 0);
    transform: translate(-2px, 2px);
  }
  90% {
    clip-path: inset(5% 0 80% 0);
    transform: translate(2px, -2px);
  }
  100% {
    clip-path: inset(80% 0 0 0);
    transform: translate(-2px, 2px);
  }
`;

const scanLine = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
  padding: 4px;
  background: linear-gradient(
    90deg,
    rgba(0, 255, 255, 0.2),
    rgba(255, 0, 255, 0.2),
    rgba(0, 255, 255, 0.2)
  );
  background-size: 200% 100%;
  animation: ${holographicShimmer} 3s linear infinite;
  border-radius: 6px;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      rgba(0, 255, 255, 0.3),
      rgba(255, 0, 255, 0.3),
      rgba(0, 255, 255, 0.3)
    );
    border-radius: 8px;
    z-index: -1;
    filter: blur(8px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const HologramOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(
      to bottom,
      rgba(0, 255, 255, 0.2),
      transparent
    );
    animation: ${scanLine} 2s linear infinite;
  }
`;

const GlitchText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 255, 255, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease;

  &:nth-child(1) {
    animation: ${glitchEffect} 4s infinite linear alternate-reverse;
  }

  &:nth-child(2) {
    animation: ${glitchEffect} 4s infinite linear alternate;
    color: rgba(255, 0, 255, 0.8);
  }
`;

const Button = styled.button`
  background: rgba(10, 12, 18, 0.9);
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  backdrop-filter: blur(4px);

  &:hover {
    transform: translateY(-2px);
    background: rgba(15, 18, 25, 0.95);
    box-shadow: 
      0 0 20px rgba(0, 255, 255, 0.3),
      0 0 40px rgba(255, 0, 255, 0.2);

    ${GlitchText} {
      opacity: 0.5;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const HolographicButton: React.FC<HolographicButtonProps> = ({
  children = 'Holographic',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
        <GlitchText>{children}</GlitchText>
        <GlitchText>{children}</GlitchText>
      </Button>
      <HologramOverlay />
    </ButtonContainer>
  );
};

export default HolographicButton; 