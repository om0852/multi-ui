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
          <span className="pixel-container">
            <span className="pixel-circle"></span>
            <span className="pixel p1"></span>
            <span className="pixel p2"></span>
            <span className="pixel p3"></span>
            <span className="pixel p4"></span>
            <span className="pixel p5"></span>
            <span className="pixel p6"></span>
            <span className="pixel p7"></span>
            <span className="pixel p8"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --pixel-main: #ff4081;
    --pixel-1: #ff1744;
    --pixel-2: #f50057;
    --pixel-3: #d500f9;
    --pixel-4: #651fff;
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
    background-color: #1a1a1a;
    transition: 0.4s steps(10);
    border-radius: 18px;
    overflow: hidden;
  }

  .pixel-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s steps(10);
  }

  .pixel-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--pixel-main);
    clip-path: polygon(
      25% 0%, 75% 0%, 100% 25%, 100% 75%,
      75% 100%, 25% 100%, 0% 75%, 0% 25%
    );
    transition: 0.4s steps(5);
  }

  .pixel {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--pixel-1);
    opacity: 0;
    transition: 0.4s steps(4);
  }

  .p1 { top: 0; left: calc(50% - 2px); }
  .p2 { top: calc(50% - 2px); right: 0; }
  .p3 { bottom: 0; left: calc(50% - 2px); }
  .p4 { top: calc(50% - 2px); left: 0; }
  .p5 { top: 4px; right: 4px; }
  .p6 { bottom: 4px; right: 4px; }
  .p7 { bottom: 4px; left: 4px; }
  .p8 { top: 4px; left: 4px; }

  .toggle:checked + .slider {
    background-color: #2a2a2a;
  }

  .toggle:checked + .slider .pixel-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .pixel-circle {
    background: var(--pixel-2);
    animation: colorShift 1s steps(4) infinite;
  }

  .toggle:checked + .slider .pixel {
    opacity: 1;
    animation: blink 0.5s steps(2) infinite;
  }

  .p1 { --pixel-color: var(--pixel-1); animation-delay: 0s; }
  .p2 { --pixel-color: var(--pixel-2); animation-delay: 0.1s; }
  .p3 { --pixel-color: var(--pixel-3); animation-delay: 0.2s; }
  .p4 { --pixel-color: var(--pixel-4); animation-delay: 0.3s; }
  .p5 { --pixel-color: var(--pixel-1); animation-delay: 0.4s; }
  .p6 { --pixel-color: var(--pixel-2); animation-delay: 0.5s; }
  .p7 { --pixel-color: var(--pixel-3); animation-delay: 0.6s; }
  .p8 { --pixel-color: var(--pixel-4); animation-delay: 0.7s; }

  @keyframes colorShift {
    0% { background: var(--pixel-1); }
    25% { background: var(--pixel-2); }
    50% { background: var(--pixel-3); }
    75% { background: var(--pixel-4); }
  }

  @keyframes blink {
    0%, 100% { 
      opacity: 1;
      background: var(--pixel-color);
    }
    50% { 
      opacity: 0.5;
      background: var(--pixel-main);
    }
  }

  .slider:hover .pixel-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .pixel {
    animation-duration: 0.25s;
  }
`;

export default Switch; 