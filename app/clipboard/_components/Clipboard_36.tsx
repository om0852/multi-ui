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
      <button className="flip-clipboard" onClick={handleCopy}>
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <span>{text}</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
                <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
              </svg>
            </div>
            <div className="back">
              <span>Copied!</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" />
                <path d="M7.75 12L10.58 14.83L16.25 9.17" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flip-clipboard {
    --flip-primary: #0ea5e9;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
    perspective: 1000px;
  }

  .flip-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .flipper {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    border: 2px solid var(--flip-primary);
    border-radius: 8px;
    color: var(--flip-primary);
    font-size: 0.9em;
    background: white;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--flip-primary);
    }
  }

  .back {
    background: var(--flip-primary);
    color: white;
    transform: rotateX(180deg);

    svg {
      fill: white;
    }
  }

  /* Hover Effects */
  .flip-clipboard:hover .flipper {
    transform: rotateX(180deg);
  }

  /* Active State */
  .flip-clipboard:active .flipper {
    transition: transform 0.3s;
  }
`;

export default Clipboard; 