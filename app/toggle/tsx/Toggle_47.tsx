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
          <div className="display">
            <div className="reels">
              {[...Array(3)].map((_, i) => (
                <div key={`reel-${i}`} className="reel">
                  <div className="symbol">
                    {isChecked ? '7' : '?'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lever-box">
            <div className="lever">
              <div className="handle">
                <div className="grip"></div>
              </div>
              <div className="base"></div>
            </div>
          </div>
          <div className="status-light"></div>
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

  .slot-machine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #d4af37, #b8860b);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.2);
  }

  .display {
    position: relative;
    width: 75%;
    height: 40px;
    background: #1a1a1a;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid #95a5a6;
  }

  .reels {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding: 0 5px;
  }

  .reel {
    width: 25px;
    height: 30px;
    background: #fff;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: ${props => props.$isChecked ? 'rotateX(360deg)' : 'rotateX(0deg)'};
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .symbol {
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.$isChecked ? '#e74c3c' : '#95a5a6'};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  .lever-box {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 60px;
  }

  .lever {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .handle {
    position: absolute;
    top: 0;
    left: 50%;
    width: 6px;
    height: 40px;
    background: #e74c3c;
    transform-origin: bottom center;
    transform: translateX(-50%) rotate(${props => props.$isChecked ? '45deg' : '0deg'});
    transition: transform 0.3s ease;
  }

  .grip {
    position: absolute;
    top: 0;
    left: 50%;
    width: 12px;
    height: 12px;
    background: #c0392b;
    border-radius: 50%;
    transform: translateX(-50%);
  }

  .base {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 16px;
    height: 16px;
    background: #95a5a6;
    border-radius: 50%;
    transform: translateX(-50%);
  }

  .status-light {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    box-shadow: 0 0 5px ${props => props.$isChecked ? '#4ade80' : '#f87171'};
  }

  /* Hover Effects */
  .toggle-label:hover .handle {
    background: #ff5544;
  }

  .toggle-label:hover .grip {
    background: #d63031;
  }

  /* Active State */
  .toggle-label:active .slot-machine {
    transform: scale(0.98);
  }

  /* Animations */
  @keyframes spin {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
  }

  ${[...Array(3)].map((_, i) => `
    .reel:nth-child(${i + 1}) {
      animation-delay: ${i * 0.2}s;
    }
  `).join('')}

  .toggle-input:checked + .toggle-label .reel {
    animation: spin 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default Toggle; 