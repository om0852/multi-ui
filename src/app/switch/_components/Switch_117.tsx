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
      <label className="weather-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="sky">
          <div className="sun">
            <div className="rays">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`ray ray-${i + 1}`}></div>
              ))}
            </div>
          </div>
          <div className="clouds">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`cloud cloud-${i + 1}`}>
                <div className="puff"></div>
              </div>
            ))}
          </div>
          <div className="rain">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`drop drop-${i + 1}`}></div>
            ))}
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .weather-switch {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
  }

  .weather-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .sky {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $checked }) => 
      $checked 
        ? 'linear-gradient(to bottom, #2c3e50, #3498db)'
        : 'linear-gradient(to bottom, #00bfff, #87ceeb)'
    };
    border-radius: 1.2em;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .sun {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '-20%' : '20%'};
    width: 1.4em;
    height: 1.4em;
    background: #ffd700;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  }

  .rays {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    animation: rotate 10s linear infinite;
    opacity: ${({ $checked }) => $checked ? '0' : '1'};
    transition: opacity 0.4s ease;
  }

  ${[...Array(8)].map((_, i) => `
    .ray-${i + 1} {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0.2em;
      height: 1.8em;
      background: #ffd700;
      transform-origin: 50% 0;
      transform: translate(-50%, 0) rotate(${i * 45}deg);
      animation: pulse 2s ease-in-out infinite;
      animation-delay: ${i * 0.25}s;
    }
  `).join('\n')}

  .clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: ${({ $checked }) => $checked ? '1' : '0'};
    transition: opacity 0.4s ease;
  }

  .cloud {
    position: absolute;
    background: #fff;
    border-radius: 1em;
    transition: all 0.4s ease;
  }

  .cloud-1 {
    top: 20%;
    left: ${({ $checked }) => $checked ? '60%' : '120%'};
    width: 2em;
    height: 0.8em;
    animation: float 4s ease-in-out infinite;
  }

  .cloud-2 {
    top: 40%;
    left: ${({ $checked }) => $checked ? '30%' : '120%'};
    width: 1.6em;
    height: 0.6em;
    animation: float 5s ease-in-out infinite;
    animation-delay: 1s;
  }

  .cloud-3 {
    top: 60%;
    left: ${({ $checked }) => $checked ? '70%' : '120%'};
    width: 1.2em;
    height: 0.5em;
    animation: float 3s ease-in-out infinite;
    animation-delay: 2s;
  }

  .puff {
    position: absolute;
    top: -50%;
    left: 10%;
    width: 80%;
    height: 100%;
    background: #fff;
    border-radius: 50%;
    
    &::before, &::after {
      content: '';
      position: absolute;
      background: #fff;
      border-radius: 50%;
    }
    
    &::before {
      width: 60%;
      height: 120%;
      top: -20%;
      left: -20%;
    }
    
    &::after {
      width: 60%;
      height: 120%;
      top: -20%;
      right: -20%;
    }
  }

  .rain {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: ${({ $checked }) => $checked ? '1' : '0'};
    transition: opacity 0.4s ease;
  }

  .drop {
    position: absolute;
    width: 0.1em;
    height: 0.3em;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 0.05em;
  }

  ${[...Array(10)].map((_, i) => `
    .drop-${i + 1} {
      left: ${10 + i * 8}%;
      animation: rain 1s linear infinite;
      animation-delay: ${i * 0.1}s;
    }
  `).join('\n')}

  /* Animations */
  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes pulse {
    0%, 100% { transform: translate(-50%, 0) scale(1); }
    50% { transform: translate(-50%, 0) scale(1.2); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes rain {
    from { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 1; }
    to { transform: translateY(200%); opacity: 0; }
  }

  /* Hover Effects */
  .weather-switch:hover .sun {
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
  }

  .weather-switch:hover .cloud {
    filter: brightness(1.1);
  }

  /* Focus State */
  input:focus ~ .sky {
    outline: 2px solid #fff;
    outline-offset: 0.1em;
  }

  /* Active State */
  .weather-switch:active .sun,
  .weather-switch:active .cloud {
    transform: scale(0.95);
  }

  /* Weather Effects */
  .sky::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $checked }) => 
      $checked 
        ? 'radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.1), transparent 50%)'
        : 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.2), transparent 50%)'
    };
    transition: all 0.4s ease;
  }
`;

export default Switch; 