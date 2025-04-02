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
        id="drawer-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="drawer-toggle" className="toggle-label">
        <div className="drawer">
          <div className="drawer-front">
            <div className="handle"></div>
          </div>
          <div className="drawer-back">
            <div className="content">
              <span className="icon">{isChecked ? '✓' : '✕'}</span>
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
    width: 80px;
    height: 40px;
    perspective: 200px;
    cursor: pointer;
  }

  .drawer {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .drawer-front,
  .drawer-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 8px;
  }

  .drawer-front {
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow: 
      3px 3px 6px #d1d1d1,
      -3px -3px 6px #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .handle {
    width: 30px;
    height: 6px;
    background: #666;
    border-radius: 3px;
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      background: #666;
      border-radius: 50%;
      top: 0;
    }

    &:before { left: -10px; }
    &:after { right: -10px; }
  }

  .drawer-back {
    background: linear-gradient(145deg, #4CAF50, #45a049);
    transform: rotateX(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    color: white;
    font-size: 24px;
    transform: rotateX(180deg);
  }

  /* Checked State */
  .toggle-input:checked + .toggle-label .drawer {
    transform: rotateX(180deg);
  }

  /* Hover Effects */
  .toggle-label:hover .drawer-front {
    box-shadow: 
      4px 4px 8px #d1d1d1,
      -4px -4px 8px #ffffff;
  }

  .toggle-label:hover .drawer-back {
    box-shadow: 
      4px 4px 8px #3d8c40,
      -4px -4px 8px #5ac85e;
  }

  /* Active State */
  .toggle-label:active .drawer {
    transform: rotateX(${props => props.$isChecked ? '170deg' : '10deg'});
  }
`;

export default Toggle;
