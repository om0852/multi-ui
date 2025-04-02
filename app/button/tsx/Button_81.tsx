'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface NeonBorderButtonProps {
  color?: 'blue' | 'pink' | 'green' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const borderRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const borderFlash = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const StyledNeonBorderButton = styled.button<NeonBorderButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '12px 24px' : props.size === 'md' ? '16px 32px' : '20px 40px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '20px'};
  background: rgba(0, 0, 0, 0.8);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  overflow: hidden;

  ${props => {
    const colors = {
      blue: css`
        --neon-color: #00f3ff;
        color: #00f3ff;
      `,
      pink: css`
        --neon-color: #ff00ff;
        color: #ff00ff;
      `,
      green: css`
        --neon-color: #00ff00;
        color: #00ff00;
      `,
      gold: css`
        --neon-color: #ffd700;
        color: #ffd700;
      `,
    };
    return colors[props.color || 'blue'];
  }}

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 12px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      var(--neon-color) 90deg,
      transparent 180deg,
      var(--neon-color) 270deg,
      transparent 360deg
    );
    animation: ${borderRotate} 4s linear infinite;
  }

  &::after {
    animation: ${borderRotate} 4s linear infinite reverse;
    filter: blur(20px);
  }

  .button-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 6px;
    z-index: 2;
    min-width: ${props =>
      props.size === 'sm' ? '100px' : props.size === 'md' ? '140px' : '180px'};
    min-height: ${props =>
      props.size === 'sm' ? '40px' : props.size === 'md' ? '50px' : '60px'};
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 8px var(--neon-color);
  }

  &:hover {
    transform: scale(1.05);
    
    &::before,
    &::after {
      animation: ${borderRotate} 2s linear infinite,
                ${borderFlash} 2s infinite;
    }

    .button-inner {
      text-shadow: 0 0 12px var(--neon-color),
                  0 0 24px var(--neon-color);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const NeonBorderButton: React.FC<NeonBorderButtonProps> = ({
  color = 'blue',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledNeonBorderButton color={color} size={size} onClick={onClick}>
      <div className="button-inner">{children}</div>
    </StyledNeonBorderButton>
  );
};

export default NeonBorderButton; 