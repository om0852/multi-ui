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
      <label className="dna-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="helix">
          <div className="strand strand-1">
            {[...Array(8)].map((_, i) => (
              <div key={`base-1-${i}`} className="base">
                <div className="nucleotide"></div>
                <div className="pair"></div>
              </div>
            ))}
          </div>
          <div className="strand strand-2">
            {[...Array(8)].map((_, i) => (
              <div key={`base-2-${i}`} className="base">
                <div className="nucleotide"></div>
                <div className="pair"></div>
              </div>
            ))}
          </div>
          <div className="scanner">
            <div className="beam"></div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .dna-switch {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
    perspective: 1000px;
  }

  .dna-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .helix {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 1.2em;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .strand {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: transform 0.4s ease;
  }

  .strand-1 {
    left: ${({ $checked }) => $checked ? '60%' : '20%'};
    transform: rotateX(${({ $checked }) => $checked ? '180deg' : '0deg'});
  }

  .strand-2 {
    left: ${({ $checked }) => $checked ? '60%' : '20%'};
    transform: rotateX(${({ $checked }) => $checked ? '0deg' : '180deg'});
  }

  .base {
    position: relative;
    width: 100%;
    height: 0.2em;
    display: flex;
    align-items: center;
  }

  .nucleotide {
    width: 0.4em;
    height: 0.4em;
    background: ${({ $checked }) => $checked ? '#00ff9f' : '#00bfff'};
    border-radius: 50%;
    position: relative;
    transition: all 0.4s ease;
    
    &::before {
      content: '';
      position: absolute;
      width: 1em;
      height: 2px;
      background: ${({ $checked }) => $checked ? '#00ff9f50' : '#00bfff50'};
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .pair {
    position: absolute;
    width: 0.4em;
    height: 0.4em;
    background: ${({ $checked }) => $checked ? '#ff3366' : '#ff6b6b'};
    border-radius: 50%;
    left: calc(100% - 0.4em);
    transition: all 0.4s ease;
  }

  .scanner {
    position: absolute;
    top: 0;
    left: ${({ $checked }) => $checked ? '60%' : '20%'};
    width: 2em;
    height: 100%;
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .beam {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${({ $checked }) => $checked ? '#00ff9f' : '#00bfff'},
      transparent
    );
    transform: translateX(-50%);
    animation: scan 2s ease-in-out infinite;
  }

  /* Animations */
  @keyframes scan {
    0% {
      opacity: 0;
      transform: translateX(-50%) scaleY(0);
    }
    50% {
      opacity: 1;
      transform: translateX(-50%) scaleY(1);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) scaleY(0);
    }
  }

  /* DNA Rotation */
  .strand-1 .base {
    animation: rotate1 4s linear infinite;
  }

  .strand-2 .base {
    animation: rotate2 4s linear infinite;
  }

  @keyframes rotate1 {
    0% { transform: rotateY(0deg) translateX(0); }
    50% { transform: rotateY(180deg) translateX(0.5em); }
    100% { transform: rotateY(360deg) translateX(0); }
  }

  @keyframes rotate2 {
    0% { transform: rotateY(180deg) translateX(-0.5em); }
    50% { transform: rotateY(360deg) translateX(0); }
    100% { transform: rotateY(540deg) translateX(-0.5em); }
  }

  /* Hover Effects */
  .dna-switch:hover .nucleotide {
    box-shadow: 0 0 10px ${({ $checked }) => $checked ? '#00ff9f' : '#00bfff'};
  }

  .dna-switch:hover .pair {
    box-shadow: 0 0 10px ${({ $checked }) => $checked ? '#ff3366' : '#ff6b6b'};
  }

  /* Focus State */
  input:focus ~ .helix {
    outline: 2px solid ${({ $checked }) => $checked ? '#00ff9f' : '#00bfff'};
    outline-offset: 0.1em;
  }

  /* Active State */
  .dna-switch:active .scanner {
    transform: scaleX(0.95);
  }

  /* Genetic Code Effect */
  .helix::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(90deg,
        transparent 0%,
        ${({ $checked }) => $checked ? '#00ff9f10' : '#00bfff10'} 25%,
        transparent 50%
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 10px,
        ${({ $checked }) => $checked ? '#00ff9f10' : '#00bfff10'} 10px,
        ${({ $checked }) => $checked ? '#00ff9f10' : '#00bfff10'} 20px
      );
    animation: code 20s linear infinite;
  }

  @keyframes code {
    from { background-position: 0 0; }
    to { background-position: 100% 100%; }
  }

  /* Energy Field */
  .helix::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at ${({ $checked }) => $checked ? '70%' : '30%'} 50%,
      ${({ $checked }) => $checked ? '#00ff9f20' : '#00bfff20'},
      transparent 70%
    );
    transition: all 0.4s ease;
  }
`;

export default Switch; 