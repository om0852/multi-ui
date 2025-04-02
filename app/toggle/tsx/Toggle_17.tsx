"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type ToggleProps = {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

interface StyledWrapperProps {
  $isChecked: boolean;
}

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
    <StyledWrapper $isChecked={isChecked}>
      <input
        type="checkbox"
        id="door-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="door-toggle" className="toggle-label">
        <div className="door-frame">
          <div className="door left-door">
            <div className="door-handle"></div>
          </div>
          <div className="door right-door">
            <div className="door-handle"></div>
          </div>
          <div className="status-text">
            {isChecked ? 'OPEN' : 'CLOSED'}
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  .toggle-input {
    display: none;
  }

  .toggle-label {
    position: relative;
    display: block;
    width: 100px;
    height: 50px;
    cursor: pointer;
  }

  .door-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    border-radius: 8px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    perspective: 1000px;
  }

  .door {
    position: absolute;
    width: 50%;
    height: 100%;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .left-door {
    left: 0;
    border-right: 1px solid #ddd;
    transform-origin: left;
    transform: ${props => props.$isChecked ? 'rotateY(-100deg)' : 'rotateY(0)'};
  }

  .right-door {
    right: 0;
    border-left: 1px solid #ddd;
    transform-origin: right;
    transform: ${props => props.$isChecked ? 'rotateY(100deg)' : 'rotateY(0)'};
  }

  .door-handle {
    position: absolute;
    width: 6px;
    height: 16px;
    background: #666;
    border-radius: 3px;
    top: 50%;
    transform: translateY(-50%);
  }

  .left-door .door-handle {
    right: 6px;
  }

  .right-door .door-handle {
    left: 6px;
  }

  .status-text {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    transition: color 0.3s ease;
    z-index: -1;
  }

  /* Hover Effects */
  .toggle-label:hover .door {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Active State */
  .toggle-label:active .left-door {
    transform: ${props => props.$isChecked 
      ? 'rotateY(-95deg)' 
      : 'rotateY(-5deg)'};
  }

  .toggle-label:active .right-door {
    transform: ${props => props.$isChecked 
      ? 'rotateY(95deg)' 
      : 'rotateY(5deg)'};
  }
`;

export default Toggle; 