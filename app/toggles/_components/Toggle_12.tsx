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
        id="ios-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="ios-toggle" className="toggle-label">
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
    width: 80px;
    height: 44px;
    border-radius: 22px;
    background: #e9e9ea;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .toggle-button {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.4s cubic-bezier(0.17, 0.67, 0.43, 1.67);
  }

  .toggle-input:checked + .toggle-label {
    background: #34C759;
  }

  .toggle-input:checked + .toggle-label .toggle-button {
    left: calc(100% - 42px);
    transform: scale(1.05);
  }

  .toggle-label:active .toggle-button {
    width: 46px;
  }

  .toggle-input:checked + .toggle-label:active .toggle-button {
    left: calc(100% - 48px);
  }
`;

export default Toggle; 