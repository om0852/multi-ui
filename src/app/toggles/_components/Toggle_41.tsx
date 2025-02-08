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
        id="morse-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="morse-toggle" className="toggle-label">
        <div className="transmitter">
          <div className="signal-display">
            <div className="signal-line"></div>
            <div className="signal-dots">
              {[...Array(5)].map((_, i) => (
                <div key={`dot-${i}`} className="dot"></div>
              ))}
            </div>
          </div>
          <div className="telegraph-key">
            <div className="key-base"></div>
            <div className="key-lever">
              <div className="knob"></div>
              <div className="contact-point"></div>
            </div>
            <div className="spring"></div>
          </div>
          <div className="status-panel">
            <div className="indicator"></div>
            <div className="text">
              {isChecked ? 'TRANSMITTING' : 'STANDBY'}
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

  .transmitter {
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

  .signal-display {
    position: relative;
    width: 100%;
    height: 60px;
    background: #1a1a1a;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 15px;
  }

  .signal-line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #4ade80;
    transform: translateY(-50%);
    opacity: ${props => props.$isChecked ? '1' : '0.3'};
  }

  .signal-dots {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    display: flex;
    justify-content: space-around;
    transform: translateY(-50%);
  }

  .dot {
    width: 4px;
    height: 4px;
    background: #4ade80;
    border-radius: 50%;
    transform: translateY(-1px);
    opacity: 0;
    animation: ${props => props.$isChecked ? 'transmit 1.5s linear infinite' : 'none'};
  }

  ${[...Array(5)].map((_, i) => `
    .dot:nth-child(${i + 1}) {
      animation-delay: ${i * 0.3}s;
    }
  `).join('')}

  .telegraph-key {
    position: relative;
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
  }

  .key-base {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 8px;
    background: #95a5a6;
    border-radius: 4px;
  }

  .key-lever {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 40px;
    height: 4px;
    background: #7f8c8d;
    transform-origin: left center;
    transform: ${props => props.$isChecked ? 
      'translateX(-50%) rotate(10deg)' : 
      'translateX(-50%) rotate(0deg)'};
    transition: transform 0.3s ease;
  }

  .knob {
    position: absolute;
    top: -8px;
    right: -4px;
    width: 16px;
    height: 16px;
    background: #bdc3c7;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .contact-point {
    position: absolute;
    bottom: -4px;
    right: 0;
    width: 4px;
    height: 4px;
    background: #e74c3c;
    border-radius: 50%;
  }

  .spring {
    position: absolute;
    bottom: 8px;
    left: 30px;
    width: 20px;
    height: 4px;
    background: repeating-linear-gradient(
      90deg,
      #95a5a6,
      #95a5a6 2px,
      transparent 2px,
      transparent 4px
    );
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

  .indicator {
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

  /* Animations */
  @keyframes transmit {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }

  /* Hover Effects */
  .toggle-label:hover .key-lever {
    transform: ${props => props.$isChecked ? 
      'translateX(-50%) rotate(12deg)' : 
      'translateX(-50%) rotate(2deg)'};
  }

  .toggle-label:hover .signal-line {
    box-shadow: 0 0 10px ${props => props.$isChecked ? '#4ade80' : 'transparent'};
  }

  /* Active State */
  .toggle-label:active .transmitter {
    transform: scale(0.98);
  }

  .toggle-label:active .key-lever {
    transform: translateX(-50%) rotate(15deg);
  }
`;

export default Toggle; 