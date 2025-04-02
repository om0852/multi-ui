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
      <button className="vortex-clipboard" onClick={handleCopy}>
        <div className="vortex-container">
          <div className="vortex-effect">
            <div className="spiral">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="spiral-arm" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--rotation': `${i * 45}deg`,
                  '--scale': `${1 - i * 0.1}`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="particles">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="particle" style={{ 
                  '--delay': `${i * 0.1}s`,
                  '--angle': `${i * 24}deg`,
                  '--distance': `${20 + i * 5}px`
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
  .vortex-clipboard {
    --vortex-primary: #06b6d4;
    --vortex-secondary: #22d3ee;
    --vortex-glow: rgba(6, 182, 212, 0.5);
    --vortex-dark: #164e63;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .vortex-container {
    position: relative;
    background: var(--vortex-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .vortex-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    perspective: 1000px;
  }

  .spiral {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }

  .spiral-arm {
    position: absolute;
    width: 100px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--vortex-primary),
      transparent
    );
    transform-origin: left center;
    transform: rotate(var(--rotation)) scaleX(var(--scale));
    opacity: 0.5;
    animation: spin 4s linear infinite;
    animation-delay: var(--delay);
  }

  @keyframes spin {
    0% {
      transform: rotate(var(--rotation)) scaleX(var(--scale));
      opacity: 0.5;
    }
    100% {
      transform: rotate(calc(var(--rotation) + 360deg)) scaleX(var(--scale));
      opacity: 0.5;
    }
  }

  .particles {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--vortex-secondary);
    border-radius: 50%;
    transform-origin: center;
    animation: orbit 3s linear infinite;
    animation-delay: var(--delay);
  }

  @keyframes orbit {
    0% {
      transform: rotate(var(--angle)) translateX(var(--distance)) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: rotate(calc(var(--angle) + 360deg)) translateX(calc(var(--distance) * 0.5)) rotate(-360deg);
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
    background: var(--vortex-dark);
    border: 2px solid var(--vortex-primary);
    border-radius: 8px;
    color: var(--vortex-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--vortex-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--vortex-primary);
      filter: drop-shadow(0 0 8px var(--vortex-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .vortex-clipboard:hover .vortex-effect {
    opacity: 1;
  }

  .vortex-clipboard:hover .content {
    background: transparent;
    border-color: var(--vortex-secondary);
    color: var(--vortex-secondary);
  }

  .vortex-clipboard:hover svg {
    fill: var(--vortex-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .vortex-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 