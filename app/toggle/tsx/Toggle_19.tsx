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
        id="gear-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="gear-toggle" className="toggle-label">
        <div className="gear-box">
          <div className="gear main-gear">
            <div className="gear-center"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
          </div>
          <div className="gear secondary-gear">
            <div className="gear-center"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
          </div>
          <div className="power-indicator">
            <div className="power-text">{isChecked ? 'ON' : 'OFF'}</div>
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
    height: 60px;
    cursor: pointer;
  }

  .gear-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .gear {
    position: absolute;
    background: #4a4a4a;
    border-radius: 50%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .main-gear {
    width: 40px;
    height: 40px;
    top: 10px;
    left: 15px;
    transform: rotate(${props => props.$isChecked ? '180deg' : '0deg'});
  }

  .secondary-gear {
    width: 30px;
    height: 30px;
    top: 20px;
    left: 45px;
    transform: rotate(${props => props.$isChecked ? '-180deg' : '0deg'});
  }

  .gear-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: #2d2d2d;
    border-radius: 50%;
    border: 2px solid #666;
  }

  .gear-tooth {
    position: absolute;
    width: 25%;
    height: 8px;
    background: #4a4a4a;
    left: 37.5%;
    transform-origin: 50% 50%;
  }

  .gear-tooth:nth-child(2) { transform: rotate(45deg); }
  .gear-tooth:nth-child(3) { transform: rotate(90deg); }
  .gear-tooth:nth-child(4) { transform: rotate(135deg); }
  .gear-tooth:nth-child(5) { transform: rotate(180deg); }

  .power-indicator {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 25px;
    background: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }

  .power-text {
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  /* Hover Effects */
  .toggle-label:hover .gear {
    filter: brightness(1.2);
  }

  .toggle-label:hover .power-indicator {
    filter: brightness(1.1);
  }

  /* Active State */
  .toggle-label:active .main-gear {
    transform: rotate(${props => props.$isChecked ? '175deg' : '5deg'});
  }

  .toggle-label:active .secondary-gear {
    transform: rotate(${props => props.$isChecked ? '-175deg' : '-5deg'});
  }

  /* Animation */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .toggle-input:checked + .toggle-label .main-gear {
    animation: spin 4s linear infinite;
  }

  .toggle-input:checked + .toggle-label .secondary-gear {
    animation: spin 4s linear infinite reverse;
  }
`;

export default Toggle; 