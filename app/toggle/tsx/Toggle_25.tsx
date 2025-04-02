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
        id="pinball-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="pinball-toggle" className="toggle-label">
        <div className="pinball-machine">
          <div className="ball"></div>
          <div className="bumper left-bumper"></div>
          <div className="bumper right-bumper"></div>
          <div className="flipper left-flipper">
            <div className="flipper-base"></div>
          </div>
          <div className="flipper right-flipper">
            <div className="flipper-base"></div>
          </div>
          <div className="score-display">
            {isChecked ? '100' : '000'}
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
    height: 160px;
    cursor: pointer;
  }

  .pinball-machine {
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

  .ball {
    position: absolute;
    width: 16px;
    height: 16px;
    background: radial-gradient(circle at 30% 30%, #e74c3c, #c0392b);
    border-radius: 50%;
    top: ${props => props.$isChecked ? '70%' : '10%'};
    left: ${props => props.$isChecked ? '80%' : '20%'};
    transition: all 0.6s cubic-bezier(0.4, 2.08, 0.55, 0.44);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .bumper {
    position: absolute;
    width: 30px;
    height: 30px;
    background: radial-gradient(circle at 30% 30%, #f1c40f, #f39c12);
    border-radius: 50%;
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.3);
  }

  .left-bumper {
    top: 30%;
    left: 20%;
  }

  .right-bumper {
    top: 30%;
    right: 20%;
  }

  .flipper {
    position: absolute;
    bottom: 20px;
    width: 40px;
    height: 10px;
    transform-origin: center left;
  }

  .left-flipper {
    left: 10px;
    transform: rotate(${props => props.$isChecked ? '45deg' : '0deg'});
    transition: transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }

  .right-flipper {
    right: 10px;
    transform: rotate(${props => props.$isChecked ? '-45deg' : '0deg'}) scaleX(-1);
    transition: transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }

  .flipper-base {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #95a5a6, #7f8c8d);
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .score-display {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    padding: 5px 10px;
    border-radius: 5px;
    font-family: monospace;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.3),
      inset 0 0 10px rgba(255, 255, 255, 0.1);
    text-shadow: 0 0 5px ${props => props.$isChecked ? 'rgba(74, 222, 128, 0.5)' : 'rgba(248, 113, 113, 0.5)'};
  }

  /* Hover Effects */
  .toggle-label:hover .ball {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .toggle-label:hover .bumper {
    filter: brightness(1.1);
  }

  /* Active State */
  .toggle-label:active .ball {
    transform: scale(0.9);
  }

  /* Animation */
  @keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }

  .toggle-input:checked + .toggle-label .bumper {
    animation: bounce 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }

  @keyframes flash {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .toggle-input:checked + .toggle-label .score-display {
    animation: flash 0.5s ease infinite;
  }
`;

export default Toggle; 