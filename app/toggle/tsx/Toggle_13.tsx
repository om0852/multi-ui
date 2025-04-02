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
        id="neon-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="neon-toggle" className="toggle-label">
        <span className="toggle-track" />
        <span className="toggle-button" />
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
    border-radius: 25px;
    background: #1a1a1a;
    cursor: pointer;
    overflow: hidden;
  }

  .toggle-track {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: #1a1a1a;
    transition: all 0.4s ease;
  }

  .toggle-button {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
    background: #333;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 10px #333;
  }

  .toggle-input:checked + .toggle-label .toggle-track {
    background: #000;
    box-shadow: 
      0 0 2px #0ff,
      0 0 10px #0ff,
      0 0 20px #0ff,
      0 0 40px #0ff,
      0 0 80px #0ff;
  }

  .toggle-input:checked + .toggle-label .toggle-button {
    left: calc(100% - 45px);
    background: #0ff;
    box-shadow: 
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 10px #0ff,
      0 0 20px #0ff,
      0 0 40px #0ff;
  }

  .toggle-label:hover .toggle-button {
    box-shadow: 
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px #333;
  }
`;

export default Toggle; 