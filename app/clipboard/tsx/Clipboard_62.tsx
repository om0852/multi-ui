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
      <button className="rainbow-clipboard" onClick={handleCopy}>
        <div className="rainbow-container">
          <div className="rainbow-effect">
            <div className="gradient"></div>
            <div className="shine"></div>
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
  .rainbow-clipboard {
    --rainbow-1: #ff0000;
    --rainbow-2: #ff8000;
    --rainbow-3: #ffff00;
    --rainbow-4: #00ff00;
    --rainbow-5: #0000ff;
    --rainbow-6: #8000ff;
    --rainbow-7: #ff00ff;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .rainbow-container {
    position: relative;
    background: #1a1a1a;
    border-radius: 8px;
    overflow: hidden;
  }

  .rainbow-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gradient {
    position: absolute;
    inset: -50%;
    background: conic-gradient(
      var(--rainbow-1),
      var(--rainbow-2),
      var(--rainbow-3),
      var(--rainbow-4),
      var(--rainbow-5),
      var(--rainbow-6),
      var(--rainbow-7),
      var(--rainbow-1)
    );
    animation: rotate 10s linear infinite;
    opacity: 0.7;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 70%
    );
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: #1a1a1a;
    border: 2px solid transparent;
    border-radius: 8px;
    color: white;
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    background-clip: padding-box;

    &::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 8px;
      background: linear-gradient(
        45deg,
        var(--rainbow-1),
        var(--rainbow-3),
        var(--rainbow-5),
        var(--rainbow-7)
      );
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: borderRotate 4s linear infinite;
    }

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: white;
      transition: all 0.3s ease;
    }
  }

  @keyframes borderRotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  /* Hover Effects */
  .rainbow-clipboard:hover .rainbow-effect {
    opacity: 1;
  }

  .rainbow-clipboard:hover .content {
    background: transparent;
  }

  .rainbow-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .rainbow-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 