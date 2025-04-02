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
      <label className="arcade-switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="game-screen">
          <div className="pixels">
            {[...Array(16)].map((_, i) => (
              <div key={i} className={`pixel pixel-${i + 1}`}></div>
            ))}
          </div>
          <div className="player">
            <div className="character"></div>
            <div className="shadow"></div>
          </div>
          <div className="score">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="digit"></div>
            ))}
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .arcade-switch {
    display: inline-block;
    position: relative;
    width: 5em;
    height: 2.4em;
    cursor: pointer;
  }

  .arcade-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .game-screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #111;
    border-radius: 1.2em;
    overflow: hidden;
    border: 2px solid #333;
    box-shadow: 
      inset 0 0 10px rgba(0, 255, 0, 0.2),
      0 0 5px rgba(0, 255, 0, 0.5);
  }

  .pixels {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 2px;
    padding: 4px;
    opacity: 0.15;
  }

  .pixel {
    background: #0f0;
    animation: flicker 2s infinite;
  }

  ${[...Array(16)].map((_, i) => `
    .pixel-${i + 1} {
      animation-delay: ${i * 0.1}s;
      opacity: ${Math.random() * 0.5 + 0.5};
    }
  `).join('\n')}

  .player {
    position: absolute;
    top: 50%;
    left: ${({ $checked }) => $checked ? '80%' : '20%'};
    width: 1.2em;
    height: 1.2em;
    transform: translate(-50%, -50%);
    transition: left 0.4s steps(4, end);
  }

  .character {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(45deg, transparent 25%, #0f0 25%, #0f0 75%, transparent 75%),
      linear-gradient(-45deg, transparent 25%, #0f0 25%, #0f0 75%, transparent 75%);
    background-size: 8px 8px;
    animation: move 0.4s steps(4) infinite;
  }

  .shadow {
    position: absolute;
    bottom: -0.2em;
    left: 0.2em;
    width: 80%;
    height: 0.2em;
    background: rgba(0, 255, 0, 0.3);
    border-radius: 50%;
    filter: blur(2px);
  }

  .score {
    position: absolute;
    top: 0.3em;
    right: 0.5em;
    display: flex;
    gap: 2px;
  }

  .digit {
    width: 0.4em;
    height: 0.6em;
    background: ${({ $checked }) => $checked ? '#0f0' : '#030'};
    clip-path: polygon(
      30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 
      30% 100%, 0% 70%, 0% 30%
    );
  }

  /* Animations */
  @keyframes flicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  @keyframes move {
    0% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
    100% { transform: translateY(0); }
  }

  /* Scan Line Effect */
  .game-screen::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px,
      transparent 2px
    );
    animation: scan 10s linear infinite;
    pointer-events: none;
  }

  @keyframes scan {
    from { transform: translateY(0); }
    to { transform: translateY(20px); }
  }

  /* CRT Effect */
  .game-screen::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      transparent 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
    pointer-events: none;
  }

  /* Hover Effects */
  .arcade-switch:hover .character {
    animation: move 0.2s steps(4) infinite;
  }

  .arcade-switch:hover .game-screen {
    box-shadow: 
      inset 0 0 15px rgba(0, 255, 0, 0.3),
      0 0 10px rgba(0, 255, 0, 0.7);
  }

  /* Focus State */
  input:focus ~ .game-screen {
    outline: 2px solid #0f0;
    outline-offset: 0.1em;
  }

  /* Active State */
  .arcade-switch:active .player {
    transform: translate(-50%, -50%) scale(0.9);
  }

  /* Power State */
  .game-screen {
    &::before {
      opacity: ${({ $checked }) => $checked ? '1' : '0.5'};
    }
    &::after {
      opacity: ${({ $checked }) => $checked ? '1' : '0.7'};
    }
  }
`;

export default Switch; 