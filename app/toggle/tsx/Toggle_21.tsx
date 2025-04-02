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
        id="pendulum-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="pendulum-toggle" className="toggle-label">
        <div className="pendulum-box">
          <div className="pendulum">
            <div className="string"></div>
            <div className="weight">
              <div className="weight-shine"></div>
            </div>
          </div>
          <div className="scale-marks">
            <div className="mark left">OFF</div>
            <div className="mark center">|</div>
            <div className="mark right">ON</div>
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
    width: 120px;
    height: 100px;
    cursor: pointer;
  }

  .pendulum-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .pendulum {
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 80px;
    transform-origin: top center;
    transform: rotate(${props => props.$isChecked ? '45deg' : '-45deg'});
    transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1.6);
  }

  .string {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #95a5a6;
  }

  .weight {
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 20px;
    height: 20px;
    background: linear-gradient(145deg, #e74c3c, #c0392b);
    border-radius: 50%;
    transform: translateX(-50%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .weight-shine {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
  }

  .scale-marks {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    color: #95a5a6;
    font-size: 12px;
    font-weight: bold;
  }

  .mark {
    transition: color 0.3s ease;
  }

  .mark.left {
    color: ${props => props.$isChecked ? '#95a5a6' : '#e74c3c'};
  }

  .mark.right {
    color: ${props => props.$isChecked ? '#4ade80' : '#95a5a6'};
  }

  /* Hover Effects */
  .toggle-label:hover .weight {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  /* Active State */
  .toggle-label:active .pendulum {
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  /* Animation */
  @keyframes swing {
    0%, 100% { transform: rotate(${props => props.$isChecked ? '43deg' : '-43deg'}); }
    50% { transform: rotate(${props => props.$isChecked ? '47deg' : '-47deg'}); }
  }

  .toggle-input:checked + .toggle-label .pendulum,
  .toggle-input:not(:checked) + .toggle-label .pendulum {
    animation: swing 2s ease-in-out infinite;
  }
`;

export default Toggle; 