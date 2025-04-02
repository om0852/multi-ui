import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input 
          type="checkbox" 
          className="toggle"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="slider" />
        <span className="card-side" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    --input-focus: #4CAF50;
    --bg-color: #fff;
    --bg-color-alt: #666;
    --main-color: #2E7D32;
    --input-out-of-focus: #ddd;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 70px;
    height: 36px;
  }

  .toggle {
    opacity: 0;
  }

  .slider {
    box-sizing: border-box;
    border-radius: 100px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--input-out-of-focus);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .slider:before {
    content: "off";
    box-sizing: border-box;
    height: 30px;
    width: 30px;
    position: absolute;
    left: 2px;
    bottom: 1px;
    border: 2px solid var(--main-color);
    border-radius: 100px;
    background-color: var(--bg-color);
    color: var(--main-color);
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 25px;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
  }

  .toggle:checked + .slider:before {
    content: "on";
    transform: translateX(32px) scale(1.1);
  }

  .toggle:not(:checked) + .slider:before {
    transform: scale(1);
  }

  .slider:active:before {
    transform: scale(0.9);
  }
`;

export default Switch; 