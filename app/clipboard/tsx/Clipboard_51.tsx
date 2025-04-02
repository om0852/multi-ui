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
      <button className="terminal-clipboard" onClick={handleCopy}>
        <div className="terminal-container">
          <div className="scanlines"></div>
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
  .terminal-clipboard {
    --terminal-bg: #0a0a0a;
    --terminal-text: #00ff00;
    --terminal-glow: rgba(0, 255, 0, 0.5);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .terminal-container {
    position: relative;
    background: var(--terminal-bg);
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
  }

  .scanlines {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.5) 50%
    );
    background-size: 100% 4px;
    opacity: 0.3;
    pointer-events: none;
    animation: scan 10s linear infinite;
  }

  @keyframes scan {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 100%;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    color: var(--terminal-text);
    font-family: monospace;
    font-size: 0.9em;
    text-shadow: 0 0 8px var(--terminal-glow);
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--terminal-text);
      filter: drop-shadow(0 0 8px var(--terminal-glow));
      transition: all 0.3s ease;
    }

    &::before {
      content: '>';
      margin-right: 0.5em;
      animation: blink 1s step-end infinite;
    }
  }

  @keyframes blink {
    50% { opacity: 0; }
  }

  /* Hover Effects */
  .terminal-clipboard:hover .content {
    text-shadow: 0 0 12px var(--terminal-glow);
  }

  .terminal-clipboard:hover svg {
    transform: rotate(360deg);
    filter: drop-shadow(0 0 12px var(--terminal-glow));
  }

  /* Active State */
  .terminal-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 