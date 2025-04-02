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
      <button className="cyber-clipboard" onClick={handleCopy}>
        <div className="cyber-container">
          <div className="circuit-grid">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`circuit-line line-${i + 1}`} />
            ))}
          </div>
          <div className="data-flow">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`data-stream stream-${i + 1}`} />
            ))}
          </div>
          <div className="cyber-content">
            <div className="cyber-text">{text}</div>
            <div className="cyber-icon">
              <div className="icon-glitch"></div>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
                <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cyber-clipboard {
    --cyber-primary: #ff2a6d;
    --cyber-secondary: #05d9e8;
    --cyber-accent: #ff71ce;
    --cyber-bg: #1a1a1a;
    
    position: relative;
    padding: 0.8em 1.6em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .cyber-container {
    position: relative;
    padding: 1em 2em;
    background: var(--cyber-bg);
    border: 2px solid var(--cyber-primary);
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .circuit-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .circuit-line {
    position: absolute;
    background: var(--cyber-primary);
    opacity: 0.3;
  }

  ${[...Array(20)].map((_, i) => {
    const isHorizontal = i % 2 === 0;
    const position = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    return `
      .line-${i + 1} {
        ${isHorizontal 
          ? `
            top: ${position}%;
            left: 0;
            width: 100%;
            height: ${size}px;
          `
          : `
            top: 0;
            left: ${position}%;
            width: ${size}px;
            height: 100%;
          `
        }
        opacity: ${Math.random() * 0.3 + 0.1};
        animation: pulse ${1 + Math.random() * 2}s infinite;
      }
    `;
  }).join('\n')}

  .data-flow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .data-stream {
    position: absolute;
    background: linear-gradient(
      90deg,
      transparent,
      var(--cyber-secondary),
      transparent
    );
    width: 50%;
    height: 1px;
    opacity: 0;
    animation: dataFlow 3s linear infinite;
  }

  ${[...Array(5)].map((_, i) => `
    .stream-${i + 1} {
      top: ${20 + i * 15}%;
      animation-delay: ${i * 0.6}s;
    }
  `).join('\n')}

  .cyber-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .cyber-text {
    color: var(--cyber-primary);
    font-size: 1em;
    font-family: 'Courier New', monospace;
    text-shadow: 0 0 8px var(--cyber-primary);
  }

  .cyber-icon {
    position: relative;
    width: 1.5em;
    height: 1.5em;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--cyber-primary);
      filter: drop-shadow(0 0 8px var(--cyber-primary));
    }
  }

  .icon-glitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--cyber-accent);
    mix-blend-mode: overlay;
    animation: glitch 0.2s linear infinite;
    opacity: 0;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
  }

  @keyframes dataFlow {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: translateX(200%);
      opacity: 0;
    }
  }

  @keyframes glitch {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.3; }
  }

  /* Hover Effects */
  .cyber-clipboard:hover .cyber-container {
    border-color: var(--cyber-secondary);
    box-shadow: 
      0 0 20px var(--cyber-primary),
      inset 0 0 20px var(--cyber-primary);
  }

  .cyber-clipboard:hover .circuit-line {
    background: var(--cyber-secondary);
  }

  .cyber-clipboard:hover .cyber-text {
    color: var(--cyber-secondary);
    text-shadow: 0 0 12px var(--cyber-secondary);
  }

  .cyber-clipboard:hover .cyber-icon svg {
    fill: var(--cyber-secondary);
  }

  .cyber-clipboard:hover .icon-glitch {
    opacity: 0.3;
  }

  /* Active State */
  .cyber-clipboard:active .cyber-container {
    transform: scale(0.98);
  }
`;

export default Clipboard; 