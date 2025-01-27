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
      <button className="shatter-clipboard" onClick={handleCopy}>
        <div className="shatter-container">
          <div className="shards">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="shard" style={{ '--i': i } as React.CSSProperties}></div>
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
  .shatter-clipboard {
    --shatter-primary: #a855f7;
    --shatter-glow: rgba(168, 85, 247, 0.2);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .shatter-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .shards {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .shard {
    position: absolute;
    width: 40%;
    height: 40%;
    background: linear-gradient(
      45deg,
      transparent,
      var(--shatter-glow),
      transparent
    );
    opacity: 0;
    transform-origin: center;
    animation: shatter 0.5s ease-out forwards;
    animation-play-state: paused;

    &:nth-child(1) { top: 0; left: 0; --angle: -45deg; }
    &:nth-child(2) { top: 0; right: 0; --angle: 45deg; }
    &:nth-child(3) { bottom: 0; left: 0; --angle: -135deg; }
    &:nth-child(4) { bottom: 0; right: 0; --angle: 135deg; }
    &:nth-child(5) { top: 30%; left: 0; --angle: -90deg; }
    &:nth-child(6) { top: 30%; right: 0; --angle: 90deg; }
    &:nth-child(7) { top: 0; left: 30%; --angle: 0deg; }
    &:nth-child(8) { bottom: 0; left: 30%; --angle: 180deg; }
  }

  @keyframes shatter {
    0% {
      transform: rotate(var(--angle)) scale(0);
      opacity: 1;
    }
    100% {
      transform: rotate(var(--angle)) scale(2);
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
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid var(--shatter-primary);
    border-radius: 8px;
    color: var(--shatter-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--shatter-primary);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .shatter-clipboard:hover .shards {
    opacity: 1;
  }

  .shatter-clipboard:hover .shard {
    animation-play-state: running;
  }

  .shatter-clipboard:hover .content {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 20px var(--shatter-glow);
  }

  .shatter-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .shatter-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 