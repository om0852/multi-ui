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
      <button className="origami-clipboard" onClick={handleCopy}>
        <div className="origami-container">
          <div className="origami-effect">
            <div className="triangles">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="triangle" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--rotation': `${i * 60}deg`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="shapes">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="shape" style={{ 
                  '--delay': `${i * 0.3}s`,
                  '--scale': `${1 + i * 0.2}`
                } as React.CSSProperties} />
              ))}
            </div>
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
  .origami-clipboard {
    --origami-primary: #0ea5e9;
    --origami-secondary: #38bdf8;
    --origami-accent: #7dd3fc;
    --origami-dark: #0c4a6e;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .origami-container {
    position: relative;
    background: var(--origami-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .origami-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .triangles {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 52px solid var(--origami-primary);
    opacity: 0.3;
    transform-origin: 50% 100%;
    animation: fold 3s ease-in-out infinite;
    animation-delay: var(--delay);

    &::before {
      content: '';
      position: absolute;
      top: 17px;
      left: -30px;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 35px solid var(--origami-accent);
      transform-origin: 50% 0%;
      animation: unfold 3s ease-in-out infinite;
      animation-delay: var(--delay);
    }
  }

  @keyframes fold {
    0%, 100% {
      transform: rotate(var(--rotation)) translateY(0) scaleY(1);
    }
    50% {
      transform: rotate(calc(var(--rotation) + 180deg)) translateY(-20px) scaleY(0.6);
    }
  }

  @keyframes unfold {
    0%, 100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.5);
    }
  }

  .shapes {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .shape {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 2px solid var(--origami-secondary);
    opacity: 0.3;
    transform-origin: center;
    animation: transform 4s ease-in-out infinite;
    animation-delay: var(--delay);

    &:nth-child(odd) {
      border-radius: 50%;
    }

    &:nth-child(even) {
      transform: rotate(45deg);
    }
  }

  @keyframes transform {
    0%, 100% {
      transform: scale(var(--scale)) rotate(0deg);
    }
    25% {
      transform: scale(calc(var(--scale) * 1.2)) rotate(90deg);
    }
    50% {
      transform: scale(var(--scale)) rotate(180deg);
    }
    75% {
      transform: scale(calc(var(--scale) * 0.8)) rotate(270deg);
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--origami-dark);
    border: 2px solid var(--origami-primary);
    border-radius: 8px;
    color: var(--origami-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--origami-primary);
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .origami-clipboard:hover .origami-effect {
    opacity: 1;
  }

  .origami-clipboard:hover .content {
    background: transparent;
    border-color: var(--origami-secondary);
    color: var(--origami-secondary);
  }

  .origami-clipboard:hover svg {
    fill: var(--origami-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .origami-clipboard:active .content {
    transform: scale(0.98);
  }
`;


export default Clipboard;