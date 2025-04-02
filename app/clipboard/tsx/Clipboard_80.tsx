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
      <button className="kaleidoscope-clipboard" onClick={handleCopy}>
        <div className="kaleidoscope-container">
          <div className="kaleidoscope-effect">
            <div className="segments">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="segment" style={{ 
                  '--delay': `${i * 0.5}s`,
                  '--angle': `${i * 60}deg`
                } as React.CSSProperties}>
                  <div className="mirror">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="pattern" style={{ 
                        '--pattern-delay': `${j * 0.3}s`,
                        '--pattern-angle': `${j * 120}deg`
                      } as React.CSSProperties} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="reflections">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="reflection" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--angle': `${i * 30}deg`,
                  '--distance': `${Math.random() * 30 + 20}px`
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
  .kaleidoscope-clipboard {
    --kaleidoscope-primary: #f43f5e;
    --kaleidoscope-secondary: #fb7185;
    --kaleidoscope-glow: rgba(244, 63, 94, 0.5);
    --kaleidoscope-dark: #881337;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .kaleidoscope-container {
    position: relative;
    background: var(--kaleidoscope-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .kaleidoscope-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    perspective: 1000px;
  }

  .segments {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }

  .segment {
    position: absolute;
    width: 100px;
    height: 100px;
    transform-origin: center;
    transform: rotate(var(--angle));
    animation: rotate 8s linear infinite;
    animation-delay: var(--delay);
  }

  .mirror {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
  }

  .pattern {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--pattern-angle),
      var(--kaleidoscope-primary),
      var(--kaleidoscope-secondary)
    );
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    opacity: 0.3;
    animation: morph 4s ease-in-out infinite;
    animation-delay: var(--pattern-delay);
  }

  @keyframes rotate {
    0% {
      transform: rotate(var(--angle));
    }
    100% {
      transform: rotate(calc(var(--angle) + 360deg));
    }
  }

  @keyframes morph {
    0%, 100% {
      clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
      opacity: 0.3;
    }
    50% {
      clip-path: polygon(100% 0%, 50% 100%, 0% 0%);
      opacity: 0.5;
    }
  }

  .reflections {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reflection {
    position: absolute;
    width: 2px;
    height: var(--distance);
    background: linear-gradient(
      to bottom,
      transparent,
      var(--kaleidoscope-secondary),
      transparent
    );
    transform-origin: center;
    transform: rotate(var(--angle));
    opacity: 0.3;
    animation: shine 2s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes shine {
    0%, 100% {
      opacity: 0.3;
      transform: rotate(var(--angle)) scaleY(1);
    }
    50% {
      opacity: 0.6;
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
    background: var(--kaleidoscope-dark);
    border: 2px solid var(--kaleidoscope-primary);
    border-radius: 8px;
    color: var(--kaleidoscope-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--kaleidoscope-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--kaleidoscope-primary);
      filter: drop-shadow(0 0 8px var(--kaleidoscope-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .kaleidoscope-clipboard:hover .kaleidoscope-effect {
    opacity: 1;
  }

  .kaleidoscope-clipboard:hover .content {
    background: transparent;
    border-color: var(--kaleidoscope-secondary);
    color: var(--kaleidoscope-secondary);
  }

  .kaleidoscope-clipboard:hover svg {
    fill: var(--kaleidoscope-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .kaleidoscope-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 