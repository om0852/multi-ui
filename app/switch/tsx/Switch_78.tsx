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
          <span className="circuit-container">
            <span className="circuit-board"></span>
            <span className="circuit-path p1"></span>
            <span className="circuit-path p2"></span>
            <span className="circuit-path p3"></span>
            <span className="circuit-node n1"></span>
            <span className="circuit-node n2"></span>
            <span className="circuit-node n3"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --circuit: #2c3e50;
    --path: #27ae60;
    --path-active: #e74c3c;
    --node: #f1c40f;
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
    background-color: var(--circuit);
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .circuit-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .circuit-board {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #34495e;
    border-radius: 50%;
    border: 2px solid var(--circuit);
  }

  .circuit-path {
    position: absolute;
    background-color: var(--path);
    transition: 0.4s;
  }

  .p1 {
    width: 2px;
    height: 60%;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
  }

  .p2 {
    width: 60%;
    height: 2px;
    left: 20%;
    top: 50%;
    transform: translateY(-50%);
  }

  .p3 {
    width: 2px;
    height: 40%;
    left: 80%;
    top: 30%;
    transform: translateX(-50%);
  }

  .circuit-node {
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: var(--node);
    border-radius: 50%;
    transition: 0.4s;
  }

  .n1 {
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 1.5s infinite;
  }

  .n2 {
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    animation: pulse 1.5s infinite 0.5s;
  }

  .n3 {
    top: 70%;
    left: 80%;
    transform: translate(-50%, -50%);
    animation: pulse 1.5s infinite 1s;
  }

  .toggle:checked + .slider {
    background-color: #2c3e50;
  }

  .toggle:checked + .slider .circuit-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .circuit-path {
    background-color: var(--path-active);
    box-shadow: 0 0 5px var(--path-active);
  }

  .toggle:checked + .slider .circuit-node {
    background-color: var(--path-active);
    box-shadow: 0 0 5px var(--path-active);
  }

  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.5; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }

  .slider:hover .circuit-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .circuit-node {
    animation-duration: 0.75s;
  }
`;

export default Switch; 