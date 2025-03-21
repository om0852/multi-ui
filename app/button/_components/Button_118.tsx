'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const grow = keyframes`
  0% {
    transform: scale(0) translateY(100%);
  }
  100% {
    transform: scale(1) translateY(0);
  }
`;

const bloom = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
  }
  50% {
    transform: scale(1.2) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
`;

const sway = keyframes`
  0%, 100% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
`;

const StyledNatureButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: linear-gradient(135deg, #2ecc71, #27ae60);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 
    0 4px 15px rgba(46, 204, 113, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);

  ${props => props.$isActive && css`
    background: linear-gradient(135deg, #27ae60, #2ecc71);
    box-shadow: 
      0 6px 30px rgba(46, 204, 113, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);

    .vine {
      animation: ${grow} 1s ease-out forwards;
    }

    .flower {
      animation: ${bloom} 1s ease-out forwards;
    }

    .leaf {
      animation: ${sway} 2s ease-in-out infinite;
    }
  `}

  .vine {
    position: absolute;
    width: 2px;
    height: 100%;
    background: #27ae60;
    transform-origin: bottom;
    transform: scale(0) translateY(100%);
  }

  ${Array.from({ length: 3 }).map((_, i) => css`
    .vine:nth-child(${i + 1}) {
      left: ${20 + i * 30}%;
      animation-delay: ${i * 0.2}s;
    }
  `)}

  .leaf {
    position: absolute;
    width: 10px;
    height: 20px;
    background: #2ecc71;
    border-radius: 0 50% 0 50%;
    transform-origin: bottom left;
  }

  ${Array.from({ length: 6 }).map((_, i) => css`
    .leaf:nth-child(${i + 4}) {
      left: ${Math.floor(i / 2) * 30 + 20}%;
      top: ${50 - (i % 2) * 30}%;
      animation-delay: ${0.6 + i * 0.1}s;
    }
  `)}

  .flower {
    position: absolute;
    width: 20px;
    height: 20px;
    transform: scale(0);
  }

  ${Array.from({ length: 3 }).map((_, i) => css`
    .flower:nth-child(${i + 10}) {
      left: ${20 + i * 30}%;
      top: 20%;
      animation-delay: ${0.8 + i * 0.2}s;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(
          circle at center,
          #fff,
          #f1c40f 30%,
          #e67e22 60%
        );
        border-radius: 50%;
        transform-origin: center;
      }

      &::after {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: radial-gradient(
          circle at center,
          #fff 0%,
          transparent 60%
        );
        opacity: 0.5;
      }
    }
  `)}

  span {
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const NatureButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledNatureButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={`vine-${i}`} className="vine" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={`leaf-${i}`} className="leaf" />
      ))}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={`flower-${i}`} className="flower" />
      ))}
      <span>{children}</span>
    </StyledNatureButton>
  );
};

export default NatureButton; 