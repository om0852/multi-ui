"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Toggle = ({ defaultChecked = false, onChange }) => {
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
    <StyledWrapper isChecked={isChecked}>
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
            <div className="text">{isChecked ? 'PLAYING' : 'MUTED'}</div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
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
  }

  .frequency-display {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 80px;
    margin-bottom: 15px;
  }

  .freq-bar {
    width: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
  }

  .bar-fill {
    width: 100%;
    height: ${({ isChecked }) => (isChecked ? '100%' : '10%')};
    background: #4ade80;
    transition: height 0.5s ease;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .volume-knob {
    width: 40px;
    height: 40px;
    background: #7f8c8d;
    border-radius: 50%;
    border: 2px solid #95a5a6;
  }

  .level-meter {
    width: 40px;
    height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }

  .level-fill {
    width: ${({ isChecked }) => (isChecked ? '100%' : '0%')};
    height: 100%;
    background: linear-gradient(90deg, #4ade80, #f87171);
    transition: width 0.3s ease;
  }

  .status-panel {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .power-led {
    width: 8px;
    height: 8px;
    background: ${({ isChecked }) => (isChecked ? '#4ade80' : '#f87171')};
    border-radius: 50%;
  }

  .text {
    color: #ecf0f1;
    font-size: 10px;
    font-weight: bold;
  }
`;

export default Toggle;
