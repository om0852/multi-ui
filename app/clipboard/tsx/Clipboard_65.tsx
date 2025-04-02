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
      <button className="matrix-clipboard" onClick={handleCopy}>
        <div className="matrix-container">
          <div className="matrix-effect">
            <div className="rain">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="rain-column" style={{ 
                  '--delay': `${Math.random() * 2}s`,
                  '--duration': `${Math.random() * 2 + 2}s`,
                  '--left': `${Math.random() * 100}%`
                } as React.CSSProperties}>
                  {[...Array(10)].map((_, j) => (
                    <span key={j} style={{ 
                      '--char-delay': `${j * 0.1}s`
                    } as React.CSSProperties}>
                      {String.fromCharCode(0x30A0 + Math.random() * 96)}
                    </span>
                  ))}
                </div>
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
  .matrix-clipboard {
    --matrix-primary: #00ff00;
    --matrix-secondary: #00cc00;
    --matrix-dark: #001a00;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .matrix-container {
    position: relative;
    background: var(--matrix-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .matrix-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .rain {
    position: absolute;
    inset: 0;
    font-family: monospace;
  }

  .rain-column {
    position: absolute;
    top: -20px;
    left: var(--left);
    display: flex;
    flex-direction: column;
    animation: rain var(--duration) linear infinite;
    animation-delay: var(--delay);
    color: var(--matrix-primary);
    text-shadow: 0 0 8px var(--matrix-primary);
    font-size: 12px;
    line-height: 1;
    user-select: none;

    span {
      animation: glow 1s ease-in-out infinite;
      animation-delay: var(--char-delay);
    }
  }

  @keyframes rain {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes glow {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--matrix-dark);
    border: 2px solid var(--matrix-primary);
    border-radius: 8px;
    color: var(--matrix-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--matrix-primary);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--matrix-primary);
      filter: drop-shadow(0 0 8px var(--matrix-primary));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .matrix-clipboard:hover .matrix-effect {
    opacity: 1;
  }

  .matrix-clipboard:hover .content {
    background: transparent;
    border-color: var(--matrix-secondary);
    color: var(--matrix-secondary);
  }

  .matrix-clipboard:hover svg {
    fill: var(--matrix-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .matrix-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 