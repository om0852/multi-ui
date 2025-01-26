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
          <span className="ocean-container">
            <span className="water"></span>
            <span className="wave w1"></span>
            <span className="wave w2"></span>
            <span className="bubble b1"></span>
            <span className="bubble b2"></span>
            <span className="bubble b3"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --water: #03a9f4;
    --wave: rgba(255, 255, 255, 0.3);
    --bubble: rgba(255, 255, 255, 0.6);
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
    background-color: #e1f5fe;
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .ocean-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .water {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--water);
    border-radius: 50%;
    transition: 0.4s;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    border: 2px solid var(--wave);
    border-radius: 45%;
    animation: rotate 6s linear infinite;
  }

  .w1 { animation-delay: 0s; }
  .w2 { animation-delay: 3s; }

  .bubble {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--bubble);
    border-radius: 50%;
    opacity: 0;
    transition: 0.4s;
  }

  .b1 { top: 20%; left: 50%; }
  .b2 { top: 50%; right: 30%; }
  .b3 { bottom: 30%; left: 30%; }

  .toggle:checked + .slider {
    background-color: #01579b;
  }

  .toggle:checked + .slider .ocean-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .water {
    box-shadow: 0 0 15px var(--water);
  }

  .toggle:checked + .slider .bubble {
    opacity: 1;
    animation: rise 2s ease-in infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes rise {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-15px) scale(0.5);
      opacity: 0;
    }
  }

  .slider:hover .ocean-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .bubble {
    animation-duration: 1s;
  }
`;

export default Switch; 