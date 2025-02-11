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
      <button className="paper-clipboard" onClick={handleCopy}>
        <div className="paper-layers">
          <div className="layer layer-1"></div>
          <div className="layer layer-2"></div>
          <div className="layer layer-3"></div>
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
  .paper-clipboard {
    --paper-bg: #ffffff;
    --paper-shadow: #e0e0e0;
    --paper-text: #2c3e50;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .paper-layers {
    position: relative;
    background: var(--paper-bg);
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .layer {
    position: absolute;
    background: var(--paper-bg);
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .layer-1 {
    bottom: -4px;
    left: 2px;
    right: 2px;
    height: 100%;
    background: var(--paper-shadow);
    z-index: 1;
  }

  .layer-2 {
    bottom: -2px;
    left: 1px;
    right: 1px;
    height: 100%;
    background: var(--paper-shadow);
    z-index: 2;
  }

  .layer-3 {
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: var(--paper-bg);
    z-index: 3;
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    color: var(--paper-text);
    font-size: 0.9em;
    z-index: 4;
    background: var(--paper-bg);
    border-radius: 8px;
    border: 1px solid var(--paper-shadow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--paper-text);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .paper-clipboard:hover .layer-1 {
    transform: translateY(2px);
  }

  .paper-clipboard:hover .layer-2 {
    transform: translateY(1px);
  }

  .paper-clipboard:hover .content svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .paper-clipboard:active .paper-layers {
    transform: translateY(4px);
  }

  .paper-clipboard:active .layer-1,
  .paper-clipboard:active .layer-2 {
    transform: translateY(0);
  }
`;

export default Clipboard; 