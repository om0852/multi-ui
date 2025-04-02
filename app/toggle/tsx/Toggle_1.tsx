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
        id="minimal-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="minimal-toggle" className="toggle-label">
        <div className="toggle-track">
          <div className="gradient-overlay" />
        </div>
        <div className="toggle-thumb" />
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
    display: inline-block;
    width: 60px;
    height: 32px;
    cursor: pointer;
  }

  .toggle-track {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e0e0e0;
    border-radius: 16px;
    transition: background-color 0.3s ease;
    overflow: hidden;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1), 
                box-shadow 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  /* Hover Effect */
  .toggle-label:hover .toggle-thumb {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Checked State */
  .toggle-input:checked + .toggle-label .toggle-track .gradient-overlay {
    opacity: 1;
  }

  .toggle-input:checked + .toggle-label .toggle-thumb {
    transform: translateX(28px);
    box-shadow: 0 2px 4px rgba(99, 102, 241, 0.3);
  }

  /* Active State */
  .toggle-label:active .toggle-thumb {
    width: 32px;
  }

  .toggle-input:checked + .toggle-label:active .toggle-thumb {
    transform: translateX(24px);
  }
`;

export default Toggle;
