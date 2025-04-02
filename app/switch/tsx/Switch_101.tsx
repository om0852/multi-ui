import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked = false, onChange }) => {
  return (
    <StyledWrapper>
      <label className="rocker">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="slider">
          <span className="switch-left">On</span>
          <span className="switch-right">Off</span>
          <div className="slider-tab"></div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .rocker {
    display: inline-block;
    position: relative;
    width: 6em;
    height: 2.4em;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .rocker input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f0f9ff 0%, #e6f3ff 100%);
    border-radius: 1.2em;
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.1),
      inset 0 -2px 4px rgba(0, 0, 0, 0.05),
      inset 0 2px 4px rgba(255, 255, 255, 0.5);
    overflow: hidden;
  }

  .slider-tab {
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: calc(50% - 0.4em);
    height: calc(100% - 0.4em);
    background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
    border-radius: 1em;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.1),
      inset 0 -2px 4px rgba(0, 0, 0, 0.05);
    z-index: 1;
  }

  .switch-left,
  .switch-right {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    z-index: 2;
  }

  .switch-left {
    left: 0;
    color: #3b82f6;
    opacity: 0;
  }

  .switch-right {
    right: 0;
    color: #94a3b8;
  }

  /* Checked State */
  input:checked ~ .slider .slider-tab {
    transform: translateX(100%);
  }

  input:checked ~ .slider .switch-left {
    opacity: 1;
  }

  input:checked ~ .slider .switch-right {
    opacity: 0;
  }

  /* Hover States */
  .rocker:hover .slider {
    background: linear-gradient(90deg, #e6f3ff 0%, #dceeff 100%);
  }

  .rocker:hover .slider-tab {
    background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
  }

  /* Focus States */
  input:focus ~ .slider {
    outline: 2px solid #3b82f6;
    outline-offset: 0.1em;
  }

  /* Active/Pressed State */
  .rocker:active .slider-tab {
    transform: scale(0.97);
  }

  /* Animation */
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  .switch-left,
  .switch-right {
    animation: slideOut 0.3s ease forwards;
  }

  input:checked ~ .slider .switch-left {
    animation: slideIn 0.3s ease forwards;
  }

  input:checked ~ .slider .switch-right {
    animation: slideOut 0.3s ease forwards;
  }
`;

export default Switch; 