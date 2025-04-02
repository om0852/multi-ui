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
          <span className="magnetic-field"></span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    --primary: #845EC2;
    --secondary: #D65DB1;
    --bg: #2C2C2C;
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

  .magnetic-field {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    transition: 0.4s cubic-bezier(0.4, 1.8, 0.6, 0.9);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(132, 94, 194, 0.5);
  }

  .toggle:checked + .slider .magnetic-field {
    transform: translateX(34px);
  }

  .slider:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at var(--x, 20%) var(--y, 20%),
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 60%
    );
    transition: 0.4s;
  }

  .slider:hover .magnetic-field {
    animation: attract 0.6s cubic-bezier(0.4, 1.8, 0.6, 0.9);
  }

  .toggle:checked + .slider:hover .magnetic-field {
    animation: attractChecked 0.6s cubic-bezier(0.4, 1.8, 0.6, 0.9);
  }

  @keyframes attract {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(10px); }
  }

  @keyframes attractChecked {
    0%, 100% { transform: translateX(34px); }
    50% { transform: translateX(24px); }
  }
`;

export default Switch; 