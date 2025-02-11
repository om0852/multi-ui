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
      <button className="bio-clipboard" onClick={handleCopy}>
        <div className="bio-container">
          <div className="cell-structure">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`cell cell-${i + 1}`}>
                <div className="nucleus" />
                <div className="membrane" />
              </div>
            ))}
          </div>
          <div className="dna-helix">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`base-pair pair-${i + 1}`}>
                <div className="strand strand-1" />
                <div className="strand strand-2" />
              </div>
            ))}
          </div>
          <div className="bio-content">
            <div className="bio-text">{text}</div>
            <div className="bio-icon">
              <div className="organelle" />
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
  .bio-clipboard {
    --bio-primary: #00ff9d;
    --bio-secondary: #39ff14;
    --bio-accent: #7fff00;
    --bio-bg: #001a0f;
    
    position: relative;
    padding: 0.8em 1.6em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .bio-container {
    position: relative;
    padding: 1em 2em;
    background: var(--bio-bg);
    border: 2px solid var(--bio-primary);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .cell-structure {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .cell {
    position: absolute;
    border: 1px solid var(--bio-primary);
    border-radius: 50%;
    opacity: 0.3;
  }

  ${[...Array(10)].map((_, i) => {
    const size = 30 + Math.random() * 40;
    return `
      .cell-${i + 1} {
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: cellPulse ${3 + Math.random() * 2}s infinite;
        animation-delay: ${Math.random() * -2}s;
      }
    `;
  }).join('\n')}

  .nucleus {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30%;
    height: 30%;
    background: var(--bio-primary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
  }

  .membrane {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--bio-secondary);
    border-radius: 50%;
    animation: rotate 10s linear infinite;
  }

  .dna-helix {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 40px;
    transform: translateY(-50%);
  }

  .base-pair {
    position: absolute;
    width: 100%;
    height: 4px;
  }

  ${[...Array(10)].map((_, i) => `
    .pair-${i + 1} {
      top: ${i * 4}px;
      animation: twist 3s infinite ease-in-out;
      animation-delay: ${i * 0.3}s;
    }
  `).join('\n')}

  .strand {
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--bio-primary);
    opacity: 0.5;
  }

  .strand-1 {
    transform-origin: left center;
  }

  .strand-2 {
    transform-origin: right center;
  }

  .bio-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .bio-text {
    color: var(--bio-primary);
    font-size: 1em;
    text-shadow: 0 0 8px var(--bio-primary);
  }

  .bio-icon {
    position: relative;
    width: 1.5em;
    height: 1.5em;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--bio-primary);
      filter: drop-shadow(0 0 8px var(--bio-primary));
    }
  }

  .organelle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      var(--bio-primary) 0%,
      transparent 70%
    );
    transform: translate(-50%, -50%);
    opacity: 0.2;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes cellPulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.4;
    }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes twist {
    0%, 100% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(0.5);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.2;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(1.2);
    }
  }

  /* Hover Effects */
  .bio-clipboard:hover .bio-container {
    border-color: var(--bio-secondary);
    box-shadow: 
      0 0 20px var(--bio-primary),
      inset 0 0 20px var(--bio-primary);
  }

  .bio-clipboard:hover .cell {
    border-color: var(--bio-secondary);
  }

  .bio-clipboard:hover .bio-text {
    color: var(--bio-secondary);
    text-shadow: 0 0 12px var(--bio-secondary);
  }

  .bio-clipboard:hover .bio-icon svg {
    fill: var(--bio-secondary);
  }

  /* Active State */
  .bio-clipboard:active .bio-container {
    transform: scale(0.98);
  }
`;

export default Clipboard; 