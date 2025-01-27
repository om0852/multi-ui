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
          <div className="glitch-layers">
            <div className="glitch-layer"></div>
            <div className="glitch-layer"></div>
            <div className="glitch-layer"></div>
          </div>
          <div className="content">
            <span className="glitch-text">{text}</span>
            <svg className="glitch-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    --glitch-primary: #00ff00;
    --glitch-secondary: #ff00ff;
    --glitch-tertiary: #0000ff;
    --glitch-dark: #1a1a1a;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .glitch-container {
    position: relative;
    background: var(--glitch-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .glitch-layers {
    position: absolute;
    inset: 0;
    mix-blend-mode: screen;
  }

  .glitch-layer {
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, var(--glitch-primary), var(--glitch-secondary));
    opacity: 0.5;
    mix-blend-mode: multiply;

    &:nth-child(1) {
      animation: glitch-anim-1 2s infinite linear alternate;
    }

    &:nth-child(2) {
      background: linear-gradient(-45deg, var(--glitch-secondary), var(--glitch-tertiary));
      animation: glitch-anim-2 3s infinite linear alternate-reverse;
    }

    &:nth-child(3) {
      background: linear-gradient(90deg, var(--glitch-tertiary), var(--glitch-primary));
      animation: glitch-anim-3 4s infinite linear alternate;
    }
  }

  @keyframes glitch-anim-1 {
    0%, 100% { transform: translate(0); }
    33% { transform: translate(-5px, 3px); }
    66% { transform: translate(5px, -3px); }
  }

  @keyframes glitch-anim-2 {
    0%, 100% { transform: translate(0); }
    33% { transform: translate(5px, -3px); }
    66% { transform: translate(-5px, 3px); }
  }

  @keyframes glitch-anim-3 {
    0%, 100% { transform: translate(0); }
    33% { transform: translate(-3px, 5px); }
    66% { transform: translate(3px, -5px); }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    z-index: 1;
  }

  .glitch-text {
    color: white;
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }

    &::before {
      color: var(--glitch-primary);
      animation: glitch-text 0.6s infinite;
    }

    &::after {
      color: var(--glitch-secondary);
      animation: glitch-text 0.4s infinite reverse;
    }
  }

  @keyframes glitch-text {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
  }

  .glitch-svg {
    width: 1.2em;
    height: 1.2em;
    fill: white;
    filter: drop-shadow(2px 2px var(--glitch-primary)) 
            drop-shadow(-2px -2px var(--glitch-secondary));
    transition: transform 0.3s ease;
  }

  /* Hover Effects */
  .glitch-clipboard:hover .glitch-layer {
    opacity: 0.7;
    animation-duration: 0.5s;
  }

  .glitch-clipboard:hover .content {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 0 10px var(--glitch-primary),
      0 0 20px var(--glitch-secondary),
      0 0 30px var(--glitch-tertiary);
  }

  .glitch-clipboard:hover .glitch-svg {
    transform: scale(1.1) rotate(10deg);
  }

  /* Active State */
  .glitch-clipboard:active .content {
    transform: scale(0.98);
    box-shadow: 
      0 0 5px var(--glitch-primary),
      0 0 10px var(--glitch-secondary);
  }
`;

export default Clipboard; 