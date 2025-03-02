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
      <button className="gradient-clipboard" onClick={handleCopy}>
        <div className="gradient-border">
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
  .gradient-clipboard {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
  }

  .gradient-border {
    position: relative;
    padding: 2px;
    border-radius: 6px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    transition: all 0.3s ease;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: white;
    border-radius: 4px;
    color: #495057;
    font-size: 0.9em;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: #495057;
      transition: fill 0.3s ease;
    }
  }

  /* Hover Effects */
  .gradient-clipboard:hover .gradient-border {
    padding: 3px;
    background: linear-gradient(45deg, #4ecdc4, #ff6b6b);
  }

  .gradient-clipboard:hover .content {
    background: #fafafa;
  }

  .gradient-clipboard:hover svg {
    fill: #4ecdc4;
  }

  /* Active State */
  .gradient-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 