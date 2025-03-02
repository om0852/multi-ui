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
          <span className="portal">
            <span className="vortex"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    --portal-blue: #00BCD4;
    --portal-orange: #FF5722;
    --bg: #263238;
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
    background-color: var(--bg);
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .portal {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background: var(--portal-blue);
    border-radius: 50%;
    transition: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .vortex {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      transparent,
      var(--portal-blue) 45deg,
      transparent 90deg,
      transparent 180deg,
      var(--portal-blue) 225deg,
      transparent 270deg,
      transparent 360deg
    );
    animation: spin 2s linear infinite;
  }

  .vortex:before {
    content: '';
    position: absolute;
    inset: 6px;
    background: var(--bg);
    border-radius: 50%;
    z-index: 1;
  }

  .toggle:checked + .slider .portal {
    transform: translateX(34px);
    background: var(--portal-orange);
  }

  .toggle:checked + .slider .vortex {
    background: conic-gradient(
      from 0deg,
      transparent,
      var(--portal-orange) 45deg,
      transparent 90deg,
      transparent 180deg,
      var(--portal-orange) 225deg,
      transparent 270deg,
      transparent 360deg
    );
    animation: spin 1s linear infinite reverse;
  }

  .portal:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8) 0%,
      transparent 70%
    );
    transform: scale(0);
    transition: 0.3s;
  }

  .toggle:checked + .slider .portal:after {
    transform: scale(1);
    animation: flash 0.5s;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes flash {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }

  .slider:hover .portal {
    animation: wobble 0.5s ease-in-out;
  }

  @keyframes wobble {
    0%, 100% { transform: translateX(var(--x, 0)) scale(1); }
    50% { transform: translateX(var(--x, 0)) scale(1.1); }
  }
`;

export default Switch; 