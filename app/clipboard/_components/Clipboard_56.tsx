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
      <button className="liquid-clipboard" onClick={handleCopy}>
        <div className="liquid-container">
          <div className="liquid-effect">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="bubbles">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="bubble" style={{ 
                  '--delay': `${Math.random() * 2}s`,
                  '--size': `${Math.random() * 10 + 5}px`,
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
  .liquid-clipboard {
    --liquid-primary: #06b6d4;
    --liquid-secondary: #0891b2;
    --liquid-dark: #164e63;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .liquid-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .liquid-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      transparent 50%,
      var(--liquid-primary) 75%,
      var(--liquid-secondary)
    );
    animation: wave 8s linear infinite;
    transform: translateX(-50%);

    &:nth-child(2) {
      animation-delay: -2s;
      opacity: 0.5;
    }

    &:nth-child(3) {
      animation-delay: -4s;
      opacity: 0.3;
    }
  }

  @keyframes wave {
    0% {
      transform: translateX(-50%) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) rotate(360deg);
    }
  }

  .bubbles {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .bubble {
    position: absolute;
    bottom: 0;
    left: var(--left);
    width: var(--size);
    height: var(--size);
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: bubble 2s ease-in infinite;
    animation-delay: var(--delay);
  }

  @keyframes bubble {
    0% {
      transform: translateY(100%) scale(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100%) scale(1);
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
    background: #ffffff;
    border: 2px solid var(--liquid-primary);
    border-radius: 8px;
    color: var(--liquid-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--liquid-primary);
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .liquid-clipboard:hover .liquid-effect {
    opacity: 1;
  }

  .liquid-clipboard:hover .content {
    background: transparent;
    border-color: transparent;
    color: #ffffff;
  }

  .liquid-clipboard:hover svg {
    fill: #ffffff;
    transform: rotate(360deg);
  }

  /* Active State */
  .liquid-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 