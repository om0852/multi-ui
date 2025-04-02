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
          <span className="dna">
            <span className="strand strand1"></span>
            <span className="strand strand2"></span>
            <span className="base base1"></span>
            <span className="base base2"></span>
            <span className="base base3"></span>
            <span className="base base4"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --strand-1: #3498db;
    --strand-2: #e74c3c;
    --base: #2ecc71;
    --bg: #ecf0f1;
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
    background-color: var(--bg);
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .dna {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background-color: transparent;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50%;
  }

  .strand {
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: var(--strand-1);
    left: calc(50% - 1px);
  }

  .strand2 {
    background-color: var(--strand-2);
  }

  .base {
    position: absolute;
    width: 8px;
    height: 2px;
    background-color: var(--base);
    left: calc(50% - 4px);
    transform-origin: center;
  }

  .base1 { top: 20%; }
  .base2 { top: 40%; }
  .base3 { top: 60%; }
  .base4 { top: 80%; }

  .toggle:checked + .slider {
    background-color: #34495e;
  }

  .toggle:checked + .slider .dna {
    transform: translateX(34px);
  }

  .strand1 {
    animation: twist1 2s linear infinite;
  }

  .strand2 {
    animation: twist2 2s linear infinite;
  }

  .base {
    animation: rotate 2s linear infinite;
  }

  .base1 { animation-delay: 0s; }
  .base2 { animation-delay: 0.5s; }
  .base3 { animation-delay: 1s; }
  .base4 { animation-delay: 1.5s; }

  @keyframes twist1 {
    0% { transform: translateY(-2px) rotateX(0deg); }
    100% { transform: translateY(2px) rotateX(360deg); }
  }

  @keyframes twist2 {
    0% { transform: translateY(2px) rotateX(180deg); }
    100% { transform: translateY(-2px) rotateX(540deg); }
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(360deg); }
  }

  .toggle:checked + .slider .strand1 {
    animation-duration: 1s;
    background-color: var(--strand-2);
  }

  .toggle:checked + .slider .strand2 {
    animation-duration: 1s;
    background-color: var(--strand-1);
  }

  .toggle:checked + .slider .base {
    animation-duration: 1s;
    background-color: #f1c40f;
  }

  .slider:hover .dna {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .strand1,
  .slider:hover .strand2 {
    animation-duration: 0.5s;
  }

  .slider:hover .base {
    animation-duration: 0.5s;
  }
`;

export default Switch; 