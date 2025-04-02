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
      <button className="synthwave-clipboard" onClick={handleCopy}>
        <div className="synthwave-container">
          <div className="sun"></div>
          <div className="grid"></div>
          <div className="mountains">
            <div className="mountain"></div>
            <div className="mountain"></div>
            <div className="mountain"></div>
          </div>
          <div className="content">
            <span className="synthwave-text">{text}</span>
            <svg className="synthwave-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  .synthwave-clipboard {
    --synthwave-primary: #ff00ff;
    --synthwave-secondary: #00ffff;
    --synthwave-accent: #ffff00;
    --synthwave-dark: #1a0033;
    --synthwave-sunset1: #ff6b6b;
    --synthwave-sunset2: #ff3399;
    --synthwave-sunset3: #6600ff;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .synthwave-container {
    position: relative;
    background: var(--synthwave-dark);
    border-radius: 8px;
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .sun {
    position: absolute;
    top: 20%;
    left: 50%;
    width: 60px;
    height: 60px;
    background: linear-gradient(
      var(--synthwave-sunset1),
      var(--synthwave-sunset2)
    );
    border-radius: 50%;
    transform: translateX(-50%);
    box-shadow: 
      0 0 20px var(--synthwave-sunset1),
      0 0 40px var(--synthwave-sunset2),
      0 0 60px var(--synthwave-sunset3);
    z-index: 1;
  }

  .grid {
    position: absolute;
    inset: -100% -50%;
    background-image: 
      linear-gradient(transparent 0%, var(--synthwave-primary) 2%, transparent 3%),
      linear-gradient(90deg, transparent 0%, var(--synthwave-primary) 2%, transparent 3%);
    background-size: 40px 40px;
    transform: rotateX(60deg) translateY(0);
    animation: grid-move 20s linear infinite;
  }

  @keyframes grid-move {
    0% {
      transform: rotateX(60deg) translateY(0);
    }
    100% {
      transform: rotateX(60deg) translateY(100%);
    }
  }

  .mountains {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    z-index: 2;
  }

  .mountain {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    filter: drop-shadow(0 0 10px var(--synthwave-sunset3));

    &:nth-child(1) {
      left: 0;
      border-width: 0 100px 100px 0;
      border-color: transparent var(--synthwave-sunset3) transparent transparent;
    }

    &:nth-child(2) {
      left: 50%;
      transform: translateX(-50%);
      border-width: 0 150px 150px 150px;
      border-color: transparent transparent var(--synthwave-sunset2) transparent;
    }

    &:nth-child(3) {
      right: 0;
      border-width: 0 0 100px 100px;
      border-color: transparent transparent var(--synthwave-sunset3) transparent;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid var(--synthwave-primary);
    border-radius: 8px;
    box-shadow: 
      0 0 10px var(--synthwave-primary),
      0 0 20px var(--synthwave-secondary);
    z-index: 3;
  }

  .synthwave-text {
    color: white;
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 
      2px 2px var(--synthwave-primary),
      -2px -2px var(--synthwave-secondary);
    transition: all 0.3s ease;
  }

  .synthwave-svg {
    width: 1.2em;
    height: 1.2em;
    fill: white;
    filter: drop-shadow(2px 2px var(--synthwave-primary))
            drop-shadow(-2px -2px var(--synthwave-secondary));
    transition: all 0.3s ease;
  }

  /* Hover Effects */
  .synthwave-clipboard:hover .grid {
    animation-duration: 10s;
  }

  .synthwave-clipboard:hover .sun {
    box-shadow: 
      0 0 30px var(--synthwave-sunset1),
      0 0 60px var(--synthwave-sunset2),
      0 0 90px var(--synthwave-sunset3);
  }

  .synthwave-clipboard:hover .content {
    border-color: var(--synthwave-accent);
    box-shadow: 
      0 0 20px var(--synthwave-primary),
      0 0 40px var(--synthwave-secondary),
      0 0 60px var(--synthwave-accent);
    transform: translateY(-2px);
  }

  .synthwave-clipboard:hover .synthwave-text {
    letter-spacing: 3px;
    text-shadow: 
      3px 3px var(--synthwave-primary),
      -3px -3px var(--synthwave-secondary);
  }

  .synthwave-clipboard:hover .synthwave-svg {
    transform: rotate(360deg) scale(1.1);
    filter: drop-shadow(3px 3px var(--synthwave-primary))
            drop-shadow(-3px -3px var(--synthwave-secondary));
  }

  /* Active State */
  .synthwave-clipboard:active .content {
    transform: scale(0.98) translateY(0);
    box-shadow: 
      0 0 10px var(--synthwave-primary),
      0 0 20px var(--synthwave-secondary);
  }

  .synthwave-clipboard:active .synthwave-text {
    text-shadow: 
      1px 1px var(--synthwave-primary),
      -1px -1px var(--synthwave-secondary);
  }
`;

export default Clipboard; 