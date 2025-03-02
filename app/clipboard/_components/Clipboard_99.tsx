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
      <button className="wireframe-clipboard" onClick={handleCopy}>
        <div className="wireframe-container">
          <div className="wireframe-box">
            <div className="wireframe-lines">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="line" style={{ '--i': i } as React.CSSProperties}></div>
              ))}
            </div>
            <div className="wireframe-points">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="point" style={{ '--i': i } as React.CSSProperties}></div>
              ))}
            </div>
          </div>
          <div className="content">
            <span className="wireframe-text">{text}</span>
            <svg className="wireframe-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  .wireframe-clipboard {
    --wireframe-primary: #00ff88;
    --wireframe-secondary: #00ffff;
    --wireframe-accent: #ff00ff;
    --wireframe-dark: #000000;
    --line-size: 2px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .wireframe-container {
    position: relative;
    background: var(--wireframe-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .wireframe-box {
    position: absolute;
    inset: 0;
    perspective: 1000px;
  }

  .wireframe-lines {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
  }

  .line {
    position: absolute;
    background: var(--wireframe-primary);
    opacity: 0.5;
    box-shadow: 0 0 10px var(--wireframe-primary);

    &:nth-child(3n) {
      background: var(--wireframe-secondary);
      box-shadow: 0 0 10px var(--wireframe-secondary);
    }

    &:nth-child(3n+1) {
      background: var(--wireframe-accent);
      box-shadow: 0 0 10px var(--wireframe-accent);
    }

    &:nth-child(-n+4) {
      top: 0;
      left: calc(var(--i) * 25%);
      width: var(--line-size);
      height: 100%;
      transform-origin: top;
      animation: line-vertical 3s calc(var(--i) * 0.2s) infinite;
    }

    &:nth-child(n+5):nth-child(-n+8) {
      top: calc((var(--i) - 4) * 25%);
      left: 0;
      width: 100%;
      height: var(--line-size);
      transform-origin: left;
      animation: line-horizontal 3s calc((var(--i) - 4) * 0.2s) infinite;
    }

    &:nth-child(n+9) {
      --angle: calc((var(--i) - 8) * 90deg);
      top: 50%;
      left: 50%;
      width: 100%;
      height: var(--line-size);
      transform-origin: center;
      animation: line-diagonal 4s calc((var(--i) - 8) * 0.3s) infinite;
    }
  }

  @keyframes line-vertical {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.5); }
  }

  @keyframes line-horizontal {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.5); }
  }

  @keyframes line-diagonal {
    0%, 100% { transform: rotate(var(--angle)) scale(1); }
    50% { transform: rotate(calc(var(--angle) + 180deg)) scale(0.5); }
  }

  .wireframe-points {
    position: absolute;
    inset: 0;
  }

  .point {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--wireframe-primary);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--wireframe-primary);
    animation: point-pulse 2s calc(var(--i) * 0.25s) infinite;

    &:nth-child(2n) {
      background: var(--wireframe-secondary);
      box-shadow: 0 0 10px var(--wireframe-secondary);
    }

    &:nth-child(3n) {
      background: var(--wireframe-accent);
      box-shadow: 0 0 10px var(--wireframe-accent);
    }

    &:nth-child(1) { top: 0; left: 0; }
    &:nth-child(2) { top: 0; right: 0; }
    &:nth-child(3) { bottom: 0; left: 0; }
    &:nth-child(4) { bottom: 0; right: 0; }
    &:nth-child(5) { top: 0; left: 50%; }
    &:nth-child(6) { top: 50%; right: 0; }
    &:nth-child(7) { bottom: 0; left: 50%; }
    &:nth-child(8) { top: 50%; left: 0; }
  }

  @keyframes point-pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: rgba(0, 0, 0, 0.8);
    border: var(--line-size) solid var(--wireframe-primary);
    border-radius: 8px;
    margin: 0.5em;
    z-index: 1;
  }

  .wireframe-text {
    color: var(--wireframe-primary);
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 10px var(--wireframe-primary);
    transition: all 0.3s ease;
  }

  .wireframe-svg {
    width: 1.2em;
    height: 1.2em;
    fill: var(--wireframe-primary);
    filter: drop-shadow(0 0 5px var(--wireframe-primary));
    transition: all 0.3s ease;
  }

  /* Hover Effects */
  .wireframe-clipboard:hover .line {
    animation-duration: 1.5s;
    opacity: 0.8;
  }

  .wireframe-clipboard:hover .point {
    animation-duration: 1s;
  }

  .wireframe-clipboard:hover .content {
    border-color: var(--wireframe-secondary);
    box-shadow: 
      0 0 20px var(--wireframe-primary),
      0 0 40px var(--wireframe-secondary);
    transform: translateY(-2px);
  }

  .wireframe-clipboard:hover .wireframe-text {
    color: var(--wireframe-secondary);
    text-shadow: 0 0 15px var(--wireframe-secondary);
    letter-spacing: 4px;
  }

  .wireframe-clipboard:hover .wireframe-svg {
    fill: var(--wireframe-secondary);
    transform: rotate(360deg) scale(1.1);
    filter: drop-shadow(0 0 10px var(--wireframe-secondary));
  }

  /* Active State */
  .wireframe-clipboard:active .content {
    transform: scale(0.98) translateY(0);
    box-shadow: 
      0 0 10px var(--wireframe-primary),
      0 0 20px var(--wireframe-secondary);
  }

  .wireframe-clipboard:active .wireframe-text {
    text-shadow: 0 0 5px var(--wireframe-primary);
  }
`;

export default Clipboard; 