"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Toggle = ({ defaultChecked = false, onChange }) => {
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
    <StyledWrapper isChecked={isChecked}>
      <input
        type="checkbox"
        id="chemistry-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="chemistry-toggle" className="toggle-label">
        <div className="lab-setup">
          <div className="test-tube tube-1">
            <div className="liquid">
              <div className="bubble bubble-1"></div>
              <div className="bubble bubble-2"></div>
              <div className="bubble bubble-3"></div>
            </div>
          </div>
          <div className="test-tube tube-2">
            <div className="liquid">
              <div className="bubble bubble-1"></div>
              <div className="bubble bubble-2"></div>
              <div className="bubble bubble-3"></div>
            </div>
          </div>
          <div className="vapor"></div>
          <div className="formula">H₂O → H₂ + O₂</div>
        </div>
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
    width: 120px;
    height: 60px;
    cursor: pointer;
  }

  .lab-setup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1);
    padding: 5px;
  }

  .test-tube {
    position: absolute;
    width: 20px;
    height: 40px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    bottom: 10px;
  }

  .tube-1 {
    left: 30px;
    transform: rotate(-10deg);
  }

  .tube-2 {
    right: 30px;
    transform: rotate(10deg);
  }

  .liquid {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${({ isChecked }) => (isChecked ? '80%' : '30%')};
    background: ${({ isChecked }) => (isChecked ? '#4ade80' : '#f87171')};
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .bubble {
    position: absolute;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    opacity: ${({ isChecked }) => (isChecked ? '1' : '0')};
    animation: rise 2s infinite ease-in;
  }

  .bubble-1 {
    width: 6px;
    height: 6px;
    left: 20%;
    animation-delay: 0s;
  }

  .bubble-2 {
    width: 4px;
    height: 4px;
    left: 50%;
    animation-delay: 0.5s;
  }

  .bubble-3 {
    width: 5px;
    height: 5px;
    left: 80%;
    animation-delay: 1s;
  }

  .formula {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: ${({ isChecked }) => (isChecked ? '#4ade80' : '#f87171')};
    font-size: 10px;
    font-family: monospace;
    transition: color 0.3s ease;
  }

  @keyframes rise {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    50% {
      opacity: ${({ isChecked }) => (isChecked ? '1' : '0')};
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;

export default Toggle;
