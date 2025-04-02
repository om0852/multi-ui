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
      <button className="prism-clipboard" onClick={handleCopy}>
        <div className="prism-container">
          <div className="prism-effect">
            <div className="prisms">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="prism" style={{ 
                  '--delay': `${i * 0.5}s`,
                  '--rotation': `${i * 120}deg`
                } as React.CSSProperties}>
                  <div className="face front" />
                  <div className="face left" />
                  <div className="face right" />
                </div>
              ))}
            </div>
            <div className="light-beams">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="beam" style={{ 
                  '--delay': `${i * 0.3}s`,
                  '--angle': `${i * 60}deg`,
                  '--hue': `${i * 60}`
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
  .prism-clipboard {
    --prism-primary: #ec4899;
    --prism-secondary: #f472b6;
    --prism-glow: rgba(236, 72, 153, 0.5);
    --prism-dark: #831843;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .prism-container {
    position: relative;
    background: var(--prism-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .prism-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    perspective: 1000px;
  }

  .prisms {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }

  .prism {
    position: absolute;
    width: 60px;
    height: 60px;
    transform-style: preserve-3d;
    transform-origin: center;
    animation: rotate 6s linear infinite;
    animation-delay: var(--delay);
  }

  .face {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 52px solid var(--prism-primary);
    opacity: 0.6;
    transform-origin: bottom center;
  }

  .face.front {
    transform: translateZ(17.3px) rotateX(30deg);
  }

  .face.left {
    transform: rotateY(-120deg) translateZ(17.3px) rotateX(30deg);
  }

  .face.right {
    transform: rotateY(120deg) translateZ(17.3px) rotateX(30deg);
  }

  @keyframes rotate {
    0% {
      transform: rotateY(var(--rotation)) rotateX(0);
    }
    100% {
      transform: rotateY(calc(var(--rotation) + 360deg)) rotateX(360deg);
    }
  }

  .light-beams {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .beam {
    position: absolute;
    width: 2px;
    height: 100px;
    background: linear-gradient(
      to top,
      transparent,
      hsl(var(--hue), 100%, 70%),
      transparent
    );
    transform-origin: center;
    transform: rotate(var(--angle));
    opacity: 0;
    animation: beam 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes beam {
    0%, 100% {
      opacity: 0;
      transform: rotate(var(--angle)) scaleY(0.5);
    }
    50% {
      opacity: 0.8;
      transform: rotate(calc(var(--angle) + 30deg)) scaleY(1.2);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--prism-dark);
    border: 2px solid var(--prism-primary);
    border-radius: 8px;
    color: var(--prism-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--prism-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--prism-primary);
      filter: drop-shadow(0 0 8px var(--prism-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .prism-clipboard:hover .prism-effect {
    opacity: 1;
  }

  .prism-clipboard:hover .content {
    background: transparent;
    border-color: var(--prism-secondary);
    color: var(--prism-secondary);
  }

  .prism-clipboard:hover svg {
    fill: var(--prism-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .prism-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 