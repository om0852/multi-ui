'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledWrapper = styled.div<{ $isActive: boolean }>`
  .btn {
    color: #795548;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #795548;
    padding: 16px 32px;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    overflow: hidden;
    border-radius: 4px;
    letter-spacing: 2px;
    box-shadow: 0 2px 10px rgba(121, 85, 72, 0.2);

    ${props => props.$isActive && css`
      animation: ${pulse} 1s infinite;
      color: white;
      background: #795548;
      box-shadow: 0 4px 20px rgba(121, 85, 72, 0.4);
      transform: scale(1.1);
    `}

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle at center,
        rgba(121, 85, 72, 0.2) 0%,
        transparent 70%
      );
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: -1;
    }

    ${props => props.$isActive && css`
      &::before {
        opacity: 1;
      }
    `}

    &:active {
      transform: scale(0.95);
      box-shadow: 0 2px 10px rgba(121, 85, 72, 0.2);
    }
  }
`;

interface MagneticPullButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticPullButton: React.FC<MagneticPullButtonProps> = ({ 
  children, 
  className = '',
  onClick
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledWrapper $isActive={isActive}>
      <button 
        className={`btn ${className}`}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onClick={onClick}
      >
        {children}
      </button>
    </StyledWrapper>
  );
};

export default MagneticPullButton; 