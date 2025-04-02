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
      <button className="ripple-clipboard" onClick={handleCopy}>
        <div className="ripple-container">
          <div className="ripple-effect">
            <div className="ripples">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="ripple" style={{ 
                  '--delay': `${i * 0.4}s`,
                  '--scale': `${i + 1}`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="particle" style={{ 
                  '--delay': `${i * 0.1}s`,
                  '--angle': `${i * 18}deg`,
                  '--distance': `${Math.random() * 30 + 20}px`
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
  .ripple-clipboard {
    --ripple-primary: #8b5cf6;
    --ripple-secondary: #a78bfa;
    --ripple-glow: rgba(139, 92, 246, 0.5);
    --ripple-dark: #4c1d95;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .ripple-container {
    position: relative;
    background: var(--ripple-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .ripple-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .ripples {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ripple {
    position: absolute;
    width: 60px;
    height: 60px;
    border: 2px solid var(--ripple-primary);
    border-radius: 50%;
    transform: scale(0);
    opacity: 0;
    animation: ripple 3s linear infinite;
    animation-delay: var(--delay);
  }

  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.8;
      border-width: 2px;
    }
    100% {
      transform: scale(var(--scale));
      opacity: 0;
      border-width: 1px;
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
    background: var(--ripple-secondary);
    border-radius: 50%;
    transform-origin: center;
    animation: particle 2s ease-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes particle {
    0% {
      transform: rotate(var(--angle)) translateY(0) scale(1);
      opacity: 0.8;
    }
    100% {
      transform: rotate(var(--angle)) translateY(var(--distance)) scale(0);
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
    background: var(--ripple-dark);
    border: 2px solid var(--ripple-primary);
    border-radius: 8px;
    color: var(--ripple-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--ripple-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--ripple-primary);
      filter: drop-shadow(0 0 8px var(--ripple-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .ripple-clipboard:hover .ripple-effect {
    opacity: 1;
  }

  .ripple-clipboard:hover .content {
    background: transparent;
    border-color: var(--ripple-secondary);
    color: var(--ripple-secondary);
  }

  .ripple-clipboard:hover svg {
    fill: var(--ripple-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .ripple-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 