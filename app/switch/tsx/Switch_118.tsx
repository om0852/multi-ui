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
      <label className="cosmic-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="galaxy">
          <div className="stars">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`star star-${i + 1}`}></div>
            ))}
          </div>
          <div className="nebula">
            <div className="dust"></div>
            <div className="glow"></div>
          </div>
          <div className="black-hole">
            <div className="event-horizon"></div>
            <div className="accretion-disk"></div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .cosmic-switch {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
    perspective: 1000px;
  }

  .cosmic-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .galaxy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #0a0a2a, #1a1a3a);
    border-radius: 1.2em;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .stars {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 50%;
    animation: twinkle 2s infinite;
  }

  ${[...Array(20)].map((_, i) => `
    .star-${i + 1} {
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 2}s;
      transform: scale(${Math.random() * 0.5 + 0.5});
    }
  `).join('\n')}

  .nebula {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 2em;
    height: 2em;
    transform: translate(-50%, -50%);
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .dust {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      ${({ $checked }) => 
        $checked 
          ? 'rgba(255, 100, 255, 0.3), rgba(100, 100, 255, 0.1)'
          : 'rgba(100, 255, 255, 0.3), rgba(100, 100, 255, 0.1)'
      }
    );
    filter: blur(4px);
    animation: rotate 10s linear infinite;
  }

  .glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      transparent,
      ${({ $checked }) => $checked ? '#ff00ff40' : '#00ffff40'},
      transparent 50%,
      ${({ $checked }) => $checked ? '#ff00ff40' : '#00ffff40'},
      transparent
    );
    animation: rotate 20s linear infinite reverse;
  }

  .black-hole {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 1.6em;
    height: 1.6em;
    transform: translate(-50%, -50%);
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .event-horizon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.8em;
    height: 0.8em;
    background: #000;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 
      0 0 10px #000,
      0 0 20px rgba(0, 0, 0, 0.8);
  }

  .accretion-disk {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.6em;
    height: 1.6em;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: conic-gradient(
      from 0deg,
      ${({ $checked }) => 
        $checked 
          ? '#ff00ff, #ff0066, #ff00ff'
          : '#00ffff, #0066ff, #00ffff'
      }
    );
    animation: rotate 3s linear infinite;
    opacity: 0.7;
    filter: blur(1px);
  }

  /* Animations */
  @keyframes twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  /* Space Distortion */
  .galaxy::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      ellipse at ${({ $checked }) => $checked ? '70% 50%' : '30% 50%'},
      transparent,
      rgba(0, 0, 0, 0.5)
    );
    animation: distort 10s ease-in-out infinite alternate;
  }

  @keyframes distort {
    0% { transform: scale(1) rotate(0deg); }
    100% { transform: scale(1.1) rotate(5deg); }
  }

  /* Hover Effects */
  .cosmic-switch:hover .nebula {
    filter: brightness(1.2);
  }

  .cosmic-switch:hover .black-hole {
    transform: translate(-50%, -50%) scale(1.1);
  }

  /* Focus State */
  input:focus ~ .galaxy {
    outline: 2px solid ${({ $checked }) => $checked ? '#ff00ff' : '#00ffff'};
    outline-offset: 0.1em;
  }

  /* Active State */
  .cosmic-switch:active .black-hole {
    transform: translate(-50%, -50%) scale(0.9);
  }

  /* Cosmic Energy */
  .galaxy::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(
        circle at ${({ $checked }) => $checked ? '70%' : '30%'} 50%,
        ${({ $checked }) => 
          $checked 
            ? 'rgba(255, 0, 255, 0.1), transparent 70%'
            : 'rgba(0, 255, 255, 0.1), transparent 70%'
        }
      );
    filter: blur(5px);
  }
`;

export default Switch; 