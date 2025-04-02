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
        id="slot-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="slot-toggle" className="toggle-label">
        <div className="slot-machine">
          <div className="display-window">
            <div className="reel">
              <div className="symbol">❌</div>
              <div className="symbol">✓</div>
              <div className="symbol">❌</div>
            </div>
            <div className="reel">
              <div className="symbol">❌</div>
              <div className="symbol">✓</div>
              <div className="symbol">❌</div>
            </div>
            <div className="reel">
              <div className="symbol">❌</div>
              <div className="symbol">✓</div>
              <div className="symbol">❌</div>
            </div>
          </div>
          <div className="lever">
            <div className="lever-base"></div>
            <div className="lever-handle"></div>
          </div>
          <div className="status-text">{isChecked ? 'JACKPOT!' : 'TRY AGAIN'}</div>
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
    width: 150px;
    height: 80px;
    cursor: pointer;
  }

  .slot-machine {
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

  .display-window {
    position: relative;
    width: 100px;
    height: 40px;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .reel {
    position: relative;
    width: 30px;
    height: 40px;
    overflow: hidden;
  }

  .symbol {
    position: absolute;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: transform 0.6s cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }

  .reel .symbol:nth-child(1) { transform: translateY(${props => props.$isChecked ? '80px' : '0'}); }
  .reel .symbol:nth-child(2) { transform: translateY(${props => props.$isChecked ? '0' : '-40px'}); }
  .reel .symbol:nth-child(3) { transform: translateY(${props => props.$isChecked ? '-40px' : '-80px'}); }

  .lever {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 60px;
  }

  .lever-base {
    position: absolute;
    top: 0;
    left: 50%;
    width: 6px;
    height: 100%;
    background: #95a5a6;
    transform: translateX(-50%);
    border-radius: 3px;
  }

  .lever-handle {
    position: absolute;
    top: ${props => props.$isChecked ? '70%' : '0'};
    left: 50%;
    width: 16px;
    height: 16px;
    background: #e74c3c;
    border-radius: 50%;
    transform: translateX(-50%);
    transition: top 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .status-text {
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    text-align: center;
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    transition: color 0.3s ease;
  }

  /* Hover Effects */
  .toggle-label:hover .lever-handle {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  /* Active State */
  .toggle-label:active .lever-handle {
    transform: translateX(-50%) scale(0.9);
  }

  /* Animation */
  @keyframes spin {
    0% { transform: translateY(0); }
    50% { transform: translateY(-200px); }
    100% { transform: translateY(${props => props.$isChecked ? '0' : '-40px'}); }
  }

  .toggle-input:checked + .toggle-label .reel .symbol {
    animation: spin 0.6s cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
`;

export default Toggle; 