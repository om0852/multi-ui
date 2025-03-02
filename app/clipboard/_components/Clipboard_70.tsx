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
      <button className="hexagon-clipboard" onClick={handleCopy}>
        <div className="hexagon-container">
          <div className="hexagon-effect">
            <div className="hexagons">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="hexagon" style={{ 
                  '--delay': `${i * 0.5}s`,
                  '--scale': `${1 - i * 0.2}`
                } as React.CSSProperties}>
                  <div className="hex-inner"></div>
                </div>
              ))}
            </div>
            <div className="glow-points">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="point" style={{ 
                  '--angle': `${i * 60}deg`,
                  '--delay': `${i * 0.2}s`
                } as React.CSSProperties} />
              ))}
            </div>
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
  .hexagon-clipboard {
    --hex-primary: #14b8a6;
    --hex-secondary: #2dd4bf;
    --hex-glow: rgba(20, 184, 166, 0.5);
    --hex-dark: #042f2e;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .hexagon-container {
    position: relative;
    background: var(--hex-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .hexagon-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .hexagons {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hexagon {
    position: absolute;
    width: 100px;
    height: 57.735px; /* height = width * sin(60°) */
    background: transparent;
    border: 2px solid var(--hex-primary);
    transform: scale(var(--scale));
    animation: rotate 6s linear infinite;
    animation-delay: var(--delay);

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid var(--hex-primary);
      transform-origin: center;
    }

    &::before {
      transform: rotate(60deg);
    }

    &::after {
      transform: rotate(-60deg);
    }

    .hex-inner {
      position: absolute;
      inset: -2px;
      opacity: 0.1;
      background: var(--hex-primary);
      animation: pulse 2s ease-in-out infinite;
      animation-delay: var(--delay);
    }
  }

  @keyframes rotate {
    0% {
      transform: scale(var(--scale)) rotate(0deg);
    }
    100% {
      transform: scale(var(--scale)) rotate(360deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.3;
    }
  }

  .glow-points {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .point {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--hex-secondary);
    border-radius: 50%;
    transform-origin: center 50px;
    transform: rotate(var(--angle)) translateY(-50px);
    animation: glow 1.5s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes glow {
    0%, 100% {
      transform: rotate(var(--angle)) translateY(-50px) scale(1);
      opacity: 1;
      box-shadow: 0 0 20px var(--hex-glow);
    }
    50% {
      transform: rotate(var(--angle)) translateY(-50px) scale(1.5);
      opacity: 0.5;
      box-shadow: 0 0 10px var(--hex-glow);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--hex-dark);
    border: 2px solid var(--hex-primary);
    border-radius: 8px;
    color: var(--hex-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--hex-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--hex-primary);
      filter: drop-shadow(0 0 8px var(--hex-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .hexagon-clipboard:hover .hexagon-effect {
    opacity: 1;
  }

  .hexagon-clipboard:hover .content {
    background: transparent;
    border-color: var(--hex-secondary);
    color: var(--hex-secondary);
  }

  .hexagon-clipboard:hover svg {
    fill: var(--hex-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .hexagon-clipboard:active .content {
    transform: scale(0.98);
  }
`; 


export default Clipboard;