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
      <button className="outline-clipboard" onClick={handleCopy}>
        <span className="text">{text}</span>
        <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
          <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .outline-clipboard {
    --outline-color: #34495e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: transparent;
    border: 1px solid var(--outline-color);
    border-radius: 4px;
    color: var(--outline-color);
    font-size: 0.9em;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(52, 73, 94, 0.2);
    }
  }

  .text {
    flex: 1;
    text-align: left;
    font-weight: 500;
  }

  .icon {
    width: 1.2em;
    height: 1.2em;
    fill: var(--outline-color);
    transition: transform 0.2s ease;
  }

  /* Hover Effects */
  .outline-clipboard:hover {
    background: var(--outline-color);
    color: white;
  }

  .outline-clipboard:hover .icon {
    fill: white;
    transform: translateX(2px);
  }

  /* Active State */
  .outline-clipboard:active {
    transform: scale(0.98);
  }
`;

export default Clipboard; 