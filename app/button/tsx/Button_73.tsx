'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface Button3DProps {
  color?: 'red' | 'blue' | 'green' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const float = keyframes`
  0% {
    transform: translateY(0) rotateX(20deg);
  }
  50% {
    transform: translateY(-10px) rotateX(25deg);
  }
  100% {
    transform: translateY(0) rotateX(20deg);
  }
`;

const StyledButton3D = styled.button<Button3DProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '12px 24px' : props.size === 'md' ? '16px 32px' : '20px 40px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '20px'};
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateX(20deg);
  transition: all 0.3s ease;

  ${props => {
    const colors = {
      red: css`
        background: linear-gradient(45deg, #ff416c, #ff4b2b);
        box-shadow: 0 15px 0 #cc1e1e,
                   0 -2px 5px rgba(0,0,0,.2) inset;
      `,
      blue: css`
        background: linear-gradient(45deg, #2196f3, #4fc3f7);
        box-shadow: 0 15px 0 #1976d2,
                   0 -2px 5px rgba(0,0,0,.2) inset;
      `,
      green: css`
        background: linear-gradient(45deg, #43a047, #66bb6a);
        box-shadow: 0 15px 0 #2e7d32,
                   0 -2px 5px rgba(0,0,0,.2) inset;
      `,
      gold: css`
        background: linear-gradient(45deg, #ffd700, #ffa000);
        box-shadow: 0 15px 0 #ff8f00,
                   0 -2px 5px rgba(0,0,0,.2) inset;
      `,
    };
    return colors[props.color || 'blue'];
  }}

  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      transparent
    );
    border-radius: 12px;
  }

  &:hover {
    animation: ${float} 2s ease-in-out infinite;
    transform: perspective(1000px) rotateX(25deg) translateY(-5px);
  }

  &:active {
    transform: perspective(1000px) rotateX(20deg) translateY(5px);
    box-shadow: 0 10px 0 currentColor;
  }

  span {
    display: block;
    transform: translateZ(30px);
  }
`;

const Button3D: React.FC<Button3DProps> = ({
  color = 'blue',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledButton3D color={color} size={size} onClick={onClick}>
      <span>{children}</span>
    </StyledButton3D>
  );
};

export default Button3D; 