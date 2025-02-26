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
      <button className="holo-clipboard" onClick={handleCopy}>
        <div className="holo-container">
          <div className="holo-surface">
            <div className="holo-overlay"></div>
            <div className="holo-flare"></div>
            <div className="holo-shimmer">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="shimmer-line" style={{ '--i': i } as React.CSSProperties}></div>
              ))}
            </div>
          </div>
          <div className="content">
            <span className="holo-text">{text}</span>
            <svg className="holo-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  .holo-clipboard {
    --holo-angle: 135deg;
    --holo-color1: #ff0000;
    --holo-color2: #00ff00;
    --holo-color3: #0000ff;
    --holo-color4: #ff00ff;
    --holo-color5: #00ffff;
    --holo-shimmer: rgba(255, 255, 255, 0.5);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .holo-container {
    position: relative;
    background: linear-gradient(
      var(--holo-angle),
      var(--holo-color1),
      var(--holo-color2),
      var(--holo-color3),
      var(--holo-color4),
      var(--holo-color5)
    );
    background-size: 400% 400%;
    animation: holo-shift 10s linear infinite;
    border-radius: 8px;
    overflow: hidden;
  }

  @keyframes holo-shift {
    0% {
      background-position: 0% 0%;
      --holo-angle: 135deg;
    }
    25% {
      --holo-angle: 180deg;
    }
    50% {
      background-position: 100% 100%;
      --holo-angle: 225deg;
    }
    75% {
      --holo-angle: 270deg;
    }
    100% {
      background-position: 0% 0%;
      --holo-angle: 315deg;
    }
  }

  .holo-surface {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .holo-overlay {
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
    mix-blend-mode: overlay;
  }

  .holo-flare {
    position: absolute;
    inset: -50%;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(255, 255, 255, 0.8),
      transparent 70%
    );
    opacity: 0;
    mix-blend-mode: overlay;
    transition: opacity 0.3s ease;
  }

  .holo-shimmer {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .shimmer-line {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      var(--holo-shimmer),
      transparent
    );
    transform: skewX(-25deg);
    animation: shimmer 3s calc(var(--i) * 0.5s) infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      left: 200%;
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
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    margin: 0.5em;
    z-index: 1;
  }

  .holo-text {
    color: white;
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
  }

  .holo-svg {
    width: 1.2em;
    height: 1.2em;
    fill: white;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
    transition: all 0.3s ease;
  }

  /* Hover Effects */
  .holo-clipboard:hover .holo-container {
    animation-duration: 5s;
  }

  .holo-clipboard:hover .holo-flare {
    opacity: 1;
  }

  .holo-clipboard:hover .shimmer-line {
    animation-duration: 2s;
  }

  .holo-clipboard:hover .content {
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 
      0 0 20px rgba(255, 255, 255, 0.2),
      0 0 40px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  .holo-clipboard:hover .holo-text {
    letter-spacing: 4px;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }

  .holo-clipboard:hover .holo-svg {
    transform: rotate(360deg) scale(1.1);
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
  }

  /* Active State */
  .holo-clipboard:active .content {
    transform: scale(0.98) translateY(0);
    box-shadow: 
      0 0 10px rgba(255, 255, 255, 0.2),
      0 0 20px rgba(255, 255, 255, 0.1);
  }

  .holo-clipboard:active .holo-text {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
`;

export default Clipboard; 