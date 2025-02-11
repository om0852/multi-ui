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
      <button className="cyberpunk-clipboard" onClick={handleCopy}>
        <div className="cyberpunk-container">
          <div className="cyberpunk-effect">
            <div className="scanlines"></div>
            <div className="glitch-blocks">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="block" style={{ 
                  '--delay': `${Math.random() * 2}s`,
                  '--duration': `${Math.random() * 0.5 + 0.5}s`,
                  '--position': `${Math.random() * 100}%`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="noise"></div>
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
  .cyberpunk-clipboard {
    --cyber-primary: #ff00ff;
    --cyber-secondary: #00ffff;
    --cyber-dark: #1a0b1a;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .cyberpunk-container {
    position: relative;
    background: var(--cyber-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .cyberpunk-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 0.5%,
      transparent 1%
    );
    animation: scan 10s linear infinite;
  }

  @keyframes scan {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 100%;
    }
  }

  .glitch-blocks {
    position: absolute;
    inset: 0;
    filter: url(#glitch);
  }

  .block {
    position: absolute;
    top: var(--position);
    left: -100%;
    width: 20px;
    height: 2px;
    background: var(--cyber-primary);
    box-shadow: 0 0 10px var(--cyber-primary);
    animation: glitch-h var(--duration) ease-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes glitch-h {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(200%);
    }
    100% {
      transform: translateX(200%);
    }
  }

  .noise {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.05;
    mix-blend-mode: overlay;
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--cyber-dark);
    border: 2px solid var(--cyber-primary);
    border-radius: 8px;
    color: var(--cyber-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--cyber-primary);

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 8px;
      background: var(--cyber-primary);
      opacity: 0.5;
      animation: glitch-border 1s linear infinite;
    }

    &::after {
      animation-duration: 1.5s;
      animation-delay: 0.5s;
    }

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--cyber-primary);
      filter: drop-shadow(0 0 8px var(--cyber-primary));
      transition: all 0.3s ease;
    }
  }

  @keyframes glitch-border {
    0%, 100% {
      clip-path: inset(-2px);
    }
    5%, 95% {
      clip-path: inset(-2px -2px -2px calc(100% - 10px));
    }
    10%, 90% {
      clip-path: inset(-2px calc(-2px + 5px) -2px -2px);
    }
    15%, 85% {
      clip-path: inset(-2px -2px calc(100% - 10px) -2px);
    }
    20%, 80% {
      clip-path: inset(calc(100% - 10px) -2px -2px -2px);
    }
  }

  /* Hover Effects */
  .cyberpunk-clipboard:hover .cyberpunk-effect {
    opacity: 1;
  }

  .cyberpunk-clipboard:hover .content {
    background: transparent;
    border-color: var(--cyber-secondary);
    color: var(--cyber-secondary);
  }

  .cyberpunk-clipboard:hover svg {
    fill: var(--cyber-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .cyberpunk-clipboard:active .content {
    transform: scale(0.98);
  }
`; 


export default Clipboard;