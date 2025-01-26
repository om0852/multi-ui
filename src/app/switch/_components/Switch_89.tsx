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
          <span className="dragon-container">
            <span className="dragon"></span>
            <span className="scale s1"></span>
            <span className="scale s2"></span>
            <span className="scale s3"></span>
            <span className="flame f1"></span>
            <span className="flame f2"></span>
            <span className="flame f3"></span>
            <span className="eye"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --dragon: #8b0000;
    --scale: #a52a2a;
    --flame: #ff4500;
    --eye: #ffd700;
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
    background-color: #2c1810;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .dragon-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .dragon {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--dragon);
    border-radius: 50%;
    transition: 0.4s;
  }

  .scale {
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--scale);
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    opacity: 0.8;
    transition: 0.4s;
  }

  .s1 {
    top: 5px;
    left: 9px;
    transform: rotate(180deg);
  }

  .s2 {
    top: 12px;
    left: 5px;
    transform: rotate(210deg);
  }

  .s3 {
    top: 12px;
    right: 5px;
    transform: rotate(150deg);
  }

  .flame {
    position: absolute;
    width: 6px;
    height: 12px;
    background: var(--flame);
    border-radius: 50% 50% 20% 20%;
    opacity: 0;
    transition: 0.4s;
    filter: blur(1px);
  }

  .f1 {
    top: -8px;
    left: calc(50% - 3px);
  }

  .f2 {
    top: -6px;
    left: calc(50% - 6px);
    transform: rotate(-30deg);
  }

  .f3 {
    top: -6px;
    right: calc(50% - 6px);
    transform: rotate(30deg);
  }

  .eye {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--eye);
    border-radius: 50%;
    top: 10px;
    left: calc(50% - 3px);
    transition: 0.4s;

    &:before {
      content: '';
      position: absolute;
      width: 2px;
      height: 6px;
      background: black;
      left: 2px;
      border-radius: 1px;
    }
  }

  .toggle:checked + .slider {
    background-color: #4a1c14;
  }

  .toggle:checked + .slider .dragon-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .dragon {
    box-shadow: 0 0 15px var(--dragon);
  }

  .toggle:checked + .slider .scale {
    animation: pulse 1s infinite;
  }

  .toggle:checked + .slider .flame {
    opacity: 1;
    animation: flicker 0.5s infinite alternate;
  }

  .toggle:checked + .slider .eye {
    background: #ff0;
    box-shadow: 0 0 5px #ff0;
  }

  @keyframes pulse {
    0%, 100% { transform: rotate(var(--rotation, 180deg)) scale(1); }
    50% { transform: rotate(var(--rotation, 180deg)) scale(1.1); }
  }

  @keyframes flicker {
    0% { transform: rotate(var(--rotation, 0deg)) scale(1); opacity: 0.8; }
    100% { transform: rotate(var(--rotation, 0deg)) scale(1.2); opacity: 1; }
  }

  .slider:hover .dragon-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .flame {
    animation-duration: 0.3s;
  }

  .slider:hover .scale {
    animation-duration: 0.5s;
  }
`;

export default Switch; 