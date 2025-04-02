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
      <button className="liquid-metal-clipboard" onClick={handleCopy}>
        <div className="liquid-metal-container">
          <div className="metal-surface">
            <div className="metal-highlight"></div>
            <div className="metal-ripples">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="ripple" style={{ '--i': i } as React.CSSProperties}></div>
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
  .liquid-metal-clipboard {
    --metal-light: #ffffff;
    --metal-mid: #c0c0c0;
    --metal-dark: #808080;
    --metal-shadow: rgba(0, 0, 0, 0.2);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .liquid-metal-container {
    position: relative;
    background: linear-gradient(135deg, var(--metal-light), var(--metal-dark));
    border-radius: 8px;
    overflow: hidden;
  }

  .metal-surface {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.1) 55%,
      transparent 100%
    );
    transition: all 0.3s ease;
  }

  .metal-highlight {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(255, 255, 255, 0.3) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .metal-ripples {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .ripple {
    position: absolute;
    inset: -50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40%;
    animation: ripple 4s linear infinite;
    animation-delay: calc(var(--i) * -1s);
  }

  @keyframes ripple {
    0% {
      transform: rotate(0deg) scale(0);
      opacity: 1;
    }
    100% {
      transform: rotate(360deg) scale(1);
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
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: var(--metal-dark);
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--metal-dark);
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .liquid-metal-clipboard:hover .metal-highlight,
  .liquid-metal-clipboard:hover .metal-ripples {
    opacity: 1;
  }

  .liquid-metal-clipboard:hover .content {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    );
    border-color: rgba(255, 255, 255, 0.4);
    color: var(--metal-light);
    text-shadow: 0 2px 4px var(--metal-shadow);
    transform: translateY(-1px);
    box-shadow: 
      0 4px 8px var(--metal-shadow),
      0 0 20px rgba(255, 255, 255, 0.2);
  }

  .liquid-metal-clipboard:hover svg {
    fill: var(--metal-light);
    filter: drop-shadow(0 2px 4px var(--metal-shadow));
    transform: rotate(360deg);
  }

  /* Active State */
  .liquid-metal-clipboard:active .content {
    transform: scale(0.98) translateY(0);
    box-shadow: 
      0 2px 4px var(--metal-shadow),
      0 0 10px rgba(255, 255, 255, 0.2);
  }
`;

export default Clipboard; 