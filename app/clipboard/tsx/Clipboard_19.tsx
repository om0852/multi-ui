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
      <button className="glass-clipboard" onClick={handleCopy}>
        <div className="glass-container">
          <div className="glass-text">{text}</div>
          <div className="glass-icon">
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
  .glass-clipboard {
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --glass-text: #ffffff;
    
    position: relative;
    padding: 0.5em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .glass-container {
    position: relative;
    padding: 0.8em 1.2em;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);
  }

  .glass-text {
    color: var(--glass-text);
    font-size: 0.9em;
  }

  .glass-icon {
    width: 1.2em;
    height: 1.2em;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--glass-text);
      opacity: 0.8;
    }
  }

  /* Hover Effects */
  .glass-clipboard:hover .glass-container {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  /* Active State */
  .glass-clipboard:active .glass-container {
    transform: scale(0.98);
  }
`;

export default Clipboard; 