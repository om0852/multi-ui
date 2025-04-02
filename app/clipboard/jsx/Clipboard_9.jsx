"use client"
import React from 'react';
import styled from 'styled-components';

const Clipboard = ({ text, onCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    if (onCopy) onCopy();
  };

  return (
    <StyledWrapper>
      <button className="plasma-clipboard" onClick={handleCopy}>
        <div className="plasma-container">
          <div className="energy-field">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`energy-ring ring-${i + 1}`} />
            ))}
          </div>
          <div className="plasma-content">
            <div className="plasma-text">{text}</div>
            <div className="plasma-icon">
              <div className="core">
                <div className="nucleus" />
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`electron electron-${i + 1}`} />
                ))}
              </div>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
                <path d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .plasma-clipboard {
    --plasma-primary: #7b2bf9;
    --plasma-secondary: #00ff88;
    --plasma-glow: rgba(123, 43, 249, 0.5);
    
    position: relative;
    padding: 0.8em 1.6em;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .plasma-container {
    position: relative;
    padding: 1em 2em;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px var(--plasma-glow);
  }

  .energy-field {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .energy-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 2px solid var(--plasma-primary);
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: pulse 2s ease-out infinite;
  }

  ${[...Array(6)].map((_, i) => {
    const size = 100 + i * 20;
    const delay = i * 0.3;
    return `
      .ring-${i + 1} {
        width: ${size}%;
        height: ${size}%;
        animation-delay: ${delay}s;
      }
    `;
  }).join('\n')}

  .plasma-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .plasma-text {
    color: var(--plasma-primary);
    font-size: 1em;
    text-shadow: 0 0 8px var(--plasma-glow);
  }

  .plasma-icon svg {
    width: 1.5em;
    height: 1.5em;
    fill: var(--plasma-primary);
    filter: drop-shadow(0 0 8px var(--plasma-glow));
    z-index: 1;
  }

  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
  }

  .plasma-clipboard:hover .plasma-container { box-shadow: 0 0 30px var(--plasma-glow); }
  .plasma-clipboard:hover .plasma-text { color: var(--plasma-secondary); }
  .plasma-clipboard:hover .plasma-icon svg { fill: var(--plasma-secondary); }

  .plasma-clipboard:active .plasma-container { transform: scale(0.98); }
`;

export default Clipboard;
