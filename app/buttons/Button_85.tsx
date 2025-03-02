'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ShutterButtonProps {
  color?: 'blue' | 'purple' | 'green' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

interface StyledButtonProps {
  $color: NonNullable<ShutterButtonProps['color']>;
  $size: NonNullable<ShutterButtonProps['size']>;
}

const shutterOpen = keyframes`
  0% {
    transform: scaleX(0);
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
`;

const shutterClose = keyframes`
  0% {
    transform: scaleX(1);
    opacity: 0;
  }
  100% {
    transform: scaleX(0);
    opacity: 1;
  }
`;

const colorVariants = {
  blue: {
    background: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
    shutterColor: '#1a7a94',
  },
  purple: {
    background: 'linear-gradient(135deg, #834d9b, #d04ed6)',
    shutterColor: '#6a3d7c',
  },
  green: {
    background: 'linear-gradient(135deg, #134e5e, #71b280)',
    shutterColor: '#0f3f4b',
  },
  orange: {
    background: 'linear-gradient(135deg, #ff4e50, #f9d423)',
    shutterColor: '#cc3e40',
  },
};

const StyledShutterButton = styled.button<StyledButtonProps>`
  position: relative;
  padding: ${props =>
    props.$size === 'sm' ? '10px 20px' : props.$size === 'md' ? '14px 28px' : '18px 36px'};
  font-size: ${props =>
    props.$size === 'sm' ? '14px' : props.$size === 'md' ? '16px' : '18px'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  background: ${props => colorVariants[props.$color].background};
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: transform 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => colorVariants[props.$color].shutterColor};
    transform-origin: left;
    transform: scaleX(0);
    opacity: 1;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    animation: ${shutterClose} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  &:hover {
    transform: scale(1.05);

    &::before {
      animation: ${shutterOpen} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    &::after {
      animation: ${shutterClose} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 0.1s;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

const ShutterButton: React.FC<ShutterButtonProps> = ({
  color = 'blue',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledShutterButton $color={color} $size={size} onClick={onClick}>
      <span>{children}</span>
    </StyledShutterButton>
  );
};

export default ShutterButton; 