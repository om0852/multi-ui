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
      <button className="neon-clipboard" onClick={handleCopy}>
        <div className="neon-container">
          <div className="neon-glow"></div>
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
  .neon-clipboard {
    --neon-primary: #f0abfc;
    --neon-secondary: #e879f9;
    --neon-glow: rgba(240, 171, 252, 0.5);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .neon-container {
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    overflow: hidden;
  }

  .neon-glow {
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, var(--neon-primary), var(--neon-secondary));
    filter: blur(15px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(0, 0, 0, 0.9);
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
  .neon-clipboard:hover .neon-glow {
    opacity: 0.5;
    animation: pulse 2s ease-in-out infinite;
  }

  .neon-clipboard:hover .content {
    border-color: var(--neon-secondary);
    color: var(--neon-secondary);
    text-shadow: 0 0 12px var(--neon-glow);
  }

  .neon-clipboard:hover svg {
    fill: var(--neon-secondary);
    filter: drop-shadow(0 0 12px var(--neon-glow));
    transform: rotate(360deg);
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
  }

  /* Active State */
  .neon-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 