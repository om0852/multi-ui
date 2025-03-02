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
        <div className="pendulum-frame">
          <div className="frame-top"></div>
          <div className="pendulum">
            <div className="string"></div>
            <div className="bob">
              <div className="bob-face">
                <div className="bob-detail"></div>
              </div>
            </div>
          </div>
          <div className="tick-marks">
            {[...Array(5)].map((_, i) => (
              <div key={`tick-${i}`} className="tick"></div>
            ))}
          </div>
          <div className="status">
            {isChecked ? 'TICK' : 'TOCK'}
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

  .pendulum-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .frame-top {
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 4px;
    background: #c0392b;
    border-radius: 2px;
  }

  .pendulum {
    position: absolute;
    top: 2px;
    left: 50%;
    transform-origin: top center;
    transform: rotate(${props => props.$isChecked ? '30deg' : '-30deg'});
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1.5);
  }

  .string {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 35px;
    background: #bdc3c7;
    transform: translateX(-50%);
  }

  .bob {
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translateX(-50%);
  }

  .bob-face {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #e74c3c;
    border-radius: 50%;
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.2);
  }

  .bob-detail {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  .tick-marks {
    position: absolute;
    bottom: 15px;
    left: 10%;
    width: 80%;
    height: 2px;
    display: flex;
    justify-content: space-between;
  }

  .tick {
    width: 2px;
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 1px;
  }

  .status {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: #ecf0f1;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  /* Hover Effects */
  .toggle-label:hover .pendulum {
    animation: ${props => props.$isChecked ? 'swingRight' : 'swingLeft'} 1s ease-in-out;
  }

  /* Active State */
  .toggle-label:active .pendulum-frame {
    transform: scale(0.95);
  }

  @keyframes swingRight {
    0% { transform: rotate(-30deg); }
    50% { transform: rotate(35deg); }
    100% { transform: rotate(30deg); }
  }

  @keyframes swingLeft {
    0% { transform: rotate(30deg); }
    50% { transform: rotate(-35deg); }
    100% { transform: rotate(-30deg); }
  }
`;

export default Toggle; 