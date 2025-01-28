'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface JellyButton2Props {
  variant?: 'galaxy' | 'lava' | 'frost' | 'toxic' | 'rainbow';
  children: React.ReactNode;
  onClick?: () => void;
}

const jellyPop = keyframes`
  0% {
    transform: scale3d(1, 1, 1) rotate(0deg);
  }
  30% {
    transform: scale3d(1.15, 0.85, 1) rotate(-2deg);
  }
  40% {
    transform: scale3d(0.85, 1.15, 1) rotate(2deg);
  }
  50% {
    transform: scale3d(1.1, 0.9, 1) rotate(-1deg);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1) rotate(1deg);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1) rotate(0deg);
  }
  100% {
    transform: scale3d(1, 1, 1) rotate(0deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const variantStyles = {
  galaxy: {
    background: 'linear-gradient(45deg, #2b5876 0%, #4e4376 50%, #2b5876 100%)',
    topShadow: 'rgba(75, 192, 255, 0.5)',
    bottomShadow: 'rgba(147, 112, 219, 0.8)',
    highlightOpacity: '0.8',
    lowlightOpacity: '0.2',
    accent: 'rgba(255, 255, 255, 0.9)',
  },
  lava: {
    background: 'linear-gradient(45deg, #f12711 0%, #f5af19 50%, #f12711 100%)',
    topShadow: 'rgba(255, 175, 25, 0.5)',
    bottomShadow: 'rgba(241, 39, 17, 0.8)',
    highlightOpacity: '0.7',
    lowlightOpacity: '0.3',
    accent: 'rgba(255, 255, 255, 0.8)',
  },
  frost: {
    background: 'linear-gradient(45deg, #74ebd5 0%, #9face6 50%, #74ebd5 100%)',
    topShadow: 'rgba(154, 236, 219, 0.5)',
    bottomShadow: 'rgba(159, 172, 230, 0.8)',
    highlightOpacity: '0.9',
    lowlightOpacity: '0.1',
    accent: 'rgba(255, 255, 255, 0.95)',
  },
  toxic: {
    background: 'linear-gradient(45deg, #d3fc7e 0%, #45b649 50%, #d3fc7e 100%)',
    topShadow: 'rgba(211, 252, 126, 0.5)',
    bottomShadow: 'rgba(69, 182, 73, 0.8)',
    highlightOpacity: '0.75',
    lowlightOpacity: '0.25',
    accent: 'rgba(255, 255, 255, 0.85)',
  },
  rainbow: {
    background: 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)',
    topShadow: 'rgba(255, 255, 255, 0.5)',
    bottomShadow: 'rgba(128, 128, 128, 0.8)',
    highlightOpacity: '0.85',
    lowlightOpacity: '0.15',
    accent: 'rgba(255, 255, 255, 1)',
  },
};

const StyledWrapper = styled.div<{ $variant: NonNullable<JellyButton2Props['variant']> }>`
  .jelly-button {
    position: relative;
    width: 160px;
    height: 60px;
    border-radius: 30px;
    border: none;
    background: ${props => variantStyles[props.$variant].background};
    background-size: 200% auto;
    color: white;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 2px;
    box-shadow: 
      0px 10px 20px ${props => variantStyles[props.$variant].topShadow} inset,
      0px 5px 15px rgba(0, 0, 0, 0.3),
      0px -10px 20px ${props => variantStyles[props.$variant].bottomShadow} inset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    text-transform: uppercase;
    animation: ${float} 3s ease-in-out infinite;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        ${props => variantStyles[props.$variant].accent},
        transparent
      );
      transition: all 0.6s ease;
    }

    &::after {
      content: '';
      position: absolute;
      width: 80%;
      height: 2px;
      background: ${props => variantStyles[props.$variant].accent};
      filter: blur(2px);
      bottom: 8px;
      left: 10%;
      border-radius: 50%;
      opacity: 0.5;
      transition: all 0.3s ease;
    }

    .text {
      position: relative;
      z-index: 1;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    &:hover {
      animation: ${jellyPop} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      transform: translateY(-3px);
      background-size: 200% auto;
      animation: ${shimmer} 2s linear infinite;
      box-shadow: 
        0px 15px 25px ${props => variantStyles[props.$variant].topShadow} inset,
        0px 8px 20px rgba(0, 0, 0, 0.4),
        0px -15px 25px ${props => variantStyles[props.$variant].bottomShadow} inset;

      &::before {
        left: 100%;
      }

      &::after {
        opacity: 0.8;
        filter: blur(3px);
        width: 90%;
        left: 5%;
      }
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 
        0px 5px 10px ${props => variantStyles[props.$variant].topShadow} inset,
        0px 3px 8px rgba(0, 0, 0, 0.2),
        0px -5px 10px ${props => variantStyles[props.$variant].bottomShadow} inset;
    }
  }
`;

const JellyButton2: React.FC<JellyButton2Props> = ({
  variant = 'galaxy',
  children,
  onClick,
}) => {
  return (
    <StyledWrapper $variant={variant}>
      <button className="jelly-button" onClick={onClick}>
        <span className="text">{children}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledMagneticButton = styled.button<{ $x: number; $y: number }>`
  padding: 15px 30px;
  font-size: 18px;
  background: linear-gradient(45deg, #6b3aff, #9d6bff);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  transform: translate(${props => props.$x}px, ${props => props.$y}px);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: linear-gradient(45deg, #9d6bff, #6b3aff);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform: scale(0.95) translate(${props => props.$x}px, ${props => props.$y}px);
  }
`;

const MagneticButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magneticStrength = 0.4;

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setPosition({
      x: x * magneticStrength,
      y: y * magneticStrength
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <StyledMagneticButton
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      $x={position.x}
      $y={position.y}
    >
      {children}
    </StyledMagneticButton>
  );
};

export default JellyButton2; 