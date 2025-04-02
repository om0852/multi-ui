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
        id="bubble-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="bubble-toggle" className="toggle-label">
        <div className="liquid">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
        </div>
        <div className="toggle-button"></div>
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
    width: 70px;
    height: 35px;
    border-radius: 17.5px;
    background: #f0f0f0;
    cursor: pointer;
    overflow: hidden;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .liquid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #06b6d4;
    transform: translateX(-100%);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .bubble {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    animation: float 4s infinite ease-in-out;
  }

  .bubble-1 {
    width: 20px;
    height: 20px;
    top: 5px;
    left: 15px;
    animation-delay: 0s;
  }

  .bubble-2 {
    width: 15px;
    height: 15px;
    top: 15px;
    left: 35px;
    animation-delay: 0.5s;
  }

  .bubble-3 {
    width: 10px;
    height: 10px;
    top: 20px;
    left: 55px;
    animation-delay: 1s;
  }

  .toggle-button {
    position: absolute;
    top: 2.5px;
    left: 2.5px;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  /* Checked State */
  .toggle-input:checked + .toggle-label .liquid {
    transform: translateX(0);
  }

  .toggle-input:checked + .toggle-label .toggle-button {
    transform: translateX(35px);
    background: #0891b2;
  }

  /* Hover Effects */
  .toggle-label:hover .toggle-button {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Active State */
  .toggle-label:active .toggle-button {
    transform: scale(0.9) ${props => props.$isChecked ? 'translateX(35px)' : 'translateX(0)'};
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;

export default Toggle;
