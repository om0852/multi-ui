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
    --container-off-bg: #0f766e;
    --container-on-bg: #042f2e;
    --circle-container-diameter: 3.375em;
    --crystal-size: 2.125em;
    --crystal-color: #2dd4bf;
    --crystal-glow: rgba(45, 212, 191, 0.6);
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
    background-color: rgba(45, 212, 191, 0.2);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: var(--container-radius);
    display: flex;
    transition: var(--circle-transition);
  }

  .theme-switch__crystal {
    width: var(--crystal-size);
    height: var(--crystal-size);
    margin: auto;
    position: relative;
    transition: var(--transition);
  }

  .theme-switch__crystal::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-left: calc(var(--crystal-size) / 2) solid transparent;
    border-right: calc(var(--crystal-size) / 2) solid transparent;
    border-bottom: var(--crystal-size) solid var(--crystal-color);
    transform: translateX(-50%);
    transition: var(--transition);
  }

  .theme-switch__crystal::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-left: calc(var(--crystal-size) / 2) solid transparent;
    border-right: calc(var(--crystal-size) / 2) solid transparent;
    border-top: calc(var(--crystal-size) / 2) solid var(--crystal-color);
    transform: translateX(-50%);
    transition: var(--transition);
  }

  .theme-switch__sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #fff;
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
    background-color: var(--crystal-glow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__crystal {
    transform: rotate(180deg) scale(1.2);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__crystal::before,
  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__crystal::after {
    border-bottom-color: var(--crystal-glow);
    border-top-color: var(--crystal-glow);
    filter: brightness(1.3);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__sparkle {
    animation: sparkleShine 1.5s ease-in-out infinite;
  }

  @keyframes sparkleShine {
    0%, 100% {
      transform: scale(0) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: scale(1) rotate(180deg);
      opacity: 1;
    }
  }
`;

const Switch_58: React.FC<SwitchProps> = ({ checked = false, onChange, disabled = false }) => {
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
            <div className="theme-switch__crystal">
              {[...Array(6)].map((_, i) => (
                <div
                  key={`sparkle-${i}`}
                  className="theme-switch__sparkle"
                  style={{
                    top: `${Math.sin(i * 60 * Math.PI / 180) * 100}%`,
                    left: `${Math.cos(i * 60 * Math.PI / 180) * 100}%`,
                    animationDelay: `${i * 0.25}s`
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

export default Switch_58; 