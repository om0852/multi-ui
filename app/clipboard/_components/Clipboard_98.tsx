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
      <button className="pixel-clipboard" onClick={handleCopy}>
        <div className="pixel-container">
          <div className="pixel-border">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-line" style={{ '--i': i } as React.CSSProperties}></div>
            ))}
          </div>
          <div className="pixel-background">
            <div className="pixel-grid"></div>
            <div className="pixel-sparkles">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="sparkle" style={{ '--i': i } as React.CSSProperties}></div>
              ))}
            </div>
          </div>
          <div className="content">
            <span className="pixel-text">{text}</span>
            <svg className="pixel-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  .pixel-clipboard {
    --pixel-primary: #ffd700;
    --pixel-secondary: #ff6b6b;
    --pixel-accent: #4caf50;
    --pixel-dark: #2a2a2a;
    --pixel-size: 4px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
    image-rendering: pixelated;
  }

  .pixel-container {
    position: relative;
    background: var(--pixel-dark);
    border-radius: 4px;
    overflow: hidden;
  }

  .pixel-border {
    position: absolute;
    inset: 0;
    border: var(--pixel-size) solid var(--pixel-primary);
  }

  .border-line {
    position: absolute;
    background: var(--pixel-primary);

    &:nth-child(1) {
      top: 0;
      left: 25%;
      width: var(--pixel-size);
      height: var(--pixel-size);
      animation: pixel-move-1 2s infinite;
    }

    &:nth-child(2) {
      top: 25%;
      right: 0;
      width: var(--pixel-size);
      height: var(--pixel-size);
      animation: pixel-move-2 2s infinite;
    }

    &:nth-child(3) {
      bottom: 0;
      right: 25%;
      width: var(--pixel-size);
      height: var(--pixel-size);
      animation: pixel-move-3 2s infinite;
    }

    &:nth-child(4) {
      bottom: 25%;
      left: 0;
      width: var(--pixel-size);
      height: var(--pixel-size);
      animation: pixel-move-4 2s infinite;
    }
  }

  @keyframes pixel-move-1 {
    0% { left: 0; }
    50% { left: calc(100% - var(--pixel-size)); }
    100% { left: 0; }
  }

  @keyframes pixel-move-2 {
    0% { top: 0; }
    50% { top: calc(100% - var(--pixel-size)); }
    100% { top: 0; }
  }

  @keyframes pixel-move-3 {
    0% { right: 0; }
    50% { right: calc(100% - var(--pixel-size)); }
    100% { right: 0; }
  }

  @keyframes pixel-move-4 {
    0% { bottom: 0; }
    50% { bottom: calc(100% - var(--pixel-size)); }
    100% { bottom: 0; }
  }

  .pixel-background {
    position: absolute;
    inset: var(--pixel-size);
  }

  .pixel-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: var(--pixel-size) var(--pixel-size);
  }

  .pixel-sparkles {
    position: absolute;
    inset: 0;
  }

  .sparkle {
    position: absolute;
    width: var(--pixel-size);
    height: var(--pixel-size);
    background: var(--pixel-primary);
    animation: sparkle 1.5s calc(var(--i) * 0.2s) infinite;

    @keyframes sparkle {
      0% {
        transform: translate(
          calc(var(--i) * 50px),
          calc(var(--i) * 30px)
        ) scale(0);
        opacity: 0;
      }
      50% {
        transform: translate(
          calc(var(--i) * 100px),
          calc(var(--i) * 60px)
        ) scale(1);
        opacity: 1;
      }
      100% {
        transform: translate(
          calc(var(--i) * 150px),
          calc(var(--i) * 90px)
        ) scale(0);
        opacity: 0;
      }
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--pixel-dark);
    border: var(--pixel-size) solid var(--pixel-secondary);
    margin: calc(var(--pixel-size) * 2);
    z-index: 1;
  }

  .pixel-text {
    color: var(--pixel-primary);
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: var(--pixel-size);
    text-shadow: 
      var(--pixel-size) var(--pixel-size) 0 var(--pixel-secondary),
      calc(var(--pixel-size) * -1) calc(var(--pixel-size) * -1) 0 var(--pixel-accent);
    transition: all 0.3s steps(3);
  }

  .pixel-svg {
    width: 1.2em;
    height: 1.2em;
    fill: var(--pixel-primary);
    filter: drop-shadow(var(--pixel-size) var(--pixel-size) 0 var(--pixel-secondary));
    transition: all 0.3s steps(3);
  }

  /* Hover Effects */
  .pixel-clipboard:hover .border-line {
    background: var(--pixel-accent);
  }

  .pixel-clipboard:hover .content {
    border-color: var(--pixel-accent);
    transform: translate(var(--pixel-size), var(--pixel-size));
  }

  .pixel-clipboard:hover .pixel-text {
    color: var(--pixel-accent);
    text-shadow: 
      var(--pixel-size) var(--pixel-size) 0 var(--pixel-primary),
      calc(var(--pixel-size) * -1) calc(var(--pixel-size) * -1) 0 var(--pixel-secondary);
  }

  .pixel-clipboard:hover .pixel-svg {
    fill: var(--pixel-accent);
    transform: rotate(90deg) scale(1.1);
    filter: drop-shadow(var(--pixel-size) var(--pixel-size) 0 var(--pixel-primary));
  }

  /* Active State */
  .pixel-clipboard:active .content {
    transform: scale(0.95) translate(var(--pixel-size), var(--pixel-size));
  }

  .pixel-clipboard:active .pixel-text {
    text-shadow: 
      calc(var(--pixel-size) * 0.5) calc(var(--pixel-size) * 0.5) 0 var(--pixel-primary),
      calc(var(--pixel-size) * -0.5) calc(var(--pixel-size) * -0.5) 0 var(--pixel-secondary);
  }
`;

export default Clipboard; 