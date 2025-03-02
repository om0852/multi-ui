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
          <span className="ninja-container">
            <span className="ninja-circle"></span>
            <span className="smoke s1"></span>
            <span className="smoke s2"></span>
            <span className="smoke s3"></span>
            <span className="star st1"></span>
            <span className="star st2"></span>
            <span className="star st3"></span>
            <span className="shadow"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    --ninja: #2c3e50;
    --smoke: rgba(189, 195, 199, 0.6);
    --star: #f1c40f;
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

  .ninja-container {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ninja-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--ninja);
    border-radius: 50%;
    transition: 0.4s;
  }

  .smoke {
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--smoke);
    border-radius: 50%;
    opacity: 0;
    transition: 0.4s;
  }

  .s1 {
    top: -10px;
    left: 0;
  }

  .s2 {
    top: -5px;
    right: -5px;
  }

  .s3 {
    bottom: -5px;
    left: -5px;
  }

  .star {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--star);
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    opacity: 0;
    transition: 0.4s;
  }

  .st1 { top: 20%; left: 20%; }
  .st2 { top: 50%; right: 20%; }
  .st3 { bottom: 20%; left: 50%; }

  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    transform: scale(0.8);
    filter: blur(2px);
    z-index: -1;
  }

  .toggle:checked + .slider {
    background-color: #2c3e50;
  }

  .toggle:checked + .slider .ninja-container {
    transform: translateX(34px);
  }

  .toggle:checked + .slider .ninja-circle {
    transform: scale(0.8);
  }

  .toggle:checked + .slider .smoke {
    animation: vanish 0.5s ease-out forwards;
  }

  .toggle:checked + .slider .star {
    animation: shuriken 0.5s ease-out forwards;
  }

  .s1 { animation-delay: 0s; }
  .s2 { animation-delay: 0.1s; }
  .s3 { animation-delay: 0.2s; }

  .st1 { animation-delay: 0.1s; }
  .st2 { animation-delay: 0.2s; }
  .st3 { animation-delay: 0.3s; }

  @keyframes vanish {
    0% {
      transform: translate(0, 0) scale(0.5);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(var(--tx, 10px), -20px) scale(1.5);
      opacity: 0;
    }
  }

  @keyframes shuriken {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(var(--tx, 10px), var(--ty, 10px)) rotate(720deg) scale(1);
      opacity: 0;
    }
  }

  .slider:hover .ninja-container {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .smoke,
  .slider:hover .star {
    animation-duration: 0.3s;
  }
`;

export default Switch; 