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
    --container-light-bg: #2b2f4b;
    --container-night-bg: #1a1b2e;
    --circle-container-diameter: 3.375em;
    --sun-moon-diameter: 2.125em;
    --neon-glow: #00ff9d;
    --neon-off: #1e3a31;
    --circuit-color: rgba(0, 255, 157, 0.2);
    --circle-container-offset: calc((var(--circle-container-diameter) - var(--container-height)) / 2);
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
    background-color: var(--container-light-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    box-shadow: 0 0 10px var(--neon-off);
    transition: var(--transition);
  }

  .theme-switch__circuit {
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(90deg, transparent 50%, var(--circuit-color) 50%) 0 0 / 10px 10px,
      linear-gradient(0deg, transparent 50%, var(--circuit-color) 50%) 0 0 / 10px 10px;
    opacity: 0.5;
    transition: var(--transition);
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(0, 255, 157, 0.1);
    position: absolute;
    left: calc((var(--circle-container-diameter) - var(--container-height)) / 2 * -1);
    top: 50%;
    transform: translateY(-50%);
    border-radius: var(--container-radius);
    display: flex;
    transition: var(--circle-transition);
  }

  .theme-switch__power-icon {
    width: var(--sun-moon-diameter);
    height: var(--sun-moon-diameter);
    margin: auto;
    border-radius: 50%;
    background: var(--neon-off);
    position: relative;
    transition: var(--transition);
  }

  .theme-switch__power-icon::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 40%;
    border: 2px solid #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition);
  }

  .theme-switch__power-icon::after {
    content: '';
    position: absolute;
    top: 30%;
    left: 50%;
    width: 2px;
    height: 20%;
    background: #fff;
    transform: translateX(-50%);
    transition: var(--transition);
  }

  .theme-switch__data-stream {
    position: absolute;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, var(--neon-off), transparent);
    opacity: 0.5;
    transition: var(--transition);
  }

  /* Actions */
  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-night-bg);
    box-shadow: 0 0 20px var(--neon-glow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circuit {
    opacity: 1;
    background-color: var(--neon-glow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
    left: calc(100% - var(--circle-container-diameter));
    transform: translateY(-50%);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__power-icon {
    background: var(--neon-glow);
    box-shadow: 0 0 15px var(--neon-glow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__data-stream {
    background: linear-gradient(to bottom, transparent, var(--neon-glow), transparent);
    animation: dataFlow 2s linear infinite;
  }

  @keyframes dataFlow {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;

const Switch_52: React.FC<SwitchProps> = ({ checked = false, onChange, disabled = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  if (!mounted) {
    return null;
  }

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
          <div className="theme-switch__circuit" />
          {[...Array(5)].map((_, i) => (
            <div
              key={`stream-${i}`}
              className="theme-switch__data-stream"
              style={{
                left: `${20 + i * 20}%`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
          <div className="theme-switch__circle-container">
            <div className="theme-switch__power-icon" />
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

export default Switch_52; 