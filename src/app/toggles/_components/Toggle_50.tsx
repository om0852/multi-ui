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
        id="pinball-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="pinball-toggle" className="toggle-label">
        <div className="pinball-machine">
          <div className="playfield">
            <div className="ball"></div>
            <div className="bumpers">
              {[...Array(3)].map((_, i) => (
                <div key={`bumper-${i}`} className="bumper">
                  <div className="bumper-ring"></div>
                </div>
              ))}
            </div>
            <div className="flippers">
              <div className="flipper left"></div>
              <div className="flipper right"></div>
            </div>
          </div>
          <div className="score-display">
            <div className="digits">
              {isChecked ? '1000' : '0000'}
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

  .pinball-machine {
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

  .playfield {
    position: relative;
    width: 100%;
    height: 120px;
    background: #1a1a1a;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .ball {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #e74c3c;
    border-radius: 50%;
    top: ${props => props.$isChecked ? '80%' : '20%'};
    left: ${props => props.$isChecked ? '80%' : '20%'};
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 10px rgba(231, 76, 60, 0.5);
  }

  .bumpers {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .bumper {
    position: relative;
    width: 24px;
    height: 24px;
    background: #e67e22;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(230, 126, 34, 0.5);
  }

  .bumper-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid #f39c12;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props => props.$isChecked ? '1' : '0.5'};
    animation: ${props => props.$isChecked ? 'pulse 1s ease-in-out infinite' : 'none'};
  }

  .flippers {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
  }

  .flipper {
    width: 40px;
    height: 10px;
    background: #3498db;
    border-radius: 5px;
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .flipper.left {
    transform: rotate(${props => props.$isChecked ? '45deg' : '0deg'});
  }

  .flipper.right {
    transform: rotate(${props => props.$isChecked ? '-45deg' : '0deg'});
  }

  .score-display {
    position: relative;
    width: 100%;
    height: 20px;
    background: #2c3e50;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .digits {
    font-family: 'Digital', monospace;
    font-size: 14px;
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    text-shadow: 0 0 5px ${props => props.$isChecked ? 'rgba(74, 222, 128, 0.5)' : 'rgba(248, 113, 113, 0.5)'};
  }

  /* Hover Effects */
  .toggle-label:hover .ball {
    box-shadow: 0 0 15px rgba(231, 76, 60, 0.7);
  }

  .toggle-label:hover .flipper {
    background: #3498db;
    box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
  }

  /* Active State */
  .toggle-label:active .pinball-machine {
    transform: scale(0.98);
  }

  /* Animations */
  @keyframes pulse {
    0%, 100% { 
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    50% { 
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.5;
    }
  }

  @keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(0.9); }
  }

  .ball {
    animation: ${props => props.$isChecked ? 'bounce 0.6s ease-in-out infinite' : 'none'};
  }

  ${[...Array(3)].map((_, i) => `
    .bumper:nth-child(${i + 1}) .bumper-ring {
      animation-delay: ${i * 0.2}s;
    }
  `).join('')}
`;

export default Toggle; 