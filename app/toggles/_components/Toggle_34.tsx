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
        id="weather-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="weather-toggle" className="toggle-label">
        <div className="weather-scene">
          <div className="sun">
            {[...Array(8)].map((_, i) => (
              <div key={`ray-${i}`} className="sun-ray"></div>
            ))}
          </div>
          <div className="cloud">
            <div className="cloud-part part-1"></div>
            <div className="cloud-part part-2"></div>
            <div className="cloud-part part-3"></div>
          </div>
          {[...Array(10)].map((_, i) => (
            <div key={`raindrop-${i}`} className="raindrop"></div>
          ))}
          <div className="temperature">
            {isChecked ? '18°C' : '28°C'}
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

  .weather-scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.$isChecked 
      ? 'linear-gradient(145deg, #2c3e50, #3498db)'
      : 'linear-gradient(145deg, #e67e22, #f1c40f)'};
    border-radius: 30px;
    overflow: hidden;
    transition: background 0.6s ease;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .sun {
    position: absolute;
    top: ${props => props.$isChecked ? '-20px' : '10px'};
    left: ${props => props.$isChecked ? '-20px' : '20px'};
    width: 30px;
    height: 30px;
    background: #f1c40f;
    border-radius: 50%;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${props => props.$isChecked ? '0.3' : '1'};
  }

  .sun-ray {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;
    background: #f1c40f;
    transform-origin: 0 50%;
    animation: rotate 10s linear infinite;
    opacity: ${props => props.$isChecked ? '0' : '1'};
    transition: opacity 0.3s ease;
  }

  ${[...Array(8)].map((_, i) => `
    .sun-ray:nth-child(${i + 1}) {
      transform: rotate(${45 * i}deg);
    }
  `).join('')}

  .cloud {
    position: absolute;
    top: ${props => props.$isChecked ? '10px' : '-30px'};
    right: 20px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cloud-part {
    position: absolute;
    background: #fff;
    border-radius: 20px;
  }

  .part-1 {
    width: 40px;
    height: 20px;
    top: 0;
    left: 0;
  }

  .part-2 {
    width: 20px;
    height: 20px;
    top: -10px;
    left: 10px;
  }

  .part-3 {
    width: 20px;
    height: 20px;
    top: -5px;
    left: 25px;
  }

  .raindrop {
    position: absolute;
    width: 2px;
    height: 8px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    top: -10px;
    opacity: ${props => props.$isChecked ? '1' : '0'};
    animation: rain 1s linear infinite;
  }

  ${[...Array(10)].map((_, i) => `
    .raindrop:nth-child(${i + 3}) {
      left: ${10 + (i * 10)}px;
      animation-delay: ${Math.random()}s;
    }
  `).join('')}

  .temperature {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  /* Animations */
  @keyframes rotate {
    from { transform: rotate(0deg) translateX(15px); }
    to { transform: rotate(360deg) translateX(15px); }
  }

  @keyframes rain {
    0% {
      transform: translateY(0) scaleY(1);
      opacity: ${props => props.$isChecked ? '1' : '0'};
    }
    70% {
      transform: translateY(40px) scaleY(1.5);
      opacity: ${props => props.$isChecked ? '0.5' : '0'};
    }
    100% {
      transform: translateY(50px) scaleY(1);
      opacity: 0;
    }
  }

  /* Hover Effects */
  .toggle-label:hover .sun {
    transform: scale(1.1);
  }

  .toggle-label:hover .cloud {
    transform: scale(1.1);
  }

  /* Active State */
  .toggle-label:active .weather-scene {
    transform: scale(0.95);
  }
`;

export default Toggle; 