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
      <button className="glitch-clipboard" onClick={handleCopy}>
        <div className="glitch-container">
          <div className="glitch-effect">
            <div className="glitch-slice"></div>
            <div className="glitch-slice"></div>
            <div className="glitch-slice"></div>
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
  .glitch-clipboard {
    --glitch-primary: #2dd4bf;
    --glitch-secondary: #14b8a6;
    --glitch-error: #ef4444;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .glitch-container {
    position: relative;
    background: #1a1a1a;
    border-radius: 8px;
    overflow: hidden;
  }

  .glitch-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    mix-blend-mode: hard-light;
  }

  .glitch-slice {
    position: absolute;
    inset: 0;
    background: var(--glitch-error);
    opacity: 0;
    transform: translateX(0);

    &:nth-child(1) {
      animation: glitch1 0.4s ease-out infinite;
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }

    &:nth-child(2) {
      animation: glitch2 0.4s ease-out infinite;
      clip-path: polygon(0 61%, 100% 61%, 100% 63%, 0 63%);
    }

    &:nth-child(3) {
      animation: glitch3 0.4s ease-out infinite;
      clip-path: polygon(0 90%, 100% 90%, 100% 91%, 0 91%);
    }
  }

  @keyframes glitch1 {
    0% { transform: translateX(0); }
    30% { transform: translateX(-10px); }
    60% { transform: translateX(10px); }
    100% { transform: translateX(0); }
  }

  @keyframes glitch2 {
    0% { transform: translateX(0); }
    30% { transform: translateX(15px); }
    60% { transform: translateX(-15px); }
    100% { transform: translateX(0); }
  }

  @keyframes glitch3 {
    0% { transform: translateX(0); }
    30% { transform: translateX(-5px); }
    60% { transform: translateX(5px); }
    100% { transform: translateX(0); }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: #1a1a1a;
    border: 2px solid var(--glitch-primary);
    border-radius: 8px;
    color: var(--glitch-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--glitch-primary);
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .glitch-clipboard:hover .glitch-effect {
    opacity: 1;
  }

  .glitch-clipboard:hover .content {
    border-color: var(--glitch-secondary);
    color: var(--glitch-secondary);
    animation: borderGlitch 0.4s steps(2) infinite;
  }

  .glitch-clipboard:hover svg {
    fill: var(--glitch-secondary);
    transform: rotate(360deg);
  }

  @keyframes borderGlitch {
    0% { border-color: var(--glitch-primary); }
    50% { border-color: var(--glitch-error); }
    100% { border-color: var(--glitch-primary); }
  }

  /* Active State */
  .glitch-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 