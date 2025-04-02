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
          <span className="heartbeat"></span>
          <span className="pulse-line"></span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    --off-color: #ff4757;
    --on-color: #2ed573;
    --bg-off: #ffe0e3;
    --bg-on: #e3fff0;
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
    background-color: var(--bg-off);
    transition: 0.4s;
    border-radius: 18px;
    overflow: hidden;
  }

  .heartbeat {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background-color: var(--off-color);
    transition: 0.4s;
    clip-path: path('M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181');
    transform: scale(0.8);
  }

  .pulse-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--off-color);
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.3;
  }

  .pulse-line:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      var(--off-color) 50%, 
      transparent 100%
    );
    animation: pulse-off 2s linear infinite;
  }

  .toggle:checked + .slider {
    background-color: var(--bg-on);
  }

  .toggle:checked + .slider .heartbeat {
    background-color: var(--on-color);
    transform: translateX(34px) scale(0.8);
    animation: beat 1s infinite;
  }

  .toggle:checked + .slider .pulse-line {
    background: var(--on-color);
  }

  .toggle:checked + .slider .pulse-line:before {
    background: linear-gradient(90deg, 
      transparent 0%, 
      var(--on-color) 50%, 
      transparent 100%
    );
    animation: pulse-on 1s linear infinite;
  }

  @keyframes beat {
    0% { transform: translateX(34px) scale(0.8); }
    50% { transform: translateX(34px) scale(1); }
    100% { transform: translateX(34px) scale(0.8); }
  }

  @keyframes pulse-off {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }

  @keyframes pulse-on {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
`;

export default Switch; 