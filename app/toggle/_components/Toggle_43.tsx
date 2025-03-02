"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type ToggleProps = {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

interface StyledWrapperProps {
  $isChecked: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ defaultChecked = false, onChange }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  if (!mounted) return null;

  return (
    <StyledWrapper $isChecked={isChecked}>
      <input
        type="checkbox"
        id="equalizer-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="equalizer-toggle" className="toggle-label">
        <div className="equalizer">
          <div className="frequency-display">
            {[...Array(10)].map((_, i) => (
              <div key={`bar-${i}`} className="freq-bar">
                <div className="bar-fill"></div>
              </div>
            ))}
          </div>
          <div className="controls">
            <div className="volume-knob">
              <div className="knob-marker"></div>
            </div>
            <div className="level-meter">
              <div className="level-fill"></div>
            </div>
          </div>
          <div className="status-panel">
            <div className="power-led"></div>
            <div className="text">
              {isChecked ? 'PLAYING' : 'MUTED'}
            </div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  .toggle-input {
    display: none;
  }

  .toggle-label {
    position: relative;
    display: block;
    width: 120px;
    height: 160px;
    cursor: pointer;
  }

  .equalizer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .frequency-display {
    position: relative;
    width: 100%;
    height: 80px;
    background: #1a1a1a;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 15px;
  }

  .freq-bar {
    width: 8px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
  }

  .bar-fill {
    width: 100%;
    height: ${props => props.$isChecked ? '100%' : '10%'};
    background: #4ade80;
    transform-origin: bottom;
    animation: ${props => props.$isChecked ? 'equalize 1.5s ease-in-out infinite' : 'none'};
  }

  ${[...Array(10)].map((_, i) => `
    .freq-bar:nth-child(${i + 1}) .bar-fill {
      animation-delay: ${i * 0.1}s;
      height: ${(props: StyledWrapperProps) => props.$isChecked ? `${30 + Math.random() * 70}%` : '10%'};
    }
  `).join('')}

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .volume-knob {
    position: relative;
    width: 40px;
    height: 40px;
    background: #7f8c8d;
    border-radius: 50%;
    border: 2px solid #95a5a6;
  }

  .knob-marker {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 2px;
    background: #e74c3c;
    transform: translate(-50%, -50%) rotate(${props => props.$isChecked ? '270deg' : '0deg'});
    transition: transform 0.6s ease;
  }

  .level-meter {
    width: 40px;
    height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
  }

  .level-fill {
    width: ${props => props.$isChecked ? '100%' : '0%'};
    height: 100%;
    background: linear-gradient(90deg, #4ade80, #f87171);
    transition: width 0.3s ease;
  }

  .status-panel {
    position: relative;
    width: 100%;
    height: 30px;
    background: #2c3e50;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 8px;
  }

  .power-led {
    width: 8px;
    height: 8px;
    background: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    border-radius: 50%;
    box-shadow: 0 0 5px ${props => props.$isChecked ? '#4ade80' : '#f87171'};
  }

  .text {
    color: #ecf0f1;
    font-size: 10px;
    font-weight: bold;
  }

  /* Animations */
  @keyframes equalize {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.5); }
  }

  /* Hover Effects */
  .toggle-label:hover .volume-knob {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }

  .toggle-label:hover .bar-fill {
    filter: brightness(1.2);
  }

  /* Active State */
  .toggle-label:active .equalizer {
    transform: scale(0.98);
  }

  .toggle-label:active .volume-knob {
    transform: rotate(${props => props.$isChecked ? '-30deg' : '30deg'});
  }

  ${[...Array(6)].map((_, i) => `
    .blade:nth-child(${i + 1}) {
      transform: 
        rotate(${60 * i}deg)
        ${(props: StyledWrapperProps) => props.$isChecked ? 
          'translate(-50%, -50%) rotate(60deg)' : 
          'translate(0, 0)'};
    }
  `).join('')}
`;

export default Toggle; 