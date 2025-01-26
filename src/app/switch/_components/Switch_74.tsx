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
          <span className="clock">
            <span className="hand hour"></span>
            <span className="hand minute"></span>
            <span className="hand second"></span>
            <span className="center"></span>
            <span className="marks"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --clock-face: #f0f0f0;
    --clock-mark: #333;
    --hand-hour: #555;
    --hand-minute: #666;
    --hand-second: #ff5252;
    --center: #333;
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
    background-color: #ddd;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .clock {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background-color: var(--clock-face);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50%;
    border: 2px solid var(--clock-mark);
  }

  .hand {
    position: absolute;
    background-color: var(--hand-hour);
    transform-origin: 50% 100%;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hour {
    height: 6px;
    width: 2px;
    left: calc(50% - 1px);
    bottom: 50%;
    background-color: var(--hand-hour);
    transform: rotate(0deg);
  }

  .minute {
    height: 8px;
    width: 1px;
    left: calc(50% - 0.5px);
    bottom: 50%;
    background-color: var(--hand-minute);
    transform: rotate(0deg);
  }

  .second {
    height: 10px;
    width: 1px;
    left: calc(50% - 0.5px);
    bottom: 50%;
    background-color: var(--hand-second);
    transform: rotate(0deg);
  }

  .center {
    position: absolute;
    width: 4px;
    height: 4px;
    left: calc(50% - 2px);
    top: calc(50% - 2px);
    background-color: var(--center);
    border-radius: 50%;
  }

  .marks {
    position: absolute;
    width: 100%;
    height: 100%;
    &:before {
      content: '';
      position: absolute;
      width: 2px;
      height: 2px;
      background-color: var(--clock-mark);
      border-radius: 50%;
      top: 2px;
      left: calc(50% - 1px);
      box-shadow:
        0 22px 0 var(--clock-mark),
        11px 11px 0 var(--clock-mark),
        -11px 11px 0 var(--clock-mark);
    }
  }

  .toggle:checked + .slider {
    background-color: #4CAF50;
  }

  .toggle:checked + .slider .clock {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .hour {
    transform: rotate(360deg);
    transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .toggle:checked + .slider .minute {
    transform: rotate(720deg);
    transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .toggle:checked + .slider .second {
    transform: rotate(1080deg);
    transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slider:hover .clock {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .hand {
    background-color: var(--hand-second);
  }

  .slider:hover .hour {
    animation: tick 2s infinite linear;
  }

  .slider:hover .minute {
    animation: tick 1s infinite linear;
  }

  .slider:hover .second {
    animation: tick 0.5s infinite linear;
  }

  @keyframes tick {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export default Switch; 