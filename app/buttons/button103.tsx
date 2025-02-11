'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  50% {
    transform: translateY(-100px) scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-200px) scale(0.8);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    background: rgba(66, 153, 225, 0.6);
  }
  50% {
    transform: scale(1.05);
    background: rgba(66, 153, 225, 0.8);
  }
`;

const StyledBubbleButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: rgba(66, 153, 225, 0.6);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 
    0 4px 15px rgba(66, 153, 225, 0.3),
    inset 0 0 15px rgba(255, 255, 255, 0.2);

  ${props => props.$isActive && css`
    animation: ${pulse} 2s infinite;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    border-radius: inherit;
  }

  .bubble {
    position: absolute;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    pointer-events: none;
  }

  ${Array.from({ length: 10 }).map((_, i) => css`
    .bubble:nth-child(${i + 1}) {
      width: ${Math.random() * 20 + 10}px;
      height: ${Math.random() * 20 + 10}px;
      left: ${Math.random() * 100}%;
      bottom: -20px;
      animation: ${float} ${Math.random() * 2 + 2}s linear infinite;
      animation-delay: ${Math.random() * 2}s;
    }
  `)}

  &:hover {
    transform: translateY(-2px);
    background: rgba(66, 153, 225, 0.8);
    box-shadow: 
      0 8px 25px rgba(66, 153, 225, 0.4),
      inset 0 0 25px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }

  span {
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const BubbleButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledBubbleButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="bubble" />
      ))}
      <span>{children}</span>
    </StyledBubbleButton>
  );
};

export default BubbleButton; 