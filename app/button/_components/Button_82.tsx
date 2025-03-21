'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface FloatingBorderButtonProps {
  color?: 'violet' | 'coral' | 'emerald' | 'azure';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const borderFloat = keyframes`
  0% {
    clip-path: inset(0 0 98% 0);
  }
  25% {
    clip-path: inset(0 98% 0 0);
  }
  50% {
    clip-path: inset(98% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 98%);
  }
  100% {
    clip-path: inset(0 0 98% 0);
  }
`;

const StyledFloatingBorderButton = styled.button<FloatingBorderButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '10px 20px' : props.size === 'md' ? '14px 28px' : '18px 36px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '18px'};
  border: none;
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: visible;

  ${props => {
    const colors = {
      violet: css`
        --border-color: #8b5cf6;
        --glow-color: rgba(139, 92, 246, 0.5);
        color: #8b5cf6;
      `,
      coral: css`
        --border-color: #f87171;
        --glow-color: rgba(248, 113, 113, 0.5);
        color: #f87171;
      `,
      emerald: css`
        --border-color: #10b981;
        --glow-color: rgba(16, 185, 129, 0.5);
        color: #10b981;
      `,
      azure: css`
        --border-color: #0ea5e9;
        --glow-color: rgba(14, 165, 233, 0.5);
        color: #0ea5e9;
      `,
    };
    return colors[props.color || 'violet'];
  }}

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
  }

  &::before {
    animation: ${borderFloat} 8s linear infinite;
  }

  &::after {
    animation: ${borderFloat} 8s linear infinite reverse;
    filter: blur(12px);
    background: var(--glow-color);
  }

  .button-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${props =>
      props.size === 'sm' ? '100px' : props.size === 'md' ? '140px' : '180px'};
    min-height: ${props =>
      props.size === 'sm' ? '40px' : props.size === 'md' ? '50px' : '60px'};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 8px var(--border-color);
  }

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 12px var(--border-color);

    &::before,
    &::after {
      animation-duration: 4s;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const FloatingBorderButton: React.FC<FloatingBorderButtonProps> = ({
  color = 'violet',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledFloatingBorderButton color={color} size={size} onClick={onClick}>
      <div className="button-content">{children}</div>
    </StyledFloatingBorderButton>
  );
};

export default FloatingBorderButton; 