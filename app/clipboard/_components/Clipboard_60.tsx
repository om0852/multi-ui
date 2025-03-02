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
      <button className="crystal-clipboard" onClick={handleCopy}>
        <div className="crystal-container">
          <div className="crystal-effect">
            <div className="facets">
              <div className="facet"></div>
              <div className="facet"></div>
              <div className="facet"></div>
              <div className="facet"></div>
            </div>
            <div className="light-effects">
              <div className="reflection"></div>
              <div className="sparkles">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="sparkle" style={{ 
                    '--delay': `${Math.random() * 3}s`,
                    '--top': `${Math.random() * 100}%`,
                    '--left': `${Math.random() * 100}%`
                  } as React.CSSProperties} />
                ))}
              </div>
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
  .crystal-clipboard {
    --crystal-primary: #38bdf8;
    --crystal-secondary: #818cf8;
    --crystal-accent: #e879f9;
    --crystal-dark: #0c4a6e;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .crystal-container {
    position: relative;
    background: var(--crystal-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .crystal-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .facets {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .facet {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      var(--crystal-primary) 25%,
      var(--crystal-secondary) 50%,
      var(--crystal-accent) 75%,
      transparent
    );
    opacity: 0.3;
    transform-origin: center;
    animation: rotate3d 8s linear infinite;

    &:nth-child(2) {
      animation-delay: -2s;
      transform: rotateX(90deg);
    }

    &:nth-child(3) {
      animation-delay: -4s;
      transform: rotateY(90deg);
    }

    &:nth-child(4) {
      animation-delay: -6s;
      transform: rotate3d(1, 1, 1, 120deg);
    }
  }

  @keyframes rotate3d {
    0% {
      transform: rotate3d(1, 1, 1, 0deg);
    }
    100% {
      transform: rotate3d(1, 1, 1, 360deg);
    }
  }

  .light-effects {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .reflection {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      transparent 30%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 70%
    );
    animation: shimmer 3s linear infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }

  .sparkles {
    position: absolute;
    inset: 0;
  }

  .sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    top: var(--top);
    left: var(--left);
    animation: sparkle 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes sparkle {
    0%, 100% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--crystal-dark);
    border: 2px solid var(--crystal-primary);
    border-radius: 8px;
    color: white;
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
    text-shadow: 0 0 8px var(--crystal-primary);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: white;
      filter: drop-shadow(0 0 8px var(--crystal-primary));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .crystal-clipboard:hover .crystal-effect {
    opacity: 1;
  }

  .crystal-clipboard:hover .content {
    background: transparent;
    border-color: transparent;
  }

  .crystal-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .crystal-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 