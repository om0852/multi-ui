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
          <div className="quantum-field">
            {[...Array(30)].map((_, i) => (
              <div key={i} className={`quantum-particle particle-${i + 1}`} />
            ))}
          </div>
          <div className="wave-function">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`wave wave-${i + 1}`} />
            ))}
          </div>
          <div className="quantum-content">
            <div className="quantum-text">{text}</div>
            <div className="quantum-icon">
              <div className="probability-cloud" />
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
                <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .quantum-clipboard {
    --quantum-primary: #00ffcc;
    --quantum-secondary: #7b2bf9;
    --quantum-tertiary: #ff71ce;
    --quantum-bg: #0a0a2a;
    
    position: relative;
    padding: 0.8em 1.6em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .quantum-container {
    position: relative;
    padding: 1em 2em;
    background: var(--quantum-bg);
    border: 2px solid var(--quantum-primary);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .quantum-field {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .quantum-particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--quantum-primary);
    border-radius: 50%;
    opacity: 0.6;
  }

  ${[...Array(30)].map((_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const scale = Math.random() * 0.5 + 0.5;
    return `
      .particle-${i + 1} {
        left: ${x}%;
        top: ${y}%;
        transform: scale(${scale});
        animation: quantum ${2 + Math.random() * 3}s infinite;
        animation-delay: ${Math.random() * -2}s;
      }
    `;
  }).join('\n')}

  .wave-function {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .wave {
    position: absolute;
    top: 50%;
    left: 0;
    width: 200%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--quantum-secondary),
      var(--quantum-tertiary),
      transparent
    );
    opacity: 0.3;
  }

  ${[...Array(3)].map((_, i) => `
    .wave-${i + 1} {
      transform: translateY(${(i - 1) * 10}px);
      animation: waveFlow 3s infinite;
      animation-delay: ${i * 0.5}s;
    }
  `).join('\n')}

  .quantum-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .quantum-text {
    color: var(--quantum-primary);
    font-size: 1em;
    font-family: 'Arial', sans-serif;
    text-shadow: 0 0 8px var(--quantum-primary);
  }

  .quantum-icon {
    position: relative;
    width: 1.5em;
    height: 1.5em;

    svg {
      position: relative;
      width: 100%;
      height: 100%;
      fill: var(--quantum-primary);
      filter: drop-shadow(0 0 8px var(--quantum-primary));
      z-index: 1;
    }
  }

  .probability-cloud {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      var(--quantum-primary) 0%,
      transparent 70%
    );
    transform: translate(-50%, -50%);
    opacity: 0.1;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes quantum {
    0%, 100% {
      transform: translate(0, 0) scale(var(--scale));
    }
    25% {
      transform: translate(10px, 10px) scale(var(--scale));
    }
    50% {
      transform: translate(-10px, 10px) scale(var(--scale));
    }
    75% {
      transform: translate(-10px, -10px) scale(var(--scale));
    }
  }

  @keyframes waveFlow {
    0% {
      transform: translateX(-50%) translateY(var(--y));
      opacity: 0.3;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: translateX(0%) translateY(var(--y));
      opacity: 0.3;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.1;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.2;
    }
  }

  /* Hover Effects */
  .quantum-clipboard:hover .quantum-container {
    border-color: var(--quantum-secondary);
    box-shadow: 
      0 0 20px var(--quantum-primary),
      inset 0 0 20px var(--quantum-primary);
  }

  .quantum-clipboard:hover .quantum-particle {
    --quantum-primary: var(--quantum-secondary);
  }

  .quantum-clipboard:hover .quantum-text {
    color: var(--quantum-secondary);
    text-shadow: 0 0 12px var(--quantum-secondary);
  }

  .quantum-clipboard:hover .quantum-icon svg {
    fill: var(--quantum-secondary);
  }

  /* Active State */
  .quantum-clipboard:active .quantum-container {
    transform: scale(0.98);
  }
`;

export default Clipboard; 