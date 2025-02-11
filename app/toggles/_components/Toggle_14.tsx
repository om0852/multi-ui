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
        id="material-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="material-toggle" className="toggle-label">
        <div className="toggle-track">
          <div className="toggle-button">
            <div className="ripple" />
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
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 16px;
  }

  .toggle-track {
    width: 36px;
    height: 14px;
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.38);
    transition: background-color 0.3s ease;
    margin: 12px 0;
  }

  .toggle-button {
    position: absolute;
    top: 4px;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #fafafa;
    border-radius: 50%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  .ripple {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #9e9e9e;
    opacity: 0;
    transform: translate(-25%, -25%) scale(0);
    transition: all 0.3s ease;
  }

  .toggle-input:checked + .toggle-label .toggle-track {
    background-color: rgba(98, 0, 238, 0.38);
  }

  .toggle-input:checked + .toggle-label .toggle-button {
    background-color: #6200ee;
    transform: translateX(16px);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

  .toggle-label:active .ripple {
    opacity: 0.12;
    transform: translate(-25%, -25%) scale(1);
  }

  .toggle-input:checked + .toggle-label:active .ripple {
    background-color: #6200ee;
  }

  /* Focus styles */
  .toggle-input:focus + .toggle-label .toggle-button {
    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1);
  }

  .toggle-input:checked:focus + .toggle-label .toggle-button {
    box-shadow: 0 0 0 8px rgba(98, 0, 238, 0.1);
  }
`;

export default Toggle; 