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
          <span className="plant-container">
            <span className="soil"></span>
            <span className="stem"></span>
            <span className="leaf l1"></span>
            <span className="leaf l2"></span>
            <span className="leaf l3"></span>
            <span className="flower"></span>
            <span className="petal p1"></span>
            <span className="petal p2"></span>
            <span className="petal p3"></span>
            <span className="petal p4"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --soil: #795548;
    --stem: #4caf50;
    --leaf: #81c784;
    --flower: #ffeb3b;
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
    background-color: #e8f5e9;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .plant-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .soil {
    position: absolute;
    width: 100%;
    height: 8px;
    bottom: 0;
    background: var(--soil);
    border-radius: 4px;
  }

  .stem {
    position: absolute;
    width: 2px;
    height: 0;
    bottom: 6px;
    left: 50%;
    background: var(--stem);
    transform-origin: bottom center;
    transition: height 0.4s ease-out;
  }

  .leaf {
    position: absolute;
    width: 8px;
    height: 4px;
    background: var(--leaf);
    border-radius: 4px 4px 0 4px;
    opacity: 0;
    transition: 0.4s;
  }

  .l1 {
    transform: rotate(-45deg);
    transform-origin: bottom right;
  }

  .l2 {
    transform: rotate(45deg) scaleX(-1);
    transform-origin: bottom left;
  }

  .l3 {
    transform: rotate(-45deg);
    transform-origin: bottom right;
  }

  .flower {
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--flower);
    border-radius: 50%;
    opacity: 0;
    transition: 0.4s;
  }

  .petal {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--flower);
    border-radius: 50%;
    opacity: 0;
    transition: 0.4s;
  }

  .toggle:checked + .slider {
    background-color: #c8e6c9;
  }

  .toggle:checked + .slider .plant-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .stem {
    height: 20px;
    animation: grow 0.4s ease-out forwards;
  }

  .toggle:checked + .slider .leaf {
    opacity: 1;
    animation: sprout 0.4s ease-out forwards;
  }

  .toggle:checked + .slider .flower {
    opacity: 1;
    animation: bloom 0.4s ease-out forwards;
  }

  .toggle:checked + .slider .petal {
    opacity: 1;
    animation: spread 0.4s ease-out forwards;
  }

  .l1 { top: 12px; left: 8px; animation-delay: 0.2s; }
  .l2 { top: 8px; right: 8px; animation-delay: 0.3s; }
  .l3 { top: 16px; right: 8px; animation-delay: 0.4s; }

  .flower { top: 2px; left: 10px; }

  .p1 { top: 0; left: 11px; }
  .p2 { top: 2px; left: 15px; }
  .p3 { top: 6px; left: 15px; }
  .p4 { top: 4px; left: 7px; }

  @keyframes grow {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
  }

  @keyframes sprout {
    from { transform: scale(0); }
    to { transform: scale(1); }
  }

  @keyframes bloom {
    from { transform: scale(0) rotate(0deg); }
    to { transform: scale(1) rotate(360deg); }
  }

  @keyframes spread {
    from { transform: scale(0) translate(0, 0); }
    to { transform: scale(1) translate(var(--tx, 0), var(--ty, 0)); }
  }

  .slider:hover .plant-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .leaf,
  .slider:hover .flower,
  .slider:hover .petal {
    filter: brightness(1.2);
  }
`;

export default Switch; 