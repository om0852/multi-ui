import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

interface StyledWrapperProps {
  $checked: boolean;
}

const PARTICLE_COUNT = 8;

const Switch: React.FC<SwitchProps> = ({ checked = false, onChange }) => {
  return (
    <StyledWrapper $checked={checked}>
      <label className="magnetic-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="field">
          <div className="particles">
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`} />
            ))}
          </div>
          <div className="magnet">
            <div className="core"></div>
            <div className="field-lines"></div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const generateParticleStyles = (index: number, checked: boolean) => {
  const angle = (index / PARTICLE_COUNT) * 2 * Math.PI;
  const radius = checked ? 2 : 1;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const delay = index * (1 / PARTICLE_COUNT);

  return `
    .particle-${index + 1} {
      top: 50%;
      left: ${checked ? '80%' : '20%'};
      transform: translate(${x}em, ${y}em);
      animation: orbit-${index + 1} 3s ease-in-out infinite;
      animation-delay: ${delay}s;
    }

    @keyframes orbit-${index + 1} {
      0%, 100% {
        transform: translate(${x}em, ${y}em);
      }
      50% {
        transform: translate(${x * 1.2}em, ${y * 1.2}em);
      }
    }
  `;
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  .magnetic-switch {
    display: inline-block;
    position: relative;
    width: 6em;
    height: 2.4em;
    cursor: pointer;
  }

  .magnetic-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .field {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2d2d2d, #3d3d3d);
    border-radius: 1.2em;
    overflow: hidden;
    transition: all 0.4s ease;
    box-shadow: 
      inset 0 2px 4px rgba(0,0,0,0.4),
      0 2px 4px rgba(0,0,0,0.2);
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #00ffaa;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: blur(1px);
    box-shadow: 0 0 8px #00ffaa;
  }

  ${Array.from({ length: PARTICLE_COUNT }).map((_, i) => 
    generateParticleStyles(i, false)
  ).join('\n')}

  ${({ $checked }) => $checked && Array.from({ length: PARTICLE_COUNT }).map((_, i) => 
    generateParticleStyles(i, true)
  ).join('\n')}

  .magnet {
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: 2em;
    height: 2em;
    background: #444;
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(${({ $checked }) => $checked ? '3.6em' : '0'});
    box-shadow: 
      inset 0 2px 4px rgba(255,255,255,0.2),
      0 2px 4px rgba(0,0,0,0.4);
    overflow: hidden;
  }

  .core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.2em;
    height: 1.2em;
    background: radial-gradient(circle at center, #00ffaa, #008855);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 12px #00ffaa;
  }

  .field-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 4px,
        rgba(0, 255, 170, 0.1) 4px,
        rgba(0, 255, 170, 0.1) 8px
      );
    transform: rotate(${({ $checked }) => $checked ? '90deg' : '0deg'});
    transition: transform 0.4s ease;
  }

  .field::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${({ $checked }) => $checked ? '60%' : '20%'};
    width: 40%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 170, 0.2),
      transparent 70%
    );
    transition: all 0.4s ease;
    filter: blur(5px);
  }

  .magnetic-switch:hover .particle {
    filter: blur(2px);
    box-shadow: 0 0 12px #00ffaa;
  }

  .magnetic-switch:hover .magnet {
    box-shadow: 
      inset 0 2px 4px rgba(255,255,255,0.3),
      0 4px 8px rgba(0,0,0,0.5);
  }

  input:focus ~ .field {
    outline: 2px solid #00ffaa;
    outline-offset: 0.1em;
  }

  .magnetic-switch:active .magnet {
    transform: translateX(${({ $checked }) => $checked ? '3.6em' : '0'}) scale(0.95);
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 0.2; }
    100% { transform: scale(1); opacity: 0.5; }
  }

  .field::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 1.2em;
    height: 1.2em;
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 170, 0.4),
      transparent 70%
    );
    transform: translate(-50%, -50%);
    animation: pulse 2s ease-in-out infinite;
  }
`;

export default Switch; 