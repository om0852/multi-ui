"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Toggle = ({ defaultChecked = false, onChange }) => {
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

const StyledWrapper = styled.div`
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

  .signal-line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #4ade80;
    transform: translateY(-50%);
    opacity: ${({ $isChecked }) => ($isChecked ? '1' : '0.3')};
  }

  .dot {
    width: 4px;
    height: 4px;
    background: #4ade80;
    border-radius: 50%;
    transform: translateY(-1px);
    opacity: 0;
    animation: ${({ $isChecked }) => ($isChecked ? 'transmit 1.5s linear infinite' : 'none')};
  }

  ${[...Array(5)].map((_, i) => `
    .dot:nth-child(${i + 1}) {
      animation-delay: ${i * 0.3}s;
    }
  `).join('')}

  .key-lever {
    transform: ${({ $isChecked }) => ($isChecked ? 'translateX(-50%) rotate(10deg)' : 'translateX(-50%) rotate(0deg)')};
    transition: transform 0.3s ease;
  }

  .indicator {
    background: ${({ $isChecked }) => ($isChecked ? '#4ade80' : '#f87171')};
    box-shadow: 0 0 5px ${({ $isChecked }) => ($isChecked ? '#4ade80' : '#f87171')};
  }

  @keyframes transmit {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }

  .toggle-label:hover .key-lever {
    transform: ${({ $isChecked }) => ($isChecked ? 'translateX(-50%) rotate(12deg)' : 'translateX(-50%) rotate(2deg)')};
  }
`;

export default Toggle;
