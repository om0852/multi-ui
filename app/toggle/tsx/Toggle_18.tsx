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
        id="elevator-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="elevator-toggle" className="toggle-label">
        <div className="elevator-frame">
          <div className="elevator-door left"></div>
          <div className="elevator-door right"></div>
          <div className="floor-indicator">
            <div className="floor">{isChecked ? '2' : '1'}</div>
            <div className="arrow">{isChecked ? '↑' : '↓'}</div>
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
    width: 80px;
    height: 120px;
    cursor: pointer;
  }

  .elevator-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.2),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .elevator-door {
    position: absolute;
    width: 50%;
    height: 100%;
    background: linear-gradient(145deg, #95a5a6, #7f8c8d);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .left {
    left: 0;
    transform: translateX(${props => props.$isChecked ? '-100%' : '0'});
    border-right: 2px solid #34495e;
  }

  .right {
    right: 0;
    transform: translateX(${props => props.$isChecked ? '100%' : '0'});
    border-left: 2px solid #34495e;
  }

  .floor-indicator {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 40px;
    background: #2c3e50;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .floor {
    color: #e74c3c;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 0 0 5px rgba(231, 76, 60, 0.5);
    transition: all 0.3s ease;
  }

  .arrow {
    color: #e74c3c;
    font-size: 16px;
    margin-top: 2px;
    text-shadow: 0 0 5px rgba(231, 76, 60, 0.5);
    transition: all 0.3s ease;
  }

  /* Hover Effects */
  .toggle-label:hover .elevator-door {
    filter: brightness(1.1);
  }

  .toggle-label:hover .floor,
  .toggle-label:hover .arrow {
    color: #f1c40f;
    text-shadow: 0 0 5px rgba(241, 196, 15, 0.5);
  }

  /* Active State */
  .toggle-label:active .elevator-door.left {
    transform: translateX(${props => props.$isChecked ? '-95%' : '-5%'});
  }

  .toggle-label:active .elevator-door.right {
    transform: translateX(${props => props.$isChecked ? '95%' : '5%'});
  }

  /* Animation */
  @keyframes ding {
    0%, 100% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.1); }
  }

  .toggle-input:checked + .toggle-label .floor-indicator,
  .toggle-input:not(:checked) + .toggle-label .floor-indicator {
    animation: ding 0.3s ease;
  }
`;

export default Toggle; 