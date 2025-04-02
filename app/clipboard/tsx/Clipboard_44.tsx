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
      <button className="lightning-clipboard" onClick={handleCopy}>
        <div className="lightning-container">
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
            <div className="bolt"></div>
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
  .lightning-clipboard {
    --lightning-primary: #eab308;
    --lightning-glow: rgba(234, 179, 8, 0.3);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .lightning-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .lightning {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .bolt {
    position: absolute;
    width: 2px;
    height: 20px;
    background: var(--lightning-primary);
    opacity: 0;
    filter: drop-shadow(0 0 10px var(--lightning-glow));
    animation: strike 1.5s ease-out infinite;

    &:nth-child(1) {
      top: 50%;
      left: 20%;
      transform: rotate(15deg);
      animation-delay: 0s;
    }

    &:nth-child(2) {
      top: 40%;
      left: 60%;
      transform: rotate(-20deg);
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      top: 60%;
      left: 40%;
      transform: rotate(5deg);
      animation-delay: 0.4s;
    }
  }

  @keyframes strike {
    0% {
      transform: translateY(-100%) rotate(var(--rotation));
      opacity: 0;
    }
    20%, 40% {
      opacity: 1;
    }
    100% {
      transform: translateY(100%) rotate(var(--rotation));
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
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid var(--lightning-primary);
    border-radius: 8px;
    color: var(--lightning-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--lightning-primary);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .lightning-clipboard:hover .lightning {
    opacity: 1;
  }

  .lightning-clipboard:hover .content {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 15px var(--lightning-glow);
  }

  .lightning-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .lightning-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 