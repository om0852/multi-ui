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
        id="safe-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="safe-toggle" className="toggle-label">
        <div className="safe">
          <div className="dial">
            <div className="numbers">
              {[...Array(10)].map((_, i) => (
                <div key={`num-${i}`} className="number">
                  {i}
                </div>
              ))}
            </div>
            <div className="dial-marker"></div>
            <div className="dial-grip">
              {[...Array(3)].map((_, i) => (
                <div key={`grip-${i}`} className="grip-mark"></div>
              ))}
            </div>
          </div>
          <div className="lock-mechanism">
            <div className="bolt"></div>
            <div className="bolt-housing"></div>
          </div>
          <div className="status-display">
            {isChecked ? 'UNLOCKED' : 'LOCKED'}
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

  .safe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #95a5a6, #7f8c8d);
    border-radius: 50%;
    padding: 5px;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .dial {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #2c3e50;
    transform: rotate(${props => props.$isChecked ? '360deg' : '0deg'});
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .numbers {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .number {
    position: absolute;
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: #ecf0f1;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center 40px;
  }

  ${[...Array(10)].map((_, i) => `
    .number:nth-child(${i + 1}) {
      transform: rotate(${36 * i}deg) translateY(-30px);
    }
  `).join('')}

  .dial-marker {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 2px;
    height: 8px;
    background: #e74c3c;
    transform: translateX(-50%);
  }

  .dial-grip {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
  }

  .grip-mark {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 16px;
    background: #95a5a6;
    transform-origin: center;
    border-radius: 2px;
  }

  ${[...Array(3)].map((_, i) => `
    .grip-mark:nth-child(${i + 1}) {
      transform: translate(-50%, -50%) rotate(${120 * i}deg);
    }
  `).join('')}

  .lock-mechanism {
    position: absolute;
    top: 50%;
    right: -5px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
  }

  .bolt {
    position: absolute;
    top: 50%;
    left: ${props => props.$isChecked ? '100%' : '0'};
    width: 10px;
    height: 6px;
    background: #e74c3c;
    transform: translateY(-50%);
    transition: left 0.3s ease;
  }

  .bolt-housing {
    position: absolute;
    top: 50%;
    right: 0;
    width: 12px;
    height: 10px;
    background: #7f8c8d;
    transform: translateY(-50%);
    border-radius: 2px;
  }

  .status-display {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    font-weight: bold;
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    text-shadow: 0 0 5px ${props => props.$isChecked ? 'rgba(74, 222, 128, 0.5)' : 'rgba(248, 113, 113, 0.5)'};
  }

  /* Hover Effects */
  .toggle-label:hover .dial {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }

  .toggle-label:hover .grip-mark {
    background: #bdc3c7;
  }

  /* Active State */
  .toggle-label:active .safe {
    transform: scale(0.95);
  }

  /* Animations */
  @keyframes click {
    0% { transform: rotate(${props => props.$isChecked ? '355deg' : '-5deg'}); }
    100% { transform: rotate(${props => props.$isChecked ? '360deg' : '0deg'}); }
  }

  .toggle-input:checked + .toggle-label .dial {
    animation: click 0.2s ease-out;
  }
`;

export default Toggle; 