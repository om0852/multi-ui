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
        <div className="track">
          <div className="thumb">
            <div className="shape"></div>
          </div>
        </div>
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    cursor: pointer;
  }

  .rocker input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .track {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2a2a2a;
    border-radius: 1.2em;
    transition: all 0.4s ease;
    overflow: hidden;
  }

  .thumb {
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: 2em;
    height: 2em;
    background: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .shape {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 0.3em;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(45deg) scale(0.7);
  }

  /* Checked State */
  input:checked ~ .track {
    background: #663399;
  }

  input:checked ~ .track .thumb {
    transform: translateX(2.6em);
  }

  input:checked ~ .track .shape {
    border-radius: 50%;
    transform: rotate(0) scale(1);
  }

  /* Hover States */
  .rocker:hover .track {
    background: ${({ $checked }) => $checked ? '#7a3db8' : '#3a3a3a'};
  }

  .rocker:hover .shape {
    transform: ${({ $checked }) => 
      $checked 
        ? 'rotate(0) scale(1.1)' 
        : 'rotate(45deg) scale(0.8)'
    };
  }

  /* Focus States */
  input:focus ~ .track {
    outline: 2px solid #663399;
    outline-offset: 0.1em;
  }

  /* Animation */
  @keyframes morphIn {
    0% {
      border-radius: 0.3em;
      transform: rotate(45deg) scale(0.7);
    }
    100% {
      border-radius: 50%;
      transform: rotate(0) scale(1);
    }
  }

  @keyframes morphOut {
    0% {
      border-radius: 50%;
      transform: rotate(0) scale(1);
    }
    100% {
      border-radius: 0.3em;
      transform: rotate(45deg) scale(0.7);
    }
  }

  /* Track Glow Effect */
  .track::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      ${({ $checked }) => $checked ? 'rgba(102, 51, 153, 0.2)' : 'rgba(255, 255, 255, 0.1)'},
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .rocker:hover .track::before {
    opacity: 1;
  }

  /* Active/Pressed State */
  .rocker:active .thumb {
    transform: ${({ $checked }) => 
      $checked 
        ? 'translateX(2.6em) scale(0.9)' 
        : 'scale(0.9)'
    };
  }

  .shape::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
    border-radius: inherit;
  }
`;

export default Switch; 