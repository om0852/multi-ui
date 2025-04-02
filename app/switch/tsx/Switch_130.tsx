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
      <label className="hologram-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="hologram">
          <div className="scan-lines"></div>
          <div className="glitch-effect"></div>
          <div className="data-streams">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`data-line line-${i + 1}`}>
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="data-bit" />
                ))}
              </div>
            ))}
          </div>
          <div className="control">
            <div className="interface">
              <div className="circles">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`circle circle-${i + 1}`} />
                ))}
              </div>
              <div className="hex-grid">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`hex hex-${i + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .hologram-switch {
    --holo-off: #00ffff;
    --holo-on: #ff00ff;
    --glow-off: rgba(0, 255, 255, 0.5);
    --glow-on: rgba(255, 0, 255, 0.5);
    
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
  }

  .hologram-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .hologram {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 1.2em;
    overflow: hidden;
    transition: all 0.4s ease;
    border: 1px solid ${({ $checked }) => $checked ? 'var(--holo-on)' : 'var(--holo-off)'};
    box-shadow: 0 0 10px ${({ $checked }) => $checked ? 'var(--glow-on)' : 'var(--glow-off)'};
  }

  .scan-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.1) 2px,
      rgba(255, 255, 255, 0.1) 4px
    );
    opacity: 0.3;
    pointer-events: none;
  }

  .glitch-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $checked }) => $checked ? 'var(--holo-on)' : 'var(--holo-off)'};
    opacity: 0.1;
    mix-blend-mode: screen;
    animation: glitch 2s linear infinite;
  }

  .data-streams {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .data-line {
    position: absolute;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 2px;
    opacity: 0.5;
  }

  ${[...Array(10)].map((_, i) => `
    .line-${i + 1} {
      top: ${i * 10}%;
      animation: data-flow 3s linear ${i * 0.2}s infinite;
    }
  `).join('\n')}

  .data-bit {
    width: 4px;
    height: 2px;
    background: ${({ $checked }) => $checked ? 'var(--holo-on)' : 'var(--holo-off)'};
    transition: all 0.4s ease;
  }

  .control {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 1.6em;
    height: 1.6em;
    transform: translate(-50%, -50%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .interface {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .circles {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .circle {
    position: absolute;
    border: 1px solid ${({ $checked }) => $checked ? 'var(--holo-on)' : 'var(--holo-off)'};
    border-radius: 50%;
    opacity: 0.5;
    animation: pulse 2s ease-out infinite;
  }

  ${[...Array(3)].map((_, i) => {
    const size = 0.8 + i * 0.4;
    const delay = i * 0.3;
    return `
      .circle-${i + 1} {
        top: ${50 - (size * 50)}%;
        left: ${50 - (size * 50)}%;
        width: ${size * 100}%;
        height: ${size * 100}%;
        animation-delay: ${delay}s;
      }
    `;
  }).join('\n')}

  .hex-grid {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .hex {
    position: absolute;
    width: 0.4em;
    height: 0.4em;
    background: ${({ $checked }) => $checked ? 'var(--holo-on)' : 'var(--holo-off)'};
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    transition: all 0.4s ease;
    opacity: 0.8;
  }

  ${[...Array(6)].map((_, i) => {
    const angle = (i * 60) % 360;
    const radius = 0.4;
    return `
      .hex-${i + 1} {
        top: ${50 + Math.sin(angle * Math.PI / 180) * radius * 100}%;
        left: ${50 + Math.cos(angle * Math.PI / 180) * radius * 100}%;
        transform: translate(-50%, -50%) rotate(${angle}deg);
      }
    `;
  }).join('\n')}

  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
  }

  @keyframes data-flow {
    0% { transform: translateX(0); opacity: 0; }
    50% { opacity: 0.5; }
    100% { transform: translateX(${({ $checked }) => $checked ? '-100%' : '100%'}); opacity: 0; }
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.5; }
    50% { opacity: 0.2; }
    100% { transform: scale(1.5); opacity: 0; }
  }

  .hologram-switch:hover .hologram {
    box-shadow: 0 0 20px ${({ $checked }) => $checked ? 'var(--glow-on)' : 'var(--glow-off)'};
  }

  .hologram-switch:hover .hex {
    opacity: 1;
  }

  input:focus ~ .hologram {
    outline: 2px solid ${({ $checked }) => $checked ? 'var(--holo-on)' : 'var(--holo-off)'};
    outline-offset: 0.1em;
  }

  .hologram-switch:active .control {
    transform: translate(-50%, -50%) scale(0.95);
  }
`;

export default Switch; 