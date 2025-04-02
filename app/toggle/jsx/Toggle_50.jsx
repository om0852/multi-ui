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

  .pinball-machine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 10px;
    padding: 10px;
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
    top: ${({ isChecked }) => (isChecked ? '80%' : '20%')};
    left: ${({ isChecked }) => (isChecked ? '80%' : '20%')};
    transition: all 0.6s;
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
    width: 24px;
    height: 24px;
    background: #e67e22;
    border-radius: 50%;
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
    transition: transform 0.3s;
  }

  .flipper.left {
    transform: rotate(${({ isChecked }) => (isChecked ? '45deg' : '0deg')});
  }

  .flipper.right {
    transform: rotate(${({ isChecked }) => (isChecked ? '-45deg' : '0deg')});
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
  }

  .digits {
    font-family: 'Digital', monospace;
    font-size: 14px;
    color: ${({ isChecked }) => (isChecked ? '#4ade80' : '#f87171')};
  }
`;

export default Toggle;
