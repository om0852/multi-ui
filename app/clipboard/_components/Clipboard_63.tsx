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
          <div className="pixel-effect">
            <div className="pixels">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="pixel" style={{ 
                  '--delay': `${Math.random() * 2}s`,
                  '--x': `${(i % 10) * 10}%`,
                  '--y': `${Math.floor(i / 10) * 10}%`
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
  .pixel-clipboard {
    --pixel-primary: #10b981;
    --pixel-secondary: #059669;
    --pixel-accent: #34d399;
    --pixel-dark: #064e3b;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .pixel-container {
    position: relative;
    background: var(--pixel-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .pixel-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .pixels {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }

  .pixel {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--pixel-primary);
    transform: scale(0);
    animation: pixelate 0.5s ease-out forwards;
    animation-delay: var(--delay);

    &::before {
      content: '';
      position: absolute;
      inset: 1px;
      background: var(--pixel-accent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:nth-child(even) {
      background: var(--pixel-secondary);
    }
  }

  @keyframes pixelate {
    0% {
      transform: scale(0) rotate(45deg);
    }
    50% {
      transform: scale(1.2) rotate(45deg);
    }
    100% {
      transform: scale(1) rotate(45deg);
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
    border: 2px solid var(--pixel-primary);
    border-radius: 8px;
    color: var(--pixel-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--pixel-primary);
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .pixel-clipboard:hover .pixel-effect {
    opacity: 1;
  }

  .pixel-clipboard:hover .pixel::before {
    opacity: 0.3;
  }

  .pixel-clipboard:hover .content {
    background: transparent;
    border-color: var(--pixel-accent);
    color: var(--pixel-accent);
  }

  .pixel-clipboard:hover svg {
    fill: var(--pixel-accent);
    transform: rotate(360deg);
  }

  /* Active State */
  .pixel-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 