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
        id="traffic-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="traffic-toggle" className="toggle-label">
        <div className="traffic-light">
          <div className="housing">
            <div className="signal red"></div>
            <div className="signal yellow"></div>
            <div className="signal green"></div>
            <div className="visor-set">
              {[...Array(3)].map((_, i) => (
                <div key={`visor-${i}`} className="visor"></div>
              ))}
            </div>
          </div>
          <div className="mount">
            <div className="pole"></div>
            <div className="bracket"></div>
          </div>
          <div className="status">
            {isChecked ? 'GO' : 'STOP'}
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
    width: 60px;
    height: 120px;
    cursor: pointer;
  }

  .traffic-light {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .housing {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: #2c3e50;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .signal {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #1a1a1a;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .red {
    background: ${({ isChecked }) => (!isChecked ? '#ff0000' : '#4a0000')};
  }

  .green {
    background: ${({ isChecked }) => (isChecked ? '#00ff00' : '#004a00')};
  }

  .status {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: bold;
    color: ${({ isChecked }) => (isChecked ? '#4ade80' : '#f87171')};
    text-shadow: 0 0 5px ${({ isChecked }) => (isChecked ? 'rgba(74, 222, 128, 0.5)' : 'rgba(248, 113, 113, 0.5)')};
  }
`;

export default Toggle;
