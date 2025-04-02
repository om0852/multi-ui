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
      <button className="neon-pulse-clipboard" onClick={handleCopy}>
        <div className="neon-pulse-container">
          <div className="pulse-rings">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="pulse-ring" style={{ '--i': i } as React.CSSProperties}></div>
            ))}
          </div>
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
  .neon-pulse-clipboard {
    --neon-primary: #ff0099;
    --neon-secondary: #00ff99;
    --neon-bg: #1a1a1a;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .neon-pulse-container {
    position: relative;
    background: var(--neon-bg);
    border-radius: 8px;
    overflow: hidden;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .pulse-ring {
    position: absolute;
    inset: -50%;
    border: 2px solid var(--neon-primary);
    border-radius: 50%;
    animation: pulse 2s cubic-bezier(0, 0.55, 0.45, 1) infinite;
    animation-delay: calc(var(--i) * 0.5s);
    opacity: 0;
  }

  @keyframes pulse {
    0% {
      transform: scale(0);
      opacity: 1;
      border-color: var(--neon-primary);
    }
    50% {
      border-color: var(--neon-secondary);
    }
    100% {
      transform: scale(1);
      opacity: 0;
      border-color: var(--neon-primary);
    }
  }

  .neon-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      var(--neon-primary) 0%,
      transparent 70%
    );
    opacity: 0;
    mix-blend-mode: screen;
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 0.3;
      transform: scale(1.2);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(26, 26, 26, 0.9);
    border: 2px solid var(--neon-primary);
    border-radius: 8px;
    color: var(--neon-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--neon-primary);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--neon-primary);
      filter: drop-shadow(0 0 8px var(--neon-primary));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .neon-pulse-clipboard:hover .pulse-rings {
    opacity: 1;
  }

  .neon-pulse-clipboard:hover .content {
    border-color: var(--neon-secondary);
    color: var(--neon-secondary);
    text-shadow: 0 0 12px var(--neon-secondary);
    box-shadow: 0 0 20px rgba(0, 255, 153, 0.3);
  }

  .neon-pulse-clipboard:hover svg {
    fill: var(--neon-secondary);
    filter: drop-shadow(0 0 12px var(--neon-secondary));
    transform: rotate(360deg);
  }

  /* Active State */
  .neon-pulse-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 