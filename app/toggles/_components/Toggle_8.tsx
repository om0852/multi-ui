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
        id="panel-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="panel-toggle" className="toggle-label">
        <div className="toggle-track">
          <div className="panel panel-left">
            <span className="icon">✕</span>
          </div>
          <div className="panel panel-right">
            <span className="icon">✓</span>
          </div>
          <div className="slider">
            <div className="slider-content">
              <span className="text">{isChecked ? 'ON' : 'OFF'}</span>
            </div>
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
    height: 40px;
    cursor: pointer;
    perspective: 800px;
  }

  .toggle-track {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .panel {
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .panel-left {
    left: 0;
    background: #ef4444;
    transform-origin: left center;
    transform: ${props => props.$isChecked ? 'rotateY(-90deg)' : 'rotateY(0)'};
  }

  .panel-right {
    right: 0;
    background: #22c55e;
    transform-origin: right center;
    transform: ${props => props.$isChecked ? 'rotateY(0)' : 'rotateY(90deg)'};
  }

  .icon {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }

  .slider {
    position: absolute;
    width: 50%;
    height: 100%;
    background: white;
    border-radius: 20px;
    transition: transform 0.3s ease;
    transform: ${props => props.$isChecked ? 'translateX(100%)' : 'translateX(0)'};
    z-index: 1;
  }

  .slider-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.$isChecked ? '#22c55e' : '#ef4444'};
    transition: color 0.3s ease;
  }

  /* Hover Effects */
  .toggle-label:hover .toggle-track {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Active State */
  .toggle-label:active .slider {
    transform: ${props => props.$isChecked ? 'translateX(95%)' : 'translateX(5%)'};
  }

  /* Animation */
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .slider {
    animation: ${props => props.$isChecked ? 'none' : 'slideIn 0.3s ease'};
  }
`;

export default Toggle;
