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
      <button className="neumorph-clipboard" onClick={handleCopy}>
        <div className="neumorph-container">
          <div className="neumorph-text">{text}</div>
          <div className="neumorph-icon">
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
  .neumorph-clipboard {
    --neumorph-bg: #e0e0e0;
    --neumorph-text: #666666;
    --neumorph-shadow1: #ffffff;
    --neumorph-shadow2: #bebebe;
    
    position: relative;
    padding: 0.5em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .neumorph-container {
    position: relative;
    padding: 0.8em 1.2em;
    background: var(--neumorph-bg);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    transition: all 0.2s ease;
    box-shadow: 
      3px 3px 6px var(--neumorph-shadow2),
      -3px -3px 6px var(--neumorph-shadow1);
  }

  .neumorph-text {
    color: var(--neumorph-text);
    font-size: 0.9em;
  }

  .neumorph-icon {
    width: 1.2em;
    height: 1.2em;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--neumorph-text);
    }
  }

  /* Hover Effects */
  .neumorph-clipboard:hover .neumorph-container {
    box-shadow: 
      2px 2px 4px var(--neumorph-shadow2),
      -2px -2px 4px var(--neumorph-shadow1);
  }

  /* Active State */
  .neumorph-clipboard:active .neumorph-container {
    box-shadow: 
      inset 2px 2px 4px var(--neumorph-shadow2),
      inset -2px -2px 4px var(--neumorph-shadow1);
  }
`;

export default Clipboard; 