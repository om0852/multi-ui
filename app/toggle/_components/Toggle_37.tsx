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
        id="microscope-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="microscope-toggle" className="toggle-label">
        <div className="microscope">
          <div className="eyepiece">
            <div className="lens-ring"></div>
          </div>
          <div className="tube">
            <div className="focus-knob left"></div>
            <div className="focus-knob right"></div>
          </div>
          <div className="stage">
            <div className="slide">
              <div className="specimen">
                <div className="cell cell-1"></div>
                <div className="cell cell-2"></div>
                <div className="cell cell-3"></div>
                <div className="cell cell-4"></div>
              </div>
            </div>
          </div>
          <div className="base">
            <div className="status">
              {isChecked ? 'DIVIDING' : 'DORMANT'}
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
    height: 160px;
    cursor: pointer;
  }

  .microscope {
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

  .eyepiece {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 20px;
    background: #95a5a6;
    border-radius: 5px;
  }

  .lens-ring {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #7f8c8d;
    border-radius: 50%;
    border: 2px solid #6c7a7d;
  }

  .tube {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 60px;
    background: #95a5a6;
  }

  .focus-knob {
    position: absolute;
    width: 16px;
    height: 16px;
    background: #7f8c8d;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%) rotate(${props => props.$isChecked ? '180deg' : '0deg'});
    transition: transform 0.6s ease;
  }

  .left { left: -16px; }
  .right { right: -16px; }

  .stage {
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 30px;
    background: #7f8c8d;
    border-radius: 5px;
  }

  .slide {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    overflow: hidden;
  }

  .specimen {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .cell {
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    border-radius: 50%;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cell-1 {
    top: 5px;
    left: ${props => props.$isChecked ? '5px' : '15px'};
  }

  .cell-2 {
    top: 5px;
    left: ${props => props.$isChecked ? '25px' : '15px'};
  }

  .cell-3 {
    top: ${props => props.$isChecked ? '5px' : '5px'};
    left: ${props => props.$isChecked ? '15px' : '15px'};
    opacity: ${props => props.$isChecked ? '1' : '0'};
  }

  .cell-4 {
    top: ${props => props.$isChecked ? '5px' : '5px'};
    left: ${props => props.$isChecked ? '15px' : '15px'};
    opacity: ${props => props.$isChecked ? '1' : '0'};
    transform: scale(${props => props.$isChecked ? '1' : '0'});
  }

  .base {
    position: absolute;
    bottom: 10px;
    left: 20px;
    right: 20px;
    height: 20px;
    background: #7f8c8d;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .status {
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  /* Hover Effects */
  .toggle-label:hover .cell {
    box-shadow: 0 0 10px ${props => props.$isChecked ? 'rgba(74, 222, 128, 0.5)' : 'rgba(248, 113, 113, 0.5)'};
  }

  .toggle-label:hover .focus-knob {
    background: #95a5a6;
  }

  /* Active State */
  .toggle-label:active .microscope {
    transform: scale(0.98);
  }

  /* Animations */
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .toggle-input:checked + .toggle-label .cell {
    animation: pulse 2s infinite;
  }

  @keyframes glow {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
  }

  .toggle-input:checked + .toggle-label .specimen {
    animation: glow 2s infinite;
  }
`;

export default Toggle; 