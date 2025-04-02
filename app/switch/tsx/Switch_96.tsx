import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

interface StyledWrapperProps {
  $checked: boolean;
}

const Switch: React.FC<SwitchProps> = ({ checked = false, onChange }) => {
  return (
    <StyledWrapper $checked={checked}>
      <label className="rocker">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="switch-left">Yes</span>
        <span className="switch-right">No</span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .rocker {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    background: #e4e4e4;
    border-radius: 0.4em;
    box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.1);
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    color: #888;
    cursor: pointer;
    overflow: hidden;
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
    background: #fff;
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
    background: #ddd;
  }

  .switch-right {
    right: 0;
    border-radius: 0 0.3em 0.3em 0;
  }

  /* Checked State */
  input:checked + .switch-left {
    background: #4CAF50;
    color: white;
    box-shadow: inset 0 0 0.4em rgba(0, 0, 0, 0.2);
  }

  input:checked + .switch-left + .switch-right {
    background: #ddd;
  }

  /* Hover States */
  .rocker:hover .switch-left {
    background: ${({ $checked }) => $checked ? '#45a049' : '#d5d5d5'};
  }

  .rocker:hover .switch-right {
    background: ${({ $checked }) => $checked ? '#d5d5d5' : '#f5f5f5'};
  }

  /* Focus States */
  input:focus + .switch-left {
    outline: 2px solid #4CAF50;
    outline-offset: 0.1em;
  }

  /* Active/Pressed State */
  .switch-left:active,
  .switch-right:active {
    transform: scale(0.97);
  }
`;

export default Switch; 