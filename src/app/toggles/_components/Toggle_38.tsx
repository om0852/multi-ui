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
        id="solar-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="solar-toggle" className="toggle-label">
        <div className="space">
          <div className="sun">
            {[...Array(8)].map((_, i) => (
              <div key={`ray-${i}`} className="sun-ray"></div>
            ))}
          </div>
          <div className="orbit orbit-1">
            <div className="planet mercury"></div>
          </div>
          <div className="orbit orbit-2">
            <div className="planet venus"></div>
          </div>
          <div className="orbit orbit-3">
            <div className="planet earth">
              <div className="moon"></div>
            </div>
          </div>
          <div className="orbit orbit-4">
            <div className="planet mars"></div>
          </div>
          <div className="status">
            {isChecked ? 'ORBITING' : 'STATIC'}
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
    height: 120px;
    cursor: pointer;
  }

  .space {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .sun {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    background: #ffd700;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px #ffd700;
  }

  .sun-ray {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 2px;
    background: #ffd700;
    transform-origin: 0 50%;
    animation: rotate 10s linear infinite;
    animation-play-state: ${props => props.$isChecked ? 'running' : 'paused'};
    opacity: 0.3;
  }

  ${[...Array(8)].map((_, i) => `
    .sun-ray:nth-child(${i + 1}) {
      transform: rotate(${45 * i}deg);
    }
  `).join('')}

  .orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .orbit-1 {
    width: 40px;
    height: 40px;
  }

  .orbit-2 {
    width: 60px;
    height: 60px;
  }

  .orbit-3 {
    width: 80px;
    height: 80px;
  }

  .orbit-4 {
    width: 100px;
    height: 100px;
  }

  .planet {
    position: absolute;
    border-radius: 50%;
    transform-origin: 50% 50%;
    transition: transform 0.3s ease;
  }

  .mercury {
    width: 6px;
    height: 6px;
    background: #bdc3c7;
    top: -3px;
    left: calc(50% - 3px);
    animation: orbit 3s linear infinite;
    animation-play-state: ${props => props.$isChecked ? 'running' : 'paused'};
  }

  .venus {
    width: 8px;
    height: 8px;
    background: #e67e22;
    top: -4px;
    left: calc(50% - 4px);
    animation: orbit 5s linear infinite;
    animation-play-state: ${props => props.$isChecked ? 'running' : 'paused'};
  }

  .earth {
    width: 10px;
    height: 10px;
    background: #3498db;
    top: -5px;
    left: calc(50% - 5px);
    animation: orbit 8s linear infinite;
    animation-play-state: ${props => props.$isChecked ? 'running' : 'paused'};
  }

  .moon {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #95a5a6;
    border-radius: 50%;
    top: -6px;
    left: 3px;
    animation: orbit 2s linear infinite;
    animation-play-state: ${props => props.$isChecked ? 'running' : 'paused'};
  }

  .mars {
    width: 7px;
    height: 7px;
    background: #e74c3c;
    top: -3.5px;
    left: calc(50% - 3.5px);
    animation: orbit 10s linear infinite;
    animation-play-state: ${props => props.$isChecked ? 'running' : 'paused'};
  }

  .status {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  /* Animations */
  @keyframes orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes rotate {
    from { transform: rotate(0deg) translateX(20px); }
    to { transform: rotate(360deg) translateX(20px); }
  }

  /* Hover Effects */
  .toggle-label:hover .sun {
    box-shadow: 0 0 30px #ffd700;
  }

  .toggle-label:hover .planet {
    filter: brightness(1.2);
  }

  /* Active State */
  .toggle-label:active .space {
    transform: scale(0.95);
  }

  /* Star background */
  .space::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at center, white 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.1;
  }
`;

export default Toggle; 