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
        id="radio-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="radio-toggle" className="toggle-label">
        <div className="radio">
          <div className="tuning-dial">
            <div className="dial-marker"></div>
            <div className="frequency-scale">
              {[...Array(7)].map((_, i) => (
                <div key={`mark-${i}`} className="scale-mark"></div>
              ))}
            </div>
          </div>
          <div className="display">
            <div className="frequency">{isChecked ? '98.5' : '87.9'}</div>
            <div className="unit">MHz</div>
          </div>
          <div className="signal-strength">
            {[...Array(5)].map((_, i) => (
              <div key={`bar-${i}`} className="strength-bar"></div>
            ))}
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
    height: 60px;
    cursor: pointer;
  }

  .radio {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #8b4513, #654321);
    border-radius: 10px;
    overflow: hidden;
    padding: 5px;
  }

  .tuning-dial {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    background: #d4af37;
    border-radius: 50%;
    transform: rotate(${props => (props.isChecked ? '180deg' : '0deg')});
    transition: transform 0.6s ease;
  }

  .dial-marker {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 16px;
    background: #333;
    transform: translate(-50%, -50%);
  }

  .frequency {
    color: ${props => (props.isChecked ? '#4ade80' : '#f87171')};
  }

  .strength-bar {
    background: ${props => (props.isChecked ? '#4ade80' : '#95a5a6')};
  }
`;

export default Toggle;
