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
        id="toggle-3d"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="toggle-3d" className="toggle-label">
        <div className="toggle-button">
          <div className="button-face">
            <div className="button-text">
              {isChecked ? 'ON' : 'OFF'}
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
    height: 50px;
    transform-style: preserve-3d;
    perspective: 400px;
    cursor: pointer;
  }

  .toggle-button {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 25px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: 
      5px 5px 10px #d1d1d1,
      -5px -5px 10px #ffffff;
  }

  .button-face {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
    color: #666;
    transform: translateZ(2px);
    transition: all 0.5s ease;
  }

  .button-text {
    transform: translateZ(5px);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  }

  .toggle-input:checked + .toggle-label .toggle-button {
    transform: rotateX(180deg);
  }

  .toggle-input:checked + .toggle-label .button-face {
    background: linear-gradient(145deg, #4CAF50, #45a049);
    color: white;
    transform: translateZ(2px) rotateX(180deg);
  }

  /* Hover Effects */
  .toggle-label:hover .toggle-button {
    box-shadow: 
      8px 8px 15px #d1d1d1,
      -8px -8px 15px #ffffff;
  }

  .toggle-input:checked + .toggle-label:hover .toggle-button {
    box-shadow: 
      8px 8px 15px #3d8c40,
      -8px -8px 15px #5ac85e;
  }

  /* Active State */
  .toggle-label:active .toggle-button {
    transform: rotateX(10deg);
  }

  .toggle-input:checked + .toggle-label:active .toggle-button {
    transform: rotateX(170deg);
  }
`;

export default Toggle; 