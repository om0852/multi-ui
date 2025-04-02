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
    <StyledWrapper $isChecked={isChecked}>
      <input
        type="checkbox"
        id="periscope-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="periscope-toggle" className="toggle-label">
        <div className="submarine">
          <div className="periscope">
            <div className="scope-head">
              <div className="lens">
                <div className="radar-line"></div>
              </div>
            </div>
            <div className="scope-body"></div>
          </div>
          <div className="water">
            {[...Array(10)].map((_, i) => (
              <div key={`wave-${i}`} className="wave"></div>
            ))}
            {[...Array(5)].map((_, i) => (
              <div key={`bubble-${i}`} className="bubble"></div>
            ))}
          </div>
          <div className="control-panel">
            <div className="depth-gauge">
              {isChecked ? 'SURFACE' : 'SUBMERGED'}
            </div>
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
    width: 100px;
    height: 160px;
    cursor: pointer;
  }

  .submarine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .periscope {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
  }

  .scope-head {
    position: absolute;
    top: ${props => props.$isChecked ? '10px' : '80px'};
    left: 0;
    width: 30px;
    height: 20px;
    background: #95a5a6;
    border-radius: 4px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scope-body {
    position: absolute;
    top: ${props => props.$isChecked ? '30px' : '100px'};
    left: 13px;
    width: 4px;
    height: 80px;
    background: #7f8c8d;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .depth-gauge {
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export default Toggle;
