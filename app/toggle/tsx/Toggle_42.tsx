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
        id="camera-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="camera-toggle" className="toggle-label">
        <div className="camera">
          <div className="viewfinder">
            <div className="shutter">
              {[...Array(6)].map((_, i) => (
                <div key={`blade-${i}`} className="blade"></div>
              ))}
            </div>
            <div className="focus-ring">
              {[...Array(12)].map((_, i) => (
                <div key={`mark-${i}`} className="focus-mark"></div>
              ))}
            </div>
          </div>
          <div className="controls">
            <div className="exposure-dial">
              <div className="dial-marker"></div>
            </div>
            <div className="film-advance"></div>
          </div>
          <div className="status-panel">
            <div className="light-meter"></div>
            <div className="text">
              {isChecked ? 'EXPOSED' : 'READY'}
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
    width: 120px;
    height: 160px;
    cursor: pointer;
  }

  .camera {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .viewfinder {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto 15px;
    background: #1a1a1a;
    border-radius: 50%;
    overflow: hidden;
  }

  .shutter {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    transform: translate(-50%, -50%);
  }

  .blade {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    background: #2c3e50;
    transform-origin: 0% 0%;
    transition: transform 0.3s ease;
  }

  ${[...Array(6)].map((_, i) => `
    .blade:nth-child(${i + 1}) {
      transform: 
        rotate(${60 * i}deg)
        ${(props:StyledWrapperProps) => props.$isChecked ? 
          'translate(-50%, -50%) rotate(60deg)' : 
          'translate(0, 0)'};
    }
  `).join('')}

  .focus-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #95a5a6;
    border-radius: 50%;
    transform: ${props => props.$isChecked ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.6s ease;
  }

  .focus-mark {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 6px;
    background: #95a5a6;
    transform-origin: bottom center;
  }

  ${[...Array(12)].map((_, i) => `
    .focus-mark:nth-child(${i + 1}) {
      transform: translateX(-50%) rotate(${30 * i}deg);
    }
  `).join('')}

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .exposure-dial {
    position: relative;
    width: 40px;
    height: 40px;
    background: #7f8c8d;
    border-radius: 50%;
    border: 2px solid #95a5a6;
  }

  .dial-marker {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 2px;
    background: #e74c3c;
    transform: translate(-50%, -50%) rotate(${props => props.$isChecked ? '180deg' : '0deg'});
    transition: transform 0.6s ease;
  }

  .film-advance {
    width: 40px;
    height: 10px;
    background: #95a5a6;
    border-radius: 5px;
    transform: ${props => props.$isChecked ? 'translateX(-5px)' : 'translateX(0)'};
    transition: transform 0.3s ease;
  }

  .status-panel {
    position: relative;
    width: 100%;
    height: 30px;
    background: #2c3e50;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 8px;
  }

  .light-meter {
    width: 8px;
    height: 8px;
    background: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    border-radius: 50%;
    box-shadow: 0 0 5px ${props => props.$isChecked ? '#4ade80' : '#f87171'};
  }

  .text {
    color: #ecf0f1;
    font-size: 10px;
    font-weight: bold;
  }

  /* Hover Effects */
  .toggle-label:hover .focus-ring {
    border-color: #bdc3c7;
  }

  .toggle-label:hover .exposure-dial {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }

  /* Active State */
  .toggle-label:active .camera {
    transform: scale(0.98);
  }

  .toggle-label:active .film-advance {
    transform: translateX(-10px);
  }

  /* Animations */
  @keyframes flash {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }

  .toggle-label:active .viewfinder::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation: flash 0.3s ease-out;
  }
`;

export default Toggle; 