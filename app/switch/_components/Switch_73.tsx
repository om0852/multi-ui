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
          <span className="paper">
            <span className="fold top"></span>
            <span className="fold bottom"></span>
            <span className="fold left"></span>
            <span className="fold right"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --paper: #f5f5f5;
    --paper-dark: #e0e0e0;
    --shadow: rgba(0, 0, 0, 0.1);
    --accent: #ff9800;
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
    background-color: var(--paper);
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 
      inset 0 0 5px var(--shadow),
      0 2px 5px var(--shadow);
  }

  .paper {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background-color: var(--paper);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 4px;
    box-shadow: 0 2px 5px var(--shadow);
  }

  .fold {
    position: absolute;
    background-color: var(--paper-dark);
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .top {
    top: 0;
    left: 25%;
    width: 50%;
    height: 50%;
    transform-origin: top;
    transform: rotateX(0deg);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }

  .bottom {
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 50%;
    transform-origin: bottom;
    transform: rotateX(0deg);
    clip-path: polygon(0 100%, 100% 100%, 50% 0);
  }

  .left {
    left: 0;
    top: 25%;
    width: 50%;
    height: 50%;
    transform-origin: left;
    transform: rotateY(0deg);
    clip-path: polygon(0 0, 100% 50%, 0 100%);
  }

  .right {
    right: 0;
    top: 25%;
    width: 50%;
    height: 50%;
    transform-origin: right;
    transform: rotateY(0deg);
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
  }

  .toggle:checked + .slider {
    background-color: var(--accent);
  }

  .toggle:checked + .slider .paper {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .top {
    transform: rotateX(-180deg);
  }

  .toggle:checked + .slider .bottom {
    transform: rotateX(180deg);
  }

  .toggle:checked + .slider .left {
    transform: rotateY(-180deg);
  }

  .toggle:checked + .slider .right {
    transform: rotateY(180deg);
  }

  .slider:hover .paper {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .fold {
    background-color: ${({ $isChecked }) => 
      $isChecked 
        ? 'var(--accent)' 
        : 'var(--paper-dark)'
    };
    filter: brightness(1.1);
  }
`;

export default Switch; 