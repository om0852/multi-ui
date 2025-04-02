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
        id="weather-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="weather-toggle" className="toggle-label">
        <div className="weather-scene">
          <div className="sun">
            {[...Array(8)].map((_, i) => (
              <div key={`ray-${i}`} className="sun-ray"></div>
            ))}
          </div>
          <div className="cloud">
            <div className="cloud-part part-1"></div>
            <div className="cloud-part part-2"></div>
            <div className="cloud-part part-3"></div>
          </div>
          {[...Array(10)].map((_, i) => (
            <div key={`raindrop-${i}`} className="raindrop"></div>
          ))}
          <div className="temperature">
            {isChecked ? '18°C' : '28°C'}
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
    height: 60px;
    cursor: pointer;
  }

  .weather-scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $isChecked }) => $isChecked 
      ? 'linear-gradient(145deg, #2c3e50, #3498db)'
      : 'linear-gradient(145deg, #e67e22, #f1c40f)'};
    border-radius: 30px;
    overflow: hidden;
    transition: background 0.6s ease;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }
`;

export default Toggle;
