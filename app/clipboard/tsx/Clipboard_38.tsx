"use client"

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface ClipboardProps {
  text: string;
  onCopy?: () => void;
}

const Clipboard: React.FC<ClipboardProps> = ({ text, onCopy }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const spotlight = spotlightRef.current;
    if (!button || !spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.setProperty('--x', `${x}px`);
      spotlight.style.setProperty('--y', `${y}px`);
    };

    button.addEventListener('mousemove', handleMouseMove);
    return () => button.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    onCopy?.();
  };

  return (
    <StyledWrapper>
      <button ref={buttonRef} className="spotlight-clipboard" onClick={handleCopy}>
        <div ref={spotlightRef} className="spotlight"></div>
        <div className="content">
          <span>{text}</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
            <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .spotlight-clipboard {
    --spotlight-primary: #3b82f6;
    --spotlight-glow: rgba(59, 130, 246, 0.5);
    position: relative;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
  }

  .spotlight {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle 80px at var(--x, 0) var(--y, 0),
      var(--spotlight-glow),
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: #ffffff;
    border: 2px solid var(--spotlight-primary);
    border-radius: 8px;
    color: var(--spotlight-primary);
    font-size: 0.9em;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--spotlight-primary);
      transition: transform 0.3s ease;
    }
  }

  /* Hover Effects */
  .spotlight-clipboard:hover .spotlight {
    opacity: 1;
  }

  .spotlight-clipboard:hover svg {
    transform: rotate(360deg);
  }

  /* Active State */
  .spotlight-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 