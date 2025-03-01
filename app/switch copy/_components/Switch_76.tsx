import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

interface StyledWrapperProps {
  $isChecked: boolean;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <StyledWrapper $isChecked={checked}>
      <label className="switch">
        <input 
          type="checkbox" 
          className="toggle"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="slider">
          <span className="bubble-container">
            <span className="bubble main"></span>
            <span className="bubble small b1"></span>
            <span className="bubble small b2"></span>
            <span className="bubble small b3"></span>
            <span className="ripple"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --bubble: #00bcd4;
    --bubble-active: #4caf50;
    --water: rgba(0, 188, 212, 0.2);
    --water-active: rgba(76, 175, 80, 0.2);
    position: relative;
    display: flex;
    width: 70px;
    height: 36px;
  }

  .toggle {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--water);
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .bubble-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .bubble {
    position: absolute;
    background-color: var(--bubble);
    border-radius: 50%;
    transition: 0.4s;
  }

  .main {
    width: 28px;
    height: 28px;
    animation: float 2s ease-in-out infinite;
  }

  .small {
    width: 8px;
    height: 8px;
    opacity: 0.6;
  }

  .b1 {
    top: -4px;
    left: 2px;
    animation: bubble1 3s ease-in-out infinite;
  }

  .b2 {
    top: 6px;
    right: -2px;
    animation: bubble2 2.5s ease-in-out infinite;
  }

  .b3 {
    bottom: 0;
    left: -2px;
    animation: bubble3 2.8s ease-in-out infinite;
  }

  .ripple {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--bubble);
    border-radius: 50%;
    animation: ripple 2s linear infinite;
    opacity: 0;
  }

  .toggle:checked + .slider {
    background-color: var(--water-active);
  }

  .toggle:checked + .slider .bubble-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .bubble {
    background-color: var(--bubble-active);
  }

  .toggle:checked + .slider .ripple {
    border-color: var(--bubble-active);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-2px) scale(0.95); }
  }

  @keyframes bubble1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(4px, -4px) scale(0.8); }
  }

  @keyframes bubble2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-3px, -5px) scale(0.9); }
  }

  @keyframes bubble3 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(5px, 3px) scale(0.85); }
  }

  @keyframes ripple {
    0% { transform: scale(1); opacity: 0.4; }
    100% { transform: scale(1.5); opacity: 0; }
  }

  .slider:hover .bubble-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .small {
    animation-duration: 1s;
  }

  .slider:hover .ripple {
    animation-duration: 1s;
  }
`;

export default Switch; 