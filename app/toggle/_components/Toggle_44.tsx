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
        id="radio-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="radio-toggle" className="toggle-label">
        <div className="radio">
          <div className="tuning-dial">
            <div className="dial-marker"></div>
            <div className="frequency-scale">
              {[...Array(7)].map((_, i) => (
                <div key={`mark-${i}`} className="scale-mark"></div>
              ))}
            </div>
          </div>
          <div className="display">
            <div className="frequency">{isChecked ? '98.5' : '87.9'}</div>
            <div className="unit">MHz</div>
          </div>
          <div className="signal-strength">
            {[...Array(5)].map((_, i) => (
              <div key={`bar-${i}`} className="strength-bar"></div>
            ))}
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

  .radio {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #8b4513, #654321);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
    padding: 5px;
  }

  .tuning-dial {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    background: #d4af37;
    border-radius: 50%;
    transform: rotate(${props => props.$isChecked ? '180deg' : '0deg'});
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.2),
      inset 0 1px 2px rgba(255, 255, 255, 0.5);
  }

  .dial-marker {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 16px;
    background: #333;
    transform: translate(-50%, -50%);
  }

  .frequency-scale {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .scale-mark {
    position: absolute;
    width: 2px;
    height: 6px;
    background: #333;
    left: 50%;
    transform-origin: center 20px;
  }

  ${[...Array(7)].map((_, i) => `
    .scale-mark:nth-child(${i + 1}) {
      transform: translateX(-50%) rotate(${i * 30}deg);
    }
  `).join('')}

  .display {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 25px;
    background: #2c3e50;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .frequency {
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    font-size: 12px;
    font-family: 'Digital', monospace;
    font-weight: bold;
    text-shadow: 0 0 5px ${props => props.$isChecked ? 'rgba(74, 222, 128, 0.5)' : 'rgba(248, 113, 113, 0.5)'};
  }

  .unit {
    color: #95a5a6;
    font-size: 8px;
    margin-top: 2px;
  }

  .signal-strength {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    gap: 2px;
  }

  .strength-bar {
    width: 4px;
    height: 12px;
    background: #95a5a6;
    border-radius: 1px;
    transform-origin: bottom;
    transition: all 0.3s ease;
  }

  ${[...Array(5)].map((_, i) => `
    .strength-bar:nth-child(${i + 1}) {
      height: ${6 + i * 2}px;
      background: ${(props: StyledWrapperProps) => props.$isChecked && i < 4 ? '#4ade80' : '#95a5a6'};
      opacity: ${(props: StyledWrapperProps) => props.$isChecked ? '1' : '0.5'};
      transition-delay: ${i * 0.1}s;
    }
  `).join('')}

  /* Hover Effects */
  .toggle-label:hover .tuning-dial {
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 1px 3px rgba(255, 255, 255, 0.6);
  }

  /* Active State */
  .toggle-label:active .tuning-dial {
    transform: scale(0.95) rotate(${props => props.$isChecked ? '180deg' : '0deg'});
  }

  /* Animation */
  @keyframes tune {
    0%, 100% { transform: rotate(${props => props.$isChecked ? '178deg' : '-2deg'}); }
    50% { transform: rotate(${props => props.$isChecked ? '182deg' : '2deg'}); }
  }

  .toggle-input:checked + .toggle-label .tuning-dial {
    animation: tune 0.3s ease-in-out;
  }
`;

export default Toggle; 