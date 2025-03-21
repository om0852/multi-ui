'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const portalSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const portalPulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const StyledPortalButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #7928ca, #ff0080);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${props => props.$isActive ? '300%' : '0%'};
    height: ${props => props.$isActive ? '300%' : '0%'};
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.1) 30%,
      transparent 70%
    );
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    animation: ${portalSpin} 3s linear infinite;
    opacity: ${props => props.$isActive ? 1 : 0};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${props => props.$isActive ? '150%' : '0%'};
    height: ${props => props.$isActive ? '150%' : '0%'};
    background: radial-gradient(
      circle,
      rgba(255, 0, 128, 0.8) 0%,
      rgba(121, 40, 202, 0.5) 30%,
      transparent 70%
    );
    transform: translate(-50%, -50%) rotate(180deg);
    transition: all 0.5s ease;
    animation: ${portalSpin} 2s linear infinite reverse;
    opacity: ${props => props.$isActive ? 1 : 0};
  }

  .portal-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${props => props.$isActive ? '200%' : '0%'};
    height: ${props => props.$isActive ? '200%' : '0%'};
    border: 4px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    animation: ${portalPulse} 2s ease-in-out infinite;
    opacity: ${props => props.$isActive ? 1 : 0};
  }

  span {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    opacity: ${props => props.$isActive ? 0 : 1};
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 0 20px rgba(255, 0, 128, 0.5),
      0 0 40px rgba(121, 40, 202, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const PortalButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 2000);
  };

  return (
    <StyledPortalButton $isActive={isActive} onClick={handleClick}>
      <div className="portal-ring" />
      <span>{children}</span>
    </StyledPortalButton>
  );
};

export default PortalButton; 