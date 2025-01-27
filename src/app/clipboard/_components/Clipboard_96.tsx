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
      <button className="crystal-clipboard" onClick={handleCopy}>
        <div className="crystal-container">
          <div className="crystal-facets">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="facet" style={{ '--i': i } as React.CSSProperties}></div>
            ))}
          </div>
          <div className="crystal-shine"></div>
          <div className="content">
            <span className="crystal-text">{text}</span>
            <svg className="crystal-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  .crystal-clipboard {
    --crystal-primary: rgba(255, 255, 255, 0.8);
    --crystal-secondary: rgba(255, 255, 255, 0.4);
    --crystal-highlight: rgba(255, 255, 255, 0.9);
    --crystal-shadow: rgba(0, 0, 0, 0.1);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .crystal-container {
    position: relative;
    background: linear-gradient(
      135deg,
      var(--crystal-primary),
      var(--crystal-secondary)
    );
    border-radius: 8px;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }

  .crystal-facets {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .facet {
    position: absolute;
    inset: -50%;
    background: linear-gradient(
      calc(45deg * var(--i)),
      transparent,
      var(--crystal-highlight),
      transparent
    );
    opacity: 0.3;
    transform-origin: center;
    animation: rotate-facet 10s calc(var(--i) * -2s) linear infinite;
  }

  @keyframes rotate-facet {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.5);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }

  .crystal-shine {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      var(--crystal-highlight),
      transparent 70%
    );
    opacity: 0.5;
    mix-blend-mode: overlay;
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    );
    border: 2px solid var(--crystal-highlight);
    border-radius: 8px;
    box-shadow: 
      0 4px 15px var(--crystal-shadow),
      inset 0 0 15px var(--crystal-highlight);
    z-index: 1;
  }

  .crystal-text {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 1px 2px var(--crystal-highlight);
    transition: all 0.3s ease;
  }

  .crystal-svg {
    width: 1.2em;
    height: 1.2em;
    fill: rgba(0, 0, 0, 0.7);
    filter: drop-shadow(0 1px 2px var(--crystal-highlight));
    transition: all 0.3s ease;
  }

  /* Hover Effects */
  .crystal-clipboard:hover .facet {
    animation-duration: 5s;
  }

  .crystal-clipboard:hover .content {
    border-color: var(--crystal-primary);
    box-shadow: 
      0 8px 25px var(--crystal-shadow),
      inset 0 0 25px var(--crystal-highlight);
    transform: translateY(-2px);
  }

  .crystal-clipboard:hover .crystal-text {
    color: rgba(0, 0, 0, 0.9);
    letter-spacing: 2px;
    text-shadow: 0 2px 4px var(--crystal-highlight);
  }

  .crystal-clipboard:hover .crystal-svg {
    fill: rgba(0, 0, 0, 0.9);
    transform: rotate(360deg) scale(1.1);
    filter: drop-shadow(0 2px 4px var(--crystal-highlight));
  }

  /* Active State */
  .crystal-clipboard:active .content {
    transform: scale(0.98) translateY(0);
    box-shadow: 
      0 4px 15px var(--crystal-shadow),
      inset 0 0 15px var(--crystal-highlight);
  }

  .crystal-clipboard:active .crystal-text {
    text-shadow: 0 1px 2px var(--crystal-highlight);
  }
`;

export default Clipboard; 