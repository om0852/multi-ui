'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface JellyButtonProps {
  variant?: 'classic' | 'neon' | 'candy' | 'ocean' | 'sunset' | 'forest';
  children: React.ReactNode;
  onClick?: () => void;
}

const jellyHorizontal = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const glow = keyframes`
  0% {
    filter: brightness(100%);
  }
  50% {
    filter: brightness(120%);
  }
  100% {
    filter: brightness(100%);
  }
`;

const liquidMove = keyframes`
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -75%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
`;

const variantStyles = {
  classic: {
    background: 'rgb(151, 95, 255)',
    topShadow: 'rgb(210, 187, 253)',
    bottomShadow: 'rgb(124, 54, 255)',
    highlightOpacity: '0.678',
    lowlightOpacity: '0.137',
  },
  neon: {
    background: 'rgb(255, 71, 209)',
    topShadow: 'rgb(255, 198, 255)',
    bottomShadow: 'rgb(219, 37, 207)',
    highlightOpacity: '0.8',
    lowlightOpacity: '0.2',
  },
  candy: {
    background: 'rgb(255, 111, 145)',
    topShadow: 'rgb(255, 205, 215)',
    bottomShadow: 'rgb(255, 71, 98)',
    highlightOpacity: '0.7',
    lowlightOpacity: '0.15',
  },
  ocean: {
    background: 'rgb(64, 169, 255)',
    topShadow: 'rgb(185, 222, 255)',
    bottomShadow: 'rgb(0, 136, 255)',
    highlightOpacity: '0.75',
    lowlightOpacity: '0.18',
  },
  sunset: {
    background: 'rgb(255, 126, 95)',
    topShadow: 'rgb(255, 205, 189)',
    bottomShadow: 'rgb(255, 89, 50)',
    highlightOpacity: '0.72',
    lowlightOpacity: '0.16',
  },
  forest: {
    background: 'rgb(67, 209, 138)',
    topShadow: 'rgb(175, 238, 202)',
    bottomShadow: 'rgb(34, 183, 108)',
    highlightOpacity: '0.68',
    lowlightOpacity: '0.14',
  },
};

const StyledWrapper = styled.div<{ $variant: NonNullable<JellyButtonProps['variant']> }>`
  .jelly-button {
    position: relative;
    width: 150px;
    height: 55px;
    border-radius: 45px;
    border: none;
    background-color: ${props => variantStyles[props.$variant].background};
    color: white;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1px;
    box-shadow: 
      0px 10px 10px ${props => variantStyles[props.$variant].topShadow} inset,
      0px 5px 10px rgba(5, 5, 5, 0.212),
      0px -10px 10px ${props => variantStyles[props.$variant].bottomShadow} inset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    text-transform: uppercase;
    animation: ${glow} 3s infinite;

    &::before {
      width: 70%;
      height: 2px;
      position: absolute;
      background-color: rgba(250, 250, 250, ${props => variantStyles[props.$variant].highlightOpacity});
      content: "";
      filter: blur(1px);
      top: 7px;
      border-radius: 50%;
    }

    &::after {
      width: 70%;
      height: 2px;
      position: absolute;
      background-color: rgba(250, 250, 250, ${props => variantStyles[props.$variant].lowlightOpacity});
      content: "";
      filter: blur(1px);
      bottom: 7px;
      border-radius: 50%;
    }

    &:hover {
      animation: ${jellyHorizontal} 0.9s both;
      transform: translateY(-2px);
      box-shadow: 
        0px 15px 15px ${props => variantStyles[props.$variant].topShadow} inset,
        0px 8px 15px rgba(5, 5, 5, 0.3),
        0px -15px 15px ${props => variantStyles[props.$variant].bottomShadow} inset;
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 
        0px 5px 5px ${props => variantStyles[props.$variant].topShadow} inset,
        0px 2px 5px rgba(5, 5, 5, 0.15),
        0px -5px 5px ${props => variantStyles[props.$variant].bottomShadow} inset;
    }
  }
`;

const StyledLiquidButton = styled.button`
  padding: 16px 32px;
  font-size: 18px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: rgba(255, 255, 255, 0.2);
    transform-origin: center;
    animation: ${liquidMove} 4s infinite linear;
    border-radius: 45%;
    z-index: -1;
  }

  &:hover {
    transform: scale(1.05);
    background: #357abd;
    
    &::before {
      animation-duration: 2s;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const JellyButton: React.FC<JellyButtonProps> = ({
  variant = 'classic',
  children,
  onClick,
}) => {
  return (
    <StyledWrapper $variant={variant}>
      <button className="jelly-button" onClick={onClick}>
        {children}
      </button>
    </StyledWrapper>
  );
};

const LiquidButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledLiquidButton>{children}</StyledLiquidButton>;
};

export default JellyButton; 