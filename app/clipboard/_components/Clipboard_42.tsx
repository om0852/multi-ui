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
      <button className="panels-clipboard" onClick={handleCopy}>
        <div className="panels-container">
          <div className="panels">
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
          </div>
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
  .panels-clipboard {
    --panel-color-1: #10b981;
    --panel-color-2: #059669;
    --panel-color-3: #047857;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .panels-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .panels {
    position: absolute;
    inset: 0;
    display: flex;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .panel {
    flex: 1;
    height: 100%;
    transform: translateY(100%);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:nth-child(1) {
      background: var(--panel-color-1);
      transition-delay: 0s;
    }
    &:nth-child(2) {
      background: var(--panel-color-2);
      transition-delay: 0.1s;
    }
    &:nth-child(3) {
      background: var(--panel-color-3);
      transition-delay: 0.2s;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: #ffffff;
    border: 2px solid var(--panel-color-2);
    border-radius: 8px;
    color: var(--panel-color-2);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--panel-color-2);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .panels-clipboard:hover .panels {
    opacity: 1;
  }

  .panels-clipboard:hover .panel {
    transform: translateY(0);
  }

  .panels-clipboard:hover .content {
    background: rgba(255, 255, 255, 0.9);
    border-color: transparent;
    color: #ffffff;
  }

  .panels-clipboard:hover svg {
    fill: #ffffff;
    transform: rotate(360deg);
  }

  /* Active State */
  .panels-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 