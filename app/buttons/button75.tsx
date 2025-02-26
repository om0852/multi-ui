'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface GlitchButtonProps {
  theme?: 'cyber' | 'retro' | 'future' | 'punk';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const glitch = keyframes`
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

const noise = keyframes`
  0%, 100% { clip-path: inset(50% 0 30% 0); }
  20% { clip-path: inset(15% 0 60% 0); }
  40% { clip-path: inset(45% 0 40% 0); }
  60% { clip-path: inset(25% 0 35% 0); }
  80% { clip-path: inset(55% 0 20% 0); }
`;

const StyledGlitchButton = styled.button<GlitchButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '10px 20px' : props.size === 'md' ? '15px 30px' : '20px 40px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '20px'};
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;

  ${props => {
    const themes = {
      cyber: css`
        color: #0ff;
        border: 2px solid #0ff;
        text-shadow: 0 0 5px #0ff;
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
      `,
      retro: css`
        color: #ff0080;
        border: 2px solid #ff0080;
        text-shadow: 0 0 5px #ff0080;
        box-shadow: 0 0 10px rgba(255, 0, 128, 0.3);
      `,
      future: css`
        color: #7700ff;
        border: 2px solid #7700ff;
        text-shadow: 0 0 5px #7700ff;
        box-shadow: 0 0 10px rgba(119, 0, 255, 0.3);
      `,
      punk: css`
        color: #ff0;
        border: 2px solid #ff0;
        text-shadow: 0 0 5px #ff0;
        box-shadow: 0 0 10px rgba(255, 255, 0, 0.3);
      `,
    };
    return themes[props.theme || 'cyber'];
  }}

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    pointer-events: none;
  }

  &::before {
    text-shadow: -2px 0 #ff0080;
    animation: ${noise} 2s infinite linear alternate-reverse;
  }

  &::after {
    text-shadow: 2px 0 #0ff;
    animation: ${noise} 3s infinite linear alternate-reverse;
  }

  &:hover {
    transform: scale(1.05);
    animation: ${glitch} 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
    
    &::before {
      animation: ${noise} 1s infinite linear alternate-reverse;
    }
    
    &::after {
      animation: ${noise} 0.5s infinite linear alternate-reverse;
    }
  }
`;

const GlitchButton: React.FC<GlitchButtonProps> = ({
  theme = 'cyber',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledGlitchButton
      theme={theme}
      size={size}
      onClick={onClick}
      data-text={children}
    >
      {children}
    </StyledGlitchButton>
  );
};

export default GlitchButton; 