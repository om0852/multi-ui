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
        id="typewriter-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="typewriter-toggle" className="toggle-label">
        <div className="typewriter">
          <div className="key">
            <div className="key-top">
              <span className="letter">{isChecked ? 'ON' : 'OFF'}</span>
            </div>
            <div className="key-bottom"></div>
            <div className="key-shadow"></div>
          </div>
          <div className="mechanism">
            <div className="bar"></div>
            <div className="hammer"></div>
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
    height: 100px;
    cursor: pointer;
  }

  .typewriter {
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
    padding: 10px;
  }

  .key {
    position: relative;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    transform: translateY(${props => props.$isChecked ? '20px' : '0'});
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .key-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.2),
      inset 0 1px 2px rgba(255, 255, 255, 0.8);
    z-index: 2;
  }

  .letter {
    font-family: monospace;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    transition: transform 0.2s ease;
  }

  .key-bottom {
    position: absolute;
    top: 4px;
    left: 2px;
    right: 2px;
    height: 100%;
    background: #d1d1d1;
    border-radius: 8px;
    z-index: 1;
  }

  .key-shadow {
    position: absolute;
    bottom: -4px;
    left: 4px;
    right: 4px;
    height: 4px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    filter: blur(2px);
  }

  .mechanism {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 20px;
  }

  .bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #95a5a6;
    border-radius: 2px;
  }

  .hammer {
    position: absolute;
    bottom: 4px;
    left: ${props => props.$isChecked ? '70%' : '30%'};
    width: 4px;
    height: 16px;
    background: #7f8c8d;
    transform-origin: bottom center;
    transform: rotate(${props => props.$isChecked ? '15deg' : '-15deg'});
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Hover Effects */
  .toggle-label:hover .key-top {
    background: #ffffff;
  }

  .toggle-label:hover .letter {
    transform: scale(1.1);
  }

  /* Active State */
  .toggle-label:active .key {
    transform: translateY(${props => props.$isChecked ? '22px' : '2px'});
  }

  /* Animation */
  @keyframes type {
    0% { transform: translateY(0); }
    50% { transform: translateY(20px); }
    100% { transform: translateY(0); }
  }

  .toggle-input:checked + .toggle-label .key {
    animation: type 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default Toggle; 