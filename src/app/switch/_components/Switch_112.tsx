import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

interface StyledWrapperProps {
  $checked: boolean;
}

const PARTICLE_COUNT = 12;

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
            <div className="pole north"></div>
            <div className="pole south"></div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const generateParticleStyles = (index: number, checked: boolean) => {
  const top = Math.floor(Math.random() * 100);
  const left = Math.floor(Math.random() * 100);
  const translateX = checked ? '2.6em' : '0';
  const translateY = Math.sin(index) * 10;
  const animationDuration = 2 + Math.random();
  const animationDelay = Math.random();

  return `
    .particle-${index + 1} {
      top: ${top}%;
      left: ${left}%;
      transform: translate(${translateX}, ${translateY}px);
      animation: float-${index + 1} ${animationDuration}s ease-in-out infinite;
      animation-delay: ${animationDelay}s;
    }

    @keyframes float-${index + 1} {
      0%, 100% {
        transform: translate(${translateX}, ${translateY}px);
      }
      50% {
        transform: translate(${translateX}, ${-translateY}px);
      }
    }
  `;
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  .magnetic-switch {
    display: inline-block;
    position: relative;
    width: 5em;
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
    background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
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
    width: 4px;
    height: 4px;
    background: #4facfe;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: blur(1px);
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
    background: #333;
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'});
    box-shadow: 
      inset 0 2px 4px rgba(255,255,255,0.2),
      0 2px 4px rgba(0,0,0,0.4);
  }

  .pole {
    position: absolute;
    width: 50%;
    height: 100%;
    transition: all 0.4s ease;
  }

  .north {
    left: 0;
    background: linear-gradient(90deg, #ff4b4b, #ff6b6b);
    border-radius: 1em 0 0 1em;
    transform: rotate(${({ $checked }) => $checked ? '180deg' : '0deg'});
  }

  .south {
    right: 0;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    border-radius: 0 1em 1em 0;
    transform: rotate(${({ $checked }) => $checked ? '180deg' : '0deg'});
  }

  /* Magnetic Field Effect */
  .field::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${({ $checked }) => $checked ? '60%' : '20%'};
    width: 40%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(79, 172, 254, 0.2),
      transparent 70%
    );
    transition: all 0.4s ease;
    filter: blur(5px);
  }

  /* Hover Effects */
  .magnetic-switch:hover .particle {
    filter: blur(2px);
    animation-duration: 1.5s;
  }

  .magnetic-switch:hover .magnet {
    box-shadow: 
      inset 0 2px 4px rgba(255,255,255,0.3),
      0 4px 8px rgba(0,0,0,0.5);
  }

  /* Focus State */
  input:focus ~ .field {
    outline: 2px solid #4facfe;
    outline-offset: 0.1em;
  }

  /* Active State */
  .magnetic-switch:active .magnet {
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'}) scale(0.95);
  }

  /* Magnetic Pulse Effect */
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
    width: 1em;
    height: 1em;
    background: radial-gradient(
      circle at center,
      rgba(79, 172, 254, 0.4),
      transparent 70%
    );
    transform: translate(-50%, -50%);
    animation: pulse 2s ease-in-out infinite;
  }
`;

export default Switch; 