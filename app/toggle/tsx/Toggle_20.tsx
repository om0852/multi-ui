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
        id="wave-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="wave-toggle" className="toggle-label">
        <div className="wave-container">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
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
    width: 100px;
    height: 50px;
    cursor: pointer;
  }

  .wave-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.2),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .wave {
    position: absolute;
    bottom: ${props => props.$isChecked ? '0%' : '-100%'};
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(45deg, #3498db, #2980b9);
    transition: bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .wave:nth-child(1) {
    opacity: 0.7;
    animation: wave 8s linear infinite;
  }

  .wave:nth-child(2) {
    opacity: 0.5;
    animation: wave 10s linear infinite;
  }

  .wave:nth-child(3) {
    opacity: 0.3;
    animation: wave 12s linear infinite;
  }

  .bubble {
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transition: all 0.4s ease;
    opacity: ${props => props.$isChecked ? '1' : '0'};
  }

  .bubble-1 {
    width: 10px;
    height: 10px;
    left: 20%;
    bottom: ${props => props.$isChecked ? '60%' : '0'};
    animation: bubble 3s ease-in-out infinite;
  }

  .bubble-2 {
    width: 8px;
    height: 8px;
    left: 50%;
    bottom: ${props => props.$isChecked ? '70%' : '0'};
    animation: bubble 4s ease-in-out infinite;
  }

  .bubble-3 {
    width: 12px;
    height: 12px;
    left: 80%;
    bottom: ${props => props.$isChecked ? '65%' : '0'};
    animation: bubble 5s ease-in-out infinite;
  }

  .status-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.$isChecked ? '#fff' : '#95a5a6'};
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    transition: color 0.3s ease;
    z-index: 2;
  }

  /* Animations */
  @keyframes wave {
    0% {
      transform: translateX(0) translateZ(0) scaleY(1);
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.8);
    }
    100% {
      transform: translateX(-50%) translateZ(0) scaleY(1);
    }
  }

  @keyframes bubble {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* Hover Effects */
  .toggle-label:hover .wave-container {
    filter: brightness(1.1);
  }

  .toggle-label:hover .status-text {
    transform: translate(-50%, -50%) scale(1.1);
  }

  /* Active State */
  .toggle-label:active .wave {
    filter: brightness(0.9);
  }

  .toggle-label:active .bubble {
    transform: scale(0.8);
  }
`;

export default Toggle; 