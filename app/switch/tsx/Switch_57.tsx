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
    --container-off-bg: #4f46e5;
    --container-on-bg: #312e81;
    --circle-container-diameter: 3.375em;
    --helix-size: 2.125em;
    --helix-color: #818cf8;
    --helix-glow: rgba(99, 102, 241, 0.6);
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
    background-color: var(--container-off-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.3);
    transition: var(--transition);
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(129, 140, 248, 0.2);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: var(--container-radius);
    display: flex;
    transition: var(--circle-transition);
  }

  .theme-switch__helix {
    width: var(--helix-size);
    height: var(--helix-size);
    margin: auto;
    position: relative;
    transition: var(--transition);
  }

  .theme-switch__strand {
    position: absolute;
    width: 100%;
    height: 3px;
    background: var(--helix-color);
    border-radius: 3px;
    transition: var(--transition);
  }

  .theme-switch__strand:nth-child(1) { transform: translateY(-8px) rotate(0deg); }
  .theme-switch__strand:nth-child(2) { transform: translateY(0) rotate(0deg); }
  .theme-switch__strand:nth-child(3) { transform: translateY(8px) rotate(0deg); }

  .theme-switch__base {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--helix-color);
    border-radius: 50%;
    opacity: 0;
    transition: var(--transition);
  }

  /* Actions */
  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-on-bg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
    left: calc(100% - var(--circle-container-diameter));
    transform: translateY(-50%);
    background-color: var(--helix-glow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__helix {
    transform: rotate(180deg);
    box-shadow: 0 0 15px var(--helix-glow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__strand:nth-child(1) {
    transform: translateY(-8px) rotate(45deg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__strand:nth-child(2) {
    transform: scaleX(0.6);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__strand:nth-child(3) {
    transform: translateY(8px) rotate(-45deg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__base {
    animation: baseFloat 2s ease-in-out infinite;
  }

  @keyframes baseFloat {
    0%, 100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      transform: translate(10px, -10px);
      opacity: 1;
    }
  }
`;

const Switch_57: React.FC<SwitchProps> = ({ checked = false, onChange, disabled = false }) => {
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
          <div className="theme-switch__circle-container">
            <div className="theme-switch__helix">
              <div className="theme-switch__strand" />
              <div className="theme-switch__strand" />
              <div className="theme-switch__strand" />
              {[...Array(4)].map((_, i) => (
                <div
                  key={`base-${i}`}
                  className="theme-switch__base"
                  style={{
                    top: `${i * 25}%`,
                    left: `${i % 2 ? 100 : -50}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

export default Switch_57; 