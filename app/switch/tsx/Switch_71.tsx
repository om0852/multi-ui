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
          <span className="galaxy">
            <span className="stars"></span>
            <span className="nebula"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    --space: #1a1a2e;
    --nebula-start: #4b0082;
    --nebula-end: #9400d3;
    --star-color: #fff;
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
    background-color: var(--space);
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .galaxy {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background: radial-gradient(circle at center,
      var(--nebula-start),
      var(--nebula-end)
    );
    border-radius: 50%;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .stars {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      var(--star-color) 1px,
      transparent 1px
    );
    background-size: 4px 4px;
    animation: twinkle 1s infinite alternate;
  }

  .nebula {
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: conic-gradient(
      from 0deg,
      transparent,
      var(--nebula-start) 45deg,
      var(--nebula-end) 90deg,
      transparent 180deg,
      var(--nebula-start) 225deg,
      var(--nebula-end) 270deg,
      transparent 360deg
    );
    animation: rotate 10s linear infinite;
    opacity: 0.7;
  }

  .toggle:checked + .slider .galaxy {
    transform: translateX(34px);
    filter: hue-rotate(180deg);
  }

  .toggle:checked + .slider .nebula {
    animation: rotate 5s linear infinite reverse;
  }

  .toggle:checked + .slider .stars {
    animation: twinkle 0.5s infinite alternate;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes twinkle {
    0% { opacity: 0.3; }
    50% { opacity: 0.8; }
    100% { opacity: 1; }
  }

  .slider:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(255, 255, 255, 0.1) 0%,
      transparent 60%
    );
    transition: 0.4s;
  }

  .galaxy:after {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    top: -25%;
    left: -25%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: 0.3s;
  }

  .toggle:checked + .slider .galaxy:after {
    opacity: 0.2;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.2); opacity: 0.1; }
    100% { transform: scale(1); opacity: 0.2; }
  }
`;

export default Switch; 