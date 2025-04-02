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
      <button className="smoke-clipboard" onClick={handleCopy}>
        <div className="smoke-container">
          <div className="smoke-effect">
            <div className="smoke-particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="particle" style={{ 
                  '--delay': `${Math.random() * 3}s`,
                  '--size': `${Math.random() * 30 + 20}px`,
                  '--left': `${Math.random() * 100}%`
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
  .smoke-clipboard {
    --smoke-primary: #94a3b8;
    --smoke-secondary: #64748b;
    --smoke-dark: #1e293b;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .smoke-container {
    position: relative;
    background: var(--smoke-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .smoke-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .smoke-particles {
    position: absolute;
    inset: 0;
    filter: blur(4px);
  }

  .particle {
    position: absolute;
    bottom: 0;
    left: var(--left);
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      var(--smoke-primary) 0%,
      transparent 70%
    );
    animation: rise 3s ease-out infinite;
    animation-delay: var(--delay);
    opacity: 0;
  }

  @keyframes rise {
    0% {
      transform: translateY(100%) scale(1);
      opacity: 0;
    }
    20% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.3;
    }
    80% {
      opacity: 0.1;
    }
    100% {
      transform: translateY(-100%) scale(2);
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
    background: var(--smoke-dark);
    border: 2px solid var(--smoke-primary);
    border-radius: 8px;
    color: var(--smoke-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--smoke-primary);
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .smoke-clipboard:hover .smoke-effect {
    opacity: 1;
  }

  .smoke-clipboard:hover .content {
    background: transparent;
    border-color: var(--smoke-secondary);
    color: var(--smoke-secondary);
  }

  .smoke-clipboard:hover svg {
    fill: var(--smoke-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .smoke-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 