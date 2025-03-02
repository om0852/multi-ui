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
    background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
    border-radius: 0.4em;
    box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.1);
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    color: #666;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid #ccc;
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
  }

  .switch-left {
    left: 0;
    border-radius: 0.3em 0 0 0.3em;
    background: linear-gradient(135deg, #f0f0f0, #d5d5d5);
  }

  .switch-right {
    right: 0;
    border-radius: 0 0.3em 0.3em 0;
    background: linear-gradient(135deg, #c0c0c0, #a0a0a0);
    color: #fff;
  }

  /* Checked State */
  input:checked + .switch-left {
    background: linear-gradient(135deg, #4CAF50, #45a049);
    color: white;
    box-shadow: inset 0 0 0.4em rgba(0, 0, 0, 0.2);
  }

  input:checked + .switch-left + .switch-right {
    background: linear-gradient(135deg, #e0e0e0, #d0d0d0);
    color: #888;
  }

  /* Hover States */
  .rocker:hover {
    box-shadow: 0 0.3em 0.6em rgba(0, 0, 0, 0.2);
  }

  .switch-left:hover,
  .switch-right:hover {
    filter: brightness(1.1);
  }

  /* Focus States */
  input:focus + .switch-left {
    outline: 2px solid #4CAF50;
    outline-offset: 0.1em;
  }

  /* Active/Pressed State */
  .switch-left:active,
  .switch-right:active {
    filter: brightness(0.9);
  }
`;

export default Switch; 