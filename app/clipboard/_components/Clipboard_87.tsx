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
      <button className="holographic-clipboard" onClick={handleCopy}>
        <div className="holographic-container">
          <div className="holographic-overlay"></div>
          <div className="prismatic-effect"></div>
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
  .holographic-clipboard {
    --holo-base: rgba(255, 255, 255, 0.8);
    --holo-shimmer: linear-gradient(
      45deg,
      rgba(255, 0, 0, 0.1),
      rgba(255, 255, 0, 0.1),
      rgba(0, 255, 0, 0.1),
      rgba(0, 255, 255, 0.1),
      rgba(0, 0, 255, 0.1),
      rgba(255, 0, 255, 0.1)
    );
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .holographic-container {
    position: relative;
    background: var(--holo-base);
    border-radius: 8px;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }

  .holographic-overlay {
    position: absolute;
    inset: 0;
    background: var(--holo-shimmer);
    mix-blend-mode: overlay;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .prismatic-effect {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    animation: shimmer 3s infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: rgba(0, 0, 0, 0.8);
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .holographic-clipboard:hover .holographic-overlay,
  .holographic-clipboard:hover .prismatic-effect {
    opacity: 1;
  }

  .holographic-clipboard:hover .content {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }

  .holographic-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .holographic-clipboard:active .content {
    transform: scale(0.98) translateY(0);
  }
`;

export default Clipboard; 