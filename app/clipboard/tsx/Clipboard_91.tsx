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
          <div className="digital-rain">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="rain-column" style={{ '--i': i } as React.CSSProperties}>
                {[...Array(10)].map((_, j) => (
                  <span key={j} className="rain-char" style={{ '--j': j } as React.CSSProperties}>
                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                  </span>
                ))}
              </div>
            ))}
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
    --matrix-dark: #003300;
    --matrix-bg: #000000;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .matrix-container {
    position: relative;
    background: var(--matrix-bg);
    border-radius: 8px;
    overflow: hidden;
  }

  .digital-rain {
    position: absolute;
    inset: 0;
    display: flex;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .rain-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: rain-fall 2s linear infinite;
    animation-delay: calc(var(--i) * -0.1s);
  }

  .rain-char {
    color: var(--matrix-primary);
    font-size: 10px;
    line-height: 1;
    text-shadow: 0 0 8px var(--matrix-primary);
    opacity: 0;
    animation: char-fade 2s linear infinite;
    animation-delay: calc((var(--i) * -0.1s) + (var(--j) * 0.1s));
  }

  @keyframes rain-fall {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }

  @keyframes char-fade {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid var(--matrix-primary);
    border-radius: 8px;
    color: var(--matrix-primary);
    font-size: 0.9em;
    font-family: monospace;
    text-transform: uppercase;
    letter-spacing: 1px;
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
  .matrix-clipboard:hover .digital-rain {
    opacity: 0.3;
  }

  .matrix-clipboard:hover .content {
    background: rgba(0, 51, 0, 0.9);
    border-color: var(--matrix-primary);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
    text-shadow: 0 0 12px var(--matrix-primary);
  }

  .matrix-clipboard:hover svg {
    transform: rotate(360deg);
    filter: drop-shadow(0 0 12px var(--matrix-primary));
  }

  /* Active State */
  .matrix-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 