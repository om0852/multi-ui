"use client"

import React from 'react';
import styled from 'styled-components';

const Clipboard = ({ text, onCopy }) => {
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
`;

export default Clipboard;
