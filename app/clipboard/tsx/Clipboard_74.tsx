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
      <button className="plasma-clipboard" onClick={handleCopy}>
        <div className="plasma-container">
          <div className="plasma-effect">
            <div className="plasma-waves">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="wave" style={{ 
                  '--delay': `${i * 0.3}s`,
                  '--scale': `${1 + i * 0.2}`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="arcs">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="arc" style={{ 
                  '--delay': `${i * 0.4}s`,
                  '--rotation': `${i * 72}deg`,
                  '--length': `${30 + i * 10}px`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="energy-particles">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="particle" style={{ 
                  '--delay': `${Math.random() * 2}s`,
                  '--x': `${Math.random() * 200 - 100}%`,
                  '--y': `${Math.random() * 200 - 100}%`
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
  .plasma-clipboard {
    --plasma-primary: #8b5cf6;
    --plasma-secondary: #a78bfa;
    --plasma-glow: rgba(139, 92, 246, 0.5);
    --plasma-dark: #2e1065;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .plasma-container {
    position: relative;
    background: var(--plasma-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .plasma-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .plasma-waves {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wave {
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      var(--plasma-primary) 0%,
      transparent 70%
    );
    opacity: 0.3;
    transform: scale(var(--scale));
    animation: wave 3s ease-in-out infinite;
    animation-delay: var(--delay);
    mix-blend-mode: screen;
  }

  @keyframes wave {
    0%, 100% {
      transform: scale(var(--scale)) rotate(0deg);
    }
    50% {
      transform: scale(calc(var(--scale) * 1.2)) rotate(180deg);
    }
  }

  .arcs {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arc {
    position: absolute;
    width: var(--length);
    height: 2px;
    background: var(--plasma-secondary);
    transform-origin: left center;
    transform: rotate(var(--rotation));
    animation: arc 1.5s ease-in-out infinite;
    animation-delay: var(--delay);
    filter: blur(1px);
    box-shadow: 0 0 10px var(--plasma-glow);
  }

  @keyframes arc {
    0%, 100% {
      transform: rotate(var(--rotation)) scaleX(0.3);
      opacity: 0.3;
    }
    50% {
      transform: rotate(calc(var(--rotation) + 180deg)) scaleX(1);
      opacity: 1;
    }
  }

  .energy-particles {
    position: absolute;
    inset: 0;
    perspective: 500px;
  }

  .particle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 4px;
    background: var(--plasma-secondary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: particle 2s ease-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes particle {
    0% {
      transform: translate(-50%, -50%) translateZ(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: 
        translate(
          calc(-50% + var(--x)),
          calc(-50% + var(--y))
        )
        translateZ(100px)
        scale(0);
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
    background: var(--plasma-dark);
    border: 2px solid var(--plasma-primary);
    border-radius: 8px;
    color: var(--plasma-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--plasma-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--plasma-primary);
      filter: drop-shadow(0 0 8px var(--plasma-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .plasma-clipboard:hover .plasma-effect {
    opacity: 1;
  }

  .plasma-clipboard:hover .content {
    background: transparent;
    border-color: var(--plasma-secondary);
    color: var(--plasma-secondary);
  }

  .plasma-clipboard:hover svg {
    fill: var(--plasma-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .plasma-clipboard:active .content {
    transform: scale(0.98);
  }
`; 


export default Clipboard;