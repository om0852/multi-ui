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
          <span className="firework-container">
            <span className="firework-circle"></span>
            <span className="spark s1"></span>
            <span className="spark s2"></span>
            <span className="spark s3"></span>
            <span className="spark s4"></span>
            <span className="spark s5"></span>
            <span className="spark s6"></span>
            <span className="spark s7"></span>
            <span className="spark s8"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --firework: #e74c3c;
    --spark: #f1c40f;
    --bg: #2c3e50;
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
    background-color: var(--bg);
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .firework-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .firework-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--firework);
    border-radius: 50%;
    transition: 0.4s;
  }

  .spark {
    position: absolute;
    width: 2px;
    height: 8px;
    background: var(--spark);
    border-radius: 1px;
    opacity: 0;
    transition: 0.4s;
    transform-origin: center 14px;
  }

  .s1 { transform: rotate(0deg); }
  .s2 { transform: rotate(45deg); }
  .s3 { transform: rotate(90deg); }
  .s4 { transform: rotate(135deg); }
  .s5 { transform: rotate(180deg); }
  .s6 { transform: rotate(225deg); }
  .s7 { transform: rotate(270deg); }
  .s8 { transform: rotate(315deg); }

  .toggle:checked + .slider {
    background-color: #34495e;
  }

  .toggle:checked + .slider .firework-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .firework-circle {
    transform: scale(0.8);
    box-shadow: 0 0 20px var(--firework);
  }

  .toggle:checked + .slider .spark {
    animation: explode 0.5s ease-out forwards;
  }

  .s1 { animation-delay: 0s; }
  .s2 { animation-delay: 0.05s; }
  .s3 { animation-delay: 0.1s; }
  .s4 { animation-delay: 0.15s; }
  .s5 { animation-delay: 0.2s; }
  .s6 { animation-delay: 0.25s; }
  .s7 { animation-delay: 0.3s; }
  .s8 { animation-delay: 0.35s; }

  @keyframes explode {
    0% {
      transform: rotate(var(--rotation)) translateY(0) scale(1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(var(--rotation)) translateY(-15px) scale(0);
      opacity: 0;
    }
  }

  .slider:hover .firework-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .spark {
    animation: sparkle 1s infinite;
  }

  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
  }
`;

export default Switch; 