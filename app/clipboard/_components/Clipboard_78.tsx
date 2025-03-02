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
      <button className="voronoi-clipboard" onClick={handleCopy}>
        <div className="voronoi-container">
          <div className="voronoi-effect">
            <div className="cells">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="cell" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`,
                  '--size': `${Math.random() * 40 + 40}px`,
                  '--rotation': `${Math.random() * 360}deg`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="nodes">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="node" style={{ 
                  '--delay': `${i * 0.3}s`,
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`
                } as React.CSSProperties} />
              ))}
            </div>
            <div className="edges">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="edge" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--length': `${Math.random() * 50 + 50}px`,
                  '--angle': `${Math.random() * 360}deg`
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
  .voronoi-clipboard {
    --voronoi-primary: #0ea5e9;
    --voronoi-secondary: #38bdf8;
    --voronoi-glow: rgba(14, 165, 233, 0.5);
    --voronoi-dark: #0c4a6e;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .voronoi-container {
    position: relative;
    background: var(--voronoi-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .voronoi-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .cells {
    position: absolute;
    inset: 0;
  }

  .cell {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(
      circle at center,
      var(--voronoi-primary) 0%,
      transparent 70%
    );
    transform: translate(-50%, -50%) rotate(var(--rotation));
    opacity: 0.1;
    animation: cell 4s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes cell {
    0%, 100% {
      transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1);
      opacity: 0.1;
    }
    50% {
      transform: translate(-50%, -50%) rotate(calc(var(--rotation) + 180deg)) scale(1.2);
      opacity: 0.2;
    }
  }

  .nodes {
    position: absolute;
    inset: 0;
  }

  .node {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: 6px;
    height: 6px;
    background: var(--voronoi-secondary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: node 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes node {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      box-shadow: 0 0 10px var(--voronoi-glow);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      box-shadow: 0 0 20px var(--voronoi-glow);
    }
  }

  .edges {
    position: absolute;
    inset: 0;
  }

  .edge {
    position: absolute;
    left: 50%;
    top: 50%;
    width: var(--length);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--voronoi-secondary),
      transparent
    );
    transform-origin: left;
    transform: rotate(var(--angle));
    opacity: 0.2;
    animation: edge 2s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes edge {
    0%, 100% {
      transform: rotate(var(--angle)) scaleX(0.5);
      opacity: 0.2;
    }
    50% {
      transform: rotate(calc(var(--angle) + 30deg)) scaleX(1);
      opacity: 0.4;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--voronoi-dark);
    border: 2px solid var(--voronoi-primary);
    border-radius: 8px;
    color: var(--voronoi-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--voronoi-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--voronoi-primary);
      filter: drop-shadow(0 0 8px var(--voronoi-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .voronoi-clipboard:hover .voronoi-effect {
    opacity: 1;
  }

  .voronoi-clipboard:hover .content {
    background: transparent;
    border-color: var(--voronoi-secondary);
    color: var(--voronoi-secondary);
  }

  .voronoi-clipboard:hover svg {
    fill: var(--voronoi-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .voronoi-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 