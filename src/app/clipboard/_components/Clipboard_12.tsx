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
      <button className="retro-clipboard" onClick={handleCopy}>
        <div className="retro-container">
          <div className="sun-gradient" />
          <div className="grid-perspective">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="grid-line" />
            ))}
          </div>
          <div className="mountains">
            <div className="mountain mountain-1" />
            <div className="mountain mountain-2" />
            <div className="mountain mountain-3" />
          </div>
          <div className="retro-content">
            <div className="retro-text">{text}</div>
            <div className="retro-icon">
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
  .retro-clipboard {
    --retro-pink: #ff71ce;
    --retro-blue: #01cdfe;
    --retro-purple: #b967ff;
    --retro-yellow: #fffb96;
    
    position: relative;
    padding: 0.8em 1.6em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .retro-container {
    position: relative;
    padding: 1em 2em;
    background: linear-gradient(180deg, #2b1055 0%, #7597de 100%);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .sun-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(
      180deg,
      var(--retro-pink) 0%,
      var(--retro-purple) 50%,
      transparent 100%
    );
    opacity: 0.5;
    transform-origin: bottom;
    transform: perspective(500px) rotateX(30deg);
  }

  .grid-perspective {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    transform-origin: 50% 0%;
    transform: perspective(500px) rotateX(60deg);
  }

  .grid-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--retro-purple);
    opacity: 0.3;
    transform-origin: center;
  }

  ${[...Array(20)].map((_, i) => `
    .grid-line:nth-child(${i + 1}) {
      bottom: ${(i * 5)}%;
      opacity: ${0.1 + (i * 0.02)};
      animation: gridPulse ${2 + Math.random()}s infinite;
    }
  `).join('\n')}

  .mountains {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
  }

  .mountain {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    opacity: 0.8;
  }

  .mountain-1 {
    left: 0;
    border-width: 0 50px 100px 0;
    border-color: transparent var(--retro-purple) transparent transparent;
  }

  .mountain-2 {
    left: 40%;
    border-width: 0 80px 160px 80px;
    border-color: transparent var(--retro-blue) transparent transparent;
  }

  .mountain-3 {
    right: 0;
    border-width: 0 0 120px 60px;
    border-color: transparent transparent var(--retro-pink) transparent;
  }

  .retro-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .retro-text {
    color: var(--retro-yellow);
    font-size: 1em;
    font-family: 'Arial', sans-serif;
    text-shadow: 2px 2px var(--retro-purple);
    letter-spacing: 1px;
  }

  .retro-icon {
    width: 1.5em;
    height: 1.5em;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--retro-yellow);
      filter: drop-shadow(2px 2px var(--retro-purple));
    }
  }

  @keyframes gridPulse {
    0%, 100% {
      opacity: 0.1;
      transform: scaleX(1);
    }
    50% {
      opacity: 0.3;
      transform: scaleX(1.1);
    }
  }

  /* Hover Effects */
  .retro-clipboard:hover .retro-container {
    box-shadow: 
      0 0 20px var(--retro-purple),
      inset 0 0 20px var(--retro-blue);
  }

  .retro-clipboard:hover .grid-line {
    animation-duration: 0.5s;
  }

  .retro-clipboard:hover .retro-text {
    color: var(--retro-blue);
    text-shadow: 2px 2px var(--retro-pink);
  }

  .retro-clipboard:hover .retro-icon svg {
    fill: var(--retro-blue);
    filter: drop-shadow(2px 2px var(--retro-pink));
  }

  /* Active State */
  .retro-clipboard:active .retro-container {
    transform: scale(0.98);
  }
`;

export default Clipboard; 