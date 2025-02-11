'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

type ButtonTheme = 'dark' | 'light' | 'neon' | 'sunset';
type ButtonSize = 'sm' | 'md' | 'lg';

interface SplitButtonProps {
  theme?: ButtonTheme;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
}

interface StyledButtonProps {
  $theme: ButtonTheme;
  $size: ButtonSize;
}

const textSplit = keyframes`
  0% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
  20% {
    transform: translateY(-1.5em) rotate(-5deg);
    opacity: 0.2;
  }
  40% {
    transform: translateY(1.5em) rotate(5deg);
    opacity: 0.2;
  }
  60% {
    transform: translateY(-0.5em) rotate(-2deg);
    opacity: 0.6;
  }
  80% {
    transform: translateY(0.5em) rotate(2deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
`;

const StyledSplitButton = styled.button<StyledButtonProps>`
  position: relative;
  padding: ${props =>
    props.$size === 'sm' ? '10px 20px' : props.$size === 'md' ? '14px 28px' : '18px 36px'};
  font-size: ${props =>
    props.$size === 'sm' ? '14px' : props.$size === 'md' ? '16px' : '18px'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  font-family: 'Orbitron', sans-serif;

  ${props => {
    const themes: Record<ButtonTheme, ReturnType<typeof css>> = {
      dark: css`
        background: #1a1a1a;
        color: #ffffff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        &:hover {
          background: #2a2a2a;
        }
      `,
      light: css`
        background: #ffffff;
        color: #1a1a1a;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        &:hover {
          background: #f0f0f0;
        }
      `,
      neon: css`
        background: #000000;
        color: #00ff00;
        box-shadow: 0 0 12px #00ff00;
        text-shadow: 0 0 5px #00ff00;
        &:hover {
          box-shadow: 0 0 20px #00ff00;
        }
      `,
      sunset: css`
        background: linear-gradient(135deg, #ff6b6b, #feca57);
        color: white;
        box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
        &:hover {
          background: linear-gradient(135deg, #ff5252, #ff9f43);
        }
      `,
    };
    return themes[props.$theme];
  }}

  .text-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${props =>
      props.$size === 'sm' ? '100px' : props.$size === 'md' ? '140px' : '180px'};
  }

  .text {
    position: relative;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
  }

  .text-top,
  .text-bottom {
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0;
    overflow: hidden;
  }

  .text-top {
    top: 0;
    transform-origin: bottom;
  }

  .text-bottom {
    bottom: 0;
    transform-origin: top;
  }

  &:hover {
    transform: scale(1.05);

    .text {
      animation: ${textSplit} 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SplitButton: React.FC<SplitButtonProps> = ({
  theme = 'dark',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledSplitButton $theme={theme} $size={size} onClick={onClick}>
      <div className="text-container">
        <span className="text">{children}</span>
      </div>
    </StyledSplitButton>
  );
};

export default SplitButton; 