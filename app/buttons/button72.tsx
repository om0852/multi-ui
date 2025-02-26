'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface NeonButtonProps {
  color?: 'blue' | 'pink' | 'green' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const neonPulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.8),
                0 0 10px rgba(255, 255, 255, 0.8),
                0 0 15px currentColor,
                0 0 20px currentColor;
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 30px currentColor,
                0 0 40px currentColor;
  }
`;

const textFlicker = keyframes`
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 1;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
  }
`;

const StyledNeonButton = styled.button<NeonButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '8px 16px' : props.size === 'md' ? '12px 24px' : '16px 32px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '20px'};
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 2px solid;
  border-radius: 4px;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;
  overflow: hidden;

  ${props => {
    const colors = {
      blue: css`
        color: #00f3ff;
        border-color: #00f3ff;
      `,
      pink: css`
        color: #ff00ff;
        border-color: #ff00ff;
      `,
      green: css`
        color: #00ff00;
        border-color: #00ff00;
      `,
      purple: css`
        color: #bf00ff;
        border-color: #bf00ff;
      `,
    };
    return colors[props.color || 'blue'];
  }}

  &:hover {
    animation: ${neonPulse} 1.5s infinite alternate;
    text-shadow: 0 0 5px currentColor;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  span {
    position: relative;
    z-index: 1;
    animation: ${textFlicker} 3s linear infinite;
  }
`;

const NeonButton: React.FC<NeonButtonProps> = ({
  color = 'blue',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledNeonButton color={color} size={size} onClick={onClick}>
      <span>{children}</span>
    </StyledNeonButton>
  );
};

export default NeonButton; 