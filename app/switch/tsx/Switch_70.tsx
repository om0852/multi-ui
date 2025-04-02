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
          <span className="equalizer">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
            <span className="bar bar4"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --primary: #6C5CE7;
    --secondary: #A8E6CF;
    --bg-off: #E9E9E9;
    --bg-on: #D4E5FF;
    --bar-color: #ffffff;
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
    background-color: var(--bg-off);
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .equalizer {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background-color: var(--primary);
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), background-color 0.4s;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 0 4px;
  }

  .bar {
    flex: 1;
    height: 6px;
    background-color: var(--bar-color);
    border-radius: 1px;
    transform-origin: bottom;
    transition: 0.4s;
  }

  .bar1 { animation: quiet1 2s ease-in-out infinite; }
  .bar2 { animation: quiet2 2.3s ease-in-out infinite; }
  .bar3 { animation: quiet3 2.1s ease-in-out infinite; }
  .bar4 { animation: quiet4 2.2s ease-in-out infinite; }

  .toggle:checked + .slider {
    background-color: var(--bg-on);
  }

  .toggle:checked + .slider .equalizer {
    transform: translateX(34px);
    background-color: var(--secondary);
  }

  .toggle:checked + .slider .bar1 { animation: loud1 0.4s ease-in-out infinite; }
  .toggle:checked + .slider .bar2 { animation: loud2 0.5s ease-in-out infinite; }
  .toggle:checked + .slider .bar3 { animation: loud3 0.3s ease-in-out infinite; }
  .toggle:checked + .slider .bar4 { animation: loud4 0.45s ease-in-out infinite; }

  @keyframes quiet1 {
    0% { transform: scaleY(1); }
    50% { transform: scaleY(0.35); }
    100% { transform: scaleY(1); }
  }

  @keyframes quiet2 {
    0% { transform: scaleY(0.45); }
    50% { transform: scaleY(0.85); }
    100% { transform: scaleY(0.45); }
  }

  @keyframes quiet3 {
    0% { transform: scaleY(0.65); }
    50% { transform: scaleY(0.35); }
    100% { transform: scaleY(0.65); }
  }

  @keyframes quiet4 {
    0% { transform: scaleY(0.35); }
    50% { transform: scaleY(0.75); }
    100% { transform: scaleY(0.35); }
  }

  @keyframes loud1 {
    0% { transform: scaleY(1); }
    50% { transform: scaleY(2); }
    100% { transform: scaleY(1); }
  }

  @keyframes loud2 {
    0% { transform: scaleY(0.75); }
    50% { transform: scaleY(2.5); }
    100% { transform: scaleY(0.75); }
  }

  @keyframes loud3 {
    0% { transform: scaleY(1.5); }
    50% { transform: scaleY(0.75); }
    100% { transform: scaleY(1.5); }
  }

  @keyframes loud4 {
    0% { transform: scaleY(1.2); }
    50% { transform: scaleY(2.15); }
    100% { transform: scaleY(1.2); }
  }

  .slider:hover .equalizer {
    transform: ${({ $isChecked }) => $isChecked ? 'translateX(34px) translateY(-3px)' : 'translateY(-3px)'};
  }
`;

export default Switch; 