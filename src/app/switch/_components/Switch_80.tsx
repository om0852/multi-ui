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
          <span className="wave-container">
            <span className="wave-circle"></span>
            <span className="wave w1"></span>
            <span className="wave w2"></span>
            <span className="wave w3"></span>
            <span className="particle p1"></span>
            <span className="particle p2"></span>
            <span className="particle p3"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --wave: #3498db;
    --wave-active: #2ecc71;
    --particle: rgba(52, 152, 219, 0.6);
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
    background-color: #ecf0f1;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .wave-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .wave-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--wave);
    border-radius: 50%;
    transition: 0.4s;
  }

  .wave {
    position: absolute;
    border: 2px solid var(--wave);
    border-radius: 50%;
    opacity: 0;
    transition: 0.4s;
  }

  .w1 {
    width: 100%;
    height: 100%;
    animation: wave 2s infinite;
  }

  .w2 {
    width: 100%;
    height: 100%;
    animation: wave 2s infinite 0.6s;
  }

  .w3 {
    width: 100%;
    height: 100%;
    animation: wave 2s infinite 1.2s;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--particle);
    border-radius: 50%;
    transition: 0.4s;
  }

  .p1 {
    top: 20%;
    left: 20%;
    animation: float 3s infinite;
  }

  .p2 {
    top: 60%;
    right: 20%;
    animation: float 3s infinite 1s;
  }

  .p3 {
    bottom: 20%;
    left: 50%;
    animation: float 3s infinite 2s;
  }

  .toggle:checked + .slider {
    background-color: #d5f5e3;
  }

  .toggle:checked + .slider .wave-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .wave-circle {
    background: var(--wave-active);
  }

  .toggle:checked + .slider .wave {
    border-color: var(--wave-active);
  }

  .toggle:checked + .slider .particle {
    background: rgba(46, 204, 113, 0.6);
  }

  @keyframes wave {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(4px, -4px);
    }
    50% {
      transform: translate(8px, 0);
    }
    75% {
      transform: translate(4px, 4px);
    }
  }

  .slider:hover .wave-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .wave {
    animation-duration: 1.5s;
  }

  .slider:hover .particle {
    animation-duration: 2s;
  }
`;

export default Switch; 