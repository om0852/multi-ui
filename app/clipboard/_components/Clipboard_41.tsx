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
      <button className="blob-clipboard" onClick={handleCopy}>
        <div className="blob-container">
          <div className="blob"></div>
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
  .blob-clipboard {
    --blob-color-1: #06b6d4;
    --blob-color-2: #3b82f6;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .blob-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .blob {
    position: absolute;
    width: 150px;
    height: 150px;
    background: var(--blob-color-1);
    border-radius: 50%;
    filter: blur(20px);
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: morph 8s ease-in-out infinite;
    transform: translate(-50%, -50%) scale(0.5);
    top: 50%;
    left: 50%;
  }

  @keyframes morph {
    0%, 100% {
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.5);
    }
    34% {
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform: translate(-50%, -50%) rotate(120deg) scale(0.5);
    }
    67% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
      transform: translate(-50%, -50%) rotate(240deg) scale(0.5);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    border: 2px solid var(--blob-color-1);
    border-radius: 8px;
    color: var(--blob-color-1);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--blob-color-1);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .blob-clipboard:hover .blob {
    opacity: 0.5;
  }

  .blob-clipboard:hover .content {
    border-color: var(--blob-color-2);
    color: var(--blob-color-2);
  }

  .blob-clipboard:hover svg {
    fill: var(--blob-color-2);
    transform: rotate(360deg);
  }

  /* Active State */
  .blob-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 