'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface QuantumRippleButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const generateRippleStyles = (index: number) => {
  const delay = index * 0.4;
  
  return css`
    animation: ${ripple} 2s ease-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const RippleCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid #6200EA;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  pointer-events: none;
  opacity: 0;

  ${[...Array(3)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateRippleStyles(i)}
    }
  `)}
`;

const Button = styled.button`
  background: linear-gradient(
    90deg,
    #6200EA,
    #B388FF,
    #6200EA
  );
  background-size: 200% auto;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    animation: ${shimmer} 2s linear infinite;
    box-shadow: 
      0 5px 15px rgba(98, 0, 234, 0.4),
      0 0 20px rgba(98, 0, 234, 0.2);

    & ~ ${RippleCircle} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      #6200EA,
      #B388FF,
      #6200EA
    );
    z-index: -1;
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const QuantumRippleButton: React.FC<QuantumRippleButtonProps> = ({
  children = 'Quantum',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      {[...Array(3)].map((_, i) => (
        <RippleCircle key={i} />
      ))}
    </ButtonContainer>
  );
};

export default QuantumRippleButton; 