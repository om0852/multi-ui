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
          <span className="celestial">
            <span className="rays"></span>
            <span className="craters"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --day: #FFB300;
    --night: #5C6BC0;
    --day-bg: #FFF8E1;
    --night-bg: #1A237E;
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
    background-color: var(--day-bg);
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .celestial {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background-color: var(--day);
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), background-color 0.4s;
    box-shadow: 0 0 10px rgba(255, 179, 0, 0.4);
  }

  .rays {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.4s;
  }

  .rays:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-conic-gradient(
      from 0deg,
      transparent 0deg,
      var(--day) 20deg,
      transparent 40deg
    );
    animation: rotate 10s linear infinite;
  }

  .craters {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.4s;
  }

  .craters:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    top: 25%;
    left: 25%;
  }

  .craters:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    top: 45%;
    right: 25%;
  }

  .toggle:checked + .slider {
    background-color: var(--night-bg);
  }

  .toggle:checked + .slider .celestial {
    background-color: var(--night);
    transform: translateX(34px);
    box-shadow: 0 0 15px rgba(92, 107, 192, 0.4);
  }

  .toggle:checked + .slider .rays {
    opacity: 0;
    transform: scale(0.5);
  }

  .toggle:checked + .slider .craters {
    opacity: 1;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .slider:hover .celestial {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
    box-shadow: ${({ $isChecked }) => 
      $isChecked 
        ? '0 0 20px rgba(92, 107, 192, 0.6)' 
        : '0 0 20px rgba(255, 179, 0, 0.6)'
    };
  }
`;

export default Switch; 