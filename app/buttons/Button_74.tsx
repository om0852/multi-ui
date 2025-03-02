'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface LiquidButtonProps {
  color?: 'aqua' | 'purple' | 'orange' | 'mint';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const bubble = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const liquid = keyframes`
  0% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const StyledLiquidButton = styled.button<LiquidButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '10px 20px' : props.size === 'md' ? '15px 30px' : '20px 40px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '20px'};
  border: none;
  border-radius: 50px;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;

  ${props => {
    const colors = {
      aqua: css`
        color: #00c2ff;
        border: 2px solid #00c2ff;
      `,
      purple: css`
        color: #b700ff;
        border: 2px solid #b700ff;
      `,
      orange: css`
        color: #ff7700;
        border: 2px solid #ff7700;
      `,
      mint: css`
        color: #00ffcc;
        border: 2px solid #00ffcc;
      `,
    };
    return colors[props.color || 'aqua'];
  }}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${props => {
      const backgrounds = {
        aqua: 'background: #00c2ff;',
        purple: 'background: #b700ff;',
        orange: 'background: #ff7700;',
        mint: 'background: #00ffcc;',
      };
      return backgrounds[props.color || 'aqua'];
    }}
    opacity: 0.5;
    transform: translateY(100%);
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: scale(1.05);
    
    &::before {
      animation: ${liquid} 0.5s forwards;
    }
  }

  .bubbles {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .bubble {
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: ${bubble} 1s ease-out infinite;

    &:nth-child(1) {
      width: 20px;
      height: 20px;
      left: 10%;
      animation-delay: 0.2s;
    }

    &:nth-child(2) {
      width: 15px;
      height: 15px;
      left: 30%;
      animation-delay: 0.4s;
    }

    &:nth-child(3) {
      width: 25px;
      height: 25px;
      left: 50%;
      animation-delay: 0.6s;
    }

    &:nth-child(4) {
      width: 18px;
      height: 18px;
      left: 70%;
      animation-delay: 0.8s;
    }

    &:nth-child(5) {
      width: 22px;
      height: 22px;
      left: 90%;
      animation-delay: 1s;
    }
  }
`;

const LiquidButton: React.FC<LiquidButtonProps> = ({
  color = 'aqua',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledLiquidButton color={color} size={size} onClick={onClick}>
      {children}
      <div className="bubbles">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
      </div>
    </StyledLiquidButton>
  );
};

export default LiquidButton; 