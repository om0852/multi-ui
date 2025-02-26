'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const explode = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const spark = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(0);
    opacity: 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 5px rgba(255, 69, 0, 0.5),
      0 0 10px rgba(255, 69, 0, 0.3),
      0 0 15px rgba(255, 69, 0, 0.1);
  }
  50% {
    box-shadow: 
      0 0 10px rgba(255, 69, 0, 0.8),
      0 0 20px rgba(255, 69, 0, 0.5),
      0 0 30px rgba(255, 69, 0, 0.3);
  }
`;

const StyledFireworkButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #ff6b6b, #ff4500);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;

  ${props => props.$isActive && css`
    animation: ${glow} 1s infinite;
    background: linear-gradient(135deg, #ff4500, #ff6b6b);

    .explosion {
      animation: ${explode} 0.5s ease-out forwards;
    }

    .sparks {
      opacity: 1;
    }
  `}

  .explosion {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.8),
      rgba(255, 69, 0, 0.4) 40%,
      transparent 60%
    );
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
  }

  .sparks {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    pointer-events: none;
  }

  ${Array.from({ length: 20 }).map((_, i) => {
    const angle = (i * 360) / 20;
    const distance = 50 + Math.random() * 50;
    const tx = Math.cos((angle * Math.PI) / 180) * distance;
    const ty = Math.sin((angle * Math.PI) / 180) * distance;
    
    return css`
      .sparks:nth-child(${i + 2}) {
        --tx: ${tx}px;
        --ty: ${ty}px;
        animation: ${spark} 0.5s ease-out forwards;
        animation-delay: ${Math.random() * 0.2}s;
      }
    `;
  })}

  span {
    position: relative;
    z-index: 1;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 69, 0, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const FireworkButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledFireworkButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="explosion" />
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="sparks" />
      ))}
      <span>{children}</span>
    </StyledFireworkButton>
  );
};

export default FireworkButton; 