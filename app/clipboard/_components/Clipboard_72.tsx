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
      <button className="digital-rain-clipboard" onClick={handleCopy}>
        <div className="digital-rain-container">
          <div className="digital-rain-effect">
            <div className="rain-columns">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="rain-column" style={{ 
                  '--delay': `${Math.random() * 2}s`,
                  '--speed': `${Math.random() * 1 + 1}s`,
                  '--x': `${(i / 15) * 100}%`
                } as React.CSSProperties}>
                  {[...Array(10)].map((_, j) => (
                    <span key={j} style={{
                      '--char-delay': `${j * 0.1}s`
                    } as React.CSSProperties}>
                      {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="glow-trails">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="trail" style={{ 
                  '--delay': `${i * 0.4}s`,
                  '--x': `${Math.random() * 100}%`
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
  .digital-rain-clipboard {
    --rain-primary: #22c55e;
    --rain-secondary: #4ade80;
    --rain-glow: rgba(34, 197, 94, 0.5);
    --rain-dark: #052e16;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .digital-rain-container {
    position: relative;
    background: var(--rain-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .digital-rain-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .rain-columns {
    position: absolute;
    inset: 0;
    font-family: monospace;
  }

  .rain-column {
    position: absolute;
    top: -20px;
    left: var(--x);
    display: flex;
    flex-direction: column;
    animation: fall var(--speed) linear infinite;
    animation-delay: var(--delay);
    color: var(--rain-primary);
    text-shadow: 0 0 8px var(--rain-glow);
    font-size: 12px;
    line-height: 1;
    user-select: none;

    span {
      animation: fade 0.5s ease-in-out infinite;
      animation-delay: var(--char-delay);
    }
  }

  @keyframes fall {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes fade {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
  }

  .glow-trails {
    position: absolute;
    inset: 0;
  }

  .trail {
    position: absolute;
    top: 0;
    left: var(--x);
    width: 2px;
    height: 20px;
    background: linear-gradient(
      to bottom,
      transparent,
      var(--rain-secondary),
      transparent
    );
    animation: trail 1.5s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes trail {
    0% {
      transform: translateY(-100%) scaleY(1);
      opacity: 0;
    }
    50% {
      transform: translateY(100%) scaleY(2);
      opacity: 0.5;
    }
    100% {
      transform: translateY(200%) scaleY(1);
      opacity: 0;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--rain-dark);
    border: 2px solid var(--rain-primary);
    border-radius: 8px;
    color: var(--rain-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--rain-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--rain-primary);
      filter: drop-shadow(0 0 8px var(--rain-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .digital-rain-clipboard:hover .digital-rain-effect {
    opacity: 1;
  }

  .digital-rain-clipboard:hover .content {
    background: transparent;
    border-color: var(--rain-secondary);
    color: var(--rain-secondary);
  }

  .digital-rain-clipboard:hover svg {
    fill: var(--rain-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .digital-rain-clipboard:active .content {
    transform: scale(0.98);
  }
`; 


export default Clipboard;