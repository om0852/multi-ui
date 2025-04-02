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
      <button className="glitch-clipboard" onClick={handleCopy}>
        <div className="glitch-container">
          <div className="glitch-slices">
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
          </div>
          <div className="content">
            <span data-text={text}>{text}</span>
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
  .glitch-clipboard {
    --glitch-bg: #1a1a1a;
    --glitch-text: #ffffff;
    --glitch-error: #ff0000;
    --glitch-error-alt: #00ffff;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .glitch-container {
    position: relative;
    background: var(--glitch-bg);
    border-radius: 8px;
    overflow: hidden;
  }

  .glitch-slices {
    position: absolute;
    inset: 0;
    mix-blend-mode: screen;
  }

  .slice {
    position: absolute;
    inset: 0;
    background: var(--glitch-error);
    opacity: 0;
    animation: glitch1 2s infinite;

    &:nth-child(2) {
      background: var(--glitch-error-alt);
      animation: glitch2 2.5s infinite;
    }

    &:nth-child(3) {
      background: var(--glitch-text);
      animation: glitch3 3s infinite;
    }
  }

  @keyframes glitch1 {
    0%, 100% { transform: translate(0); opacity: 0; }
    7% { transform: translate(-2px, 3px); opacity: 0.75; }
    10% { transform: translate(2px, -3px); opacity: 0.25; }
    13% { transform: translate(0); opacity: 0; }
    20% { transform: translate(-5px, 5px); opacity: 0.5; }
    23% { transform: translate(0); opacity: 0; }
  }

  @keyframes glitch2 {
    0%, 100% { transform: translate(0); opacity: 0; }
    27% { transform: translate(4px, 4px); opacity: 0.75; }
    30% { transform: translate(-4px, -4px); opacity: 0.25; }
    35% { transform: translate(0); opacity: 0; }
    45% { transform: translate(3px, -3px); opacity: 0.5; }
    50% { transform: translate(0); opacity: 0; }
  }

  @keyframes glitch3 {
    0%, 100% { transform: translate(0); opacity: 0; }
    57% { transform: translate(3px, -2px); opacity: 0.75; }
    60% { transform: translate(-3px, 2px); opacity: 0.25; }
    63% { transform: translate(0); opacity: 0; }
    70% { transform: translate(-5px, 5px); opacity: 0.5; }
    73% { transform: translate(0); opacity: 0; }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    color: var(--glitch-text);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    span {
      position: relative;

      &::before,
      &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.8;
      }

      &::before {
        animation: glitch-text 3s infinite;
        color: var(--glitch-error);
        z-index: -1;
      }

      &::after {
        animation: glitch-text 2s infinite;
        color: var(--glitch-error-alt);
        z-index: -2;
      }
    }

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--glitch-text);
      transition: transform 0.3s ease;
    }
  }

  @keyframes glitch-text {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, -2px); }
    60% { transform: translate(-2px); }
    80% { transform: translate(2px); }
  }

  /* Hover Effects */
  .glitch-clipboard:hover .content svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .glitch-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 