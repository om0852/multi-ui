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
          <span className="rainbow-container">
            <span className="rainbow-circle"></span>
            <span className="rainbow-stripe r1"></span>
            <span className="rainbow-stripe r2"></span>
            <span className="rainbow-stripe r3"></span>
            <span className="rainbow-stripe r4"></span>
            <span className="rainbow-stripe r5"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --color-1: #ff0000;
    --color-2: #ff9900;
    --color-3: #ffff00;
    --color-4: #33cc33;
    --color-5: #3399ff;
    --color-6: #9933ff;
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
    background: linear-gradient(45deg, var(--color-1), var(--color-6));
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .rainbow-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .rainbow-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 50%;
    z-index: 2;
  }

  .rainbow-stripe {
    position: absolute;
    width: 200%;
    height: 4px;
    left: -50%;
    border-radius: 2px;
    animation: rainbow-wave 2s infinite linear;
  }

  .r1 { 
    background: var(--color-1);
    top: 10%;
    animation-delay: 0s;
  }

  .r2 { 
    background: var(--color-2);
    top: 30%;
    animation-delay: 0.2s;
  }

  .r3 { 
    background: var(--color-3);
    top: 50%;
    animation-delay: 0.4s;
  }

  .r4 { 
    background: var(--color-4);
    top: 70%;
    animation-delay: 0.6s;
  }

  .r5 { 
    background: var(--color-5);
    top: 90%;
    animation-delay: 0.8s;
  }

  .toggle:checked + .slider {
    background: linear-gradient(45deg, var(--color-6), var(--color-1));
  }

  .toggle:checked + .slider .rainbow-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .rainbow-stripe {
    animation-direction: reverse;
  }

  @keyframes rainbow-wave {
    0% { transform: translateX(0) scale(1); }
    50% { transform: translateX(25%) scale(0.9); }
    100% { transform: translateX(50%) scale(1); }
  }

  .slider:hover .rainbow-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .rainbow-stripe {
    animation-duration: 1s;
  }
`;

export default Switch; 