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
      <button className="portal-clipboard" onClick={handleCopy}>
        <div className="portal-container">
          <div className="portal-effect">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="core"></div>
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
  .portal-clipboard {
    --portal-primary: #8b5cf6;
    --portal-secondary: #a78bfa;
    --portal-glow: rgba(139, 92, 246, 0.3);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .portal-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .portal-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ring {
    position: absolute;
    border: 2px solid var(--portal-primary);
    border-radius: 50%;
    opacity: 0;
    animation: expand 2s ease-out infinite;

    &:nth-child(1) {
      width: 40px;
      height: 40px;
      animation-delay: 0s;
    }

    &:nth-child(2) {
      width: 60px;
      height: 60px;
      animation-delay: 0.4s;
    }

    &:nth-child(3) {
      width: 80px;
      height: 80px;
      animation-delay: 0.8s;
    }
  }

  .core {
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--portal-primary);
    border-radius: 50%;
    filter: blur(4px);
    animation: pulse 2s ease-out infinite;
  }

  @keyframes expand {
    0% {
      transform: scale(0.5);
      opacity: 0.8;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid var(--portal-primary);
    border-radius: 8px;
    color: var(--portal-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--portal-primary);
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .portal-clipboard:hover .portal-effect {
    opacity: 1;
  }

  .portal-clipboard:hover .content {
    border-color: var(--portal-secondary);
    color: var(--portal-secondary);
    box-shadow: 0 0 20px var(--portal-glow);
  }

  .portal-clipboard:hover svg {
    fill: var(--portal-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .portal-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 