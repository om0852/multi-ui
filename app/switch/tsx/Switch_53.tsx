'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const StyledWrapper = styled.div`
  .theme-switch {
    --toggle-size: 30px;
    --container-width: 5.625em;
    --container-height: 2.5em;
    --container-radius: 6.25em;
    --container-light-bg: #e4ccff;
    --container-night-bg: #1a1b2e;
    --circle-container-diameter: 3.375em;
    --sun-moon-diameter: 2.125em;
    --sun-bg: #ecca2f;
    --moon-bg: #c4c9d1;
    --spot-color: #959db1;
    --circle-container-offset: calc((var(--circle-container-diameter) - var(--container-height)) / 2 * -1);
    --stars-color: #fff;
    --clouds-color: #f3fdff;
    --back-clouds-color: #aacadf;
    --transition: .5s cubic-bezier(0, -0.02, 0.4, 1.25);

    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .theme-switch__container {
    background-color: var(--container-light-bg);
    border-radius: var(--container-radius);
    height: var(--container-height);
    width: var(--container-width);
    position: relative;
    transition: background-color var(--transition);
  }

  .theme-switch__circle-container {
    background-color: var(--moon-bg);
    border-radius: var(--container-radius);
    height: var(--circle-container-diameter);
    width: var(--circle-container-diameter);
    position: absolute;
    left: 0;
    top: var(--circle-container-offset);
    transform: translateX(0);
    transition: transform var(--transition), background-color var(--transition);
  }

  .theme-switch__circle {
    width: var(--sun-moon-diameter);
    height: var(--sun-moon-diameter);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--sun-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    transition: background-color var(--transition);
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-night-bg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
    transform: translateX(calc(var(--container-width) - var(--circle-container-diameter)));
    background-color: var(--moon-bg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle {
    background-color: var(--moon-bg);
  }

  .theme-switch__spots-container {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity var(--transition);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__spots-container {
    opacity: 1;
  }

  .theme-switch__spot {
    position: absolute;
    background-color: var(--spot-color);
    border-radius: 50%;
  }

  .theme-switch__spot:nth-of-type(1) {
    width: 0.375em;
    height: 0.375em;
    top: 0.75em;
    left: 0.75em;
  }

  .theme-switch__spot:nth-of-type(2) {
    width: 0.25em;
    height: 0.25em;
    top: 1.15em;
    right: 0.425em;
  }

  .theme-switch__spot:nth-of-type(3) {
    width: 0.3125em;
    height: 0.3125em;
    bottom: 0.375em;
    left: 1.125em;
  }

  .theme-switch__stars-container {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity var(--transition);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__stars-container {
    opacity: 1;
  }

  .theme-switch__star {
    position: absolute;
    background-color: var(--stars-color);
    border-radius: 50%;
    animation: stars-appear-animation var(--transition);
  }

  .theme-switch__star:nth-of-type(1) {
    width: 0.3125em;
    height: 0.3125em;
    top: 0.375em;
    right: 1em;
  }

  .theme-switch__star:nth-of-type(2) {
    width: 0.25em;
    height: 0.25em;
    top: 1.375em;
    right: 0.5em;
  }

  .theme-switch__star:nth-of-type(3) {
    width: 0.375em;
    height: 0.375em;
    bottom: 0.375em;
    right: 1.125em;
  }

  @keyframes stars-appear-animation {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Switch_53: React.FC<SwitchProps> = ({ checked = false, onChange, disabled = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  if (!mounted) return null;

  return (
    <StyledWrapper>
      <label className="theme-switch">
        <input 
          type="checkbox" 
          className="theme-switch__checkbox" 
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <div className="theme-switch__container">
          <div className="theme-switch__circle-container">
            <div className="theme-switch__circle"></div>
            <div className="theme-switch__spots-container">
              <span className="theme-switch__spot"></span>
              <span className="theme-switch__spot"></span>
              <span className="theme-switch__spot"></span>
            </div>
          </div>
          <div className="theme-switch__stars-container">
            <span className="theme-switch__star"></span>
            <span className="theme-switch__star"></span>
            <span className="theme-switch__star"></span>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

export default Switch_53;