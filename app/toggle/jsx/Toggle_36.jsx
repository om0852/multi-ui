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
        id="hourglass-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="hourglass-toggle" className="toggle-label">
        <div className="hourglass">
          <div className="frame">
            <div className="top-bulb">
              <div className="sand-pile"></div>
              {[...Array(15)].map((_, i) => (
                <div key={`sand-top-${i}`} className="sand-particle"></div>
              ))}
            </div>
            <div className="middle">
              <div className="neck"></div>
              {[...Array(5)].map((_, i) => (
                <div key={`falling-${i}`} className="falling-sand"></div>
              ))}
            </div>
            <div className="bottom-bulb">
              <div className="sand-pile"></div>
              {[...Array(15)].map((_, i) => (
                <div key={`sand-bottom-${i}`} className="sand-particle"></div>
              ))}
            </div>
          </div>
          <div className="status">
            {isChecked ? 'TIME UP' : 'TIME LEFT'}
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

  .hourglass {
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
  }

  .frame {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 50px;
    transform: translate(-50%, -50%) rotate(${props => props.isChecked ? '180deg' : '0deg'});
    transition: transform 0.6s ease;
  }

  .status {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: #ecf0f1;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export default Toggle;
