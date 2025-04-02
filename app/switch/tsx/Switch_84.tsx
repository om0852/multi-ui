import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

interface StyledWrapperProps {
  $isChecked: boolean;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <StyledWrapper $isChecked={checked}>
      <label className="switch">
        <input 
          type="checkbox" 
          className="toggle"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="slider">
          <span className="magic-container">
            <span className="potion"></span>
            <span className="sparkle s1"></span>
            <span className="sparkle s2"></span>
            <span className="sparkle s3"></span>
            <span className="sparkle s4"></span>
            <span className="sparkle s5"></span>
            <span className="bubble b1"></span>
            <span className="bubble b2"></span>
            <span className="bubble b3"></span>
            <span className="glow"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --potion: #9b59b6;
    --sparkle: #f1c40f;
    --bubble: rgba(155, 89, 182, 0.6);
    --glow: rgba(155, 89, 182, 0.3);
    position: relative;
    display: flex;
    width: 70px;
    height: 36px;
  }

  .toggle {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #34495e;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .magic-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .potion {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--potion);
    border-radius: 50%;
    transition: 0.4s;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      width: 140%;
      height: 140%;
      background: radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.2) 32%, transparent 70%);
      top: -20%;
      left: -20%;
      animation: swirl 4s linear infinite;
    }
  }

  .sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--sparkle);
    border-radius: 50%;
    opacity: 0;
    transition: 0.4s;
    filter: blur(1px);
  }

  .bubble {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--bubble);
    border-radius: 50%;
    opacity: 0;
    transition: 0.4s;
  }

  .glow {
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, var(--glow) 0%, transparent 70%);
    top: -50%;
    left: -50%;
    opacity: 0;
    transition: 0.4s;
    mix-blend-mode: screen;
  }

  .toggle:checked + .slider {
    background-color: #2c3e50;
  }

  .toggle:checked + .slider .magic-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .potion {
    transform: scale(0.9);
    box-shadow: 0 0 20px var(--potion);
  }

  .toggle:checked + .slider .sparkle {
    animation: magic 1s ease-out infinite;
  }

  .toggle:checked + .slider .bubble {
    animation: float 2s ease-out infinite;
  }

  .toggle:checked + .slider .glow {
    opacity: 1;
    animation: pulse 2s ease-out infinite;
  }

  .s1 { top: -5px; left: 50%; animation-delay: 0s; }
  .s2 { top: 50%; right: -5px; animation-delay: 0.2s; }
  .s3 { bottom: -5px; left: 50%; animation-delay: 0.4s; }
  .s4 { top: 50%; left: -5px; animation-delay: 0.6s; }
  .s5 { top: 50%; left: 50%; animation-delay: 0.8s; }

  .b1 { top: 20%; left: 20%; animation-delay: 0s; }
  .b2 { top: 50%; right: 20%; animation-delay: 0.5s; }
  .b3 { bottom: 20%; left: 50%; animation-delay: 1s; }

  @keyframes swirl {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes magic {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1.5) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes float {
    0% {
      transform: translate(0, 0) scale(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(var(--tx, 10px), var(--ty, -10px)) scale(1);
      opacity: 0;
    }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.1); opacity: 0.6; }
  }

  .slider:hover .magic-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .sparkle {
    animation-duration: 0.5s;
  }

  .slider:hover .bubble {
    animation-duration: 1s;
  }
`;

export default Switch; 