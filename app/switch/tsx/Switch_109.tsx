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
      <label className="neon-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="tube">
          <div className="glass-effect"></div>
          <div className="neon-light"></div>
          <div className="gas"></div>
          <div className="electrodes">
            <div className="electrode left"></div>
            <div className="electrode right"></div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .neon-switch {
    display: inline-block;
    position: relative;
    width: 6em;
    height: 2.2em;
    cursor: pointer;
  }

  .neon-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .tube {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(20, 20, 30, 0.9);
    border-radius: 1.1em;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 
      0 0 10px rgba(0, 0, 0, 0.5),
      inset 0 0 15px rgba(0, 0, 0, 0.8);
  }

  .glass-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    border-radius: 1.1em 1.1em 0 0;
  }

  .neon-light {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'};
    transform: translateY(-50%);
    filter: blur(3px);
    opacity: ${({ $checked }) => $checked ? '1' : '0.3'};
    transition: all 0.3s ease;
    box-shadow: 
      0 0 10px ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'},
      0 0 20px ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'},
      0 0 30px ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'};
  }

  .gas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at ${({ $checked }) => $checked ? '70%' : '30%'} 50%,
      ${({ $checked }) => $checked ? 'rgba(255, 0, 255, 0.2)' : 'rgba(0, 255, 255, 0.2)'} 0%,
      transparent 70%
    );
    transition: all 0.3s ease;
  }

  .electrodes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .electrode {
    position: absolute;
    top: 50%;
    width: 0.4em;
    height: 1.4em;
    background: #444;
    transform: translateY(-50%);
    border-radius: 0.2em;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);

    &.left {
      left: 0.4em;
    }

    &.right {
      right: 0.4em;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 0.2em;
      height: 0.2em;
      background: #666;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }

  /* Hover Effect */
  .neon-switch:hover .tube {
    box-shadow: 
      0 0 15px rgba(0, 0, 0, 0.6),
      inset 0 0 20px rgba(0, 0, 0, 0.9);
  }

  .neon-switch:hover .neon-light {
    filter: blur(4px);
    box-shadow: 
      0 0 15px ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'},
      0 0 30px ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'},
      0 0 45px ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'};
  }

  /* Focus State */
  input:focus ~ .tube {
    outline: 2px solid ${({ $checked }) => $checked ? 'rgba(255, 0, 255, 0.5)' : 'rgba(0, 255, 255, 0.5)'};
    outline-offset: 0.2em;
  }

  /* Active State */
  .neon-switch:active .tube {
    transform: scale(0.95);
  }

  /* Animation */
  @keyframes flicker {
    0% { opacity: 1; }
    50% { opacity: 0.95; }
    100% { opacity: 1; }
  }

  .neon-light {
    animation: flicker 0.1s ease-in-out infinite;
  }
`;

export default Switch; 