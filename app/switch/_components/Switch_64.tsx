import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input 
          type="checkbox" 
          className="toggle"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="slider">
          <span className="card front">OFF</span>
          <span className="card back">ON</span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    --primary: #ff6b6b;
    --secondary: #4ecdc4;
    position: relative;
    display: flex;
    width: 70px;
    height: 36px;
    perspective: 400px;
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
    background-color: transparent;
    transition: 0.4s;
    transform-style: preserve-3d;
  }

  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    backface-visibility: hidden;
    transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .front {
    background-color: var(--primary);
    transform: rotateY(0deg);
  }

  .back {
    background-color: var(--secondary);
    transform: rotateY(180deg);
  }

  .toggle:checked + .slider .front {
    transform: rotateY(180deg);
  }

  .toggle:checked + .slider .back {
    transform: rotateY(360deg);
  }

  .slider:hover {
    animation: float 1s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default Switch; 