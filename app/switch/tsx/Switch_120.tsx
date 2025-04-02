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
      <label className="potion-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="flask">
          <div className="liquid">
            <div className="surface"></div>
            <div className="bubbles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`bubble bubble-${i + 1}`}></div>
              ))}
            </div>
          </div>
          <div className="cork">
            <div className="top"></div>
            <div className="stopper"></div>
          </div>
          <div className="glow"></div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .potion-switch {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
  }

  .potion-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .flask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1.2em;
    overflow: hidden;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.4s ease;
  }

  .liquid {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${({ $checked }) => $checked ? '90%' : '40%'};
    background: ${({ $checked }) => 
      $checked 
        ? 'linear-gradient(to bottom, #ff3366, #ff0066)'
        : 'linear-gradient(to bottom, #4facfe, #00f2fe)'
    };
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(1.2);
  }

  .surface {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.4);
    filter: blur(1px);
    transform-origin: center;
    animation: wave 2s ease-in-out infinite;
  }

  .bubbles {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .bubble {
    position: absolute;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    filter: blur(1px);
    opacity: 0;
    animation: rise 3s ease-in infinite;
  }

  ${[...Array(8)].map((_, i) => `
    .bubble-${i + 1} {
      left: ${10 + Math.random() * 80}%;
      bottom: -20%;
      width: ${4 + Math.random() * 6}px;
      height: ${4 + Math.random() * 6}px;
      animation-delay: ${Math.random() * 2}s;
    }
  `).join('\n')}

  .cork {
    position: absolute;
    top: 0;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 1em;
    height: 1.2em;
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .top {
    position: absolute;
    top: 0.2em;
    left: 50%;
    width: 0.8em;
    height: 0.4em;
    background: #8b4513;
    border-radius: 0.2em;
    transform: translateX(-50%);
    box-shadow: 
      inset 0 2px 4px rgba(0,0,0,0.3),
      0 -1px 2px rgba(255,255,255,0.2);
  }

  .stopper {
    position: absolute;
    top: 0.6em;
    left: 50%;
    width: 0.4em;
    height: 0.6em;
    background: #a0522d;
    transform: translateX(-50%);
    border-radius: 0 0 0.2em 0.2em;
    box-shadow: 
      inset 0 2px 4px rgba(0,0,0,0.3),
      0 -1px 2px rgba(255,255,255,0.2);
  }

  .glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: ${({ $checked }) => 
      $checked 
        ? 'radial-gradient(circle at 70% 50%, rgba(255, 51, 102, 0.2), transparent 60%)'
        : 'radial-gradient(circle at 30% 50%, rgba(79, 172, 254, 0.2), transparent 60%)'
    };
    transition: all 0.4s ease;
    mix-blend-mode: screen;
  }

  /* Animations */
  @keyframes wave {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(1.1); }
  }

  @keyframes rise {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }
    50% {
      opacity: ${({ $checked }) => $checked ? '0.8' : '0.6'};
    }
    100% {
      transform: translateY(-100px) scale(2);
      opacity: 0;
    }
  }

  /* Hover Effects */
  .potion-switch:hover .liquid {
    filter: brightness(1.4);
  }

  .potion-switch:hover .bubble {
    animation-duration: 2.5s;
  }

  /* Focus State */
  input:focus ~ .flask {
    outline: 2px solid ${({ $checked }) => $checked ? '#ff3366' : '#4facfe'};
    outline-offset: 0.1em;
  }

  /* Active State */
  .potion-switch:active .cork {
    transform: translateX(-50%) scale(0.95);
  }

  /* Magic Effects */
  .flask::before {
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
            ? 'rgba(255, 51, 102, 0.1), transparent 70%'
            : 'rgba(79, 172, 254, 0.1), transparent 70%'
        }
      );
    filter: blur(10px);
    mix-blend-mode: overlay;
  }

  /* Sparkle Effect */
  .flask::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.8) 0%,
        transparent 10%
      );
    animation: sparkle 4s linear infinite;
    opacity: ${({ $checked }) => $checked ? '0.4' : '0.2'};
  }

  @keyframes sparkle {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Swirl Effect */
  .liquid::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      repeating-conic-gradient(
        from 0deg,
        transparent,
        ${({ $checked }) => 
          $checked 
            ? 'rgba(255, 255, 255, 0.1) 10deg'
            : 'rgba(255, 255, 255, 0.1) 20deg'
        },
        transparent 20deg
      );
    animation: swirl 10s linear infinite;
    opacity: 0.5;
  }

  @keyframes swirl {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export default Switch; 