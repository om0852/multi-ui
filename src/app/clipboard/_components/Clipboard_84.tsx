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
      <button className="cube-clipboard" onClick={handleCopy}>
        <div className="cube-container">
          <div className="cube-effect">
            <div className="cube">
              <div className="face front" />
              <div className="face back" />
              <div className="face right" />
              <div className="face left" />
              <div className="face top" />
              <div className="face bottom" />
              <div className="edges">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="edge" style={{ 
                    '--delay': `${i * 0.2}s`,
                    '--index': i
                  } as React.CSSProperties} />
                ))}
              </div>
            </div>
            <div className="glow-points">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="point" style={{ 
                  '--delay': `${i * 0.3}s`,
                  '--index': i
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
  .cube-clipboard {
    --cube-primary: #0ea5e9;
    --cube-secondary: #38bdf8;
    --cube-glow: rgba(14, 165, 233, 0.5);
    --cube-dark: #0c4a6e;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .cube-container {
    position: relative;
    background: var(--cube-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .cube-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    perspective: 1000px;
  }

  .cube {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    animation: rotate 10s linear infinite;
  }

  .face {
    position: absolute;
    width: 40px;
    height: 40px;
    background: var(--cube-primary);
    opacity: 0.2;
    border: 1px solid var(--cube-secondary);
  }

  .face.front {
    transform: translateZ(20px);
  }

  .face.back {
    transform: translateZ(-20px) rotateY(180deg);
  }

  .face.right {
    transform: translateX(20px) rotateY(90deg);
  }

  .face.left {
    transform: translateX(-20px) rotateY(-90deg);
  }

  .face.top {
    transform: translateY(-20px) rotateX(90deg);
  }

  .face.bottom {
    transform: translateY(20px) rotateX(-90deg);
  }

  .edges {
    position: absolute;
    transform-style: preserve-3d;
  }

  .edge {
    position: absolute;
    width: 2px;
    height: 40px;
    background: var(--cube-secondary);
    opacity: 0.5;
    transform-origin: center;
    animation: glow 2s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  .edge:nth-child(1) { transform: translate(20px, 0, 20px); }
  .edge:nth-child(2) { transform: translate(-20px, 0, 20px); }
  .edge:nth-child(3) { transform: translate(20px, 0, -20px); }
  .edge:nth-child(4) { transform: translate(-20px, 0, -20px); }
  .edge:nth-child(5) { transform: translate(20px, 20px, 0) rotateX(90deg); }
  .edge:nth-child(6) { transform: translate(-20px, 20px, 0) rotateX(90deg); }
  .edge:nth-child(7) { transform: translate(20px, -20px, 0) rotateX(90deg); }
  .edge:nth-child(8) { transform: translate(-20px, -20px, 0) rotateX(90deg); }
  .edge:nth-child(9) { transform: translate(0, 20px, 20px) rotateY(90deg); }
  .edge:nth-child(10) { transform: translate(0, -20px, 20px) rotateY(90deg); }
  .edge:nth-child(11) { transform: translate(0, 20px, -20px) rotateY(90deg); }
  .edge:nth-child(12) { transform: translate(0, -20px, -20px) rotateY(90deg); }

  @keyframes rotate {
    0% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  @keyframes glow {
    0%, 100% {
      opacity: 0.5;
      box-shadow: 0 0 5px var(--cube-glow);
    }
    50% {
      opacity: 1;
      box-shadow: 0 0 20px var(--cube-glow);
    }
  }

  .glow-points {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
  }

  .point {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--cube-secondary);
    border-radius: 50%;
    transform-origin: center;
    animation: pulse 2s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  .point:nth-child(1) { transform: translate(20px, 20px, 20px); }
  .point:nth-child(2) { transform: translate(-20px, 20px, 20px); }
  .point:nth-child(3) { transform: translate(20px, -20px, 20px); }
  .point:nth-child(4) { transform: translate(-20px, -20px, 20px); }
  .point:nth-child(5) { transform: translate(20px, 20px, -20px); }
  .point:nth-child(6) { transform: translate(-20px, 20px, -20px); }
  .point:nth-child(7) { transform: translate(20px, -20px, -20px); }
  .point:nth-child(8) { transform: translate(-20px, -20px, -20px); }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.5);
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
    background: var(--cube-dark);
    border: 2px solid var(--cube-primary);
    border-radius: 8px;
    color: var(--cube-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--cube-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--cube-primary);
      filter: drop-shadow(0 0 8px var(--cube-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .cube-clipboard:hover .cube-effect {
    opacity: 1;
  }

  .cube-clipboard:hover .content {
    background: transparent;
    border-color: var(--cube-secondary);
    color: var(--cube-secondary);
  }

  .cube-clipboard:hover svg {
    fill: var(--cube-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .cube-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 