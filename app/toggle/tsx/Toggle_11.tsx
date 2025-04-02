"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type ToggleProps = {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

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
    <StyledWrapper>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="toggle"
          checked={isChecked}
          onChange={handleToggle}
          className="toggle-input"
        />
        <label htmlFor="toggle" className="toggle-label">
          <div className="toggle-button">
            <div className="toggle-button-inner" />
          </div>
          <div className="status-icons">
            <span className="on">ON</span>
            <span className="off">OFF</span>
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .toggle-input {
    display: none;
  }

  .toggle-label {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 60px;
    background: #e4e4e4;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  .toggle-button {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .toggle-button-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: #e4e4e4;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .status-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: bold;
    color: #888;
  }

  .on {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .off {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .toggle-input:checked + .toggle-label {
    background: #4CAF50;
  }

  .toggle-input:checked + .toggle-label .toggle-button {
    left: calc(100% - 55px);
  }

  .toggle-input:checked + .toggle-label .toggle-button-inner {
    background: #4CAF50;
  }

  .toggle-input:checked + .toggle-label .on {
    opacity: 1;
    color: white;
  }

  .toggle-input:checked + .toggle-label .off {
    opacity: 0;
  }

  /* Hover effects */
  .toggle-label:hover .toggle-button {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .toggle-input:checked + .toggle-label:hover {
    background: #45a049;
  }
`;

export default Toggle; 