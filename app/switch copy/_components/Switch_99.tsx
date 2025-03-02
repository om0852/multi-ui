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
    background: linear-gradient(135deg, #FFE4B5, #DEB887);
    border-radius: 0.4em;
    box-shadow: 0 0.2em 0.4em rgba(139, 69, 19, 0.2);
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    color: #8B4513;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid #D2691E;
    font-family: 'Courier New', monospace;
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
    letter-spacing: 0.1em;
  }

  .switch-left {
    left: 0;
    border-radius: 0.3em 0 0 0.3em;
    background: linear-gradient(135deg, #FFDEAD, #DEB887);
  }

  .switch-right {
    right: 0;
    border-radius: 0 0.3em 0.3em 0;
    background: linear-gradient(135deg, #D2691E, #8B4513);
    color: #FFE4B5;
  }

  /* Checked State */
  input:checked + .switch-left {
    background: linear-gradient(135deg, #FFB347, #FF8C00);
    color: #8B4513;
    box-shadow: inset 0 0 0.4em rgba(139, 69, 19, 0.4);
  }

  input:checked + .switch-left + .switch-right {
    background: linear-gradient(135deg, #FFDEAD, #DEB887);
    color: #8B4513;
  }

  /* Hover States */
  .rocker:hover {
    box-shadow: 0 0.3em 0.6em rgba(139, 69, 19, 0.3);
    background: linear-gradient(135deg, #FFE4B5, #DEB887);
  }

  .switch-left:hover,
  .switch-right:hover {
    filter: brightness(1.1);
  }

  /* Focus States */
  input:focus + .switch-left {
    outline: 2px solid #FF8C00;
    outline-offset: 0.1em;
  }

  /* Active/Pressed State */
  .switch-left:active,
  .switch-right:active {
    filter: brightness(0.9);
  }
`;

export default Switch; 