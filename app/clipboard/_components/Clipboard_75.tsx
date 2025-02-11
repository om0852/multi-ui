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
      <button className="quantum-clipboard" onClick={handleCopy}>
        <div className="quantum-container">
          <div className="quantum-effect">
            <div className="probability-field">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="wave-function" style={{ 
                  '--delay': `${i * 0.5}s`,
                  '--scale': `${1 + i * 0.3}`,
                  '--rotation': `${i * 45}deg`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="quantum-particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="particle" style={{ 
                  '--delay': `${Math.random() * 3}s`,
                  '--x': `${Math.random() * 200 - 100}%`,
                  '--y': `${Math.random() * 200 - 100}%`,
                  '--size': `${Math.random() * 4 + 2}px`,
                  '--orbit': `${Math.random() * 360}deg`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="entanglement-lines">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="line" style={{ 
                  '--delay': `${i * 0.3}s`,
                  '--angle': `${i * 60}deg`
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
  .quantum-clipboard {
    --quantum-primary: #0891b2;
    --quantum-secondary: #06b6d4;
    --quantum-glow: rgba(8, 145, 178, 0.5);
    --quantum-dark: #164e63;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .quantum-container {
    position: relative;
    background: var(--quantum-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .quantum-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .probability-field {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wave-function {
    position: absolute;
    width: 150%;
    height: 150%;
    border: 2px solid var(--quantum-primary);
    border-radius: 40% 60% 60% 40% / 40% 50% 50% 60%;
    transform: scale(var(--scale)) rotate(var(--rotation));
    animation: waveform 8s linear infinite;
    animation-delay: var(--delay);
    opacity: 0.2;
  }

  @keyframes waveform {
    0% {
      transform: scale(var(--scale)) rotate(var(--rotation));
      border-radius: 40% 60% 60% 40% / 40% 50% 50% 60%;
    }
    50% {
      transform: scale(calc(var(--scale) * 1.1)) rotate(calc(var(--rotation) + 180deg));
      border-radius: 60% 40% 40% 60% / 50% 40% 60% 50%;
    }
    100% {
      transform: scale(var(--scale)) rotate(calc(var(--rotation) + 360deg));
      border-radius: 40% 60% 60% 40% / 40% 50% 50% 60%;
    }
  }

  .quantum-particles {
    position: absolute;
    inset: 0;
    perspective: 800px;
  }

  .particle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: var(--size);
    height: var(--size);
    background: var(--quantum-secondary);
    border-radius: 50%;
    transform-origin: center;
    animation: quantum 4s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes quantum {
    0% {
      transform: 
        translate(-50%, -50%) 
        rotate(var(--orbit))
        translateX(20px)
        scale(1);
      opacity: 1;
    }
    50% {
      transform: 
        translate(-50%, -50%)
        rotate(calc(var(--orbit) + 180deg))
        translateX(60px)
        scale(0.5);
      opacity: 0.5;
    }
    100% {
      transform: 
        translate(-50%, -50%)
        rotate(calc(var(--orbit) + 360deg))
        translateX(20px)
        scale(1);
      opacity: 1;
    }
  }

  .entanglement-lines {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--quantum-primary),
      transparent
    );
    transform-origin: center;
    transform: rotate(var(--angle));
    animation: entangle 2s ease-in-out infinite;
    animation-delay: var(--delay);
    opacity: 0.3;
  }

  @keyframes entangle {
    0%, 100% {
      transform: rotate(var(--angle)) scaleX(0.3);
      opacity: 0.3;
    }
    50% {
      transform: rotate(calc(var(--angle) + 180deg)) scaleX(1);
      opacity: 0.6;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--quantum-dark);
    border: 2px solid var(--quantum-primary);
    border-radius: 8px;
    color: var(--quantum-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--quantum-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--quantum-primary);
      filter: drop-shadow(0 0 8px var(--quantum-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .quantum-clipboard:hover .quantum-effect {
    opacity: 1;
  }

  .quantum-clipboard:hover .content {
    background: transparent;
    border-color: var(--quantum-secondary);
    color: var(--quantum-secondary);
  }

  .quantum-clipboard:hover svg {
    fill: var(--quantum-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .quantum-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 