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
      <button className="animated-border-clipboard" onClick={handleCopy}>
        <div className="border-container">
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
  .animated-border-clipboard {
    --border-primary: #6c5ce7;
    --border-secondary: #00cec9;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .border-container {
    position: relative;
    padding: 3px;
    border-radius: 8px;
    background: linear-gradient(90deg, 
      var(--border-primary), 
      var(--border-secondary), 
      var(--border-primary)
    );
    background-size: 200% 100%;
    animation: gradientMove 3s linear infinite;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: white;
    border-radius: 6px;
    color: #2d3436;
    font-size: 0.9em;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--border-primary);
      transition: transform 0.3s ease;
    }
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 0%;
    }
  }

  /* Hover Effects */
  .animated-border-clipboard:hover .content {
    background: #fafafa;
  }

  .animated-border-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .animated-border-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 