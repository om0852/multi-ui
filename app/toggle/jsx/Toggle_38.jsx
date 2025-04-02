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
    <StyledWrapper isChecked={isChecked}>
      <input
        type="checkbox"
        id="solar-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="solar-toggle" className="toggle-label">
        <div className="space">
          <div className="sun">
            {[...Array(8)].map((_, i) => (
              <div key={`ray-${i}`} className="sun-ray"></div>
            ))}
          </div>
          <div className="orbit orbit-1">
            <div className="planet mercury"></div>
          </div>
          <div className="orbit orbit-2">
            <div className="planet venus"></div>
          </div>
          <div className="orbit orbit-3">
            <div className="planet earth">
              <div className="moon"></div>
            </div>
          </div>
          <div className="orbit orbit-4">
            <div className="planet mars"></div>
          </div>
          <div className="status">
            {isChecked ? 'ORBITING' : 'STATIC'}
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
    height: 120px;
    cursor: pointer;
  }

  .space {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .sun {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    background: #ffd700;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px #ffd700;
  }

  .sun-ray {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 2px;
    background: #ffd700;
    transform-origin: 0 50%;
    animation: rotate 10s linear infinite;
    animation-play-state: ${({ isChecked }) => (isChecked ? 'running' : 'paused')};
    opacity: 0.3;
  }

  @keyframes orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes rotate {
    from { transform: rotate(0deg) translateX(20px); }
    to { transform: rotate(360deg) translateX(20px); }
  }
`;

export default Toggle;
