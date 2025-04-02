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
      <button className="holo-clipboard" onClick={handleCopy}>
        <div className="holo-container">
          <div className="holo-effect">
            <div className="scanline"></div>
            <div className="noise"></div>
            <div className="flicker"></div>
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
  .holo-clipboard {
    --holo-primary: #22d3ee;
    --holo-secondary: #67e8f9;
    --holo-glow: rgba(34, 211, 238, 0.3);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .holo-container {
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    overflow: hidden;
  }

  .holo-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .scanline {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(34, 211, 238, 0.1) 50%
    );
    background-size: 100% 4px;
    animation: scan 4s linear infinite;
  }

  .noise {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
    opacity: 0.1;
    mix-blend-mode: overlay;
  }

  .flicker {
    position: absolute;
    inset: 0;
    background: var(--holo-primary);
    opacity: 0;
    mix-blend-mode: overlay;
    animation: flicker 4s linear infinite;
  }

  @keyframes scan {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }

  @keyframes flicker {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.2; }
    25%, 75% { opacity: 0; }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid var(--holo-primary);
    border-radius: 8px;
    color: var(--holo-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
    text-shadow: 0 0 8px var(--holo-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--holo-primary);
      filter: drop-shadow(0 0 8px var(--holo-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .holo-clipboard:hover .holo-effect {
    opacity: 1;
  }

  .holo-clipboard:hover .content {
    border-color: var(--holo-secondary);
    color: var(--holo-secondary);
    box-shadow: 0 0 20px var(--holo-glow);
  }

  .holo-clipboard:hover svg {
    fill: var(--holo-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .holo-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 