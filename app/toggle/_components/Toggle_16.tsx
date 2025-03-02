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
      <input
        type="checkbox"
        id="card-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="card-toggle" className="toggle-label">
        <div className="slider">
          <div className="card">
            <div className="symbol">{isChecked ? '✓' : '✕'}</div>
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
    height: 50px;
    background: #f0f0f0;
    border-radius: 25px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #ff5252 50%, #4CAF50 50%);
    transition: transform 0.3s ease;
    transform: translateX(-50%);
  }

  .card {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }

  .symbol {
    font-size: 20px;
    color: #666;
    transition: all 0.3s ease;
  }

  /* Checked State */
  .toggle-input:checked + .toggle-label .slider {
    transform: translateX(0);
  }

  .toggle-input:checked + .toggle-label .card {
    transform: translateX(50px);
  }

  .toggle-input:checked + .toggle-label .symbol {
    color: #4CAF50;
  }

  /* Hover Effects */
  .toggle-label:hover .card {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  /* Active State */
  .toggle-label:active .card {
    transform: scale(0.95);
  }

  .toggle-input:checked + .toggle-label .card {
    transform: translateX(50px);
  }
`;

export default Toggle; 