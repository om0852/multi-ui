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
      <button className="fire-clipboard" onClick={handleCopy}>
        <div className="fire-container">
          <div className="fire-effect">
            <div className="flames">
              <div className="flame"></div>
              <div className="flame"></div>
              <div className="flame"></div>
              <div className="flame"></div>
              <div className="flame"></div>
            </div>
            <div className="embers">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="ember" style={{ 
                  '--delay': `${Math.random() * 2}s`,
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
  .fire-clipboard {
    --fire-primary: #f97316;
    --fire-secondary: #dc2626;
    --fire-accent: #fbbf24;
    --fire-dark: #7c2d12;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .fire-container {
    position: relative;
    background: var(--fire-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .fire-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .flames {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 4px;
  }

  .flame {
    position: relative;
    width: 15px;
    height: 100%;
    background: var(--fire-primary);
    border-radius: 50% 50% 0 0;
    transform-origin: bottom;
    animation: flicker 1.5s ease-out infinite;

    &:nth-child(2) {
      height: 90%;
      animation-delay: 0.2s;
      background: var(--fire-secondary);
    }

    &:nth-child(3) {
      height: 95%;
      animation-delay: 0.4s;
      background: var(--fire-accent);
    }

    &:nth-child(4) {
      height: 85%;
      animation-delay: 0.6s;
      background: var(--fire-secondary);
    }

    &:nth-child(5) {
      height: 80%;
      animation-delay: 0.8s;
      background: var(--fire-primary);
    }
  }

  @keyframes flicker {
    0%, 100% {
      transform: scaleY(1) translateY(0);
      filter: brightness(1);
    }
    50% {
      transform: scaleY(1.1) translateY(-10%);
      filter: brightness(1.2);
    }
  }

  .embers {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .ember {
    position: absolute;
    bottom: 0;
    left: var(--left);
    width: 2px;
    height: 2px;
    background: var(--fire-accent);
    border-radius: 50%;
    animation: rise 2s ease-out infinite;
    animation-delay: var(--delay);
    opacity: 0;
  }

  @keyframes rise {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) scale(0);
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
    background: var(--fire-dark);
    border: 2px solid var(--fire-primary);
    border-radius: 8px;
    color: white;
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--fire-primary);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: white;
      filter: drop-shadow(0 0 8px var(--fire-primary));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .fire-clipboard:hover .fire-effect {
    opacity: 1;
  }

  .fire-clipboard:hover .content {
    background: transparent;
    border-color: transparent;
  }

  .fire-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .fire-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 