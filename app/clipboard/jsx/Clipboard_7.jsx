"use client"

import React from 'react';
import styled from 'styled-components';

const Clipboard = ({ text, onCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    if (onCopy) onCopy();
  };

  return (
    <StyledWrapper>
      <button className="holo-clipboard" onClick={handleCopy}>
        <div className="holo-container">
          <div className="scan-lines"></div>
          <div className="glitch-effect"></div>
          <div className="holo-content">
            <div className="holo-text">{text}</div>
            <div className="holo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
                <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
              </svg>
            </div>
          </div>
          <div className="data-grid">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="data-cell" />
            ))}
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .holo-clipboard {
    --holo-primary: #00ffff;
    --holo-secondary: #ff00ff;
    --holo-glow: rgba(0, 255, 255, 0.5);
    
    position: relative;
    padding: 0.8em 1.6em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .holo-container {
    position: relative;
    padding: 1em 2em;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid var(--holo-primary);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .scan-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 255, 0.1) 2px,
      rgba(0, 255, 255, 0.1) 4px
    );
    pointer-events: none;
    opacity: 0.3;
  }

  .glitch-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--holo-primary);
    mix-blend-mode: overlay;
    opacity: 0.1;
    animation: glitch 2s linear infinite;
  }

  .holo-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .holo-text {
    color: var(--holo-primary);
    font-size: 1em;
    text-shadow: 0 0 8px var(--holo-glow);
    animation: textFlicker 4s linear infinite;
  }

  .holo-icon {
    width: 1.5em;
    height: 1.5em;
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  .holo-icon svg {
    width: 100%;
    height: 100%;
    fill: var(--holo-primary);
    filter: drop-shadow(0 0 8px var(--holo-glow));
  }

  /* Additional styles omitted for brevity */
`;

export default Clipboard;
