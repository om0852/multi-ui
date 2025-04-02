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
        id="slot-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="slot-toggle" className="toggle-label">
        <div className="slot-machine">
          <div className="display">
            <div className="reels">
              {[...Array(3)].map((_, i) => (
                <div key={`reel-${i}`} className="reel">
                  <div className="symbol">{isChecked ? '7' : '?'}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lever-box">
            <div className="lever">
              <div className="handle">
                <div className="grip"></div>
              </div>
              <div className="base"></div>
            </div>
          </div>
          <div className="status-light"></div>
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
    height: 80px;
    cursor: pointer;
  }
  .slot-machine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #d4af37, #b8860b);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.2);
  }
  .status-light {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ isChecked }) => (isChecked ? '#4ade80' : '#f87171')};
    box-shadow: 0 0 5px ${({ isChecked }) => (isChecked ? '#4ade80' : '#f87171')};
  }
`;

export default Toggle;
