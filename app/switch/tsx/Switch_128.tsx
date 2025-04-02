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
      <label className="crystal-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="crystal">
          <div className="facets">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`facet facet-${i + 1}`} />
            ))}
          </div>
          <div className="core">
            <div className="inner-light" />
          </div>
          <div className="reflections">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`reflection reflection-${i + 1}`} />
            ))}
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .crystal-switch {
    --crystal-off: #a4d8ec;
    --crystal-on: #ff69b4;
    --glow-off: rgba(164, 216, 236, 0.5);
    --glow-on: rgba(255, 105, 180, 0.5);
    
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
  }

  .crystal-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .crystal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, 
      ${({ $checked }) => $checked ? '#ff69b4' : '#a4d8ec'} 0%,
      rgba(255, 255, 255, 0.2) 50%,
      ${({ $checked }) => $checked ? '#ff1493' : '#87ceeb'} 100%
    );
    border-radius: 1.2em;
    overflow: hidden;
    transition: all 0.4s ease;
    box-shadow: 
      inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 15px ${({ $checked }) => $checked ? 'var(--glow-on)' : 'var(--glow-off)'};
  }

  .facets {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .facet {
    position: absolute;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.2) 100%
    );
    transition: all 0.4s ease;
  }

  ${[...Array(12)].map((_, i) => {
    const angle = (i * 30) % 360;
    const size = 40 + Math.random() * 20;
    return `
      .facet-${i + 1} {
        top: ${Math.random() * 80}%;
        left: ${Math.random() * 80}%;
        width: ${size}%;
        height: ${size / 2}%;
        transform: rotate(${angle}deg);
        opacity: ${0.1 + Math.random() * 0.3};
      }
    `;
  }).join('\n')}

  .core {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 1.6em;
    height: 1.6em;
    background: ${({ $checked }) => $checked ? 'var(--crystal-on)' : 'var(--crystal-off)'};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      inset 0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px ${({ $checked }) => $checked ? 'var(--glow-on)' : 'var(--glow-off)'};
  }

  .inner-light {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.9),
      transparent 70%
    );
    transform: translate(-50%, -50%);
    animation: pulse 2s ease-in-out infinite;
  }

  .reflections {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .reflection {
    position: absolute;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: shimmer 3s infinite;
  }

  ${[...Array(6)].map((_, i) => {
    const delay = i * 0.5;
    const size = 30 + Math.random() * 40;
    return `
      .reflection-${i + 1} {
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: ${size}%;
        height: ${size / 3}%;
        transform: rotate(${Math.random() * 360}deg);
        animation-delay: ${delay}s;
      }
    `;
  }).join('\n')}

  @keyframes pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%) rotate(var(--angle)); opacity: 0; }
    20% { opacity: 0.3; }
    60% { opacity: 0.5; }
    100% { transform: translateX(200%) rotate(var(--angle)); opacity: 0; }
  }

  .crystal-switch:hover .crystal {
    box-shadow: 
      inset 0 0 25px rgba(255, 255, 255, 0.6),
      0 0 20px ${({ $checked }) => $checked ? 'var(--glow-on)' : 'var(--glow-off)'};
  }

  .crystal-switch:hover .core {
    box-shadow: 
      inset 0 0 15px rgba(255, 255, 255, 0.9),
      0 0 25px ${({ $checked }) => $checked ? 'var(--glow-on)' : 'var(--glow-off)'};
  }

  input:focus ~ .crystal {
    outline: 2px solid ${({ $checked }) => $checked ? 'var(--crystal-on)' : 'var(--crystal-off)'};
    outline-offset: 0.1em;
  }

  .crystal-switch:active .core {
    transform: translate(-50%, -50%) scale(0.95);
  }
`;

export default Switch; 