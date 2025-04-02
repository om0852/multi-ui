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
        id="typewriter-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="typewriter-toggle" className="toggle-label">
        <div className="typewriter">
          <div className="paper-roll">
            <div className="paper">
              <div className="text">
                {isChecked ? 'TYPE' : 'IDLE'}
              </div>
            </div>
          </div>
          <div className="keys">
            {[...Array(3)].map((_, i) => (
              <div key={`key-${i}`} className="key">
                <div className="key-top"></div>
                <div className="key-stem"></div>
              </div>
            ))}
          </div>
          <div className="carriage">
            <div className="roller"></div>
            <div className="ink-ribbon"></div>
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
    height: 80px;
    cursor: pointer;
  }

  .typewriter {
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

  .paper-roll {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    height: 30px;
    background: #ecf0f1;
    border-radius: 4px;
    overflow: hidden;
  }

  .paper {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.05) 50%,
      transparent 100%
    );
    transform: translateX(${props => props.$isChecked ? '-20px' : '0'});
    transition: transform 0.3s ease;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Courier New', monospace;
    font-size: 14px;
    font-weight: bold;
    color: #2c3e50;
    letter-spacing: ${props => props.$isChecked ? '2px' : '0'};
    transition: letter-spacing 0.3s ease;
  }

  .keys {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
  }

  .key {
    position: relative;
    width: 20px;
    height: 25px;
  }

  .key-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15px;
    background: #95a5a6;
    border-radius: 3px;
    transform: ${props => props.$isChecked ? 'translateY(5px)' : 'translateY(0)'};
    transition: transform 0.1s ease;
  }

  .key-stem {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 2px;
    height: 10px;
    background: #7f8c8d;
    transform: translateX(-50%);
  }

  .carriage {
    position: absolute;
    bottom: 45px;
    left: 10px;
    right: 10px;
    height: 4px;
    background: #7f8c8d;
  }

  .roller {
    position: absolute;
    top: -3px;
    left: ${props => props.$isChecked ? '70%' : '30%'};
    width: 10px;
    height: 10px;
    background: #95a5a6;
    border-radius: 50%;
    transition: left 0.3s ease;
  }

  .ink-ribbon {
    position: absolute;
    top: -8px;
    left: ${props => props.$isChecked ? '72%' : '32%'};
    width: 6px;
    height: 6px;
    background: #e74c3c;
    border-radius: 1px;
    transition: left 0.3s ease;
  }

  /* Hover Effects */
  .toggle-label:hover .key-top {
    background: #bdc3c7;
  }

  /* Active State */
  .toggle-label:active .typewriter {
    transform: scale(0.98);
  }

  ${[...Array(3)].map((_, i) => `
    .key:nth-child(${i + 1}) .key-top {
      transition-delay: ${i * 0.05}s;
    }
  `).join('')}

  /* Animations */
  @keyframes type {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(5px); }
  }

  .toggle-input:checked + .toggle-label .key-top {
    animation: type 0.2s ease-in-out;
  }
`;

export default Toggle; 