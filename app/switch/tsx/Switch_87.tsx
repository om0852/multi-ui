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
          <span className="candy-container">
            <span className="lollipop"></span>
            <span className="stripe s1"></span>
            <span className="stripe s2"></span>
            <span className="stripe s3"></span>
            <span className="sprinkle sp1"></span>
            <span className="sprinkle sp2"></span>
            <span className="sprinkle sp3"></span>
            <span className="sprinkle sp4"></span>
            <span className="sparkle"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --candy: #ff69b4;
    --stripe: #ffffff;
    --sprinkle1: #ffeb3b;
    --sprinkle2: #4caf50;
    --sprinkle3: #2196f3;
    --sprinkle4: #9c27b0;
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
    background-color: #fce4ec;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .candy-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .lollipop {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--candy);
    border-radius: 50%;
    transition: 0.4s;
    overflow: hidden;
  }

  .stripe {
    position: absolute;
    height: 100%;
    width: 4px;
    background: var(--stripe);
    opacity: 0.5;
    transform: rotate(45deg);
    transition: 0.4s;
  }

  .s1 { left: 20%; animation: slide 3s linear infinite; }
  .s2 { left: 50%; animation: slide 3s linear infinite 1s; }
  .s3 { left: 80%; animation: slide 3s linear infinite 2s; }

  .sprinkle {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    opacity: 0;
    transition: 0.4s;
  }

  .sp1 {
    background: var(--sprinkle1);
    top: 20%;
    left: 20%;
    transform: rotate(45deg);
  }

  .sp2 {
    background: var(--sprinkle2);
    top: 20%;
    right: 20%;
    transform: rotate(-45deg);
  }

  .sp3 {
    background: var(--sprinkle3);
    bottom: 20%;
    left: 20%;
    transform: rotate(-45deg);
  }

  .sp4 {
    background: var(--sprinkle4);
    bottom: 20%;
    right: 20%;
    transform: rotate(45deg);
  }

  .sparkle {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%);
    opacity: 0;
    mix-blend-mode: overlay;
    transition: 0.4s;
  }

  .toggle:checked + .slider {
    background-color: #f8bbd0;
  }

  .toggle:checked + .slider .candy-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .lollipop {
    transform: rotate(360deg);
    box-shadow: 0 0 15px var(--candy);
  }

  .toggle:checked + .slider .stripe {
    animation: slide 2s linear infinite;
  }

  .toggle:checked + .slider .sprinkle {
    opacity: 1;
    animation: bounce 1s infinite;
  }

  .toggle:checked + .slider .sparkle {
    opacity: 1;
    animation: shine 2s infinite;
  }

  @keyframes slide {
    0% { transform: rotate(45deg) translateY(-100%); }
    100% { transform: rotate(45deg) translateY(100%); }
  }

  @keyframes bounce {
    0%, 100% { transform: scale(1) rotate(var(--rotation, 45deg)); }
    50% { transform: scale(1.2) rotate(var(--rotation, 45deg)); }
  }

  @keyframes shine {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
  }

  .slider:hover .candy-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .sprinkle {
    animation-duration: 0.5s;
  }

  .slider:hover .stripe {
    animation-duration: 1s;
  }
`;

export default Switch; 