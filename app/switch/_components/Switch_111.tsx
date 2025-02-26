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
            <div className="facet facet-1"></div>
            <div className="facet facet-2"></div>
            <div className="facet facet-3"></div>
          </div>
          <div className="core">
            <div className="light"></div>
          </div>
          <div className="base"></div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .crystal-switch {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
    perspective: 1000px;
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
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ $checked }) => $checked ? 'rotateY(180deg)' : 'rotateY(0)'};
  }

  .facets {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .facet {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 1.2em;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.4s ease;
  }

  .facet-1 {
    transform: translateZ(10px) rotateX(${({ $checked }) => $checked ? '30deg' : '0deg'});
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    );
  }

  .facet-2 {
    transform: translateZ(5px) rotateY(${({ $checked }) => $checked ? '-30deg' : '0deg'});
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.05)
    );
  }

  .facet-3 {
    transform: translateZ(0) rotate(${({ $checked }) => $checked ? '15deg' : '0deg'});
    background: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.08)
    );
  }

  .core {
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: 2em;
    height: 2em;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translateX(${({ $checked }) => $checked ? '2.6em' : '0'});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  .light {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: ${({ $checked }) => 
      $checked 
        ? 'radial-gradient(circle, #ffd700, #ff6b6b, #4facfe)'
        : 'radial-gradient(circle, #4facfe, #00f2fe, #a8edea)'
    };
    transform: translate(-50%, -50%);
    filter: blur(8px);
    opacity: 0.8;
    mix-blend-mode: overlay;
    animation: rotate 3s linear infinite;
  }

  .base {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.4em;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.2em;
    box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.1);
  }

  /* Hover Effects */
  .crystal-switch:hover .facet-1 {
    transform: translateZ(15px) rotateX(${({ $checked }) => $checked ? '45deg' : '15deg'});
  }

  .crystal-switch:hover .facet-2 {
    transform: translateZ(8px) rotateY(${({ $checked }) => $checked ? '-45deg' : '-15deg'});
  }

  .crystal-switch:hover .facet-3 {
    transform: translateZ(2px) rotate(${({ $checked }) => $checked ? '30deg' : '15deg'});
  }

  /* Focus State */
  input:focus ~ .crystal {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 0.2em;
  }

  /* Active State */
  .crystal-switch:active .crystal {
    transform: ${({ $checked }) => 
      $checked 
        ? 'rotateY(175deg) scale(0.95)'
        : 'rotateY(5deg) scale(0.95)'
    };
  }

  /* Animations */
  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  /* Prismatic Effect */
  .crystal::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 75%,
      transparent 100%
    );
    animation: prism 2s linear infinite;
    opacity: 0.5;
  }

  @keyframes prism {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Rainbow Reflection */
  .crystal::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 0, 0, 0.1),
      rgba(255, 165, 0, 0.1),
      rgba(255, 255, 0, 0.1),
      rgba(0, 255, 0, 0.1),
      rgba(0, 0, 255, 0.1),
      rgba(238, 130, 238, 0.1),
      transparent
    );
    mix-blend-mode: color;
    animation: rainbow 3s ease infinite;
  }

  @keyframes rainbow {
    0% { opacity: 0.3; }
    50% { opacity: 0.7; }
    100% { opacity: 0.3; }
  }
`;

export default Switch; 