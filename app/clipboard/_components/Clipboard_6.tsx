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
      <button className="neon-clipboard" onClick={handleCopy}>
        <div className="neon-frame">
          <div className="neon-lines">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`neon-line line-${i + 1}`} />
            ))}
          </div>
          <div className="neon-text">{text}</div>
          <div className="neon-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
              <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
            </svg>
          </div>
          <div className="neon-glow"></div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .neon-clipboard {
    --neon-primary: #ff00ff;
    --neon-secondary: #00ffff;
    --neon-shadow: rgba(255, 0, 255, 0.5);
    
    position: relative;
    padding: 0.8em 1.6em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .neon-frame {
    position: relative;
    padding: 1em 2em;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid var(--neon-primary);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 
      0 0 10px var(--neon-shadow),
      inset 0 0 10px var(--neon-shadow);
  }

  .neon-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .neon-line {
    position: absolute;
    background: var(--neon-primary);
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  .line-1 {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    transform: translateX(-50%);
  }

  .line-2 {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translateY(-50%);
  }

  .line-3 {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--neon-secondary);
    border-radius: 6px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .neon-text {
    position: relative;
    color: var(--neon-primary);
    font-size: 1em;
    font-weight: 500;
    text-shadow: 0 0 8px var(--neon-shadow);
    transition: all 0.3s ease;
    z-index: 1;
  }

  .neon-icon {
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
    width: 1.5em;
    height: 1.5em;
    opacity: 0.8;
    transition: all 0.3s ease;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--neon-primary);
      filter: drop-shadow(0 0 8px var(--neon-shadow));
    }
  }

  .neon-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      var(--neon-primary) 0%,
      transparent 70%
    );
    opacity: 0;
    mix-blend-mode: screen;
    transition: all 0.3s ease;
  }

  /* Hover Effects */
  .neon-clipboard:hover .neon-frame {
    border-color: var(--neon-secondary);
    box-shadow: 
      0 0 20px var(--neon-shadow),
      inset 0 0 20px var(--neon-shadow);
  }

  .neon-clipboard:hover .neon-line {
    background: var(--neon-secondary);
  }

  .neon-clipboard:hover .line-3 {
    opacity: 0.5;
    transform: scale(1.05);
  }

  .neon-clipboard:hover .neon-text {
    color: var(--neon-secondary);
    text-shadow: 0 0 12px var(--neon-shadow);
  }

  .neon-clipboard:hover .neon-icon {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);

    svg {
      fill: var(--neon-secondary);
    }
  }

  .neon-clipboard:hover .neon-glow {
    opacity: 0.2;
  }

  /* Active Effects */
  .neon-clipboard:active .neon-frame {
    transform: scale(0.98);
  }

  /* Animation */
  @keyframes neonPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  .neon-text, .neon-icon svg {
    animation: neonPulse 2s ease-in-out infinite;
  }
`;

export default Clipboard; 