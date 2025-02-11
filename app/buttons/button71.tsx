'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const shine = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props =>
    props.size === 'sm'
      ? '8px 16px'
      : props.size === 'md'
      ? '12px 24px'
      : '16px 32px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '18px'};
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: ${props =>
    props.size === 'sm' ? '120px' : props.size === 'md' ? '160px' : '200px'};
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return css`
          background: linear-gradient(45deg, #4f46e5, #6366f1);
          color: white;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.6);
            animation: ${pulse} 1.5s infinite;
          }
        `;
      case 'secondary':
        return css`
          background: linear-gradient(45deg, #9333ea, #a855f7);
          color: white;
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(147, 51, 234, 0.6);
            animation: ${pulse} 1.5s infinite;
          }
        `;
      case 'gradient':
        return css`
          background: linear-gradient(270deg, #f43f5e, #ec4899, #8b5cf6, #6366f1);
          background-size: 300% 100%;
          color: white;
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(236, 72, 153, 0.6);
            animation: ${shine} 3s infinite linear;
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          color: #4f46e5;
          border: 2px solid #4f46e5;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.2);
          
          &:hover {
            background: #4f46e5;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
          }
        `;
      default:
        return css`
          background: linear-gradient(45deg, #4f46e5, #6366f1);
          color: white;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.6);
            animation: ${pulse} 1.5s infinite;
          }
        `;
    }
  }}

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);
  }
`;

const ButtonContent = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AnimatedButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick}>
      <ButtonContent>{children}</ButtonContent>
    </StyledButton>
  );
};

export default AnimatedButton; 