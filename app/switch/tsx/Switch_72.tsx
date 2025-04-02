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
          <span className="pixel-ball">
            <span className="pixel"></span>
            <span className="pixel"></span>
            <span className="pixel"></span>
            <span className="pixel"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --off: #e74c3c;
    --on: #2ecc71;
    --bg-off: #2c3e50;
    --bg-on: #27ae60;
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
    border-radius: 4px;
    overflow: hidden;
    border: 2px solid #000;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .pixel-ball {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 2px;
    background-color: var(--off);
    transition: transform 0.4s steps(8);
    border-radius: 4px;
    border: 2px solid #000;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 2px;
  }

  .pixel {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 1px;
    animation: pixelate 0.5s steps(4) infinite;
  }

  .toggle:checked + .slider {
    background-color: var(--bg-on);
  }

  .toggle:checked + .slider .pixel-ball {
    transform: translateX(32px);
    background-color: var(--on);
  }

  .toggle:checked + .slider .pixel {
    animation: pixelate 0.25s steps(4) infinite;
  }

  @keyframes pixelate {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .slider:hover .pixel-ball {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(32px) scale(1.1)' 
        : 'scale(1.1)'
    };
    animation: shake 0.25s steps(2) infinite;
  }

  @keyframes shake {
    0%, 100% { transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(32px) rotate(0deg)' 
        : 'rotate(0deg)'
    }; }
    50% { transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(32px) rotate(10deg)' 
        : 'rotate(10deg)'
    }; }
  }
`;

export default Switch; 