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
      <button className="dna-clipboard" onClick={handleCopy}>
        <div className="dna-container">
          <div className="dna-effect">
            <div className="helix">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="strand" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--y': `${i * 10}%`
                } as React.CSSProperties}>
                  <div className="base-pair left" />
                  <div className="connector" />
                  <div className="base-pair right" />
                </div>
              ))}
            </div>
            <div className="molecules">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="molecule" style={{ 
                  '--delay': `${Math.random() * 2}s`,
                  '--x': `${Math.random() * 200 - 100}%`,
                  '--y': `${Math.random() * 200 - 100}%`,
                  '--size': `${Math.random() * 3 + 2}px`
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
  .dna-clipboard {
    --dna-primary: #f472b6;
    --dna-secondary: #fb7185;
    --dna-glow: rgba(244, 114, 182, 0.5);
    --dna-dark: #500724;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .dna-container {
    position: relative;
    background: var(--dna-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .dna-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    perspective: 1000px;
  }

  .helix {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
  }

  .strand {
    position: absolute;
    left: 0;
    top: var(--y);
    width: 100%;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: rotate 4s linear infinite;
    animation-delay: var(--delay);
  }

  .base-pair {
    width: 12px;
    height: 12px;
    background: var(--dna-primary);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--dna-glow);

    &.left {
      animation: pulse 2s ease-in-out infinite;
      animation-delay: var(--delay);
    }

    &.right {
      animation: pulse 2s ease-in-out infinite;
      animation-delay: calc(var(--delay) + 1s);
    }
  }

  .connector {
    width: 40px;
    height: 2px;
    background: var(--dna-secondary);
    margin: 0 4px;
    transform-origin: center;
    animation: connect 4s linear infinite;
    animation-delay: var(--delay);
  }

  @keyframes rotate {
    0% {
      transform: rotateX(0deg) translateZ(20px);
    }
    100% {
      transform: rotateX(360deg) translateZ(20px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }

  @keyframes connect {
    0% {
      transform: scaleX(1) rotate(0deg);
    }
    50% {
      transform: scaleX(0.8) rotate(180deg);
    }
    100% {
      transform: scaleX(1) rotate(360deg);
    }
  }

  .molecules {
    position: absolute;
    inset: 0;
  }

  .molecule {
    position: absolute;
    left: 50%;
    top: 50%;
    width: var(--size);
    height: var(--size);
    background: var(--dna-secondary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: float 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes float {
    0% {
      transform: translate(-50%, -50%) translateZ(0);
      opacity: 1;
    }
    100% {
      transform: 
        translate(
          calc(-50% + var(--x)),
          calc(-50% + var(--y))
        )
        translateZ(50px);
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
    background: var(--dna-dark);
    border: 2px solid var(--dna-primary);
    border-radius: 8px;
    color: var(--dna-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--dna-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--dna-primary);
      filter: drop-shadow(0 0 8px var(--dna-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .dna-clipboard:hover .dna-effect {
    opacity: 1;
  }

  .dna-clipboard:hover .content {
    background: transparent;
    border-color: var(--dna-secondary);
    color: var(--dna-secondary);
  }

  .dna-clipboard:hover svg {
    fill: var(--dna-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .dna-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 