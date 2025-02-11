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
        id="cube-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="cube-toggle" className="toggle-label">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="cube-face front">OFF</div>
            <div className="cube-face back">ON</div>
            <div className="cube-face right">ON</div>
            <div className="cube-face left">OFF</div>
            <div className="cube-face top">
              <span className="icon">{isChecked ? '✓' : '✕'}</span>
            </div>
            <div className="cube-face bottom">
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
    width: 60px;
    height: 60px;
    cursor: pointer;
    perspective: 1000px;
  }

  .cube-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cube {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: ${props => props.$isChecked ? 'rotateY(-90deg)' : 'rotateY(0)'};
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cube-face {
    position: absolute;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background: ${props => props.$isChecked ? '#22c55e' : '#ef4444'};
    border: 2px solid white;
    transition: background 0.6s ease;
  }

  .front  { transform: rotateY(0deg) translateZ(30px); }
  .back   { transform: rotateY(180deg) translateZ(30px); }
  .right  { transform: rotateY(90deg) translateZ(30px); }
  .left   { transform: rotateY(-90deg) translateZ(30px); }
  .top    { transform: rotateX(90deg) translateZ(30px); }
  .bottom { transform: rotateX(-90deg) translateZ(30px); }

  .icon {
    font-size: 24px;
  }

  /* Hover Effects */
  .toggle-label:hover .cube {
    transform: ${props => props.$isChecked 
      ? 'rotateY(-90deg) scale(1.1)' 
      : 'rotateY(0) scale(1.1)'};
  }

  /* Active State */
  .toggle-label:active .cube {
    transform: ${props => props.$isChecked 
      ? 'rotateY(-90deg) scale(0.95)' 
      : 'rotateY(0) scale(0.95)'};
  }

  /* Animation */
  @keyframes spin {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(360deg);
    }
  }

  .toggle-input:checked + .toggle-label .cube-wrapper {
    animation: spin 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default Toggle;
