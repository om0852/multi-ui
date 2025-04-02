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
      <button className="cosmic-clipboard" onClick={handleCopy}>
        <div className="cosmic-container">
          <div className="star-field">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="star" style={{ '--i': i } as React.CSSProperties}></div>
            ))}
          </div>
          <div className="nebula"></div>
          <div className="cosmic-glow"></div>
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
  .cosmic-clipboard {
    --cosmic-primary: #7b2ff7;
    --cosmic-secondary: #f72f93;
    --cosmic-accent: #2ff7e3;
    --cosmic-bg: #0a0a2a;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .cosmic-container {
    position: relative;
    background: var(--cosmic-bg);
    border-radius: 8px;
    overflow: hidden;
  }

  .star-field {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    animation: twinkle 2s infinite;
    animation-delay: calc(var(--i) * 0.1s);
    opacity: 0;

    &:nth-child(3n) {
      background: var(--cosmic-accent);
    }
    &:nth-child(3n+1) {
      background: var(--cosmic-secondary);
    }
    &:nth-child(3n+2) {
      background: var(--cosmic-primary);
    }
  }

  @keyframes twinkle {
    0%, 100% {
      transform: scale(0) translate(0);
      opacity: 0;
    }
    50% {
      transform: scale(1) translate(100px, -100px);
      opacity: 1;
    }
  }

  .nebula {
    position: absolute;
    inset: -50%;
    background: radial-gradient(
      circle at 50% 50%,
      transparent 0%,
      var(--cosmic-primary) 20%,
      var(--cosmic-secondary) 40%,
      var(--cosmic-accent) 60%,
      transparent 80%
    );
    opacity: 0;
    mix-blend-mode: screen;
    animation: rotate 20s linear infinite;
    transition: opacity 0.3s ease;
  }

  .cosmic-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(123, 47, 247, 0.3) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(10, 10, 42, 0.8);
    border: 2px solid var(--cosmic-primary);
    border-radius: 8px;
    color: white;
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: white;
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .cosmic-clipboard:hover .star-field,
  .cosmic-clipboard:hover .nebula,
  .cosmic-clipboard:hover .cosmic-glow {
    opacity: 1;
  }

  .cosmic-clipboard:hover .content {
    border-color: var(--cosmic-accent);
    background: rgba(10, 10, 42, 0.6);
    transform: translateY(-1px);
    box-shadow: 0 0 20px rgba(47, 247, 227, 0.3);
  }

  .cosmic-clipboard:hover svg {
    fill: var(--cosmic-accent);
    transform: rotate(360deg);
    filter: drop-shadow(0 0 5px var(--cosmic-accent));
  }

  /* Active State */
  .cosmic-clipboard:active .content {
    transform: scale(0.98) translateY(0);
  }
`;

export default Clipboard; 