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
      <label className="nature-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="scene">
          <div className="leaves">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`leaf leaf-${i + 1}`}></div>
            ))}
          </div>
          <div className="water">
            <div className="ripple"></div>
            <div className="surface"></div>
          </div>
          <div className="branch">
            <div className="knot"></div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .nature-switch {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
  }

  .nature-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      #87CEEB 0%,
      #87CEEB 60%,
      #228B22 60%,
      #228B22 100%
    );
    border-radius: 1.2em;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .leaves {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .leaf {
    position: absolute;
    width: 0.8em;
    height: 0.8em;
    background: #90EE90;
    border-radius: 0 100% 0 100%;
    transform-origin: 0 0;
    transition: all 0.4s ease;
    opacity: ${({ $checked }) => $checked ? '1' : '0'};
  }

  ${[...Array(5)].map((_, i) => `
    .leaf-${i + 1} {
      top: ${20 + i * 15}%;
      left: ${60 + Math.sin(i) * 20}%;
      transform: rotate(${45 + i * 30}deg) scale(${0.8 + i * 0.1});
      animation: float-${i + 1} ${2 + i * 0.5}s ease-in-out infinite;
      animation-delay: ${i * 0.2}s;
    }

    @keyframes float-${i + 1} {
      0%, 100% {
        transform: rotate(${45 + i * 30}deg) scale(${0.8 + i * 0.1}) translate(0, 0);
      }
      50% {
        transform: rotate(${45 + i * 30}deg) scale(${0.8 + i * 0.1}) translate(${5 + i * 2}px, ${5 + i * 2}px);
      }
    }
  `).join('\n')}

  .water {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    overflow: hidden;
  }

  .ripple {
    position: absolute;
    bottom: 0;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 2em;
    height: 2em;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8),
      transparent 70%
    );
    transform: translate(-50%, 50%);
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ripple 2s ease-out infinite;
  }

  .surface {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 100, 0, 0.3)
    );
    transform-origin: center bottom;
    animation: wave 3s ease-in-out infinite;
  }

  .branch {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 2em;
    height: 2em;
    transform: translate(-50%, -50%);
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .knot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.2em;
    height: 1.2em;
    background: linear-gradient(145deg, #8B4513, #A0522D);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 
      inset 2px 2px 4px rgba(255, 255, 255, 0.2),
      inset -2px -2px 4px rgba(0, 0, 0, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      top: 20%;
      left: 20%;
      width: 30%;
      height: 30%;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
    }
  }

  /* Animations */
  @keyframes ripple {
    0% {
      transform: translate(-50%, 50%) scale(0.3);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 50%) scale(2);
      opacity: 0;
    }
  }

  @keyframes wave {
    0%, 100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1.02);
    }
  }

  /* Hover Effects */
  .nature-switch:hover .leaf {
    filter: brightness(1.2);
  }

  .nature-switch:hover .knot {
    box-shadow: 
      inset 2px 2px 6px rgba(255, 255, 255, 0.3),
      inset -2px -2px 6px rgba(0, 0, 0, 0.3);
  }

  /* Focus State */
  input:focus ~ .scene {
    outline: 2px solid #90EE90;
    outline-offset: 0.1em;
  }

  /* Active State */
  .nature-switch:active .branch {
    transform: translate(-50%, -50%) scale(0.95);
  }

  /* Weather Effect */
  .scene::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: ${({ $checked }) => 
      $checked 
        ? 'radial-gradient(circle at 70% 20%, rgba(255, 255, 190, 0.4), transparent 50%)'
        : 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), transparent)'
    };
    transition: all 0.4s ease;
  }

  /* Ground Texture */
  .scene::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 5px,
      rgba(0, 100, 0, 0.1) 5px,
      rgba(0, 100, 0, 0.1) 10px
    );
  }
`;

export default Switch; 