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
      <button className="circuit-clipboard" onClick={handleCopy}>
        <div className="circuit-container">
          <div className="circuit-effect">
            <div className="circuit-path path1"></div>
            <div className="circuit-path path2"></div>
            <div className="circuit-path path3"></div>
            <div className="circuit-node node1"></div>
            <div className="circuit-node node2"></div>
            <div className="circuit-node node3"></div>
            <div className="pulse"></div>
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
  .circuit-clipboard {
    --circuit-primary: #22d3ee;
    --circuit-glow: rgba(34, 211, 238, 0.5);
    --circuit-dark: #0e7490;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .circuit-container {
    position: relative;
    background: #1a1a1a;
    border-radius: 8px;
    overflow: hidden;
  }

  .circuit-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .circuit-path {
    position: absolute;
    background: var(--circuit-primary);
    box-shadow: 0 0 10px var(--circuit-glow);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .path1 {
    top: 20%;
    left: -10%;
    width: 40%;
    height: 2px;
    transform: rotate(45deg);
  }

  .path2 {
    bottom: 30%;
    right: -10%;
    width: 50%;
    height: 2px;
    transform: rotate(-30deg);
  }

  .path3 {
    top: 50%;
    left: 50%;
    width: 2px;
    height: 40%;
    transform: translateX(-50%);
  }

  .circuit-node {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--circuit-primary);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--circuit-glow);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .node1 {
    top: 20%;
    left: 20%;
  }

  .node2 {
    bottom: 30%;
    right: 30%;
  }

  .node3 {
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }

  .pulse {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, var(--circuit-glow) 0%, transparent 70%);
    opacity: 0;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 0.3;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: #1a1a1a;
    border: 2px solid var(--circuit-primary);
    border-radius: 8px;
    color: var(--circuit-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 5px var(--circuit-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--circuit-primary);
      filter: drop-shadow(0 0 5px var(--circuit-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .circuit-clipboard:hover .circuit-effect {
    opacity: 1;
  }

  .circuit-clipboard:hover .circuit-path,
  .circuit-clipboard:hover .circuit-node {
    opacity: 1;
  }

  .circuit-clipboard:hover .content {
    border-color: var(--circuit-dark);
    box-shadow: 0 0 20px var(--circuit-glow);
  }

  .circuit-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .circuit-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 