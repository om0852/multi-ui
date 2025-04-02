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
      <button className="infinity-clipboard" onClick={handleCopy}>
        <div className="infinity-container">
          <div className="infinity-effect">
            <div className="infinity">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="loop" style={{ 
                  '--delay': `${i * 0.5}s`
                } as React.CSSProperties}>
                  <div className="path">
                    {[...Array(20)].map((_, j) => (
                      <div key={j} className="segment" style={{ 
                        '--index': j,
                        '--total': 20
                      } as React.CSSProperties} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="particles">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="particle" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--position': `${Math.random() * 100}%`
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
  .infinity-clipboard {
    --infinity-primary: #14b8a6;
    --infinity-secondary: #2dd4bf;
    --infinity-glow: rgba(20, 184, 166, 0.5);
    --infinity-dark: #134e4a;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .infinity-container {
    position: relative;
    background: var(--infinity-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .infinity-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .infinity {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loop {
    position: absolute;
    width: 60px;
    height: 30px;
    transform-origin: center;
    animation: rotate 4s linear infinite;
    animation-delay: var(--delay);
  }

  .loop:nth-child(2) {
    transform: rotate(180deg);
  }

  .path {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .segment {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--infinity-primary);
    border-radius: 50%;
    transform-origin: 30px center;
    transform: rotate(calc(360deg * var(--index) / var(--total))) translateX(30px);
    animation: pulse 2s ease-in-out infinite;
    animation-delay: calc(var(--index) * 0.1s);
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: rotate(calc(360deg * var(--index) / var(--total))) 
                translateX(30px) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: rotate(calc(360deg * var(--index) / var(--total))) 
                translateX(30px) scale(1.5);
      opacity: 1;
    }
  }

  .particles {
    position: absolute;
    inset: 0;
    mask-image: linear-gradient(
      to right,
      transparent,
      black 20%,
      black 80%,
      transparent
    );
  }

  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: var(--infinity-secondary);
    border-radius: 50%;
    top: var(--position);
    left: -2px;
    animation: flow 3s linear infinite;
    animation-delay: var(--delay);
  }

  @keyframes flow {
    0% {
      transform: translateX(0) scale(1);
      opacity: 0;
    }
    20% {
      transform: translateX(20%) scale(1.2);
      opacity: 1;
    }
    80% {
      transform: translateX(80%) scale(1.2);
      opacity: 1;
    }
    100% {
      transform: translateX(100%) scale(1);
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
    background: var(--infinity-dark);
    border: 2px solid var(--infinity-primary);
    border-radius: 8px;
    color: var(--infinity-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--infinity-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--infinity-primary);
      filter: drop-shadow(0 0 8px var(--infinity-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .infinity-clipboard:hover .infinity-effect {
    opacity: 1;
  }

  .infinity-clipboard:hover .content {
    background: transparent;
    border-color: var(--infinity-secondary);
    color: var(--infinity-secondary);
  }

  .infinity-clipboard:hover svg {
    fill: var(--infinity-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .infinity-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 