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
      <button className="float-clipboard" onClick={handleCopy}>
        <div className="float-content">
          <span className="float-text">{text}</span>
          <div className="float-icon">
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
  .float-clipboard {
    --float-bg: #ffffff;
    --float-shadow: rgba(149, 157, 165, 0.2);
    --float-accent: #3498db;
    
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
    perspective: 1000px;
  }

  .float-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 1em 1.4em;
    background: var(--float-bg);
    border-radius: 8px;
    box-shadow: 
      0 4px 6px var(--float-shadow),
      0 1px 3px rgba(0, 0, 0, 0.08);
    transform-style: preserve-3d;
    transition: all 0.3s ease;
  }

  .float-text {
    color: #2c3e50;
    font-size: 0.9em;
    font-weight: 500;
  }

  .float-icon {
    width: 1.2em;
    height: 1.2em;
    
    svg {
      width: 100%;
      height: 100%;
      fill: var(--float-accent);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .float-clipboard:hover .float-content {
    transform: translateY(-5px) rotateX(5deg);
    box-shadow: 
      0 8px 12px var(--float-shadow),
      0 2px 4px rgba(0, 0, 0, 0.08);
  }

  .float-clipboard:hover .float-icon svg {
    transform: rotate(-10deg);
  }

  /* Active State */
  .float-clipboard:active .float-content {
    transform: translateY(-2px) rotateX(2deg);
    box-shadow: 
      0 6px 8px var(--float-shadow),
      0 1px 2px rgba(0, 0, 0, 0.08);
  }
`;

export default Clipboard; 