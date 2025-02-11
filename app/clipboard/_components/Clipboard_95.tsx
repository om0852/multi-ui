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
      <button className="vapor-clipboard" onClick={handleCopy}>
        <div className="vapor-container">
          <div className="grid-background"></div>
          <div className="sun-background"></div>
          <div className="content">
            <span className="vapor-text">{text}</span>
            <svg className="vapor-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  .vapor-clipboard {
    --vapor-primary: #ff71ce;
    --vapor-secondary: #01cdfe;
    --vapor-accent: #05ffa1;
    --vapor-dark: #2d1b4e;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .vapor-container {
    position: relative;
    background: var(--vapor-dark);
    border-radius: 8px;
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .grid-background {
    position: absolute;
    inset: -100% -50%;
    background-image: 
      linear-gradient(transparent 0%, rgba(255, 113, 206, 0.2) 2%, transparent 3%),
      linear-gradient(90deg, transparent 0%, rgba(255, 113, 206, 0.2) 2%, transparent 3%);
    background-size: 40px 40px;
    transform: rotateX(60deg);
    animation: grid-move 20s linear infinite;
  }

  @keyframes grid-move {
    0% {
      transform: rotateX(60deg) translateY(0%);
    }
    100% {
      transform: rotateX(60deg) translateY(100%);
    }
  }

  .sun-background {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 120%,
      var(--vapor-primary) 0%,
      transparent 50%
    );
    opacity: 0.5;
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
    z-index: 1;
  }

  .vapor-text {
    color: white;
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 
      2px 2px var(--vapor-primary),
      -2px -2px var(--vapor-secondary);
    transition: all 0.3s ease;
  }

  .vapor-svg {
    width: 1.2em;
    height: 1.2em;
    fill: white;
    filter: drop-shadow(2px 2px var(--vapor-primary));
    transition: all 0.3s ease;
  }

  /* Hover Effects */
  .vapor-clipboard:hover .grid-background {
    animation-duration: 10s;
  }

  .vapor-clipboard:hover .content {
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 
      0 0 20px var(--vapor-primary),
      0 0 40px var(--vapor-secondary),
      0 0 60px var(--vapor-accent);
    transform: translateY(-2px);
  }

  .vapor-clipboard:hover .vapor-text {
    text-shadow: 
      3px 3px var(--vapor-primary),
      -3px -3px var(--vapor-secondary);
    letter-spacing: 3px;
  }

  .vapor-clipboard:hover .vapor-svg {
    transform: rotate(360deg) scale(1.1);
    filter: drop-shadow(3px 3px var(--vapor-primary))
            drop-shadow(-3px -3px var(--vapor-secondary));
  }

  /* Active State */
  .vapor-clipboard:active .content {
    transform: scale(0.98) translateY(0);
    box-shadow: 
      0 0 10px var(--vapor-primary),
      0 0 20px var(--vapor-secondary);
  }

  .vapor-clipboard:active .vapor-text {
    text-shadow: 
      1px 1px var(--vapor-primary),
      -1px -1px var(--vapor-secondary);
  }
`;

export default Clipboard; 