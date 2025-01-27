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
      <button className="pulse-clipboard" onClick={handleCopy}>
        <div className="pulse-container">
          <div className="pulse-gradient"></div>
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
  .pulse-clipboard {
    --pulse-color-1: #ec4899;
    --pulse-color-2: #8b5cf6;
    --pulse-color-3: #3b82f6;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .pulse-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .pulse-gradient {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      var(--pulse-color-1),
      var(--pulse-color-2),
      var(--pulse-color-3),
      var(--pulse-color-1)
    );
    animation: rotate 4s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    color: var(--pulse-color-2);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--pulse-color-2);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .pulse-clipboard:hover .pulse-gradient {
    opacity: 1;
  }

  .pulse-clipboard:hover .content {
    background: rgba(255, 255, 255, 0.95);
  }

  .pulse-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .pulse-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 