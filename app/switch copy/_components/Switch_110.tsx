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
      <label className="steampunk-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="mechanism">
          <div className="plate"></div>
          <div className="gears">
            <div className="gear gear-1"></div>
            <div className="gear gear-2"></div>
            <div className="gear gear-3"></div>
          </div>
          <div className="lever">
            <div className="handle"></div>
            <div className="rivets"></div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .steampunk-switch {
    display: inline-block;
    position: relative;
    width: 6em;
    height: 3em;
    cursor: pointer;
  }

  .steampunk-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .mechanism {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #2a2a2a, #1a1a1a);
    border-radius: 0.4em;
    border: 0.15em solid #3a3a3a;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 
      inset 0 0 10px rgba(0, 0, 0, 0.8),
      0 2px 5px rgba(0, 0, 0, 0.4);
  }

  .plate {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(45deg, 
        rgba(184, 140, 33, 0.8),
        rgba(205, 167, 78, 0.8)
      );
    opacity: 0.1;
  }

  .gears {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .gear {
    position: absolute;
    background: linear-gradient(45deg, #b88c21, #cda74e);
    border-radius: 50%;
    border: 0.1em solid #3a3a3a;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 30%;
      height: 30%;
      background: #2a2a2a;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .gear-1 {
    width: 1.8em;
    height: 1.8em;
    top: 0.6em;
    left: ${({ $checked }) => $checked ? '3.8em' : '0.4em'};
    transition: left 0.3s ease;
    transform: rotate(${({ $checked }) => $checked ? '180deg' : '0deg'});
  }

  .gear-2 {
    width: 1.2em;
    height: 1.2em;
    top: 1.5em;
    left: ${({ $checked }) => $checked ? '2.8em' : '1.8em'};
    transition: left 0.3s ease;
    transform: rotate(${({ $checked }) => $checked ? '-180deg' : '0deg'});
  }

  .gear-3 {
    width: 0.9em;
    height: 0.9em;
    top: 0.8em;
    left: ${({ $checked }) => $checked ? '2.2em' : '2.8em'};
    transition: left 0.3s ease;
    transform: rotate(${({ $checked }) => $checked ? '180deg' : '0deg'});
  }

  .lever {
    position: absolute;
    top: 0.4em;
    left: ${({ $checked }) => $checked ? '3.6em' : '0.4em'};
    width: 2em;
    height: 2.2em;
    transition: left 0.3s ease;
  }

  .handle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #b88c21, #cda74e);
    border-radius: 0.3em;
    border: 0.1em solid #3a3a3a;
    box-shadow: 
      inset 0 0 5px rgba(0, 0, 0, 0.5),
      0 2px 5px rgba(0, 0, 0, 0.3);
  }

  .rivets {
    position: absolute;
    width: 100%;
    height: 100%;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 0.3em;
      height: 0.3em;
      background: #2a2a2a;
      border-radius: 50%;
      border: 0.1em solid #b88c21;
    }

    &::before {
      top: 0.3em;
      left: 50%;
      transform: translateX(-50%);
    }

    &::after {
      bottom: 0.3em;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  /* Hover Effect */
  .steampunk-switch:hover .mechanism {
    box-shadow: 
      inset 0 0 15px rgba(0, 0, 0, 0.9),
      0 3px 8px rgba(0, 0, 0, 0.5);
  }

  /* Focus State */
  input:focus ~ .mechanism {
    outline: 2px solid rgba(184, 140, 33, 0.5);
    outline-offset: 0.2em;
  }

  /* Active State */
  .steampunk-switch:active .mechanism {
    transform: scale(0.95);
  }

  /* Animation */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .gear {
    animation: spin 4s linear infinite;
    animation-play-state: ${({ $checked }) => $checked ? 'running' : 'paused'};
  }

  /* Metallic Texture */
  .mechanism::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.1) 2px,
        rgba(0, 0, 0, 0.1) 4px
      );
  }
`;

export default Switch; 