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
          <div className="thumb">
            <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
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
    background: #e0e0e0;
    border-radius: 1.2em;
    transition: background-color 0.3s ease;
    overflow: hidden;
  }

  .thumb {
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: 2em;
    height: 2em;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  .icon {
    position: absolute;
    width: 1.2em;
    height: 1.2em;
    color: #666;
    transition: all 0.3s ease;
  }

  .icon:first-child {
    opacity: 0;
    transform: rotate(-90deg);
  }

  .icon:last-child {
    opacity: 1;
    transform: rotate(0);
  }

  /* Checked State */
  input:checked ~ .track {
    background: #4CAF50;
  }

  input:checked ~ .track .thumb {
    transform: translateX(2.6em);
  }

  input:checked ~ .track .icon:first-child {
    opacity: 1;
    transform: rotate(0);
    color: #4CAF50;
  }

  input:checked ~ .track .icon:last-child {
    opacity: 0;
    transform: rotate(90deg);
  }

  /* Hover States */
  .rocker:hover .track {
    background: ${({ $checked }) => $checked ? '#45a049' : '#d5d5d5'};
  }

  .rocker:hover .thumb {
    transform: ${({ $checked }) => $checked ? 'translateX(2.6em) scale(1.1)' : 'scale(1.1)'};
  }

  /* Focus States */
  input:focus ~ .track {
    outline: 2px solid #4CAF50;
    outline-offset: 0.1em;
  }

  /* Animation */
  @keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(0.9); }
  }

  .thumb {
    animation: bounce 0.6s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
  }

  /* Active/Pressed State */
  .rocker:active .thumb {
    transform: ${({ $checked }) => $checked ? 'translateX(2.6em) scale(0.9)' : 'scale(0.9)'};
  }

  /* Shadow and Elevation */
  .track::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1.2em;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
    z-index: 0;
  }

  .thumb::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent);
    z-index: 1;
  }
`;

export default Switch; 