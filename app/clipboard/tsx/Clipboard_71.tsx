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
      <button className="tunnel-clipboard" onClick={handleCopy}>
        <div className="tunnel-container">
          <div className="tunnel-effect">
            <div className="tunnel">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="tunnel-layer" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--scale': `${1 - i * 0.15}`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="particles">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="particle" style={{ 
                  '--delay': `${Math.random() * 2}s`,
                  '--x': `${Math.random() * 200 - 100}%`,
                  '--y': `${Math.random() * 200 - 100}%`,
                  '--size': `${Math.random() * 3 + 1}px`
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
  .tunnel-clipboard {
    --tunnel-primary: #ec4899;
    --tunnel-secondary: #f472b6;
    --tunnel-glow: rgba(236, 72, 153, 0.5);
    --tunnel-dark: #500724;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .tunnel-container {
    position: relative;
    background: var(--tunnel-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .tunnel-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    perspective: 500px;
  }

  .tunnel {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }

  .tunnel-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--tunnel-primary);
    transform: scale(var(--scale)) translateZ(calc(var(--scale) * -100px));
    opacity: calc(1 - var(--scale) * 0.5);
    animation: tunnel 3s linear infinite;
    animation-delay: var(--delay);
  }

  @keyframes tunnel {
    0% {
      transform: scale(var(--scale)) translateZ(calc(var(--scale) * -100px)) rotate(0deg);
    }
    100% {
      transform: scale(var(--scale)) translateZ(calc(var(--scale) * -100px)) rotate(360deg);
    }
  }

  .particles {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
  }

  .particle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: var(--size);
    height: var(--size);
    background: var(--tunnel-secondary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: particle 2s ease-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes particle {
    0% {
      transform: translate(-50%, -50%) translateZ(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: 
        translate(
          calc(-50% + var(--x)),
          calc(-50% + var(--y))
        )
        translateZ(-200px)
        scale(0);
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
    background: var(--tunnel-dark);
    border: 2px solid var(--tunnel-primary);
    border-radius: 8px;
    color: var(--tunnel-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--tunnel-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--tunnel-primary);
      filter: drop-shadow(0 0 8px var(--tunnel-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .tunnel-clipboard:hover .tunnel-effect {
    opacity: 1;
  }

  .tunnel-clipboard:hover .content {
    background: transparent;
    border-color: var(--tunnel-secondary);
    color: var(--tunnel-secondary);
  }

  .tunnel-clipboard:hover svg {
    fill: var(--tunnel-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .tunnel-clipboard:active .content {
    transform: scale(0.98);
  }
`;


export default Clipboard;