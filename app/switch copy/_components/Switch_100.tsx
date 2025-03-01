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
    background: #ffffff;
    border-radius: 1em;
    box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.1);
    font-size: 1em;
    font-weight: 500;
    text-transform: uppercase;
    color: #666;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid #e0e0e0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
    transition: all 0.2s cubic-bezier(0.2, 0.85, 0.32, 1.2);
    user-select: none;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  .switch-left {
    left: 0;
    border-radius: 0.8em 0 0 0.8em;
    background: #f0f0f0;
  }

  .switch-right {
    right: 0;
    border-radius: 0 0.8em 0.8em 0;
    background: #e0e0e0;
    color: #999;
  }

  /* Checked State */
  input:checked + .switch-left {
    background: #6366f1;
    color: white;
    box-shadow: inset 0 0 0.4em rgba(99, 102, 241, 0.2);
  }

  input:checked + .switch-left + .switch-right {
    background: #f0f0f0;
    color: #888;
  }

  /* Hover States */
  .rocker:hover {
    box-shadow: 0 0.3em 0.8em rgba(0, 0, 0, 0.1);
  }

  .switch-left:hover,
  .switch-right:hover {
    filter: brightness(1.05);
  }

  /* Focus States */
  input:focus + .switch-left {
    outline: 2px solid #6366f1;
    outline-offset: 0.1em;
  }

  /* Active/Pressed State */
  .switch-left:active,
  .switch-right:active {
    filter: brightness(0.95);
  }
`;

export default Switch; 