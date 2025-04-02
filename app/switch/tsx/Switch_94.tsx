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
          <span className="compass-container">
            <span className="compass"></span>
            <span className="needle n1"></span>
            <span className="needle n2"></span>
            <span className="marker m1">N</span>
            <span className="marker m2">S</span>
            <span className="marker m3">E</span>
            <span className="marker m4">W</span>
            <span className="ring"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --compass: #455a64;
    --needle-n: #f44336;
    --needle-s: #ffffff;
    --marker: #90a4ae;
    --ring: #78909c;
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
    background-color: #263238;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .compass-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .compass {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--compass);
    border-radius: 50%;
    transition: 0.4s;
  }

  .needle {
    position: absolute;
    width: 2px;
    height: 50%;
    left: calc(50% - 1px);
    transform-origin: bottom center;
    transition: 0.4s;
  }

  .n1 {
    background: var(--needle-n);
    top: 0;
  }

  .n2 {
    background: var(--needle-s);
    bottom: 0;
  }

  .marker {
    position: absolute;
    color: var(--marker);
    font-size: 8px;
    font-weight: bold;
    transition: 0.4s;
    opacity: 0.7;
  }

  .m1 { top: 2px; left: calc(50% - 3px); }
  .m2 { bottom: 2px; left: calc(50% - 3px); }
  .m3 { top: calc(50% - 4px); right: 2px; }
  .m4 { top: calc(50% - 4px); left: 2px; }

  .ring {
    position: absolute;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    border: 2px solid var(--ring);
    border-radius: 50%;
    opacity: 0;
    transition: 0.4s;
  }

  .toggle:checked + .slider {
    background-color: #37474f;
  }

  .toggle:checked + .slider .compass-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .compass {
    box-shadow: 0 0 10px var(--compass);
  }

  .toggle:checked + .slider .n1 {
    transform: rotate(180deg);
  }

  .toggle:checked + .slider .n2 {
    transform: rotate(180deg);
  }

  .toggle:checked + .slider .marker {
    animation: pulse 2s infinite;
  }

  .toggle:checked + .slider .ring {
    opacity: 1;
    animation: rotate 4s linear infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .slider:hover .compass-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .needle {
    animation: wobble 0.5s ease-in-out;
  }

  @keyframes wobble {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
  }
`;

export default Switch; 