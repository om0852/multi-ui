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
      <label className="portal-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="portal">
          <div className="vortex">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
          <div className="orb">
            <div className="core"></div>
            <div className="waves"></div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .portal-switch {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
    perspective: 1000px;
  }

  .portal-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .portal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 1.2em;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .vortex {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 2em;
    height: 2em;
    transform: translate(-50%, -50%);
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 2px solid transparent;
    transform: translate(-50%, -50%);
  }

  .ring-1 {
    width: 100%;
    height: 100%;
    border-color: rgba(147, 51, 234, 0.5);
    animation: rotate1 4s linear infinite;
  }

  .ring-2 {
    width: 80%;
    height: 80%;
    border-color: rgba(79, 70, 229, 0.5);
    animation: rotate2 3s linear infinite;
  }

  .ring-3 {
    width: 60%;
    height: 60%;
    border-color: rgba(59, 130, 246, 0.5);
    animation: rotate3 2s linear infinite;
  }

  .orb {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 1.6em;
    height: 1.6em;
    transform: translate(-50%, -50%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    background: radial-gradient(
      circle at center,
      #fff,
      #93c5fd,
      #3b82f6
    );
    border-radius: 50%;
    transform: translate(-50%, -50%);
    filter: blur(1px);
    animation: pulse 2s ease-in-out infinite;
  }

  .waves {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: 
      radial-gradient(
        circle at center,
        transparent 30%,
        rgba(147, 51, 234, 0.3) 70%,
        transparent 100%
      );
    animation: wave 2s ease-out infinite;
  }

  /* Space-Time Distortion */
  .portal::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(
        circle at ${({ $checked }) => $checked ? '70%' : '30%'} 50%,
        rgba(147, 51, 234, 0.1),
        transparent 20%
      ),
      radial-gradient(
        circle at ${({ $checked }) => $checked ? '75%' : '25%'} 55%,
        rgba(79, 70, 229, 0.1),
        transparent 30%
      ),
      radial-gradient(
        circle at ${({ $checked }) => $checked ? '80%' : '20%'} 45%,
        rgba(59, 130, 246, 0.1),
        transparent 40%
      );
    transform: rotate(${({ $checked }) => $checked ? '180deg' : '0deg'});
    transition: all 0.4s ease;
  }

  /* Animations */
  @keyframes rotate1 {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes rotate2 {
    from { transform: translate(-50%, -50%) rotate(360deg); }
    to { transform: translate(-50%, -50%) rotate(0deg); }
  }

  @keyframes rotate3 {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(-360deg); }
  }

  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }

  @keyframes wave {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
  }

  /* Hover Effects */
  .portal-switch:hover .ring-1 {
    animation-duration: 2s;
  }

  .portal-switch:hover .ring-2 {
    animation-duration: 1.5s;
  }

  .portal-switch:hover .ring-3 {
    animation-duration: 1s;
  }

  /* Focus State */
  input:focus ~ .portal {
    outline: 2px solid #3b82f6;
    outline-offset: 0.1em;
  }

  /* Active State */
  .portal-switch:active .orb {
    transform: translate(-50%, -50%) scale(0.9);
  }

  /* Energy Field Effect */
  .portal::after {
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
        transparent 10px,
        rgba(147, 51, 234, 0.05) 10px,
        rgba(147, 51, 234, 0.05) 20px
      );
    opacity: ${({ $checked }) => $checked ? '0.8' : '0.3'};
    transition: opacity 0.4s ease;
  }
`;

export default Switch; 