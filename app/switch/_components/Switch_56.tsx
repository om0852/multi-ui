'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    --container-void-bg: #0f172a;
    --container-cosmos-bg: #1e293b;
    --circle-container-diameter: 3.375em;
    --galaxy-diameter: 2.125em;
    --galaxy-color: #7c3aed;
    --galaxy-glow: rgba(124, 58, 237, 0.4);
    --star-color: #fff;
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
    background-color: var(--container-void-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);
    transition: var(--transition);
  }

  .theme-switch__starfield {
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(1px 1px at 20px 30px, var(--star-color), rgba(0,0,0,0)),
      radial-gradient(1px 1px at 40px 70px, var(--star-color), rgba(0,0,0,0)),
      radial-gradient(1px 1px at 50px 160px, var(--star-color), rgba(0,0,0,0)),
      radial-gradient(1px 1px at 90px 40px, var(--star-color), rgba(0,0,0,0)),
      radial-gradient(1px 1px at 130px 80px, var(--star-color), rgba(0,0,0,0));
    opacity: 0.3;
    transition: var(--transition);
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(124, 58, 237, 0.1);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: var(--container-radius);
    display: flex;
    transition: var(--circle-transition);
  }

  .theme-switch__galaxy {
    width: var(--galaxy-diameter);
    height: var(--galaxy-diameter);
    margin: auto;
    background: radial-gradient(circle at 30% 40%, 
      var(--galaxy-color),
      rgba(124, 58, 237, 0.5) 50%,
      transparent 100%
    );
    border-radius: 50%;
    position: relative;
    transition: var(--transition);
  }

  .theme-switch__galaxy::before {
    content: '';
    position: absolute;
    inset: 4px;
    background: radial-gradient(circle at 60% 60%,
      #fff,
      var(--galaxy-color) 50%,
      transparent 100%
    );
    border-radius: 50%;
    opacity: 0.8;
    filter: blur(2px);
  }

  .theme-switch__nebula {
    position: absolute;
    width: 30px;
    height: 30px;
    background: radial-gradient(circle at center,
      rgba(124, 58, 237, 0.8),
      transparent 70%
    );
    border-radius: 50%;
    opacity: 0;
    transition: var(--transition);
  }

  /* Actions */
  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-cosmos-bg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
    left: calc(100% - var(--circle-container-diameter));
    transform: translateY(-50%);
    background-color: var(--galaxy-glow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__galaxy {
    transform: scale(1.2) rotate(180deg);
    box-shadow: 0 0 25px var(--galaxy-glow);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__starfield {
    opacity: 1;
    animation: starTwinkle 4s linear infinite;
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__nebula {
    animation: nebulaFloat 3s ease-in-out infinite;
  }

  @keyframes starTwinkle {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes nebulaFloat {
    0% {
      transform: translate(0, 0) scale(0);
      opacity: 0;
    }
    50% {
      transform: translate(-20px, -20px) scale(1);
      opacity: 0.6;
    }
    100% {
      transform: translate(-40px, 0) scale(0);
      opacity: 0;
    }
  }
`;

const Switch_56: React.FC<SwitchProps> = ({ checked = false, onChange, disabled = false }) => {
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
          <div className="theme-switch__starfield" />
          {[...Array(5)].map((_, i) => (
            <div
              key={`nebula-${i}`}
              className="theme-switch__nebula"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.6}s`
              }}
            />
          ))}
          <div className="theme-switch__circle-container">
            <div className="theme-switch__galaxy" />
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

export default Switch_56; 