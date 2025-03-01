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
          <div className="glow"></div>
          <div className="thumb">
            <div className="ring"></div>
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
    background: #1a1a1a;
    border-radius: 1.2em;
    transition: all 0.4s ease;
    overflow: hidden;
    border: 1px solid #333;
  }

  .glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'};
    filter: blur(15px);
    opacity: 0.5;
    transition: all 0.4s ease;
    transform: scale(0.8);
  }

  .thumb {
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: 2em;
    height: 2em;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'});
    z-index: 2;
  }

  .ring {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'};
    border-radius: 50%;
    transition: all 0.4s ease;
    animation: ${({ $checked }) => $checked ? 'pulseRingOn' : 'pulseRingOff'} 2s infinite;
  }

  /* Checked State */
  input:checked ~ .track {
    background: #2a1a2a;
  }

  /* Hover States */
  .rocker:hover .glow {
    opacity: 0.7;
    transform: scale(0.9);
  }

  .rocker:hover .thumb {
    box-shadow: 0 0 20px ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'};
  }

  /* Focus States */
  input:focus ~ .track {
    outline: 2px solid ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'};
    outline-offset: 0.1em;
  }

  /* Animation */
  @keyframes pulseRingOn {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }

  @keyframes pulseRingOff {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }

  /* Active/Pressed State */
  .rocker:active .thumb {
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'}) scale(0.9);
  }

  /* Neon Text Effect */
  &::after {
    content: ${({ $checked }) => $checked ? "'ON'" : "'OFF'"};
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '70%' : '30%'};
    transform: translate(-50%, -50%);
    font-size: 0.6em;
    font-weight: bold;
    color: ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'};
    text-shadow: 0 0 5px ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'};
    transition: all 0.4s ease;
    opacity: 0.8;
  }

  /* Ambient Light Effect */
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      ${({ $checked }) => $checked ? 'rgba(255, 0, 255, 0.1)' : 'rgba(0, 255, 255, 0.1)'},
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  .rocker:hover::before {
    opacity: 1;
  }
`;

export default Switch; 