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
        id="safe-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="safe-toggle" className="toggle-label">
        <div className="safe">
          <div className="dial">
            <div className="numbers">
              {[...Array(10)].map((_, i) => (
                <div key={`num-${i}`} className="number">{i}</div>
              ))}
            </div>
            <div className="dial-marker"></div>
            <div className="dial-grip">
              {[...Array(3)].map((_, i) => (
                <div key={`grip-${i}`} className="grip-mark"></div>
              ))}
            </div>
          </div>
          <div className="lock-mechanism">
            <div className="bolt"></div>
            <div className="bolt-housing"></div>
          </div>
          <div className="status-display">{isChecked ? 'UNLOCKED' : 'LOCKED'}</div>
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
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
  .safe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #95a5a6, #7f8c8d);
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }
  .dial {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #2c3e50;
    transform: rotate(${props => (props.isChecked ? '360deg' : '0deg')});
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .status-display {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    font-weight: bold;
    color: ${props => (props.isChecked ? '#4ade80' : '#f87171')};
  }
`;

export default Toggle;
