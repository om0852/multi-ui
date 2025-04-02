'use client';
import React from 'react';
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
    --container-closed-bg: #3730a3;
    --container-open-bg: #6366f1;
    --circle-container-diameter: 3.375em;
    --portal-diameter: 2.125em;
    --portal-color: #818cf8;
    --portal-glow: rgba(99, 102, 241, 0.6);
    --energy-color: #c7d2fe;
    --transition: .5s cubic-bezier(0, -0.02, 0.4, 1.25);
    --circle-transition: .3s cubic-bezier(0, -0.02, 0.35, 1.17);
  }

  .theme-switch, .theme-switch *, .theme-switch *::before, .theme-switch *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: var(--toggle-size);
  }

  .theme-switch__container {
    width: var(--container-width);
    height: var(--container-height);
    background-color: var(--container-closed-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.4);
    transition: var(--transition);
  }

  .theme-switch__vortex {
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from 0deg,
      transparent,
      var(--portal-color),
      transparent 50%
    );
    opacity: 0.3;
    transition: var(--transition);
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(99, 102, 241, 0.2);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: var(--container-radius);
    display: flex;
    transition: var(--circle-transition);
  }

  .theme-switch__portal {
    width: var(--portal-diameter);
    height: var(--portal-diameter);
    margin: auto;
    background: var(--portal-color);
    border-radius: 50%;
    position: relative;
    transition: var(--transition);
  }

  .theme-switch__portal::before {
    content: '';
    position: absolute;
    inset: 4px;
    background: radial-gradient(circle at center, #fff, var(--portal-color));
    border-radius: 50%;
    opacity: 0.8;
  }

  .theme-switch__energy {
    position: absolute;
    width: 3px;
    height: 20px;
    background: var(--energy-color);
    border-radius: 3px;
    opacity: 0;
    transition: var(--transition);
  }

  /* Actions */
  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-open-bg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
    left: calc(100% - var(--circle-container-diameter));
    transform: translateY(-50%);
    background-color: var(--portal-glow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__portal {
    transform: scale(1.2);
    box-shadow: 0 0 20px var(--portal-glow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__vortex {
    opacity: 1;
    animation: vortexSpin 3s linear infinite;
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__energy {
    animation: energyPulse 2s ease-in-out infinite;
  }

  @keyframes vortexSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes energyPulse {
    0% {
      transform: scale(0) rotate(0deg) translateX(0);
      opacity: 0;
    }
    50% {
      transform: scale(1) rotate(180deg) translateX(20px);
      opacity: 0.8;
    }
    100% {
      transform: scale(0) rotate(360deg) translateX(40px);
      opacity: 0;
    }
  }
`;

const Switch_55: React.FC<SwitchProps> = ({ checked = false, onChange, disabled = false }) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

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
          <div className="theme-switch__vortex" />
          {[...Array(8)].map((_, i) => (
            <div
              key={`energy-${i}`}
              className="theme-switch__energy"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.25}s`
              }}
            />
          ))}
          <div className="theme-switch__circle-container">
            <div className="theme-switch__portal" />
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

export default Switch_55; 