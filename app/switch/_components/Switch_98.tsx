import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked = false, onChange }) => {
  return (
    <StyledWrapper>
      <label className="rocker">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="switch-left">On</span>
        <span className="switch-right">Off</span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .rocker {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
    border-radius: 0.4em;
    box-shadow: 0 0.2em 1em rgba(0, 255, 255, 0.1);
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid #333;
  }

  .rocker input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch-left,
  .switch-right {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    padding: 0.2em;
    text-align: center;
    transition: all 0.2s ease;
    user-select: none;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 0 0.5em rgba(0, 255, 255, 0.5);
  }

  .switch-left {
    left: 0;
    border-radius: 0.3em 0 0 0.3em;
    background: linear-gradient(135deg, #333, #222);
  }

  .switch-right {
    right: 0;
    border-radius: 0 0.3em 0.3em 0;
    background: linear-gradient(135deg, #222, #111);
    color: #666;
  }

  /* Checked State */
  input:checked + .switch-left {
    background: linear-gradient(135deg, #00ffff, #00cccc);
    color: #000;
    text-shadow: 0 0 0.5em rgba(0, 255, 255, 0.8);
    box-shadow: 0 0 2em rgba(0, 255, 255, 0.4);
  }

  input:checked + .switch-left + .switch-right {
    background: linear-gradient(135deg, #333, #222);
    color: #666;
  }

  /* Hover States */
  .rocker:hover {
    box-shadow: 0 0.3em 1.5em rgba(0, 255, 255, 0.2);
  }

  .switch-left:hover,
  .switch-right:hover {
    filter: brightness(1.2);
  }

  /* Focus States */
  input:focus + .switch-left {
    outline: 2px solid #00ffff;
    outline-offset: 0.1em;
  }

  /* Active/Pressed State */
  .switch-left:active,
  .switch-right:active {
    filter: brightness(0.8);
  }
`;

export default Switch; 