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
      <label className="plasma-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="container">
          <div className="plasma">
            <div className="energy-field">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`energy-ring ring-${i + 1}`} />
              ))}
            </div>
            <div className="core">
              <div className="nucleus" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`electron electron-${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .plasma-switch {
    --plasma-off: #7b2bf9;
    --plasma-on: #00ff88;
    --glow-off: rgba(123, 43, 249, 0.5);
    --glow-on: rgba(0, 255, 136, 0.5);
    
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
  }

  .plasma-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    border-radius: 1.2em;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .plasma {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $checked }) => 
      $checked 
        ? 'radial-gradient(circle at 80% 50%, var(--plasma-on), transparent)'
        : 'radial-gradient(circle at 20% 50%, var(--plasma-off), transparent)'
    };
    transition: all 0.4s ease;
  }

  .energy-field {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .energy-ring {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    border-radius: 50%;
    border: 1px solid;
    border-color: ${({ $checked }) => $checked ? 'var(--plasma-on)' : 'var(--plasma-off)'};
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    animation: pulse-ring 2s ease-out infinite;
    opacity: 0;
  }

  ${[...Array(8)].map((_, i) => {
    const size = 1 + i * 0.3;
    const delay = i * 0.2;
    return `
      .ring-${i + 1} {
        width: ${size}em;
        height: ${size}em;
        animation-delay: ${delay}s;
      }
    `;
  }).join('\n')}

  .core {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 1.6em;
    height: 1.6em;
    transform: translate(-50%, -50%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nucleus {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.8em;
    height: 0.8em;
    background: ${({ $checked }) => $checked ? 'var(--plasma-on)' : 'var(--plasma-off)'};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px ${({ $checked }) => $checked ? 'var(--glow-on)' : 'var(--glow-off)'};
    animation: pulse-core 1.5s ease-in-out infinite;
  }

  .electron {
    position: absolute;
    width: 0.3em;
    height: 0.3em;
    background: ${({ $checked }) => $checked ? 'var(--plasma-on)' : 'var(--plasma-off)'};
    border-radius: 50%;
    box-shadow: 0 0 10px ${({ $checked }) => $checked ? 'var(--glow-on)' : 'var(--glow-off)'};
    animation: orbit 2s linear infinite;
  }

  ${[...Array(4)].map((_, i) => {
    const angle = (i * 90) % 360;
    const delay = i * 0.5;
    return `
      .electron-${i + 1} {
        animation: orbit 2s linear ${delay}s infinite;
        transform-origin: 0.8em 0.8em;
        transform: rotate(${angle}deg) translateX(0.6em);
      }
    `;
  }).join('\n')}

  @keyframes pulse-ring {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse-core {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -50%) scale(0.9);
      opacity: 0.8;
    }
  }

  @keyframes orbit {
    from {
      transform: rotate(0deg) translateX(0.6em);
    }
    to {
      transform: rotate(360deg) translateX(0.6em);
    }
  }

  .plasma-switch:hover .nucleus {
    box-shadow: 0 0 30px ${({ $checked }) => $checked ? 'var(--glow-on)' : 'var(--glow-off)'};
  }

  .plasma-switch:hover .electron {
    box-shadow: 0 0 15px ${({ $checked }) => $checked ? 'var(--glow-on)' : 'var(--glow-off)'};
  }

  input:focus ~ .container {
    outline: 2px solid ${({ $checked }) => $checked ? 'var(--plasma-on)' : 'var(--plasma-off)'};
    outline-offset: 0.1em;
  }

  .plasma-switch:active .core {
    transform: translate(-50%, -50%) scale(0.95);
  }
`;

export default Switch; 