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
      <button className="crystal-clipboard" onClick={handleCopy}>
        <div className="crystal-container">
          <div className="facets">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`facet facet-${i + 1}`} />
            ))}
          </div>
          <div className="crystal-content">
            <div className="crystal-text">{text}</div>
            <div className="crystal-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
                <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
              </svg>
            </div>
          </div>
          <div className="reflections">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`reflection reflection-${i + 1}`} />
            ))}
          </div>
          <div className="crystal-glow" />
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .crystal-clipboard {
    --crystal-primary: #a4d8ec;
    --crystal-secondary: #87ceeb;
    --crystal-highlight: rgba(255, 255, 255, 0.8);
    --crystal-shadow: rgba(164, 216, 236, 0.5);
    
    position: relative;
    padding: 0.8em 1.6em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .crystal-container {
    position: relative;
    padding: 1em 2em;
    background: linear-gradient(
      135deg,
      var(--crystal-primary) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      var(--crystal-secondary) 100%
    );
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 
      0 0 20px var(--crystal-shadow),
      inset 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .facets {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .facet {
    position: absolute;
    background: linear-gradient(
      45deg,
      transparent,
      var(--crystal-highlight),
      transparent
    );
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  ${[...Array(8)].map((_, i) => {
    const angle = (i * 45) % 360;
    const size = 40 + Math.random() * 40;
    return `
      .facet-${i + 1} {
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: ${size}%;
        height: ${size / 2}%;
        transform: rotate(${angle}deg);
        animation: shimmer ${3 + Math.random() * 2}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
      }
    `;
  }).join('\n')}

  .crystal-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .crystal-text {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1em;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
  }

  .crystal-icon {
    width: 1.5em;
    height: 1.5em;
    opacity: 0.7;
    transition: all 0.3s ease;

    svg {
      width: 100%;
      height: 100%;
      fill: rgba(0, 0, 0, 0.7);
      filter: drop-shadow(0 1px 2px rgba(255, 255, 255, 0.5));
    }
  }

  .reflections {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .reflection {
    position: absolute;
    background: linear-gradient(
      45deg,
      transparent,
      var(--crystal-highlight),
      transparent
    );
    opacity: 0;
    animation: reflect 4s ease-in-out infinite;
  }

  ${[...Array(4)].map((_, i) => {
    const delay = i * 1;
    const size = 60 + Math.random() * 40;
    return `
      .reflection-${i + 1} {
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: ${size}%;
        height: ${size / 3}%;
        transform: rotate(${Math.random() * 360}deg);
        animation-delay: ${delay}s;
      }
    `;
  }).join('\n')}

  .crystal-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      var(--crystal-highlight),
      transparent 70%
    );
    opacity: 0.3;
    mix-blend-mode: overlay;
  }

  /* Animations */
  @keyframes shimmer {
    0%, 100% {
      opacity: 0.3;
      transform: rotate(var(--angle)) translateX(0);
    }
    50% {
      opacity: 0.5;
      transform: rotate(var(--angle)) translateX(10px);
    }
  }

  @keyframes reflect {
    0%, 100% {
      opacity: 0;
      transform: translateX(-100%) rotate(var(--angle));
    }
    50% {
      opacity: 0.5;
      transform: translateX(100%) rotate(var(--angle));
    }
  }

  /* Hover Effects */
  .crystal-clipboard:hover .crystal-container {
    box-shadow: 
      0 0 30px var(--crystal-shadow),
      inset 0 0 30px rgba(255, 255, 255, 0.7);
  }

  .crystal-clipboard:hover .facet {
    opacity: 0.4;
  }

  .crystal-clipboard:hover .crystal-icon {
    opacity: 0.9;
    transform: scale(1.1);
  }

  /* Active State */
  .crystal-clipboard:active .crystal-container {
    transform: scale(0.98);
  }
`;

export default Clipboard; 