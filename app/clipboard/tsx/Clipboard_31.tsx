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
          <div className="bubbles">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bubble" style={{ '--i': i } as React.CSSProperties}></div>
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
  .liquid-clipboard {
    --liquid-primary: #00c2ff;
    --liquid-secondary: #4fc3dc;
    --liquid-dark: #2c3e50;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .liquid-container {
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    color: var(--liquid-dark);
    font-size: 0.9em;
    z-index: 1;
    background: rgba(255, 255, 255, 0.95);
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--liquid-primary);
      transition: transform 0.3s ease;
    }
  }

  .bubbles {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .bubble {
    position: absolute;
    width: 30px;
    height: 30px;
    background: var(--liquid-secondary);
    border-radius: 50%;
    animation: rise 15s linear infinite;
    animation-delay: calc(var(--i) * 0.8s);
    transform: translateY(100%);
    filter: hue-rotate(calc(var(--i) * 30deg));
  }

  @keyframes rise {
    0% {
      transform: translateY(100%) scale(0);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(-100%) scale(1);
      opacity: 0;
    }
  }

  /* Hover Effects */
  .liquid-clipboard:hover .content {
    background: rgba(255, 255, 255, 0.98);
    color: var(--liquid-primary);
  }

  .liquid-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .liquid-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 