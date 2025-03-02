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
      <button className="neuron-clipboard" onClick={handleCopy}>
        <div className="neuron-container">
          <div className="neuron-effect">
            <div className="neurons">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="neuron" style={{ 
                  '--delay': `${i * 0.3}s`,
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`,
                  '--size': `${Math.random() * 10 + 10}px`
                } as React.CSSProperties}>
                  <div className="nucleus" />
                  <div className="dendrites">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="dendrite" style={{
                        '--angle': `${j * 90}deg`,
                        '--length': `${Math.random() * 20 + 20}px`
                      } as React.CSSProperties} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="synapses">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="synapse" style={{ 
                  '--delay': `${i * 0.2}s`,
                  '--start-x': `${Math.random() * 100}%`,
                  '--start-y': `${Math.random() * 100}%`,
                  '--end-x': `${Math.random() * 100}%`,
                  '--end-y': `${Math.random() * 100}%`
                } as React.CSSProperties}>
                  <div className="signal" />
                </div>
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
  .neuron-clipboard {
    --neuron-primary: #10b981;
    --neuron-secondary: #34d399;
    --neuron-glow: rgba(16, 185, 129, 0.5);
    --neuron-dark: #064e3b;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    width: 100%;
  }

  .neuron-container {
    position: relative;
    background: var(--neuron-dark);
    border-radius: 8px;
    overflow: hidden;
  }

  .neuron-effect {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .neurons {
    position: absolute;
    inset: 0;
  }

  .neuron {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    animation: pulse 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  .nucleus {
    position: absolute;
    inset: 20%;
    background: var(--neuron-primary);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--neuron-glow);
    animation: glow 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  .dendrites {
    position: absolute;
    inset: 0;
  }

  .dendrite {
    position: absolute;
    left: 50%;
    top: 50%;
    width: var(--length);
    height: 2px;
    background: var(--neuron-primary);
    transform-origin: left;
    transform: rotate(var(--angle));
    opacity: 0.5;
    animation: extend 2s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  @keyframes glow {
    0%, 100% {
      opacity: 0.8;
      box-shadow: 0 0 10px var(--neuron-glow);
    }
    50% {
      opacity: 1;
      box-shadow: 0 0 20px var(--neuron-glow);
    }
  }

  @keyframes extend {
    0%, 100% {
      transform: rotate(var(--angle)) scaleX(0.8);
      opacity: 0.5;
    }
    50% {
      transform: rotate(var(--angle)) scaleX(1.2);
      opacity: 0.8;
    }
  }

  .synapses {
    position: absolute;
    inset: 0;
  }

  .synapse {
    position: absolute;
    left: var(--start-x);
    top: var(--start-y);
    width: 2px;
    height: 2px;
    background: var(--neuron-secondary);
    transform-origin: center;
    animation: connect 3s linear infinite;
    animation-delay: var(--delay);
  }

  .signal {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--neuron-secondary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: transmit 3s linear infinite;
    animation-delay: var(--delay);
  }

  @keyframes connect {
    0% {
      transform: rotate(0deg);
      opacity: 0;
    }
    100% {
      transform: rotate(360deg);
      opacity: 0.5;
    }
  }

  @keyframes transmit {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    100% {
      transform: translate(
        calc((var(--end-x) - var(--start-x)) * 1),
        calc((var(--end-y) - var(--start-y)) * 1)
      ) scale(1);
      opacity: 0;
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.8em 1.2em;
    background: var(--neuron-dark);
    border: 2px solid var(--neuron-primary);
    border-radius: 8px;
    color: var(--neuron-primary);
    font-size: 0.9em;
    z-index: 1;
    transition: all 0.3s ease;
    text-shadow: 0 0 8px var(--neuron-glow);

    svg {
      width: 1.2em;
      height: 1.2em;
      fill: var(--neuron-primary);
      filter: drop-shadow(0 0 8px var(--neuron-glow));
      transition: all 0.3s ease;
    }
  }

  /* Hover Effects */
  .neuron-clipboard:hover .neuron-effect {
    opacity: 1;
  }

  .neuron-clipboard:hover .content {
    background: transparent;
    border-color: var(--neuron-secondary);
    color: var(--neuron-secondary);
  }

  .neuron-clipboard:hover svg {
    fill: var(--neuron-secondary);
    transform: rotate(360deg);
  }

  /* Active State */
  .neuron-clipboard:active .content {
    transform: scale(0.98);
  }
`;

export default Clipboard; 