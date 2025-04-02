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
      <button className="retro-clipboard" onClick={handleCopy}>
        <div className="retro-container">
          <div className="pixel-border">
            <div className="pixel-corner top-left"></div>
            <div className="pixel-corner top-right"></div>
            <div className="pixel-corner bottom-left"></div>
            <div className="pixel-corner bottom-right"></div>
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
  .retro-clipboard {
    --retro-primary: #ffd800;
    --retro-secondary: #ff0000;
    --retro-bg: #202020;
    --pixel-size: 4px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
    font-family: 'Press Start 2P', monospace;
  }

  .retro-container {
    position: relative;
    background: var(--retro-bg);
    padding: var(--pixel-size);
    image-rendering: pixelated;
  }

  .pixel-border {
    position: absolute;
    inset: 0;
    border: var(--pixel-size) solid var(--retro-primary);
    clip-path: polygon(
      0 var(--pixel-size),
      var(--pixel-size) var(--pixel-size),
      var(--pixel-size) 0,
      calc(100% - var(--pixel-size)) 0,
      calc(100% - var(--pixel-size)) var(--pixel-size),
      100% var(--pixel-size),
      100% calc(100% - var(--pixel-size)),
      calc(100% - var(--pixel-size)) calc(100% - var(--pixel-size)),
      calc(100% - var(--pixel-size)) 100%,
      var(--pixel-size) 100%,
      var(--pixel-size) calc(100% - var(--pixel-size)),
      0 calc(100% - var(--pixel-size))
    );
  }

  .pixel-corner {
    position: absolute;
    width: calc(var(--pixel-size) * 2);
    height: calc(var(--pixel-size) * 2);
    background: var(--retro-primary);

    &.top-left {
      top: 0;
      left: 0;
    }
    &.top-right {
      top: 0;
      right: 0;
    }
    &.bottom-left {
      bottom: 0;
      left: 0;
    }
    &.bottom-right {
      bottom: 0;
      right: 0;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--retro-bg);
    color: var(--retro-primary);
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
    transition: all 0.1s steps(2);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--retro-primary);
      transition: all 0.1s steps(2);
    }
  }

  /* Hover Effects */
  .retro-clipboard:hover .pixel-border {
    border-color: var(--retro-secondary);
    animation: border-dance 0.5s steps(2) infinite;
  }

  .retro-clipboard:hover .pixel-corner {
    background: var(--retro-secondary);
    animation: corner-flash 0.5s steps(2) infinite;
  }

  .retro-clipboard:hover .content {
    color: var(--retro-secondary);
    transform: translate(2px, 2px);
  }

  .retro-clipboard:hover svg {
    fill: var(--retro-secondary);
    transform: rotate(90deg);
  }

  @keyframes border-dance {
    0%, 100% {
      border-width: var(--pixel-size);
    }
    50% {
      border-width: calc(var(--pixel-size) * 1.5);
    }
  }

  @keyframes corner-flash {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Active State */
  .retro-clipboard:active .content {
    transform: translate(4px, 4px);
  }
`;

export default Clipboard; 