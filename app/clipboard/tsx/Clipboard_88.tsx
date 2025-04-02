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
      <button className="cyberpunk-clipboard" onClick={handleCopy}>
        <div className="cyberpunk-container">
          <div className="glitch-effect"></div>
          <div className="scan-line"></div>
          <div className="content">
            <div className="text-wrapper">
              <span className="text-glitch" data-text={text}>{text}</span>
            </div>
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
  .cyberpunk-clipboard {
    --cyber-primary: #f706cf;
    --cyber-secondary: #05ffa1;
    --cyber-bg: #1a1a1a;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .cyberpunk-container {
    position: relative;
    background: var(--cyber-bg);
    border: 2px solid var(--cyber-primary);
    border-radius: 2px;
    overflow: hidden;
  }

  .glitch-effect {
    position: absolute;
    inset: 0;
    background: var(--cyber-primary);
    opacity: 0;
    mix-blend-mode: overlay;
    animation: glitch 4s infinite;
    display: none;
  }

  .scan-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--cyber-secondary);
    opacity: 0.5;
    top: 0;
    animation: scan 2s linear infinite;
  }

  @keyframes scan {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(400%);
    }
  }

  @keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    color: var(--cyber-primary);
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--cyber-primary);
      transition: all 0.3s ease;
    }
  }

  .text-wrapper {
    position: relative;
    overflow: hidden;
  }

  .text-glitch {
    position: relative;
    display: inline-block;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }

    &::before {
      color: var(--cyber-secondary);
      transform: translateX(-2px);
    }

    &::after {
      color: var(--cyber-primary);
      transform: translateX(2px);
    }
  }

  /* Hover Effects */
  .cyberpunk-clipboard:hover .glitch-effect {
    display: block;
  }

  .cyberpunk-clipboard:hover .content {
    color: var(--cyber-secondary);
  }

  .cyberpunk-clipboard:hover .text-glitch::before,
  .cyberpunk-clipboard:hover .text-glitch::after {
    animation: glitch-text 0.4s infinite;
    opacity: 0.5;
  }

  .cyberpunk-clipboard:hover svg {
    fill: var(--cyber-secondary);
    transform: rotate(360deg);
    filter: drop-shadow(0 0 5px var(--cyber-secondary));
  }

  @keyframes glitch-text {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
  }

  /* Active State */
  .cyberpunk-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 