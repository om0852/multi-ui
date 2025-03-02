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
        id="hourglass-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="hourglass-toggle" className="toggle-label">
        <div className="hourglass">
          <div className="frame">
            <div className="top-bulb">
              <div className="sand-pile"></div>
              {[...Array(15)].map((_, i) => (
                <div key={`sand-top-${i}`} className="sand-particle"></div>
              ))}
            </div>
            <div className="middle">
              <div className="neck"></div>
              {[...Array(5)].map((_, i) => (
                <div key={`falling-${i}`} className="falling-sand"></div>
              ))}
            </div>
            <div className="bottom-bulb">
              <div className="sand-pile"></div>
              {[...Array(15)].map((_, i) => (
                <div key={`sand-bottom-${i}`} className="sand-particle"></div>
              ))}
            </div>
          </div>
          <div className="status">
            {isChecked ? 'TIME UP' : 'TIME LEFT'}
          </div>
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

  .hourglass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .frame {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 50px;
    transform: translate(-50%, -50%) rotate(${props => props.$isChecked ? '180deg' : '0deg'});
    transition: transform 0.6s ease;
  }

  .top-bulb,
  .bottom-bulb {
    position: absolute;
    width: 100%;
    height: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
  }

  .top-bulb {
    top: 0;
  }

  .bottom-bulb {
    bottom: 0;
  }

  .middle {
    position: absolute;
    top: 20px;
    left: 50%;
    width: 8px;
    height: 10px;
    transform: translateX(-50%);
  }

  .neck {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    clip-path: polygon(0 0, 100% 0, 60% 100%, 40% 100%);
  }

  .sand-pile {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${props => props.$isChecked ? '2px' : '15px'};
    background: #f1c40f;
    transition: height 0.6s ease;
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
  }

  .sand-particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #f1c40f;
    border-radius: 50%;
    opacity: ${props => props.$isChecked ? '0' : '1'};
    transition: opacity 0.3s ease;
  }

  ${[...Array(15)].map((_, i) => `
    .sand-particle:nth-child(${i + 2}) {
      top: ${Math.random() * 15}px;
      left: ${Math.random() * 36 + 2}px;
    }
  `).join('')}

  .falling-sand {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #f1c40f;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${props => props.$isChecked ? '1' : '0'};
    animation: fall 1s linear infinite;
  }

  ${[...Array(5)].map((_, i) => `
    .falling-sand:nth-child(${i + 2}) {
      animation-delay: ${i * 0.2}s;
    }
  `).join('')}

  .status {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: #ecf0f1;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  @keyframes fall {
    0% {
      top: 0;
      opacity: 1;
    }
    100% {
      top: 10px;
      opacity: 0;
    }
  }

  /* Hover Effects */
  .toggle-label:hover .frame {
    transform: translate(-50%, -50%) rotate(${props => props.$isChecked ? '185deg' : '-5deg'});
  }

  /* Active State */
  .toggle-label:active .hourglass {
    transform: scale(0.95);
  }
`;

export default Toggle; 