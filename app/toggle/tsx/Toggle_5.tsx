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
        id="flip-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="flip-toggle" className="toggle-label">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <span className="icon">🌙</span>
            </div>
            <div className="card-back">
              <span className="icon">☀️</span>
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
    display: block;
    width: 60px;
    height: 60px;
    cursor: pointer;
    perspective: 1000px;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-radius: 50%;
  }

  .card-front {
    background: linear-gradient(145deg, #2c3e50, #3498db);
    color: white;
    box-shadow: 
      4px 4px 8px rgba(44, 62, 80, 0.3),
      -4px -4px 8px rgba(52, 152, 219, 0.3);
  }

  .card-back {
    background: linear-gradient(145deg, #f1c40f, #e67e22);
    color: white;
    transform: rotateY(180deg);
    box-shadow: 
      4px 4px 8px rgba(241, 196, 15, 0.3),
      -4px -4px 8px rgba(230, 126, 34, 0.3);
  }

  .icon {
    font-size: 32px;
    line-height: 1;
  }

  /* Hover Effects */
  .toggle-label:hover .card-inner {
    transform: scale(1.05);
  }

  /* Checked State */
  .toggle-input:checked + .toggle-label .card-inner {
    transform: rotateY(180deg);
  }

  /* Active State */
  .toggle-label:active .card-inner {
    transform: scale(0.95) ${props => props.$isChecked ? 'rotateY(180deg)' : 'rotateY(0)'};
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .toggle-input:checked + .toggle-label .card-back,
  .toggle-label:not(:checked) .card-front {
    animation: pulse 2s infinite;
  }
`;

export default Toggle;
