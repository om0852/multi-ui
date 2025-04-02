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
            {[...Array(50)].map((_, i) => (
              <div key={i} className={`star star-${i + 1}`} />
            ))}
          </div>
          <div className="nebula">
            <div className="nebula-layer layer-1" />
            <div className="nebula-layer layer-2" />
            <div className="nebula-layer layer-3" />
          </div>
          <div className="cosmic-content">
            <div className="cosmic-text">{text}</div>
            <div className="cosmic-icon">
              <div className="cosmic-glow" />
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
  .cosmic-clipboard {
    --cosmic-primary: #e066ff;
    --cosmic-secondary: #00ffff;
    --cosmic-accent: #ff71ce;
    --cosmic-bg: #0a001f;
    
    position: relative;
    padding: 0.8em 1.6em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .cosmic-container {
    position: relative;
    padding: 1em 2em;
    background: var(--cosmic-bg);
    border: 1px solid var(--cosmic-primary);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .star-field {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .star {
    position: absolute;
    background: #fff;
    border-radius: 50%;
  }

  ${[...Array(50)].map((_, i) => {
    const size = Math.random() * 2 + 1;
    return `
      .star-${i + 1} {
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.7 + 0.3};
        animation: twinkle ${1 + Math.random() * 2}s infinite;
        animation-delay: ${Math.random() * -2}s;
      }
    `;
  }).join('\n')}

  .nebula {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .nebula-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    mix-blend-mode: screen;
  }

  .layer-1 {
    background: radial-gradient(
      circle at 30% 50%,
      var(--cosmic-primary),
      transparent 60%
    );
    animation: nebulaPulse 4s ease-in-out infinite;
  }

  .layer-2 {
    background: radial-gradient(
      circle at 70% 50%,
      var(--cosmic-secondary),
      transparent 60%
    );
    animation: nebulaPulse 4s ease-in-out infinite 1s;
  }

  .layer-3 {
    background: radial-gradient(
      circle at 50% 50%,
      var(--cosmic-accent),
      transparent 60%
    );
    animation: nebulaPulse 4s ease-in-out infinite 2s;
  }

  .cosmic-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .cosmic-text {
    color: #fff;
    font-size: 1em;
    text-shadow: 
      0 0 8px var(--cosmic-primary),
      0 0 16px var(--cosmic-secondary);
  }

  .cosmic-icon {
    position: relative;
    width: 1.5em;
    height: 1.5em;

    svg {
      position: relative;
      width: 100%;
      height: 100%;
      fill: #fff;
      filter: drop-shadow(0 0 8px var(--cosmic-primary));
      z-index: 1;
    }
  }

  .cosmic-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      var(--cosmic-primary) 0%,
      transparent 70%
    );
    transform: translate(-50%, -50%);
    opacity: 0.3;
    animation: cosmicPulse 2s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: var(--opacity);
      transform: scale(1);
    }
    50% {
      opacity: 0.2;
      transform: scale(0.5);
    }
  }

  @keyframes nebulaPulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.1);
    }
  }

  @keyframes cosmicPulse {
    0%, 100% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.4;
      transform: translate(-50%, -50%) scale(1.2);
    }
  }

  /* Hover Effects */
  .cosmic-clipboard:hover .cosmic-container {
    border-color: var(--cosmic-secondary);
    box-shadow: 
      0 0 20px var(--cosmic-primary),
      inset 0 0 20px var(--cosmic-primary);
  }

  .cosmic-clipboard:hover .star {
    animation-duration: 0.5s;
  }

  .cosmic-clipboard:hover .cosmic-text {
    color: var(--cosmic-secondary);
  }

  .cosmic-clipboard:hover .cosmic-icon svg {
    fill: var(--cosmic-secondary);
  }

  /* Active State */
  .cosmic-clipboard:active .cosmic-container {
    transform: scale(0.98);
  }
`;

export default Clipboard; 