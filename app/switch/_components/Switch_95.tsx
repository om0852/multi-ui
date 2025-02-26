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
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="slider">
          <span className="galaxy">
            <span className="core"></span>
            <span className="stars"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 36px;
  }

  input {
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
    background-color: #1a237e;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .galaxy {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background: rgba(103, 58, 183, 0.2);
    border-radius: 50%;
    transition: 0.4s;
  }

  .core {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, #673ab7 0%, transparent 70%);
    border-radius: 50%;
    transition: 0.4s;
  }

  .stars {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(white 1px, transparent 1px);
    background-size: 4px 4px;
    opacity: 0;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #311b92;
  }

  input:checked + .slider .galaxy {
    transform: translateX(34px) rotate(180deg);
  }

  input:checked + .slider .core {
    transform: scale(1.2);
    box-shadow: 0 0 10px #673ab7;
  }

  input:checked + .slider .stars {
    opacity: 1;
    animation: twinkle 2s infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .slider:hover .galaxy {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) rotate(180deg) scale(1.1)' 
        : 'scale(1.1)'
    };
  }
`;

export default Switch; 