'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface HoloButtonProps {
  variant?: 'rainbow' | 'cyber' | 'ghost' | 'prism';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const holographicShine = keyframes`
  0% {
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  50% {
    background-position: 100% 50%;
    filter: hue-rotate(180deg);
  }
  100% {
    background-position: 0% 50%;
    filter: hue-rotate(360deg);
  }
`;

const glitchEffect = keyframes`
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

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const StyledHoloButton = styled.button<HoloButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '12px 24px' : props.size === 'md' ? '16px 32px' : '20px 40px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '20px'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  color: white;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  overflow: hidden;

  ${props => {
    const variants = {
      rainbow: css`
        background: linear-gradient(
          90deg,
          #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff
        );
        background-size: 700% 100%;
      `,
      cyber: css`
        background: linear-gradient(
          45deg,
          rgba(0, 255, 255, 0.5),
          rgba(255, 0, 255, 0.5)
        );
        background-size: 200% 200%;
      `,
      ghost: css`
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.2)
        );
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      `,
      prism: css`
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.2),
          rgba(255, 255, 255, 0.1)
        );
        background-size: 200% 100%;
      `,
    };
    return variants[props.variant || 'rainbow'];
  }}

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

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${scanline} 4s linear infinite;
  }

  .holo-content {
    position: relative;
    z-index: 1;
    min-width: ${props =>
      props.size === 'sm' ? '100px' : props.size === 'md' ? '140px' : '180px'};
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }

  &:hover {
    animation: ${holographicShine} 3s linear infinite;

    &::before {
      left: 100%;
    }

    .holo-content {
      animation: ${glitchEffect} 0.3s infinite;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HoloButton: React.FC<HoloButtonProps> = ({
  variant = 'rainbow',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledHoloButton variant={variant} size={size} onClick={onClick}>
      <div className="holo-content">{children}</div>
    </StyledHoloButton>
  );
};

export default HoloButton; 