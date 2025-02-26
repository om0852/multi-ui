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
          <div className="cosmic-effect">
            <div className="stars">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="star" style={{ 
                  '--delay': `${Math.random() * 3}s`,
                  '--size': `${Math.random() * 2 + 1}px`,
                  '--top': `${Math.random() * 100}%`,
                  '--left': `${Math.random() * 100}%`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="nebula"></div>
            <div className="cosmic-glow"></div>
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
  .cosmic-clipboard {
    --cosmic-primary: #a855f7;
    --cosmic-secondary: #6366f1;
    --cosmic-accent: #ec4899;
    --cosmic-dark: #1e1b4b;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .cosmic-container {
    position: relative;
    background: var(--cosmic-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .cosmic-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .stars {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .star {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background: white;
    border-radius: 50%;
    top: var(--top);
    left: var(--left);
    animation: twinkle 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .nebula {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      var(--cosmic-primary) 25%,
      var(--cosmic-secondary) 50%,
      var(--cosmic-accent) 75%,
      transparent
    );
    filter: blur(20px);
    opacity: 0.3;
    animation: nebula 8s linear infinite;
  }

  @keyframes nebula {
    0% {
      transform: rotate(0deg) scale(1.5);
    }
    100% {
      transform: rotate(360deg) scale(1.5);
    }
  }

  .cosmic-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 50%,
      var(--cosmic-primary) 0%,
      transparent 70%
    );
    opacity: 0;
    animation: glow 4s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% {
      opacity: 0.2;
      transform: scale(0.8);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.1);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--cosmic-dark);
    border: 2px solid var(--cosmic-primary);
    border-radius: 8px;
    color: white;
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--cosmic-primary);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: white;
      filter: drop-shadow(0 0 8px var(--cosmic-primary));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .cosmic-clipboard:hover .cosmic-effect {
    opacity: 1;
  }

  .cosmic-clipboard:hover .content {
    background: transparent;
    border-color: transparent;
  }

  .cosmic-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .cosmic-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 