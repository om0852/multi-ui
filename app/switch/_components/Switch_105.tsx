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
          <div className="liquid"></div>
          <div className="thumb">
            <div className="ripple"></div>
            <div className="indicator"></div>
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
    background: #f0f0f0;
    border-radius: 1.2em;
    transition: background 0.4s ease;
    overflow: hidden;
  }

  .liquid {
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(${({ $checked }) => $checked ? '50%' : '0'});
  }

  .thumb {
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: 2em;
    height: 2em;
    background: white;
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'});
    z-index: 2;
  }

  .ripple {
    position: absolute;
    top: -25%;
    left: -25%;
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 40%;
    background: #4facfe;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.4s ease;
  }

  /* Checked State */
  input:checked ~ .track {
    background: #e6f7ff;
  }

  input:checked ~ .track .indicator {
    transform: translate(-50%, -50%) scale(1);
    background: white;
  }

  /* Hover States */
  .rocker:hover .liquid {
    animation: wave 1s ease-in-out infinite;
  }

  .rocker:hover .ripple {
    opacity: 1;
    animation: ripple 1s ease-in-out infinite;
  }

  /* Focus States */
  input:focus ~ .track {
    outline: 2px solid #4facfe;
    outline-offset: 0.1em;
  }

  /* Animation */
  @keyframes wave {
    0%, 100% {
      transform: translateX(${({ $checked }) => $checked ? '50%' : '0'}) translateY(0);
    }
    50% {
      transform: translateX(${({ $checked }) => $checked ? '50%' : '0'}) translateY(-5%);
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      opacity: 0.4;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }

  /* Active/Pressed State */
  .rocker:active .thumb {
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'}) scale(0.9);
  }

  /* Liquid Bubble Effect */
  .liquid::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at ${({ $checked }) => $checked ? '75%' : '25%'} 50%,
      rgba(255, 255, 255, 0.2),
      transparent 50%
    );
    transition: all 0.4s ease;
  }

  /* Glass Effect */
  .track::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    z-index: 1;
  }
`;

export default Switch; 