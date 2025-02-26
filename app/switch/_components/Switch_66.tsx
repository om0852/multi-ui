import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input 
          type="checkbox" 
          className="toggle"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="slider">
          <span className="shape"></span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    --off-color: #FF9671;
    --on-color: #00C9A7;
    --size: 36px;
    position: relative;
    display: flex;
    width: 70px;
    height: var(--size);
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
    background-color: #f4f4f4;
    transition: 0.4s;
    border-radius: calc(var(--size) / 2);
  }

  .shape {
    position: absolute;
    height: calc(var(--size) - 8px);
    width: calc(var(--size) - 8px);
    left: 4px;
    bottom: 4px;
    background-color: var(--off-color);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 4px;
    transform: rotate(0deg);
  }

  .toggle:checked + .slider {
    background-color: #e8f5f3;
  }

  .toggle:checked + .slider .shape {
    transform: translateX(34px) rotate(405deg);
    background-color: var(--on-color);
    border-radius: 50%;
  }

  .shape:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: inherit;
    transition: 0.4s;
    opacity: 0;
    transform: scale(0);
  }

  .toggle:checked + .slider .shape:before {
    opacity: 0.5;
    transform: scale(1.5);
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.25;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }

  .slider:hover .shape {
    animation: wiggle 0.5s ease-in-out;
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-20deg); }
    75% { transform: rotate(20deg); }
  }
`;

export default Switch; 