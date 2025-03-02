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
      <button className="grid-clipboard" onClick={handleCopy}>
        <div className="grid-container">
          <div className="grid-effect">
            <div className="grid">
              {[...Array(6)].map((_, i) => (
                <div key={`h${i}`} className="horizontal-line" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--y': `${(i + 1) * 20}%`
                } as React.CSSProperties} />
              ))}
              {[...Array(6)].map((_, i) => (
                <div key={`v${i}`} className="vertical-line" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--x': `${(i + 1) * 20}%`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="intersections">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="point" style={{ 
                  '--x': `${(Math.floor(i / 5) + 1) * 20}%`,
                  '--y': `${(i % 5 + 1) * 20}%`,
                  '--delay': `${Math.random() * 2}s`
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
  .grid-clipboard {
    --grid-primary: #06b6d4;
    --grid-secondary: #22d3ee;
    --grid-glow: rgba(6, 182, 212, 0.5);
    --grid-dark: #083344;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .grid-container {
    position: relative;
    background: var(--grid-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .grid-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .grid {
    position: absolute;
    inset: 0;
  }

  .horizontal-line {
    position: absolute;
    left: 0;
    top: var(--y);
    width: 100%;
    height: 1px;
    background: var(--grid-primary);
    transform-origin: left;
    animation: scan-h 2s ease-in-out infinite;
    animation-delay: var(--delay);
    box-shadow: 0 0 10px var(--grid-glow);
  }

  .vertical-line {
    position: absolute;
    top: 0;
    left: var(--x);
    width: 1px;
    height: 100%;
    background: var(--grid-primary);
    transform-origin: top;
    animation: scan-v 2s ease-in-out infinite;
    animation-delay: var(--delay);
    box-shadow: 0 0 10px var(--grid-glow);
  }

  @keyframes scan-h {
    0%, 100% {
      transform: scaleX(0);
      opacity: 0;
    }
    50% {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @keyframes scan-v {
    0%, 100% {
      transform: scaleY(0);
      opacity: 0;
    }
    50% {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  .intersections {
    position: absolute;
    inset: 0;
  }

  .point {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: 4px;
    height: 4px;
    background: var(--grid-secondary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 1.5s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes pulse {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
      box-shadow: 0 0 20px var(--grid-glow);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 1;
      box-shadow: 0 0 30px var(--grid-glow);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--grid-dark);
    border: 2px solid var(--grid-primary);
    border-radius: 8px;
    color: var(--grid-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--grid-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--grid-primary);
      filter: drop-shadow(0 0 8px var(--grid-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .grid-clipboard:hover .grid-effect {
    opacity: 1;
  }

  .grid-clipboard:hover .content {
    background: transparent;
    border-color: var(--grid-secondary);
    color: var(--grid-secondary);
  }

  .grid-clipboard:hover svg {
    fill: var(--grid-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .grid-clipboard:active .content {
    transform: scale(0.98);
  }
`; 

export default Clipboard;