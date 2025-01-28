'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface GlitchBorderButtonProps {
  theme?: 'cyber' | 'matrix' | 'vapor' | 'future';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

interface StyledButtonProps {
  $theme: NonNullable<GlitchBorderButtonProps['theme']>;
  $size: NonNullable<GlitchBorderButtonProps['size']>;
}

const glitchAnim1 = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

const glitchAnim2 = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(2px, -2px);
  }
  40% {
    transform: translate(2px, 2px);
  }
  60% {
    transform: translate(-2px, -2px);
  }
  80% {
    transform: translate(-2px, 2px);
  }
  100% {
    transform: translate(0);
  }
`;

const borderFlash = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const themeStyles = {
  cyber: {
    background: '#000000',
    color: '#0ff',
    borderColor: '#0ff',
    glitchColor1: '#f0f',
    glitchColor2: '#0ff',
    textShadow: '0 0 7px #0ff',
  },
  matrix: {
    background: '#000000',
    color: '#00ff00',
    borderColor: '#00ff00',
    glitchColor1: '#00cc00',
    glitchColor2: '#00ff00',
    textShadow: '0 0 7px #00ff00',
  },
  vapor: {
    background: '#000000',
    color: '#ff71ce',
    borderColor: '#ff71ce',
    glitchColor1: '#b967ff',
    glitchColor2: '#ff71ce',
    textShadow: '0 0 7px #ff71ce',
  },
  future: {
    background: '#000000',
    color: '#7df9ff',
    borderColor: '#7df9ff',
    glitchColor1: '#ff00ff',
    glitchColor2: '#7df9ff',
    textShadow: '0 0 7px #7df9ff',
  },
};

const StyledGlitchBorderButton = styled.button<StyledButtonProps>`
  position: relative;
  padding: ${props =>
    props.$size === 'sm' ? '10px 20px' : props.$size === 'md' ? '14px 28px' : '18px 36px'};
  font-size: ${props =>
    props.$size === 'sm' ? '14px' : props.$size === 'md' ? '16px' : '18px'};
  background: ${props => themeStyles[props.$theme].background};
  color: ${props => themeStyles[props.$theme].color};
  border: 2px solid ${props => themeStyles[props.$theme].borderColor};
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  text-shadow: ${props => themeStyles[props.$theme].textShadow};
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 6px;
    pointer-events: none;
  }

  &::before {
    border-color: ${props => themeStyles[props.$theme].glitchColor1};
    animation: ${glitchAnim1} 2s infinite linear alternate-reverse;
  }

  &::after {
    border-color: ${props => themeStyles[props.$theme].glitchColor2};
    animation: ${glitchAnim2} 2s infinite linear alternate-reverse;
    animation-delay: 1s;
  }

  &:hover {
    transform: scale(1.05);
    animation: ${borderFlash} 1s infinite;
    box-shadow: 0 0 20px ${props => themeStyles[props.$theme].borderColor};

    &::before {
      animation: ${glitchAnim1} 1s infinite linear alternate-reverse;
    }

    &::after {
      animation: ${glitchAnim2} 1s infinite linear alternate-reverse;
      animation-delay: 0.5s;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  .content {
    position: relative;
    z-index: 1;
    mix-blend-mode: difference;
  }
`;

const GlitchBorderButton: React.FC<GlitchBorderButtonProps> = ({
  theme = 'cyber',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledGlitchBorderButton $theme={theme} $size={size} onClick={onClick}>
      <span className="content">{children}</span>
    </StyledGlitchBorderButton>
  );
};

const neonPulse = keyframes`
  0% {
    box-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #0ff,
                0 0 20px #0ff;
  }
  50% {
    box-shadow: 0 0 10px #fff,
                0 0 20px #fff,
                0 0 30px #0ff,
                0 0 40px #0ff;
  }
  100% {
    box-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #0ff,
                0 0 20px #0ff;
  }
`;

const StyledNeonButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  background: transparent;
  color: #fff;
  border: 2px solid #0ff;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${neonPulse} 2s infinite;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const NeonButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledNeonButton>{children}</StyledNeonButton>;
};

export default GlitchBorderButton; 