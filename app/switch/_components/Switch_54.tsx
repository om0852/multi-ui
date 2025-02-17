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
    --container-day-bg: #4ade80;
    --container-night-bg: #166534;
    --circle-container-diameter: 3.375em;
    --leaf-size: 2.125em;
    --leaf-color: #22c55e;
    --leaf-shadow: rgba(34, 197, 94, 0.4);
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
    background-color: var(--container-day-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    transition: var(--transition);
  }

  .theme-switch__vines {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 30% 50%, var(--leaf-color) 2px, transparent 2px) 0 0 / 20px 20px,
      radial-gradient(circle at 70% 50%, var(--leaf-color) 2px, transparent 2px) 0 0 / 20px 20px;
    opacity: 0.2;
    transition: var(--transition);
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(34, 197, 94, 0.1);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: var(--container-radius);
    display: flex;
    transition: var(--circle-transition);
  }

  .theme-switch__leaf {
    width: var(--leaf-size);
    height: var(--leaf-size);
    margin: auto;
    background: var(--leaf-color);
    border-radius: 50% 0;
    position: relative;
    transform: rotate(45deg);
    transition: var(--transition);
  }

  .theme-switch__leaf::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    background: inherit;
    border-radius: 50% 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .theme-switch__floating-leaf {
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--leaf-color);
    border-radius: 50% 0;
    opacity: 0;
    transition: var(--transition);
  }

  /* Actions */
  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-night-bg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
    left: calc(100% - var(--circle-container-diameter));
    transform: translateY(-50%);
    background-color: var(--leaf-shadow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__leaf {
    transform: rotate(225deg);
    filter: brightness(1.2);
    box-shadow: 0 0 15px var(--leaf-shadow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__vines {
    opacity: 0.4;
    animation: vineGrow 3s linear infinite;
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__floating-leaf {
    animation: floatingLeaf 2s ease-in-out infinite;
  }

  @keyframes vineGrow {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 20px 20px;
    }
  }

  @keyframes floatingLeaf {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translate(-20px, -20px) rotate(180deg);
      opacity: 0.8;
    }
    100% {
      transform: translate(-40px, 0) rotate(360deg);
      opacity: 0;
    }
  }
`;

const Switch_54: React.FC<SwitchProps> = ({ checked = false, onChange, disabled = false }) => {
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
          <div className="theme-switch__vines" />
          {[...Array(4)].map((_, i) => (
            <div
              key={`leaf-${i}`}
              className="theme-switch__floating-leaf"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
          <div className="theme-switch__circle-container">
            <div className="theme-switch__leaf" />
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

export default Switch_54; 