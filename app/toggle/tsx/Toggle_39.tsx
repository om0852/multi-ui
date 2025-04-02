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
        id="periscope-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="periscope-toggle" className="toggle-label">
        <div className="submarine">
          <div className="periscope">
            <div className="scope-head">
              <div className="lens">
                <div className="radar-line"></div>
              </div>
            </div>
            <div className="scope-body"></div>
          </div>
          <div className="water">
            {[...Array(10)].map((_, i) => (
              <div key={`wave-${i}`} className="wave"></div>
            ))}
            {[...Array(5)].map((_, i) => (
              <div key={`bubble-${i}`} className="bubble"></div>
            ))}
          </div>
          <div className="control-panel">
            <div className="depth-gauge">
              {isChecked ? 'SURFACE' : 'SUBMERGED'}
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

  .submarine {
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
  }

  .periscope {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
  }

  .scope-head {
    position: absolute;
    top: ${props => props.$isChecked ? '10px' : '80px'};
    left: 0;
    width: 30px;
    height: 20px;
    background: #95a5a6;
    border-radius: 4px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .lens {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    background: #2c3e50;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }

  .radar-line {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 2px;
    background: #4ade80;
    transform-origin: left center;
    animation: scan 2s linear infinite;
    animation-play-state: ${props => props.$isChecked ? 'running' : 'paused'};
  }

  .scope-body {
    position: absolute;
    top: ${props => props.$isChecked ? '30px' : '100px'};
    left: 13px;
    width: 4px;
    height: 80px;
    background: #7f8c8d;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .water {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(180deg, #3498db 0%, #2980b9 100%);
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 200%;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    transform-origin: center;
    animation: wave 3s linear infinite;
  }

  ${[...Array(10)].map((_, i) => `
    .wave:nth-child(${i + 1}) {
      top: ${i * 20}px;
      animation-delay: ${i * 0.2}s;
    }
  `).join('')}

  .bubble {
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: bubble 3s ease-in infinite;
  }

  ${[...Array(5)].map((_, i) => `
    .bubble:nth-child(${i + 11}) {
      left: ${20 + i * 15}px;
      animation-delay: ${i * 0.5}s;
    }
  `).join('')}

  .control-panel {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    height: 24px;
    background: #34495e;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .depth-gauge {
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  /* Animations */
  @keyframes scan {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes wave {
    0% { transform: translateX(-50%) rotate(0deg); }
    100% { transform: translateX(-50%) rotate(360deg); }
  }

  @keyframes bubble {
    0% { 
      transform: translateY(100px);
      opacity: 1;
    }
    100% { 
      transform: translateY(-20px);
      opacity: 0;
    }
  }

  /* Hover Effects */
  .toggle-label:hover .scope-head {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  .toggle-label:hover .lens {
    box-shadow: inset 0 0 5px rgba(74, 222, 128, 0.5);
  }

  /* Active State */
  .toggle-label:active .submarine {
    transform: scale(0.98);
  }
`;

export default Toggle; 