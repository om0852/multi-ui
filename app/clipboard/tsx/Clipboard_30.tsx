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
      <button className="geo-clipboard" onClick={handleCopy}>
        <div className="geo-container">
          <div className="geo-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="geo-content">
            <span className="geo-text">{text}</span>
            <div className="geo-icon">
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
  .geo-clipboard {
    --geo-primary: #2c3e50;
    --geo-accent: #e74c3c;
    --geo-bg: #ffffff;
    
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .geo-container {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    background: var(--geo-bg);
    transition: all 0.3s ease;
  }

  .geo-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .shape {
    position: absolute;
    background: var(--geo-accent);
    opacity: 0.1;
    transition: all 0.3s ease;
  }

  .shape-1 {
    width: 20px;
    height: 20px;
    top: -10px;
    left: -10px;
    transform: rotate(45deg);
  }

  .shape-2 {
    width: 15px;
    height: 15px;
    bottom: -7.5px;
    right: 20%;
    border-radius: 50%;
  }

  .shape-3 {
    width: 25px;
    height: 25px;
    top: 20%;
    right: -12.5px;
    border-radius: 4px;
    transform: rotate(30deg);
  }

  .geo-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: transparent;
    z-index: 1;
  }

  .geo-text {
    color: var(--geo-primary);
    font-size: 0.9em;
    font-weight: 500;
  }

  .geo-icon {
    width: 1.2em;
    height: 1.2em;
    
    svg {
      width: 100%;
      height: 100%;
      fill: var(--geo-primary);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .geo-clipboard:hover .geo-container {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .geo-clipboard:hover .shape {
    opacity: 0.2;
    transform: scale(1.5) rotate(90deg);
  }

  .geo-clipboard:hover .shape-2 {
    transform: scale(1.5);
  }

  .geo-clipboard:hover .geo-icon svg {
    transform: rotate(180deg);
  }

  /* Active State */
  .geo-clipboard:active .geo-container {
    transform: scale(0.98);
  }

  .geo-clipboard:active .shape {
    opacity: 0.3;
  }
`;

export default Clipboard; 