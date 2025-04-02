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
        id="wave-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="wave-toggle" className="toggle-label">
        <div className="toggle-track">
          <div className="waves">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
          <div className="toggle-thumb"></div>
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
    width: 90px;
    height: 45px;
    cursor: pointer;
  }

  .toggle-track {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.$isChecked ? '#06b6d4' : '#e2e8f0'};
    border-radius: 22.5px;
    transition: background 0.4s ease;
    overflow: hidden;
  }

  .waves {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: ${props => props.$isChecked ? 1 : 0};
    transition: opacity 0.4s ease;
  }

  .wave {
    position: absolute;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 40%;
    left: -50%;
    top: 30%;
    animation: wave 4s infinite linear;
  }

  .wave-1 {
    animation-delay: 0s;
  }

  .wave-2 {
    animation-delay: -1s;
    top: 35%;
  }

  .wave-3 {
    animation-delay: -2s;
    top: 40%;
  }

  .toggle-thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 39px;
    height: 39px;
    background: white;
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Checked State */
  .toggle-input:checked + .toggle-label .toggle-thumb {
    transform: translateX(45px);
  }

  /* Hover Effects */
  .toggle-label:hover .toggle-thumb {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Active State */
  .toggle-label:active .toggle-thumb {
    width: 45px;
    transform: ${props => props.$isChecked ? 'translateX(39px)' : 'translateX(0)'};
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Toggle;
