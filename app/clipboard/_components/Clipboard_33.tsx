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
          <div className="glitch-layers">
            <div className="glitch-layer"></div>
            <div className="glitch-layer"></div>
            <div className="glitch-layer"></div>
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
    --glitch-primary: #2d3436;
    --glitch-secondary: #00cec9;
    --glitch-error: #ff0000;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .glitch-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .glitch-layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .glitch-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--glitch-secondary);
    mix-blend-mode: multiply;
    opacity: 0;
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    color: var(--glitch-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--glitch-primary);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .glitch-clipboard:hover .glitch-layer {
    animation: glitch 1s infinite;
  }

  .glitch-clipboard:hover .glitch-layer:nth-child(2) {
    animation-delay: 0.1s;
  }

  .glitch-clipboard:hover .glitch-layer:nth-child(3) {
    animation-delay: 0.2s;
  }

  .glitch-clipboard:hover .content {
    animation: shake 0.5s infinite;
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
      opacity: 0;
    }
    20% {
      transform: translate(-5px, 5px);
      opacity: 0.1;
    }
    40% {
      transform: translate(-5px, -5px);
      opacity: 0.2;
    }
    60% {
      transform: translate(5px, 5px);
      opacity: 0.1;
    }
    80% {
      transform: translate(5px, -5px);
      opacity: 0.2;
    }
    100% {
      transform: translate(0);
      opacity: 0;
    }
  }

  @keyframes shake {
    0%, 100% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
  }

  /* Active State */
  .glitch-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 