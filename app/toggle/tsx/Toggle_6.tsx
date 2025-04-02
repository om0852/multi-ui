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
        id="morph-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="morph-toggle" className="toggle-label">
        <div className="toggle-track">
          <div className="shape">
            <svg viewBox="0 0 100 100" className="shape-svg">
              <circle cx="50" cy="50" r="40" className="shape-circle" />
              <rect x="10" y="10" width="80" height="80" className="shape-square" />
            </svg>
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
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  .toggle-track {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    border-radius: ${props => props.$isChecked ? '4px' : '50%'};
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      5px 5px 10px #d1d1d1,
      -5px -5px 10px #ffffff;
  }

  .shape {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
  }

  .shape-svg {
    width: 100%;
    height: 100%;
  }

  .shape-circle,
  .shape-square {
    fill: none;
    stroke: #6366f1;
    stroke-width: 4;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .shape-circle {
    opacity: ${props => props.$isChecked ? 0 : 1};
    transform-origin: center;
    transform: scale(${props => props.$isChecked ? 0 : 1});
  }

  .shape-square {
    opacity: ${props => props.$isChecked ? 1 : 0};
    transform-origin: center;
    transform: rotate(${props => props.$isChecked ? '0deg' : '45deg'}) 
               scale(${props => props.$isChecked ? 1 : 0});
  }

  /* Hover Effects */
  .toggle-label:hover .toggle-track {
    box-shadow: 
      8px 8px 15px #d1d1d1,
      -8px -8px 15px #ffffff;
  }

  .toggle-label:hover .shape-circle,
  .toggle-label:hover .shape-square {
    stroke: #4f46e5;
  }

  /* Active State */
  .toggle-label:active .toggle-track {
    box-shadow: 
      3px 3px 6px #d1d1d1,
      -3px -3px 6px #ffffff;
  }

  /* Animation */
  @keyframes morphAnimation {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(0.5); }
    100% { transform: rotate(360deg) scale(1); }
  }

  .toggle-input:checked + .toggle-label .shape-square {
    animation: morphAnimation 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default Toggle;
