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
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    --neon-off: #FF1493;
    --neon-on: #00ff00;
    --bg-off: rgba(255, 20, 147, 0.2);
    --bg-on: rgba(0, 255, 0, 0.2);
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
    background-color: var(--bg-off);
    transition: 0.4s;
    border-radius: 18px;
    border: 2px solid var(--neon-off);
    box-shadow: 0 0 10px var(--neon-off);
  }

  .slider:before {
    content: "OFF";
    position: absolute;
    height: 28px;
    width: 28px;
    left: 2px;
    bottom: 2px;
    background-color: var(--neon-off);
    transition: 0.4s;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    animation: pulseOff 1.5s infinite;
  }

  .toggle:checked + .slider {
    background-color: var(--bg-on);
    border-color: var(--neon-on);
    box-shadow: 0 0 15px var(--neon-on);
  }

  .toggle:checked + .slider:before {
    content: "ON";
    background-color: var(--neon-on);
    transform: translateX(34px);
    animation: pulseOn 1.5s infinite;
  }

  @keyframes pulseOff {
    0% { box-shadow: 0 0 0 0 rgba(255, 20, 147, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(255, 20, 147, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 20, 147, 0); }
  }

  @keyframes pulseOn {
    0% { box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(0, 255, 0, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); }
  }
`;

export default Switch; 