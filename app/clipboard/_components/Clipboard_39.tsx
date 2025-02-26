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
      <button className="particle-clipboard" onClick={handleCopy}>
        <div className="particle-container">
          <div className="particles">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="particle" style={{ '--i': i } as React.CSSProperties}></div>
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
  .particle-clipboard {
    --particle-primary: #f59e0b;
    --particle-secondary: #fbbf24;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .particle-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    border: 2px solid var(--particle-primary);
    overflow: hidden;
  }

  .particles {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--particle-secondary);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: explode 0.8s ease-out infinite;
    opacity: 0;
    animation-delay: calc(var(--i) * 0.1s);
  }

  @keyframes explode {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(2);
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
    color: var(--particle-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--particle-primary);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .particle-clipboard:hover .particles {
    opacity: 1;
  }

  .particle-clipboard:hover .content {
    color: var(--particle-secondary);
  }

  .particle-clipboard:hover svg {
    fill: var(--particle-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .particle-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 