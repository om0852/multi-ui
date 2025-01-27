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
      <button className="radar-clipboard" onClick={handleCopy}>
        <div className="radar-container">
          <div className="radar">
            <div className="scan"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
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
  .radar-clipboard {
    --radar-primary: #14b8a6;
    --radar-glow: rgba(20, 184, 166, 0.3);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .radar-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .radar {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .scan {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      var(--radar-glow) 60deg,
      transparent 120deg
    );
    animation: scan 3s linear infinite;
    transform-origin: bottom right;
  }

  .ring {
    position: absolute;
    inset: 0;
    border: 2px solid var(--radar-primary);
    border-radius: 50%;
    opacity: 0;
    animation: pulse 3s linear infinite;

    &:nth-child(2) {
      animation-delay: 1s;
    }
    &:nth-child(3) {
      animation-delay: 2s;
    }
  }

  @keyframes scan {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0);
      opacity: 0.5;
    }
    100% {
      transform: scale(2);
      opacity: 0;
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
    border: 2px solid var(--radar-primary);
    border-radius: 8px;
    color: var(--radar-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--radar-primary);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .radar-clipboard:hover .radar {
    opacity: 1;
  }

  .radar-clipboard:hover .content {
    background: rgba(255, 255, 255, 0.95);
  }

  .radar-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .radar-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 