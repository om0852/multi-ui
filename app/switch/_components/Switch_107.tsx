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
          <div className="mechanism">
            <div className="gear gear-large"></div>
            <div className="gear gear-small"></div>
            <div className="bolt bolt-1"></div>
            <div className="bolt bolt-2"></div>
            <div className="bolt bolt-3"></div>
            <div className="bolt bolt-4"></div>
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
    background: linear-gradient(145deg, #2a2a2a, #3a3a3a);
    border-radius: 1.2em;
    transition: all 0.4s ease;
    overflow: hidden;
    border: 2px solid #444;
    box-shadow: 
      inset 0 2px 4px rgba(0,0,0,0.4),
      0 2px 4px rgba(0,0,0,0.2);
  }

  .mechanism {
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: 2em;
    height: 2em;
    background: linear-gradient(145deg, #666, #888);
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'});
    box-shadow: 
      inset 0 2px 4px rgba(255,255,255,0.2),
      0 2px 4px rgba(0,0,0,0.4);
  }

  .gear {
    position: absolute;
    background: #999;
    border-radius: 50%;
    transition: transform 0.4s ease;
  }

  .gear-large {
    width: 1.6em;
    height: 1.6em;
    top: 0.2em;
    left: 0.2em;
    background: linear-gradient(145deg, #888, #666);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: repeating-conic-gradient(
        from 0deg,
        #555 0deg 30deg,
        transparent 30deg 60deg
      );
    }
  }

  .gear-small {
    width: 0.8em;
    height: 0.8em;
    top: 0;
    right: 0;
    background: linear-gradient(145deg, #888, #666);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: repeating-conic-gradient(
        from 0deg,
        #555 0deg 45deg,
        transparent 45deg 90deg
      );
    }
  }

  .bolt {
    position: absolute;
    width: 0.3em;
    height: 0.3em;
    background: #aaa;
    border-radius: 50%;
    border: 1px solid #666;
  }

  .bolt-1 { top: 0.2em; left: 0.2em; }
  .bolt-2 { top: 0.2em; right: 0.2em; }
  .bolt-3 { bottom: 0.2em; left: 0.2em; }
  .bolt-4 { bottom: 0.2em; right: 0.2em; }

  /* Checked State */
  input:checked ~ .track {
    background: linear-gradient(145deg, #3a3a3a, #4a4a4a);
  }

  /* Hover States */
  .rocker:hover .mechanism {
    filter: brightness(1.1);
  }

  /* Focus States */
  input:focus ~ .track {
    outline: 2px solid #888;
    outline-offset: 0.1em;
  }

  /* Animation */
  @keyframes rotateGearLarge {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes rotateGearSmall {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  .gear-large {
    animation: rotateGearLarge ${({ $checked }) => $checked ? '2s' : '0s'} linear infinite;
  }

  .gear-small {
    animation: rotateGearSmall ${({ $checked }) => $checked ? '2s' : '0s'} linear infinite;
  }

  /* Active/Pressed State */
  .rocker:active .mechanism {
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'}) scale(0.95);
  }

  /* Metal Texture Effect */
  .track::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    pointer-events: none;
  }

  /* Sound Wave Effect */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 0.4em;
    height: 0.4em;
    background: #666;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(${({ $checked }) => $checked ? '1' : '0'});
    opacity: ${({ $checked }) => $checked ? '0.5' : '0'};
    transition: all 0.4s ease;
    box-shadow: 0 0 4px #666;
  }
`;

export default Switch; 