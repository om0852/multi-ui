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
      <button className="pulse-wave-clipboard" onClick={handleCopy}>
        <div className="pulse-wave-container">
          <div className="pulse-wave-effect">
            <div className="waves">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="wave" style={{ 
                  '--delay': `${i * 0.4}s`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="pulses">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="pulse" style={{ 
                  '--delay': `${i * 0.6}s`,
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`
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
  .pulse-wave-clipboard {
    --wave-primary: #4f46e5;
    --wave-secondary: #818cf8;
    --wave-glow: rgba(79, 70, 229, 0.5);
    --wave-dark: #1e1b4b;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .pulse-wave-container {
    position: relative;
    background: var(--wave-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .pulse-wave-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .waves {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wave {
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      var(--wave-primary) 0%,
      transparent 70%
    );
    opacity: 0;
    animation: wave 3s ease-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes wave {
    0% {
      transform: scale(0);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  .pulses {
    position: absolute;
    inset: 0;
  }

  .pulse {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: 4px;
    height: 4px;
    background: var(--wave-secondary);
    border-radius: 50%;
    animation: pulse 2s ease-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
      box-shadow: 0 0 20px var(--wave-glow);
    }
    100% {
      transform: scale(3);
      opacity: 0;
      box-shadow: 0 0 0 var(--wave-glow);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--wave-dark);
    border: 2px solid var(--wave-primary);
    border-radius: 8px;
    color: var(--wave-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--wave-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--wave-primary);
      filter: drop-shadow(0 0 8px var(--wave-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .pulse-wave-clipboard:hover .pulse-wave-effect {
    opacity: 1;
  }

  .pulse-wave-clipboard:hover .content {
    background: transparent;
    border-color: var(--wave-secondary);
    color: var(--wave-secondary);
  }

  .pulse-wave-clipboard:hover svg {
    fill: var(--wave-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .pulse-wave-clipboard:active .content {
    transform: scale(0.98);
  }
`; 


export default Clipboard;