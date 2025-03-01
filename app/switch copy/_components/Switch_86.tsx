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
          <span className="space-container">
            <span className="planet"></span>
            <span className="ring r1"></span>
            <span className="ring r2"></span>
            <span className="star s1"></span>
            <span className="star s2"></span>
            <span className="star s3"></span>
            <span className="meteor m1"></span>
            <span className="meteor m2"></span>
            <span className="nebula"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --planet: #3498db;
    --ring: #e67e22;
    --star: #f1c40f;
    --nebula: rgba(142, 68, 173, 0.2);
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

  .space-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .planet {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--planet);
    border-radius: 50%;
    transition: 0.4s;

    &:before {
      content: '';
      position: absolute;
      width: 120%;
      height: 120%;
      top: -10%;
      left: -10%;
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%);
    }
  }

  .ring {
    position: absolute;
    border: 2px solid var(--ring);
    border-radius: 50%;
    opacity: 0.6;
    transition: 0.4s;
  }

  .r1 {
    width: 140%;
    height: 40%;
    left: -20%;
    top: 30%;
    transform: rotate(-15deg);
  }

  .r2 {
    width: 120%;
    height: 30%;
    left: -10%;
    top: 35%;
    transform: rotate(15deg);
  }

  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: var(--star);
    border-radius: 50%;
    filter: blur(0.5px);
    animation: twinkle 2s infinite;
  }

  .s1 { top: 20%; left: -10%; animation-delay: 0s; }
  .s2 { top: 50%; right: -10%; animation-delay: 0.3s; }
  .s3 { bottom: 20%; left: 50%; animation-delay: 0.6s; }

  .meteor {
    position: absolute;
    width: 4px;
    height: 1px;
    background: linear-gradient(to right, var(--star), transparent);
    opacity: 0;
    transition: 0.4s;
  }

  .m1 {
    top: 30%;
    left: -20%;
    transform: rotate(45deg);
  }

  .m2 {
    bottom: 40%;
    right: -20%;
    transform: rotate(-45deg);
  }

  .nebula {
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, var(--nebula) 0%, transparent 70%);
    top: -50%;
    left: -50%;
    opacity: 0;
    mix-blend-mode: screen;
    transition: 0.4s;
  }

  .toggle:checked + .slider {
    background-color: #1a1a2e;
  }

  .toggle:checked + .slider .space-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .planet {
    transform: scale(0.9);
    box-shadow: 0 0 20px var(--planet);
  }

  .toggle:checked + .slider .ring {
    animation: orbit 4s linear infinite;
  }

  .toggle:checked + .slider .meteor {
    opacity: 1;
    animation: shoot 2s linear infinite;
  }

  .toggle:checked + .slider .nebula {
    opacity: 1;
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(0.5); }
  }

  @keyframes orbit {
    from { transform: rotate(var(--rotation, 0deg)); }
    to { transform: rotate(calc(var(--rotation, 0deg) + 360deg)); }
  }

  @keyframes shoot {
    0% { transform: translateX(0) var(--rotation, rotate(45deg)); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(40px) var(--rotation, rotate(45deg)); opacity: 0; }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.2); opacity: 0.4; }
  }

  .slider:hover .space-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .star {
    animation-duration: 1s;
  }

  .slider:hover .meteor {
    animation-duration: 1s;
  }
`;

export default Switch; 