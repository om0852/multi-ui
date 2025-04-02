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
          <div className="hologram">
            <div className="layer layer-1"></div>
            <div className="layer layer-2"></div>
            <div className="layer layer-3"></div>
          </div>
          <div className="thumb">
            <div className="scanner"></div>
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
    perspective: 1000px;
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
    background: rgba(0, 0, 0, 0.8);
    border-radius: 1.2em;
    transition: all 0.4s ease;
    overflow: hidden;
    border: 1px solid rgba(120, 220, 255, 0.3);
    box-shadow: 
      0 0 10px rgba(120, 220, 255, 0.2),
      inset 0 0 15px rgba(120, 220, 255, 0.1);
  }

  .hologram {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(120, 220, 255, 0.1) 45%,
      rgba(120, 220, 255, 0.2) 50%,
      rgba(120, 220, 255, 0.1) 55%,
      transparent 100%
    );
    transition: transform 0.4s ease;
  }

  .layer-1 { transform: translateZ(1px) rotateX(${({ $checked }) => $checked ? '30deg' : '0deg'}); }
  .layer-2 { transform: translateZ(2px) rotateY(${({ $checked }) => $checked ? '-30deg' : '0deg'}); }
  .layer-3 { transform: translateZ(3px) rotate(${({ $checked }) => $checked ? '15deg' : '0deg'}); }

  .thumb {
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: 2em;
    height: 2em;
    background: rgba(120, 220, 255, 0.1);
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'});
    backdrop-filter: blur(4px);
    border: 1px solid rgba(120, 220, 255, 0.3);
  }

  .scanner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(120, 220, 255, 0.8);
    animation: scan 2s linear infinite;
    box-shadow: 0 0 8px rgba(120, 220, 255, 0.8);
  }

  /* Checked State */
  input:checked ~ .track {
    background: rgba(0, 0, 0, 0.9);
  }

  /* Hover States */
  .rocker:hover .layer-1 { transform: translateZ(2px) rotateX(${({ $checked }) => $checked ? '45deg' : '15deg'}); }
  .rocker:hover .layer-2 { transform: translateZ(4px) rotateY(${({ $checked }) => $checked ? '-45deg' : '-15deg'}); }
  .rocker:hover .layer-3 { transform: translateZ(6px) rotate(${({ $checked }) => $checked ? '30deg' : '15deg'}); }

  /* Focus States */
  input:focus ~ .track {
    outline: 2px solid rgba(120, 220, 255, 0.5);
    outline-offset: 0.1em;
  }

  /* Animation */
  @keyframes scan {
    0% { transform: translateY(0); opacity: 0; }
    25% { opacity: 1; }
    75% { opacity: 1; }
    100% { transform: translateY(2em); opacity: 0; }
  }

  /* Active/Pressed State */
  .rocker:active .thumb {
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'}) scale(0.9);
  }

  /* Holographic Grid Effect */
  .track::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background-image: 
      linear-gradient(0deg, transparent 24%, 
        rgba(120, 220, 255, 0.1) 25%,
        rgba(120, 220, 255, 0.1) 26%, 
        transparent 27%, transparent 74%,
        rgba(120, 220, 255, 0.1) 75%,
        rgba(120, 220, 255, 0.1) 76%, 
        transparent 77%, transparent),
      linear-gradient(90deg, transparent 24%, 
        rgba(120, 220, 255, 0.1) 25%,
        rgba(120, 220, 255, 0.1) 26%, 
        transparent 27%, transparent 74%,
        rgba(120, 220, 255, 0.1) 75%,
        rgba(120, 220, 255, 0.1) 76%, 
        transparent 77%, transparent);
    background-size: 30px 30px;
    transform: rotate(${({ $checked }) => $checked ? '30deg' : '0deg'});
    transition: transform 0.4s ease;
  }

  /* Glow Effect */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 0.6em;
    height: 0.6em;
    background: rgba(120, 220, 255, 0.4);
    border-radius: 50%;
    filter: blur(5px);
    transform: translate(-50%, -50%);
    opacity: ${({ $checked }) => $checked ? '1' : '0'};
    transition: all 0.4s ease;
  }
`;

export default Switch; 