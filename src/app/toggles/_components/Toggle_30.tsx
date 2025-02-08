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
        id="dna-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="dna-toggle" className="toggle-label">
        <div className="dna-container">
          <div className="helix">
            <div className="strand strand-1">
              {[...Array(8)].map((_, i) => (
                <div key={`base1-${i}`} className="base"></div>
              ))}
            </div>
            <div className="strand strand-2">
              {[...Array(8)].map((_, i) => (
                <div key={`base2-${i}`} className="base"></div>
              ))}
            </div>
          </div>
          <div className="status-text">
            {isChecked ? 'ACTIVE' : 'INACTIVE'}
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
    height: 60px;
    cursor: pointer;
  }

  .dna-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
    padding: 5px;
  }

  .helix {
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotate(${props => props.$isChecked ? '360deg' : '0deg'});
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .strand {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .strand-1 {
    transform: translateZ(0) rotateX(0);
    animation: rotate1 3s linear infinite;
    animation-play-state: ${props => props.$isChecked ? 'running' : 'paused'};
  }

  .strand-2 {
    transform: translateZ(0) rotateX(180deg);
    animation: rotate2 3s linear infinite;
    animation-play-state: ${props => props.$isChecked ? 'running' : 'paused'};
  }

  .base {
    width: 12px;
    height: 4px;
    background: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    border-radius: 2px;
    position: relative;
    transform-style: preserve-3d;
    transition: background 0.3s ease;

    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 2px;
      background: rgba(255, 255, 255, 0.3);
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
    }
  }

  .strand-1 .base {
    transform: translateX(-20px);
  }

  .strand-2 .base {
    transform: translateX(20px);
  }

  .status-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.$isChecked ? '#4ade80' : '#f87171'};
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    transition: color 0.3s ease;
    z-index: 2;
  }

  /* Animations */
  @keyframes rotate1 {
    from { transform: rotateX(0deg) rotateY(0deg); }
    to { transform: rotateX(360deg) rotateY(360deg); }
  }

  @keyframes rotate2 {
    from { transform: rotateX(180deg) rotateY(0deg); }
    to { transform: rotateX(540deg) rotateY(360deg); }
  }

  /* Hover Effects */
  .toggle-label:hover .base {
    box-shadow: 0 0 5px ${props => props.$isChecked ? 'rgba(74, 222, 128, 0.5)' : 'rgba(248, 113, 113, 0.5)'};
  }

  .toggle-label:hover .base:before {
    background: rgba(255, 255, 255, 0.5);
  }

  /* Active State */
  .toggle-label:active .helix {
    transform: scale(0.95) rotate(${props => props.$isChecked ? '360deg' : '0deg'});
  }
`;

export default Toggle; 