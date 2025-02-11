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
          <span className="crystal-container">
            <span className="crystal"></span>
            <span className="facet f1"></span>
            <span className="facet f2"></span>
            <span className="facet f3"></span>
            <span className="facet f4"></span>
            <span className="sparkle s1"></span>
            <span className="sparkle s2"></span>
            <span className="sparkle s3"></span>
            <span className="glow"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --crystal: #9c27b0;
    --facet: rgba(255, 255, 255, 0.3);
    --sparkle: rgba(255, 255, 255, 0.8);
    --glow: rgba(156, 39, 176, 0.4);
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
    background-color: #4a148c;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .crystal-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .crystal {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--crystal);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transition: 0.4s;
  }

  .facet {
    position: absolute;
    background: var(--facet);
    transition: 0.4s;
    opacity: 0;
  }

  .f1 {
    width: 50%;
    height: 50%;
    top: 0;
    left: 25%;
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  }

  .f2 {
    width: 50%;
    height: 50%;
    bottom: 0;
    left: 25%;
    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
  }

  .f3 {
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
  }

  .f4 {
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
  }

  .sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--sparkle);
    border-radius: 50%;
    opacity: 0;
    filter: blur(1px);
    transition: 0.4s;
  }

  .s1 { top: 20%; left: 20%; }
  .s2 { top: 50%; right: 20%; }
  .s3 { bottom: 20%; left: 50%; }

  .glow {
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, var(--glow) 0%, transparent 70%);
    top: -50%;
    left: -50%;
    opacity: 0;
    mix-blend-mode: screen;
    transition: 0.4s;
  }

  .toggle:checked + .slider {
    background-color: #7b1fa2;
  }

  .toggle:checked + .slider .crystal-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .crystal {
    transform: rotate(360deg);
    box-shadow: 
      0 0 10px var(--crystal),
      0 0 20px var(--crystal);
  }

  .toggle:checked + .slider .facet {
    opacity: 1;
    animation: shimmer 2s infinite;
  }

  .toggle:checked + .slider .sparkle {
    opacity: 1;
    animation: twinkle 1s infinite;
  }

  .toggle:checked + .slider .glow {
    opacity: 1;
    animation: pulse 2s infinite;
  }

  @keyframes shimmer {
    0%, 100% { transform: translateX(0) scale(1); opacity: 0.3; }
    50% { transform: translateX(2px) scale(1.1); opacity: 1; }
  }

  @keyframes twinkle {
    0%, 100% { transform: scale(1); opacity: 0; }
    50% { transform: scale(1.5); opacity: 1; }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.1); opacity: 0.6; }
  }

  .slider:hover .crystal-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .facet {
    animation-duration: 1s;
  }

  .slider:hover .sparkle {
    animation-duration: 0.5s;
  }
`;

export default Switch; 