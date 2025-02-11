import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

interface StyledWrapperProps {
  $checked: boolean;
}

const Switch: React.FC<SwitchProps> = ({ checked = false, onChange }) => {
  return (
    <StyledWrapper $checked={checked}>
      <label className="rocker">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="switch-body">
          <div className="switch-front">
            <span>Off</span>
          </div>
          <div className="switch-back">
            <span>On</span>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .rocker {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    perspective: 1000px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    cursor: pointer;
  }

  .rocker input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch-body {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .switch-front,
  .switch-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 0.6em;
  }

  .switch-front {
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    color: #666;
    box-shadow: 
      4px 4px 8px rgba(0, 0, 0, 0.1),
      -4px -4px 8px rgba(255, 255, 255, 0.9);
  }

  .switch-back {
    background: linear-gradient(145deg, #3b82f6, #2563eb);
    color: white;
    transform: rotateY(180deg);
    box-shadow: 
      4px 4px 8px rgba(0, 0, 0, 0.1),
      -4px -4px 8px rgba(255, 255, 255, 0.1);
  }

  /* Checked State */
  input:checked ~ .switch-body {
    transform: rotateY(180deg);
  }

  /* Hover States */
  .rocker:hover .switch-front {
    background: linear-gradient(145deg, #f0f0f0, #ffffff);
  }

  .rocker:hover .switch-back {
    background: linear-gradient(145deg, #4287f5, #2b6feb);
  }

  /* Focus States */
  input:focus ~ .switch-body {
    outline: 2px solid #3b82f6;
    outline-offset: 0.2em;
  }

  /* Animation */
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(0.97); }
    100% { transform: scale(1); }
  }

  .switch-front,
  .switch-back {
    animation: pulse 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Active/Pressed State */
  .rocker:active .switch-body {
    transform: scale(0.95) rotateY(${({ $checked }) => $checked ? '180deg' : '0deg'});
  }

  /* Shadow Animation */
  .switch-front::after,
  .switch-back::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.6em;
    transition: opacity 0.3s ease;
    opacity: 0;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .rocker:hover .switch-front::after,
  .rocker:hover .switch-back::after {
    opacity: 1;
  }
`;

export default Switch; 