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
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-button"></span>
              <span className="terminal-button"></span>
              <span className="terminal-button"></span>
            </div>
            <div className="terminal-title">clipboard.sh</div>
          </div>
          <div className="terminal-content">
            <span className="prompt">$</span>
            <span className="command">{text}</span>
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
    --terminal-bg: #2e3440;
    --terminal-text: #d8dee9;
    --terminal-prompt: #88c0d0;
    --terminal-header: #3b4252;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
    font-family: 'Courier New', monospace;
  }

  .terminal-window {
    background: var(--terminal-bg);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .terminal-header {
    background: var(--terminal-header);
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .terminal-buttons {
    display: flex;
    gap: 0.5em;
  }

  .terminal-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #bf616a;

    &:nth-child(2) {
      background: #ebcb8b;
    }

    &:nth-child(3) {
      background: #a3be8c;
    }
  }

  .terminal-title {
    color: var(--terminal-text);
    opacity: 0.7;
    font-size: 0.8em;
  }

  .terminal-content {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 1em;
    color: var(--terminal-text);
    font-size: 0.9em;
  }

  .prompt {
    color: var(--terminal-prompt);
    font-weight: bold;
  }

  .command {
    flex: 1;
    text-align: left;
  }

  svg {
    width: 1.2em;
    height: 1.2em;
    fill: var(--terminal-text);
    transition: transform 0.3s ease;
  }

  /* Hover Effects */
  .terminal-clipboard:hover .terminal-window {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  .terminal-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .terminal-clipboard:active .terminal-window {
    transform: scale(0.98);
  }

  /* Cursor Animation */
  .command::after {
    content: '';
    display: inline-block;
    width: 8px;
    height: 15px;
    background: var(--terminal-text);
    margin-left: 4px;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

export default Clipboard; 