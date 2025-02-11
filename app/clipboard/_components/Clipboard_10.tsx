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
              <div key={i} className={`rain-column column-${i + 1}`}>
                {[...Array(10)].map((_, j) => (
                  <span key={j} className="matrix-char">
                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="matrix-content">
            <div className="matrix-text">{text}</div>
            <div className="matrix-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
                <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
              </svg>
            </div>
          </div>
          <div className="grid-overlay">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="grid-cell" />
            ))}
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .matrix-clipboard {
    --matrix-primary: #00ff00;
    --matrix-secondary: #003300;
    --matrix-glow: rgba(0, 255, 0, 0.5);
    
    position: relative;
    padding: 0.8em 1.6em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .matrix-container {
    position: relative;
    padding: 1em 2em;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid var(--matrix-primary);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px var(--matrix-glow);
  }

  .digital-rain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    opacity: 0.3;
  }

  .rain-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: rain var(--fall-duration) linear infinite;
    animation-delay: var(--fall-delay);
  }

  ${[...Array(20)].map((_, i) => `
    .column-${i + 1} {
      --fall-duration: ${2 + Math.random() * 2}s;
      --fall-delay: -${Math.random() * 2}s;
    }
  `).join('\n')}

  .matrix-char {
    color: var(--matrix-primary);
    font-size: 0.8em;
    line-height: 1;
    animation: flicker ${0.2 + Math.random() * 0.3}s linear infinite;
  }

  .matrix-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .matrix-text {
    color: var(--matrix-primary);
    font-size: 1em;
    text-shadow: 0 0 8px var(--matrix-glow);
    font-family: monospace;
  }

  .matrix-icon {
    width: 1.5em;
    height: 1.5em;
    opacity: 0.8;
    transition: all 0.3s ease;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--matrix-primary);
      filter: drop-shadow(0 0 8px var(--matrix-glow));
    }
  }

  .grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 1px;
    pointer-events: none;
    opacity: 0.1;
  }

  .grid-cell {
    background: var(--matrix-primary);
    transition: all 0.3s ease;
  }

  /* Animations */
  @keyframes rain {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }

  @keyframes flicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Hover Effects */
  .matrix-clipboard:hover .matrix-container {
    border-color: var(--matrix-primary);
    box-shadow: 
      0 0 20px var(--matrix-glow),
      inset 0 0 20px var(--matrix-glow);
  }

  .matrix-clipboard:hover .digital-rain {
    opacity: 0.5;
  }

  .matrix-clipboard:hover .grid-cell {
    opacity: 0.2;
  }

  .matrix-clipboard:hover .matrix-icon {
    opacity: 1;
    transform: scale(1.1);
  }

  /* Grid Cell Animation */
  .grid-cell {
    animation: pulse var(--pulse-duration) infinite;
  }

  ${[...Array(100)].map((_, i) => `
    .grid-cell:nth-child(${i + 1}) {
      --pulse-duration: ${1 + Math.random() * 2}s;
    }
  `).join('\n')}

  @keyframes pulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.2; }
  }

  /* Active State */
  .matrix-clipboard:active .matrix-container {
    transform: scale(0.98);
  }
`;

export default Clipboard; 