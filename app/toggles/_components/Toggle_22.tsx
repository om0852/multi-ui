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
        id="clock-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="clock-toggle" className="toggle-label">
        <div className="clock">
          <div className="clock-face">
            <div className="hand hour-hand"></div>
            <div className="hand minute-hand"></div>
            <div className="center-dot"></div>
            <div className="time-marker marker-12">12</div>
            <div className="time-marker marker-3">3</div>
            <div className="time-marker marker-6">6</div>
            <div className="time-marker marker-9">9</div>
          </div>
          <div className="status-text">{isChecked ? 'ON' : 'OFF'}</div>
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

  .clock {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    border-radius: 50%;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.2),
      inset 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 5px;
  }

  .clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  .hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom center;
    background: #333;
    border-radius: 2px;
    transition: transform 0.6s cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }

  .hour-hand {
    width: 4px;
    height: 25%;
    transform: translateX(-50%) rotate(${props => props.$isChecked ? '360deg' : '0deg'});
  }

  .minute-hand {
    width: 3px;
    height: 35%;
    background: #666;
    transform: translateX(-50%) rotate(${props => props.$isChecked ? '540deg' : '0deg'});
  }

  .center-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background: #333;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .time-marker {
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    color: #666;
  }

  .marker-12 { top: 5px; left: 50%; transform: translateX(-50%); }
  .marker-3 { right: 5px; top: 50%; transform: translateY(-50%); }
  .marker-6 { bottom: 5px; left: 50%; transform: translateX(-50%); }
  .marker-9 { left: 5px; top: 50%; transform: translateY(-50%); }

  .status-text {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    transition: color 0.3s ease;
  }

  /* Hover Effects */
  .toggle-label:hover .clock {
    box-shadow: 
      0 6px 12px rgba(0, 0, 0, 0.2),
      inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Active State */
  .toggle-label:active .clock {
    transform: scale(0.95);
  }

  /* Animation */
  @keyframes tick {
    0%, 100% { transform: translateX(-50%) rotate(${props => props.$isChecked ? '360deg' : '0deg'}); }
    50% { transform: translateX(-50%) rotate(${props => props.$isChecked ? '365deg' : '5deg'}); }
  }

  .toggle-input:checked + .toggle-label .hour-hand {
    animation: tick 1s ease-in-out infinite;
  }
`;

export default Toggle; 