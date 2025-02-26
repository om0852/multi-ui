'use client';

import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface RippleButtonProps {
  color?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface RippleProps {
  x: number;
  y: number;
  size: number;
}

const rippleEffect = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const Ripple = styled.span<RippleProps>`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  pointer-events: none;
  animation: ${rippleEffect} 0.8s linear;
  background-color: rgba(255, 255, 255, 0.7);

  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`;

const StyledRippleButton = styled.button<RippleButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '10px 20px' : props.size === 'md' ? '14px 28px' : '18px 36px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '18px'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${props => {
    const colors = {
      primary: css`
        background: linear-gradient(135deg, #6366f1, #4f46e5);
        color: white;
        &:hover {
          background: linear-gradient(135deg, #4f46e5, #4338ca);
        }
      `,
      success: css`
        background: linear-gradient(135deg, #22c55e, #16a34a);
        color: white;
        &:hover {
          background: linear-gradient(135deg, #16a34a, #15803d);
        }
      `,
      warning: css`
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
        &:hover {
          background: linear-gradient(135deg, #d97706, #b45309);
        }
      `,
      danger: css`
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
        &:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
        }
      `,
    };
    return colors[props.color || 'primary'];
  }}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:active {
    transform: scale(0.98);
  }

  .button-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${props =>
      props.size === 'sm' ? '100px' : props.size === 'md' ? '140px' : '180px'};
  }
`;

const RippleButton: React.FC<RippleButtonProps> = ({
  color = 'primary',
  size = 'md',
  children,
  onClick,
}) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    
    const newRipple = {
      id: Date.now(),
      x: x - size / 2,
      y: y - size / 2,
      size,
    };

    setRipples(prevRipples => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples(prevRipples => prevRipples.filter(ripple => ripple.id !== newRipple.id));
    }, 800);

    if (onClick) onClick(event);
  };

  return (
    <StyledRippleButton
      ref={buttonRef}
      color={color}
      size={size}
      onClick={createRipple}
    >
      <div className="button-content">{children}</div>
      {ripples.map(ripple => (
        <Ripple
          key={ripple.id}
          x={ripple.x}
          y={ripple.y}
          size={ripple.size}
        />
      ))}
    </StyledRippleButton>
  );
};

export default RippleButton; 