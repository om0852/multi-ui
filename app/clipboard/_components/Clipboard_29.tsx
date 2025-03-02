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
        <div className="neon-content">
          <span className="neon-text">{text}</span>
          <div className="neon-icon">
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
    --neon-primary: #ff2d95;
    --neon-secondary: #4355ff;
    --neon-shadow: rgba(255, 45, 149, 0.3);
    
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .neon-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(255, 255, 255, 0.03);
    border: 2px solid var(--neon-primary);
    border-radius: 6px;
    box-shadow: 
      0 0 5px var(--neon-primary),
      inset 0 0 5px var(--neon-primary);
    transition: all 0.3s ease;
  }

  .neon-text {
    color: var(--neon-primary);
    font-size: 0.9em;
    font-weight: 500;
    text-shadow: 0 0 5px var(--neon-shadow);
  }

  .neon-icon {
    width: 1.2em;
    height: 1.2em;
    
    svg {
      width: 100%;
      height: 100%;
      fill: var(--neon-primary);
      filter: drop-shadow(0 0 2px var(--neon-primary));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .neon-clipboard:hover .neon-content {
    --neon-primary: var(--neon-secondary);
    box-shadow: 
      0 0 10px var(--neon-secondary),
      inset 0 0 10px var(--neon-secondary);
    background: rgba(67, 85, 255, 0.05);
  }

  .neon-clipboard:hover .neon-icon svg {
    transform: scale(1.1);
  }

  /* Active State */
  .neon-clipboard:active .neon-content {
    transform: scale(0.98);
    box-shadow: 
      0 0 8px var(--neon-secondary),
      inset 0 0 8px var(--neon-secondary);
  }
`;

export default Clipboard; 