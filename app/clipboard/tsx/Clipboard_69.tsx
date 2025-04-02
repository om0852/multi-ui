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
      <button className="constellation-clipboard" onClick={handleCopy}>
        <div className="constellation-container">
          <div className="constellation-effect">
            <div className="stars">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="star" style={{ 
                  '--delay': `${Math.random() * 3}s`,
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`,
                  '--size': `${Math.random() * 2 + 1}px`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="lines">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="line" style={{ 
                  '--delay': `${i * 0.3}s`,
                  '--rotation': `${Math.random() * 360}deg`,
                  '--length': `${Math.random() * 50 + 30}px`
                } as React.CSSProperties} />
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
  .constellation-clipboard {
    --constellation-primary: #fbbf24;
    --constellation-secondary: #f59e0b;
    --constellation-glow: rgba(251, 191, 36, 0.3);
    --constellation-dark: #1a1207;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .constellation-container {
    position: relative;
    background: var(--constellation-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .constellation-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .stars {
    position: absolute;
    inset: 0;
  }

  .star {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: var(--constellation-primary);
    border-radius: 50%;
    animation: twinkle 2s ease-in-out infinite;
    animation-delay: var(--delay);

    &::after {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      background: var(--constellation-glow);
      opacity: 0;
      animation: glow 2s ease-in-out infinite;
      animation-delay: var(--delay);
    }
  }

  @keyframes twinkle {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.5;
    }
  }

  @keyframes glow {
    0%, 100% {
      transform: scale(1);
      opacity: 0;
    }
    50% {
      transform: scale(2);
      opacity: 1;
    }
  }

  .lines {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .line {
    position: absolute;
    width: var(--length);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--constellation-primary),
      transparent
    );
    transform-origin: left center;
    transform: rotate(var(--rotation));
    opacity: 0;
    animation: connect 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes connect {
    0% {
      transform: rotate(var(--rotation)) scaleX(0);
      opacity: 0;
    }
    50% {
      transform: rotate(var(--rotation)) scaleX(1);
      opacity: 0.3;
    }
    100% {
      transform: rotate(var(--rotation)) scaleX(0);
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
    background: var(--constellation-dark);
    border: 2px solid var(--constellation-primary);
    border-radius: 8px;
    color: var(--constellation-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--constellation-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--constellation-primary);
      filter: drop-shadow(0 0 8px var(--constellation-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .constellation-clipboard:hover .constellation-effect {
    opacity: 1;
  }

  .constellation-clipboard:hover .content {
    background: transparent;
    border-color: var(--constellation-secondary);
    color: var(--constellation-secondary);
  }

  .constellation-clipboard:hover svg {
    fill: var(--constellation-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .constellation-clipboard:active .content {
    transform: scale(0.98);
  }
`; 


export default Clipboard;