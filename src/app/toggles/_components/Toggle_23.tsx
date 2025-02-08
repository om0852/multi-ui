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
        id="lock-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="lock-toggle" className="toggle-label">
        <div className="lock-container">
          <div className="dial">
            <div className="dial-ring">
              <div className="number">0</div>
              <div className="number">1</div>
              <div className="number">2</div>
              <div className="number">3</div>
              <div className="number">4</div>
              <div className="number">5</div>
              <div className="number">6</div>
              <div className="number">7</div>
              <div className="number">8</div>
              <div className="number">9</div>
            </div>
            <div className="dial-center"></div>
            <div className="dial-marker"></div>
          </div>
          <div className="lock-status">
            <div className="status-icon"></div>
            <div className="status-text">{isChecked ? 'UNLOCKED' : 'LOCKED'}</div>
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

  .lock-container {
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

  .dial {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }

  .dial-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #95a5a6;
    transform: rotate(${props => props.$isChecked ? '360deg' : '0deg'});
    transition: transform 0.6s cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }

  .number {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 50%;
    margin-left: -10px;
    transform-origin: 50% 40px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
  }

  ${[...Array(10)].map((_, i) => `
    .number:nth-child(${i + 1}) {
      transform: rotate(${36 * i}deg);
    }
  `).join('')}

  .dial-center {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    background: #7f8c8d;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .dial-marker {
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 12px;
    background: #e74c3c;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  .lock-status {
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .status-icon {
    width: 12px;
    height: 12px;
    margin: 0 auto 4px;
    background: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    border-radius: 50%;
    transition: background-color 0.3s ease;
    box-shadow: 0 0 8px ${props => props.$isChecked ? 'rgba(74, 222, 128, 0.5)' : 'rgba(248, 113, 113, 0.5)'};
  }

  .status-text {
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  /* Hover Effects */
  .toggle-label:hover .dial-ring {
    filter: brightness(1.1);
  }

  .toggle-label:hover .dial-center {
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  /* Active State */
  .toggle-label:active .dial-ring {
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  /* Animation */
  @keyframes spin {
    0% { transform: rotate(${props => props.$isChecked ? '0deg' : '360deg'}); }
    100% { transform: rotate(${props => props.$isChecked ? '360deg' : '0deg'}); }
  }

  .toggle-input:checked + .toggle-label .dial-ring {
    animation: spin 0.6s cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
`;

export default Toggle; 