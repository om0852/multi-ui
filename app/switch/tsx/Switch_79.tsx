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
          <span className="gear-container">
            <span className="gear main"></span>
            <span className="gear small g1"></span>
            <span className="gear small g2"></span>
            <span className="gear small g3"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --gear-main: #95a5a6;
    --gear-small: #7f8c8d;
    --gear-active: #e67e22;
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
    background-color: #34495e;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .gear-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .gear {
    position: absolute;
    background-color: var(--gear-main);
    border-radius: 50%;
    transition: 0.4s;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      transform: rotate(30deg);
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      transform: rotate(60deg);
    }
  }

  .main {
    width: 28px;
    height: 28px;
    animation: rotate 4s linear infinite;
    
    &:before, &:after {
      clip-path: polygon(
        50% 0%, 63% 38%, 100% 38%, 69% 59%,
        82% 100%, 50% 75%, 18% 100%, 31% 59%,
        0% 38%, 37% 38%
      );
    }
  }

  .small {
    width: 14px;
    height: 14px;
    background-color: var(--gear-small);
    animation: rotate 4s linear infinite reverse;

    &:before, &:after {
      clip-path: polygon(
        50% 0%, 63% 38%, 100% 38%, 69% 59%,
        82% 100%, 50% 75%, 18% 100%, 31% 59%,
        0% 38%, 37% 38%
      );
    }
  }

  .g1 {
    top: -5px;
    left: 7px;
  }

  .g2 {
    top: 10px;
    right: -5px;
  }

  .g3 {
    bottom: -5px;
    left: 7px;
  }

  .toggle:checked + .slider {
    background-color: #2c3e50;
  }

  .toggle:checked + .slider .gear-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .gear {
    background-color: var(--gear-active);
    animation-duration: 2s;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .slider:hover .gear-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .gear {
    animation-duration: 1s;
  }
`;

export default Switch; 