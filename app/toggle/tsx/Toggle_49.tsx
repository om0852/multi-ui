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
        id="traffic-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="traffic-toggle" className="toggle-label">
        <div className="traffic-light">
          <div className="housing">
            <div className="signal red"></div>
            <div className="signal yellow"></div>
            <div className="signal green"></div>
            <div className="visor-set">
              {[...Array(3)].map((_, i) => (
                <div key={`visor-${i}`} className="visor"></div>
              ))}
            </div>
          </div>
          <div className="mount">
            <div className="pole"></div>
            <div className="bracket"></div>
          </div>
          <div className="status">
            {isChecked ? 'GO' : 'STOP'}
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
    width: 60px;
    height: 120px;
    cursor: pointer;
  }

  .traffic-light {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .housing {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: #2c3e50;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .signal {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #1a1a1a;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .signal::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  .red::after {
    background: ${props => !props.$isChecked ? '#ff0000' : '#4a0000'};
    box-shadow: ${props => !props.$isChecked ? '0 0 20px #ff0000' : 'none'};
    opacity: ${props => !props.$isChecked ? '1' : '0.3'};
  }

  .yellow::after {
    background: ${props => !props.$isChecked ? '#4a4a00' : '#4a4a00'};
    box-shadow: none;
    opacity: 0.3;
  }

  .green::after {
    background: ${props => props.$isChecked ? '#00ff00' : '#004a00'};
    box-shadow: ${props => props.$isChecked ? '0 0 20px #00ff00' : 'none'};
    opacity: ${props => props.$isChecked ? '1' : '0.3'};
  }

  .visor-set {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px;
  }

  .visor {
    width: 100%;
    height: 28px;
    background: #1a1a1a;
    border-radius: 5px;
    transform: translateX(-8px);
    clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
  }

  .mount {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .pole {
    width: 10px;
    height: 30px;
    background: #95a5a6;
    margin: 0 auto;
  }

  .bracket {
    width: 30px;
    height: 10px;
    background: #7f8c8d;
    border-radius: 5px;
    margin: 0 auto;
  }

  .status {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    text-shadow: 0 0 5px ${props => props.$isChecked ? 'rgba(74, 222, 128, 0.5)' : 'rgba(248, 113, 113, 0.5)'};
  }

  /* Hover Effects */
  .toggle-label:hover .housing {
    box-shadow: 
      0 6px 12px rgba(0, 0, 0, 0.4),
      inset 0 2px 4px rgba(255, 255, 255, 0.2);
  }

  /* Active State */
  .toggle-label:active .traffic-light {
    transform: scale(0.98);
  }

  /* Animations */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }

  .signal.red::after {
    animation: ${props => !props.$isChecked ? 'pulse 2s ease-in-out infinite' : 'none'};
  }

  .signal.green::after {
    animation: ${props => props.$isChecked ? 'pulse 2s ease-in-out infinite' : 'none'};
  }
`;

export default Toggle; 