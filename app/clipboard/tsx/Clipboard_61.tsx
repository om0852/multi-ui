"use client"

import React from 'react';
import styled from 'styled-components';

interface ClipboardProps {
  text: string;
  onCopy?: () => void;
}

const Clipboard: React.FC<ClipboardProps> = ({ text, onCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    onCopy?.();
  };

  return (
    <StyledWrapper>
      <button className="neon-ring-clipboard" onClick={handleCopy}>
        <div className="neon-ring-container">
          <div className="neon-ring-effect">
            <div className="rings">
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
            </div>
            <div className="glow"></div>
          </div>
          <div className="content">
            <span>{text}</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
              <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
            </svg>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .neon-ring-clipboard {
    --neon-primary: #f472b6;
    --neon-secondary: #db2777;
    --neon-glow: rgba(244, 114, 182, 0.5);
    --neon-dark: #831843;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .neon-ring-container {
    position: relative;
    background: var(--neon-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .neon-ring-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .rings {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ring {
    position: absolute;
    border: 2px solid var(--neon-primary);
    border-radius: 50%;
    animation: rotate 8s linear infinite;
    box-shadow: 0 0 20px var(--neon-glow);

    &:nth-child(1) {
      width: 60px;
      height: 60px;
      border-left-color: transparent;
      border-right-color: transparent;
    }

    &:nth-child(2) {
      width: 100px;
      height: 100px;
      animation-direction: reverse;
      animation-duration: 6s;
      border-top-color: transparent;
      border-bottom-color: transparent;
    }

    &:nth-child(3) {
      width: 140px;
      height: 140px;
      animation-duration: 10s;
      border-left-color: transparent;
      border-bottom-color: transparent;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      var(--neon-glow) 0%,
      transparent 70%
    );
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(0.8);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--neon-dark);
    border: 2px solid var(--neon-primary);
    border-radius: 8px;
    color: var(--neon-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--neon-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--neon-primary);
      filter: drop-shadow(0 0 8px var(--neon-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .neon-ring-clipboard:hover .neon-ring-effect {
    opacity: 1;
  }

  .neon-ring-clipboard:hover .content {
    background: transparent;
    border-color: var(--neon-secondary);
    color: var(--neon-secondary);
    box-shadow: 0 0 20px var(--neon-glow);
  }

  .neon-ring-clipboard:hover svg {
    fill: var(--neon-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .neon-ring-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 