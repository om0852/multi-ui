"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type ToggleProps = {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

interface StyledWrapperProps {
  $isChecked: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ defaultChecked = false, onChange }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  if (!mounted) return null;

  return (
    <StyledWrapper $isChecked={isChecked}>
      <input
        type="checkbox"
        id="music-box-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="music-box-toggle" className="toggle-label">
        <div className="music-box">
          <div className="cylinder">
            {[...Array(12)].map((_, i) => (
              <div key={`pin-${i}`} className="pin"></div>
            ))}
          </div>
          <div className="comb">
            {[...Array(8)].map((_, i) => (
              <div key={`tooth-${i}`} className="tooth"></div>
            ))}
          </div>
          <div className="handle"></div>
          <div className="note-symbol">♪</div>
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  .toggle-input {
    display: none;
  }

  .toggle-label {
    position: relative;
    display: block;
    width: 120px;
    height: 60px;
    cursor: pointer;
  }

  .music-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #8b4513, #654321);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
    padding: 5px;
  }

  .cylinder {
    position: absolute;
    top: 50%;
    left: 30px;
    width: 40px;
    height: 40px;
    background: #d4af37;
    border-radius: 20px;
    transform: translateY(-50%) rotate(${props => props.$isChecked ? '360deg' : '0deg'});
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .pin {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    transform-origin: center center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  ${[...Array(12)].map((_, i) => `
    .pin:nth-child(${i + 1}) {
      top: ${20 + Math.sin(i * Math.PI / 6) * 15}px;
      left: ${20 + Math.cos(i * Math.PI / 6) * 15}px;
    }
  `).join('')}

  .comb {
    position: absolute;
    top: 50%;
    right: 20px;
    width: 30px;
    height: 40px;
    transform: translateY(-50%);
  }

  .tooth {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #c0c0c0;
    right: 0;
    transform-origin: right center;
    transition: transform 0.2s ease;
  }

  ${[...Array(8)].map((_, i) => `
    .tooth:nth-child(${i + 1}) {
      top: ${5 + i * 5}px;
      transform: rotate(${props => props.$isChecked ? '10deg' : '0deg'});
      transition-delay: ${i * 0.05}s;
    }
  `).join('')}

  .handle {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 8px;
    height: 8px;
    background: #d4af37;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  .note-symbol {
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${props => props.$isChecked ? '#ffd700' : '#a0522d'};
    font-size: 16px;
    opacity: ${props => props.$isChecked ? '1' : '0.5'};
    transform: ${props => props.$isChecked ? 'scale(1.2)' : 'scale(1)'};
    transition: all 0.3s ease;
  }

  /* Hover Effects */
  .toggle-label:hover .cylinder {
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }

  .toggle-label:hover .pin {
    background: #ffd700;
  }

  /* Active State */
  .toggle-label:active .cylinder {
    transform: translateY(-50%) scale(0.95) rotate(${props => props.$isChecked ? '360deg' : '0deg'});
  }

  /* Animation */
  @keyframes play {
    0% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
    100% { transform: translateY(0); }
  }

  .toggle-input:checked + .toggle-label .tooth {
    animation: play 0.2s ease-in-out;
    animation-delay: var(--delay);
  }
`;

export default Toggle; 