'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface PulseRingButtonProps {
  color?: 'indigo' | 'crimson' | 'jade' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const ringPulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const StyledPulseRingButton = styled.button<PulseRingButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '10px 20px' : props.size === 'md' ? '14px 28px' : '18px 36px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '18px'};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: visible;

  ${props => {
    const colors = {
      indigo: css`
        --ring-color: #4f46e5;
        background: linear-gradient(135deg, #4f46e5, #6366f1);
        color: white;
      `,
      crimson: css`
        --ring-color: #dc2626;
        background: linear-gradient(135deg, #dc2626, #ef4444);
        color: white;
      `,
      jade: css`
        --ring-color: #059669;
        background: linear-gradient(135deg, #059669, #10b981);
        color: white;
      `,
      amber: css`
        --ring-color: #d97706;
        background: linear-gradient(135deg, #d97706, #f59e0b);
        color: white;
      `,
    };
    return colors[props.color || 'indigo'];
  }}

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: inherit;
    background: var(--ring-color);
    animation: ${ringPulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    pointer-events: none;
  }

  &::after {
    animation-delay: 1s;
  }

  .button-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${props =>
      props.size === 'sm' ? '100px' : props.size === 'md' ? '140px' : '180px'};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--ring-color);

    &::before,
    &::after {
      animation-duration: 1.5s;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const PulseRingButton: React.FC<PulseRingButtonProps> = ({
  color = 'indigo',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledPulseRingButton color={color} size={size} onClick={onClick}>
      <div className="button-content">{children}</div>
    </StyledPulseRingButton>
  );
};

export default PulseRingButton; 