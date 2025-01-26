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
          <span className="neon-container">
            <span className="neon-circle"></span>
            <span className="glow g1"></span>
            <span className="glow g2"></span>
            <span className="flicker f1"></span>
            <span className="flicker f2"></span>
            <span className="flicker f3"></span>
            <span className="reflection"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --neon: #00ff00;
    --glow: rgba(0, 255, 0, 0.5);
    --flicker: rgba(0, 255, 0, 0.8);
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
    background-color: #1a1a1a;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .neon-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .neon-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--neon);
    border-radius: 50%;
    transition: 0.4s;
    filter: brightness(1.5);
  }

  .glow {
    position: absolute;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle at center, var(--glow) 0%, transparent 70%);
    top: -25%;
    left: -25%;
    opacity: 0;
    mix-blend-mode: screen;
    transition: 0.4s;
  }

  .g1 { animation-delay: 0s; }
  .g2 { animation-delay: 0.5s; }

  .flicker {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--flicker);
    border-radius: 50%;
    opacity: 0;
    mix-blend-mode: screen;
    transition: 0.1s;
  }

  .f1 { animation-delay: 0.1s; }
  .f2 { animation-delay: 0.2s; }
  .f3 { animation-delay: 0.3s; }

  .reflection {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.2) 45%, transparent 50%);
    border-radius: 50%;
    transition: 0.4s;
  }

  .toggle:checked + .slider {
    background-color: #000;
  }

  .toggle:checked + .slider .neon-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .neon-circle {
    box-shadow: 
      0 0 10px var(--neon),
      0 0 20px var(--neon),
      0 0 30px var(--neon);
  }

  .toggle:checked + .slider .glow {
    opacity: 1;
    animation: pulse 2s infinite;
  }

  .toggle:checked + .slider .flicker {
    animation: flicker 0.1s infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }

  @keyframes flicker {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.8; }
  }

  .slider:hover .neon-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .glow {
    animation-duration: 1s;
  }

  .slider:hover .flicker {
    animation-duration: 0.05s;
  }
`;

export default Switch; 