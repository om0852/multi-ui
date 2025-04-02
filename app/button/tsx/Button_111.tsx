'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    height: 5px;
    transform: translateY(0);
  }
  50% {
    height: 30px;
    transform: translateY(-15px);
  }
  100% {
    height: 5px;
    transform: translateY(0);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 5px rgba(138, 43, 226, 0.4),
      inset 0 0 5px rgba(138, 43, 226, 0.4);
  }
  50% {
    box-shadow: 
      0 0 20px rgba(138, 43, 226, 0.6),
      inset 0 0 10px rgba(138, 43, 226, 0.6);
  }
`;

const StyledSoundwaveButton = styled.button<{ $isActive: boolean }>`
  padding: 16px 32px;
  font-size: 18px;
  background: #1a1a1a;
  color: #fff;
  border: 2px solid blueviolet;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;

  ${props => props.$isActive && css`
    background: #2a1a3a;
    animation: ${pulseGlow} 1.5s infinite;

    .wave-container {
      opacity: 1;
    }

    .wave {
      animation: ${waveAnimation} 0.5s infinite;
    }
  `}

  .wave-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 3px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .wave {
    width: 3px;
    height: 5px;
    background: blueviolet;
    border-radius: 3px;
  }

  ${Array.from({ length: 10 }).map((_, i) => css`
    .wave:nth-child(${i + 1}) {
      animation-delay: ${i * 0.1}s;
    }
  `)}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(138, 43, 226, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  span {
    position: relative;
    z-index: 1;
    display: block;
    transform: translateY(-10px);
    background: linear-gradient(
      180deg,
      #fff,
      #e0e0e0
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: #9f3fff;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const SoundwaveButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledSoundwaveButton
      $isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <span>{children}</span>
      <div className="wave-container">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="wave" />
        ))}
      </div>
    </StyledSoundwaveButton>
  );
};

export default SoundwaveButton; 