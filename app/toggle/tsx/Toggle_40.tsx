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
        id="game-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="game-toggle" className="toggle-label">
        <div className="console">
          <div className="screen">
            <div className="pixel-art">
              <div className="character">
                {isChecked ? '😊' : '😴'}
              </div>
              <div className="platform"></div>
            </div>
            <div className="scan-line"></div>
          </div>
          <div className="controls">
            <div className="d-pad">
              <div className="d-button up"></div>
              <div className="d-button right"></div>
              <div className="d-button down"></div>
              <div className="d-button left"></div>
            </div>
            <div className="action-buttons">
              <div className="action-button a">A</div>
              <div className="action-button b">B</div>
            </div>
          </div>
          <div className="power-light"></div>
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
    height: 180px;
    cursor: pointer;
  }

  .console {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #8b8b8b, #6b6b6b);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .screen {
    position: relative;
    width: 100%;
    height: 90px;
    background: #9ead86;
    border-radius: 4px;
    overflow: hidden;
    border: 4px solid #454545;
  }

  .pixel-art {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .character {
    font-size: 24px;
    transform: ${props => props.$isChecked ? 'translateY(-10px)' : 'translateY(0)'};
    transition: transform 0.3s ease;
  }

  .platform {
    position: absolute;
    bottom: 20px;
    width: 40px;
    height: 4px;
    background: #1a1a1a;
  }

  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 50%
    );
    animation: scan 8s linear infinite;
    pointer-events: none;
  }

  .controls {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .d-pad {
    position: relative;
    width: 60px;
    height: 60px;
  }

  .d-button {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #2a2a2a;
    border-radius: 2px;
  }

  .up { top: 0; left: 20px; }
  .right { top: 20px; right: 0; }
  .down { bottom: 0; left: 20px; }
  .left { top: 20px; left: 0; }

  .action-buttons {
    display: flex;
    gap: 8px;
  }

  .action-button {
    width: 20px;
    height: 20px;
    background: ${props => props.$isChecked ? '#e74c3c' : '#c0392b'};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 10px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .power-light {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    box-shadow: 0 0 5px ${props => props.$isChecked ? '#4ade80' : '#f87171'};
  }

  /* Animations */
  @keyframes scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }

  @keyframes jump {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  /* Hover Effects */
  .toggle-label:hover .character {
    animation: ${props => props.$isChecked ? 'jump 0.6s ease infinite' : 'none'};
  }

  .toggle-label:hover .action-button {
    filter: brightness(1.1);
  }

  /* Active State */
  .toggle-label:active .console {
    transform: scale(0.98);
  }

  .toggle-label:active .d-button:active {
    background: #1a1a1a;
  }

  .toggle-label:active .action-button:active {
    transform: scale(0.9);
  }
`;

export default Toggle; 