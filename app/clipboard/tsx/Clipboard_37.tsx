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
      <button className="wave-clipboard" onClick={handleCopy}>
        <div className="wave-container">
          <div className="waves">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
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
  .wave-clipboard {
    --wave-primary: #0ea5e9;
    --wave-light: #38bdf8;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .wave-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .waves {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .wave {
    position: absolute;
    width: 200%;
    height: 200%;
    background: var(--wave-light);
    opacity: 0.3;
    border-radius: 40%;
    left: -50%;
    top: 0;
    animation: rotate 6s linear infinite;
  }

  .wave:nth-child(2) {
    animation-delay: -2s;
  }

  .wave:nth-child(3) {
    animation-delay: -4s;
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
    color: var(--wave-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--wave-primary);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .wave-clipboard:hover .waves {
    opacity: 1;
  }

  .wave-clipboard:hover .content {
    background: rgba(255, 255, 255, 0.95);
  }

  .wave-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .wave-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 