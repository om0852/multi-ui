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
        id="constellation-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="constellation-toggle" className="toggle-label">
        <div className="night-sky">
          <div className="constellation">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
            <div className="line line-4"></div>
          </div>
          <div className="shooting-star"></div>
          <div className="status-text">
            {isChecked ? 'URSA MAJOR' : 'ORION'}
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
    height: 120px;
    cursor: pointer;
  }

  .night-sky {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  .constellation {
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotate(${props => props.$isChecked ? '180deg' : '0deg'});
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .star {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .star-1 { top: 30%; left: 30%; }
  .star-2 { top: 40%; left: 60%; }
  .star-3 { top: 60%; left: 40%; }
  .star-4 { top: 70%; left: 70%; }
  .star-5 { top: 50%; left: 50%; }

  .line {
    position: absolute;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    transform-origin: left center;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-1 {
    top: 32%;
    left: 32%;
    width: 35px;
    transform: rotate(${props => props.$isChecked ? '45deg' : '30deg'});
  }

  .line-2 {
    top: 42%;
    left: 62%;
    width: 30px;
    transform: rotate(${props => props.$isChecked ? '-45deg' : '-60deg'});
  }

  .line-3 {
    top: 62%;
    left: 42%;
    width: 40px;
    transform: rotate(${props => props.$isChecked ? '135deg' : '120deg'});
  }

  .line-4 {
    top: 72%;
    left: 72%;
    width: 25px;
    transform: rotate(${props => props.$isChecked ? '-135deg' : '-150deg'});
  }

  .shooting-star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 50%;
    top: ${props => props.$isChecked ? '20%' : '80%'};
    left: -10%;
    opacity: 0;
    box-shadow: 0 0 5px #fff, 0 0 10px #fff;
    animation: shoot 2s linear infinite;
    animation-delay: ${props => Math.random() * 2}s;
  }

  .status-text {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.8);
    font-size: 10px;
    font-weight: bold;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
  }

  /* Animations */
  @keyframes twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes shoot {
    from {
      transform: translateX(0) translateY(0);
      opacity: 1;
    }
    to {
      transform: translateX(150px) translateY(-150px);
      opacity: 0;
    }
  }

  .star {
    animation: twinkle 1.5s ease-in-out infinite;
  }

  .star-1 { animation-delay: 0s; }
  .star-2 { animation-delay: 0.3s; }
  .star-3 { animation-delay: 0.6s; }
  .star-4 { animation-delay: 0.9s; }
  .star-5 { animation-delay: 1.2s; }

  /* Hover Effects */
  .toggle-label:hover .star {
    box-shadow: 0 0 15px #fff, 0 0 30px #fff, 0 0 45px #fff;
  }

  .toggle-label:hover .line {
    background: rgba(255, 255, 255, 0.5);
  }

  /* Active State */
  .toggle-label:active .constellation {
    transform: scale(0.95) rotate(${props => props.$isChecked ? '180deg' : '0deg'});
  }
`;

export default Toggle; 