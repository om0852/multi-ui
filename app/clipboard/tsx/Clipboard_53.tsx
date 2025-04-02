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
      <button className="hologram-clipboard" onClick={handleCopy}>
        <div className="hologram-container">
          <div className="hologram-effects">
            <div className="scanlines"></div>
            <div className="noise"></div>
            <div className="flicker"></div>
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
  .hologram-clipboard {
    --hologram-primary: #00ffff;
    --hologram-secondary: #ff00ff;
    --hologram-bg: rgba(0, 255, 255, 0.1);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .hologram-container {
    position: relative;
    background: var(--hologram-bg);
    border: 2px solid var(--hologram-primary);
    border-radius: 8px;
    overflow: hidden;
  }

  .hologram-effects {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 255, 255, 0.05) 0.5%,
      transparent 1%
    );
    animation: scan 10s linear infinite;
  }

  .noise {
    position: absolute;
    inset: 0;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMDY2pkYmJUU+D8AAAASElEQVQ4y2NgQAX8DIxgwIQuwcjAACWhgCbBwMiIKsHIwIImwQifYGBghU8wMrDBJRgZ2BESDAwcyBJMDJwMtAYjLX1DPB0CAO5rHBvwkww6AAAAAElFTkSuQmCC');
    background-size: 50px;
    opacity: 0.15;
    animation: noise 0.5s steps(2) infinite;
  }

  .flicker {
    position: absolute;
    inset: 0;
    background: var(--hologram-primary);
    opacity: 0;
    animation: flicker 6s infinite;
  }

  @keyframes scan {
    from { transform: translateY(-100%); }
    to { transform: translateY(100%); }
  }

  @keyframes noise {
    0%, 100% { transform: translate(0); }
    10% { transform: translate(-5%, -5%); }
    20% { transform: translate(10%, 5%); }
    30% { transform: translate(5%, -10%); }
    40% { transform: translate(-5%, 15%); }
    50% { transform: translate(-10%, 5%); }
    60% { transform: translate(15%, 0); }
    70% { transform: translate(0, 10%); }
    80% { transform: translate(-15%, 0); }
    90% { transform: translate(10%, 5%); }
  }

  @keyframes flicker {
    0%, 100% { opacity: 0; }
    5%, 9% { opacity: 0.1; }
    10% { opacity: 0.05; }
    15% { opacity: 0.15; }
    20% { opacity: 0; }
    49% { opacity: 0; }
    50% { opacity: 0.2; }
    51% { opacity: 0; }
    60% { opacity: 0.1; }
    70% { opacity: 0; }
    71% { opacity: 0.15; }
    72% { opacity: 0; }
    85% { opacity: 0.05; }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    color: var(--hologram-primary);
    font-size: 0.9em;
    text-shadow: 0 0 8px var(--hologram-primary);
    z-index: 1;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--hologram-primary);
      filter: drop-shadow(0 0 8px var(--hologram-primary));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .hologram-clipboard:hover .content {
    color: var(--hologram-secondary);
    text-shadow: 0 0 12px var(--hologram-secondary);
  }

  .hologram-clipboard:hover svg {
    fill: var(--hologram-secondary);
    filter: drop-shadow(0 0 12px var(--hologram-secondary));
    transform: rotate(360deg);
  }

  /* Active State */
  .hologram-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 