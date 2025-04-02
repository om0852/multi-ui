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
        id="pendulum-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="pendulum-toggle" className="toggle-label">
        <div className="pendulum-frame">
          <div className="frame-top"></div>
          <div className="pendulum">
            <div className="string"></div>
            <div className="bob">
              <div className="bob-face">
                <div className="bob-detail"></div>
              </div>
            </div>
          </div>
          <div className="tick-marks">
            {[...Array(5)].map((_, i) => (
              <div key={`tick-${i}`} className="tick"></div>
            ))}
          </div>
          <div className="status">
            {isChecked ? 'TICK' : 'TOCK'}
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

  .pendulum-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .pendulum {
    position: absolute;
    top: 2px;
    left: 50%;
    transform-origin: top center;
    transform: rotate(${props => (props.isChecked ? '30deg' : '-30deg')});
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1.5);
  }

  .status {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: #ecf0f1;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

export default Toggle;
