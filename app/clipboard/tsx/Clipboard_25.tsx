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
      <button className="mono-clipboard" onClick={handleCopy}>
        <div className="mono-content">
          <span className="mono-text">{text}</span>
          <svg className="mono-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
            <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .mono-clipboard {
    --mono-bg: #ffffff;
    --mono-text: #2d3436;
    --mono-shadow: rgba(0, 0, 0, 0.1);
    
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .mono-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--mono-bg);
    border: 1px solid #e9ecef;
    border-radius: 4px;
    box-shadow: 0 2px 4px var(--mono-shadow);
    transition: all 0.2s ease;
  }

  .mono-text {
    color: var(--mono-text);
    font-size: 0.9em;
  }

  .mono-icon {
    width: 1.2em;
    height: 1.2em;
    fill: var(--mono-text);
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  /* Hover Effects */
  .mono-clipboard:hover .mono-content {
    box-shadow: 0 4px 8px var(--mono-shadow);
    transform: translateY(-1px);
  }

  .mono-clipboard:hover .mono-icon {
    opacity: 1;
  }

  /* Active State */
  .mono-clipboard:active .mono-content {
    transform: translateY(0);
    box-shadow: 0 1px 2px var(--mono-shadow);
  }
`;

export default Clipboard; 