"use client"

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface ClipboardProps {
  text: string;
  onCopy?: () => void;
}

const Clipboard: React.FC<ClipboardProps> = ({ text, onCopy }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const content = contentRef.current;
    if (!button || !content) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const strength = Math.min(distance * 0.5, 1);
      
      content.style.transform = `translate(${deltaX * 15 * strength}px, ${deltaY * 15 * strength}px)`;
    };

    const handleMouseLeave = () => {
      content.style.transform = 'translate(0, 0)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    onCopy?.();
  };

  return (
    <StyledWrapper>
      <button ref={buttonRef} className="magnetic-clipboard" onClick={handleCopy}>
        <div className="magnetic-container">
          <div className="magnetic-effect"></div>
          <div ref={contentRef} className="content">
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
  .magnetic-clipboard {
    --magnetic-primary: #8b5cf6;
    --magnetic-secondary: #6d28d9;
    --magnetic-glow: rgba(139, 92, 246, 0.3);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .magnetic-container {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }

  .magnetic-effect {
    position: absolute;
    inset: -50%;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      var(--magnetic-glow),
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: #ffffff;
    border: 2px solid var(--magnetic-primary);
    border-radius: 8px;
    color: var(--magnetic-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: transform 0.2s cubic-bezier(0.33, 1, 0.68, 1);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--magnetic-primary);
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .magnetic-clipboard:hover .magnetic-effect {
    opacity: 1;
  }

  .magnetic-clipboard:hover .content {
    border-color: var(--magnetic-secondary);
    color: var(--magnetic-secondary);
  }

  .magnetic-clipboard:hover svg {
    fill: var(--magnetic-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .magnetic-clipboard:active .content {
    transition: transform 0.1s;
    transform: scale(0.98) translate(0, 0) !important;
  }
`;

export default Clipboard; 