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
      <button className="fractal-clipboard" onClick={handleCopy}>
        <div className="fractal-container">
          <div className="fractal-effect">
            <div className="fractal-patterns">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="pattern" style={{ 
                  '--delay': `${i * 0.5}s`,
                  '--scale': `${1 - i * 0.2}`,
                  '--rotation': `${i * 45}deg`
                } as React.CSSProperties}>
                  <div className="inner-pattern" />
                </div>
              ))}
            </div>
            <div className="fractals">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="fractal" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--angle': `${i * 45}deg`,
                  '--scale': `${0.8 - i * 0.1}`
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
  .fractal-clipboard {
    --fractal-primary: #a855f7;
    --fractal-secondary: #c084fc;
    --fractal-glow: rgba(168, 85, 247, 0.5);
    --fractal-dark: #3b0764;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .fractal-container {
    position: relative;
    background: var(--fractal-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .fractal-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .fractal-patterns {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pattern {
    position: absolute;
    width: 100px;
    height: 100px;
    border: 2px solid var(--fractal-primary);
    transform: scale(var(--scale)) rotate(var(--rotation));
    animation: morph 6s linear infinite;
    animation-delay: var(--delay);

    .inner-pattern {
      position: absolute;
      inset: 10px;
      border: 2px solid var(--fractal-secondary);
      transform: rotate(45deg);
      animation: inner-morph 6s linear infinite;
      animation-delay: var(--delay);
    }
  }

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }

  @keyframes inner-morph {
    0% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    50% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    100% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
  }

  .fractals {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fractal {
    position: absolute;
    width: 60px;
    height: 60px;
    border: 1px solid var(--fractal-secondary);
    transform-origin: center;
    transform: rotate(var(--angle)) scale(var(--scale));
    animation: fractal 4s ease-in-out infinite;
    animation-delay: var(--delay);

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid var(--fractal-secondary);
      animation: rotate 4s linear infinite;
      animation-delay: var(--delay);
    }

    &::before {
      transform: rotate(30deg);
    }

    &::after {
      transform: rotate(-30deg);
    }
  }

  @keyframes fractal {
    0%, 100% {
      transform: rotate(var(--angle)) scale(var(--scale));
      opacity: 0.3;
    }
    50% {
      transform: rotate(calc(var(--angle) + 180deg)) scale(calc(var(--scale) * 1.2));
      opacity: 0.6;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
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
    background: var(--fractal-dark);
    border: 2px solid var(--fractal-primary);
    border-radius: 8px;
    color: var(--fractal-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--fractal-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--fractal-primary);
      filter: drop-shadow(0 0 8px var(--fractal-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .fractal-clipboard:hover .fractal-effect {
    opacity: 1;
  }

  .fractal-clipboard:hover .content {
    background: transparent;
    border-color: var(--fractal-secondary);
    color: var(--fractal-secondary);
  }

  .fractal-clipboard:hover svg {
    fill: var(--fractal-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .fractal-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 