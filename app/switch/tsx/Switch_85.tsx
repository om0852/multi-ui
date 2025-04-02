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
          <span className="robot-container">
            <span className="robot-head"></span>
            <span className="antenna a1"></span>
            <span className="antenna a2"></span>
            <span className="eye e1"></span>
            <span className="eye e2"></span>
            <span className="mouth"></span>
            <span className="bolt b1"></span>
            <span className="bolt b2"></span>
            <span className="scan-line"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --robot: #95a5a6;
    --eye: #3498db;
    --eye-active: #e74c3c;
    --scan: rgba(52, 152, 219, 0.3);
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
    background-color: #2c3e50;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .robot-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .robot-head {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--robot);
    border-radius: 6px;
    transition: 0.4s;
  }

  .antenna {
    position: absolute;
    width: 2px;
    height: 6px;
    background: var(--robot);
    top: -4px;
    transition: 0.4s;
  }

  .a1 {
    left: 8px;
    transform: rotate(-30deg);
  }

  .a2 {
    right: 8px;
    transform: rotate(30deg);
  }

  .eye {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--eye);
    border-radius: 50%;
    top: 8px;
    transition: 0.4s;
  }

  .e1 {
    left: 6px;
  }

  .e2 {
    right: 6px;
  }

  .mouth {
    position: absolute;
    width: 10px;
    height: 2px;
    background: var(--eye);
    bottom: 6px;
    left: calc(50% - 5px);
    transition: 0.4s;
  }

  .bolt {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--robot);
    border-radius: 50%;
    bottom: 2px;
    transition: 0.4s;
  }

  .b1 {
    left: 4px;
  }

  .b2 {
    right: 4px;
  }

  .scan-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--scan);
    top: 0;
    transform: translateY(-100%);
    opacity: 0;
    transition: 0.4s;
  }

  .toggle:checked + .slider {
    background-color: #34495e;
  }

  .toggle:checked + .slider .robot-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .robot-head {
    box-shadow: 0 0 10px var(--robot);
  }

  .toggle:checked + .slider .eye {
    background: var(--eye-active);
    animation: blink 2s infinite;
  }

  .toggle:checked + .slider .mouth {
    background: var(--eye-active);
    height: 4px;
    border-radius: 2px;
  }

  .toggle:checked + .slider .antenna {
    height: 8px;
    animation: signal 1s infinite;
  }

  .toggle:checked + .slider .bolt {
    animation: rotate 2s linear infinite;
  }

  .toggle:checked + .slider .scan-line {
    opacity: 1;
    animation: scan 2s linear infinite;
  }

  @keyframes blink {
    0%, 45%, 55%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.1); }
  }

  @keyframes signal {
    0%, 100% { transform: rotate(var(--rotation, -30deg)) scaleY(1); }
    50% { transform: rotate(var(--rotation, -30deg)) scaleY(0.8); }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes scan {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(100%); opacity: 0; }
  }

  .slider:hover .robot-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .eye {
    animation-duration: 1s;
  }

  .slider:hover .antenna {
    animation-duration: 0.5s;
  }
`;

export default Switch; 