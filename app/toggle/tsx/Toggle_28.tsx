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
        id="compass-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="compass-toggle" className="toggle-label">
        <div className="compass">
          <div className="compass-face">
            <div className="cardinal-points">
              <span className="north">N</span>
              <span className="east">E</span>
              <span className="south">S</span>
              <span className="west">W</span>
            </div>
            <div className="needle">
              <div className="needle-north"></div>
              <div className="needle-south"></div>
              <div className="needle-center"></div>
            </div>
            <div className="compass-ring"></div>
          </div>
          <div className="status">{isChecked ? 'NORTH' : 'SOUTH'}</div>
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
    width: 120px;
    height: 120px;
    cursor: pointer;
  }

  .compass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2b4c6f, #1a2f44);
    border-radius: 50%;
    padding: 10px;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .compass-face {
    position: relative;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    border-radius: 50%;
    overflow: hidden;
  }

  .cardinal-points {
    position: absolute;
    width: 100%;
    height: 100%;
    span {
      position: absolute;
      font-size: 14px;
      font-weight: bold;
      color: #2c3e50;
    }
    .north { top: 10px; left: 50%; transform: translateX(-50%); }
    .south { bottom: 10px; left: 50%; transform: translateX(-50%); }
    .east { right: 10px; top: 50%; transform: translateY(-50%); }
    .west { left: 10px; top: 50%; transform: translateY(-50%); }
  }

  .needle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 80px;
    transform: translate(-50%, -50%) rotate(${props => props.$isChecked ? '0deg' : '180deg'});
    transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  .needle-north {
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 35px solid #e74c3c;
    transform: translateX(-50%);
  }

  .needle-south {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 35px solid #3498db;
    transform: translateX(-50%);
  }

  .needle-center {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background: #2c3e50;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .compass-ring {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 2px solid #34495e;
    border-radius: 50%;
    &:before {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border: 1px solid #95a5a6;
      border-radius: 50%;
    }
  }

  .status {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.$isChecked ? '#e74c3c' : '#3498db'};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: color 0.3s ease;
  }

  /* Hover Effects */
  .toggle-label:hover .compass {
    box-shadow: 
      0 6px 12px rgba(0, 0, 0, 0.4),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  /* Active State */
  .toggle-label:active .needle {
    transition: transform 0.3s ease;
  }
`;

export default Toggle; 