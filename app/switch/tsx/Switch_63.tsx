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
          <span className="liquid"></span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    --primary: #6b48ff;
    --secondary: #1ee3cf;
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
    background-color: #f0f0f0;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
    border: 2px solid var(--primary);
  }

  .liquid {
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-75%);
    border-radius: 50%;
    filter: blur(2px);
  }

  .slider:before {
    content: "";
    position: absolute;
    height: 28px;
    width: 28px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50%;
    z-index: 2;
    border: 2px solid var(--primary);
  }

  .toggle:checked + .slider .liquid {
    transform: translateX(0%);
    animation: wave 1s infinite;
  }

  .toggle:checked + .slider:before {
    transform: translateX(34px);
    border-color: white;
  }

  @keyframes wave {
    0% {
      transform: translateX(0%) rotate(0deg);
    }
    50% {
      transform: translateX(0%) rotate(180deg);
    }
    100% {
      transform: translateX(0%) rotate(360deg);
    }
  }
`;

export default Switch; 