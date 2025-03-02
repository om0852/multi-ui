'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface MagneticFieldButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const orbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(12px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(12px) rotate(-360deg);
  }
`;

const generateParticleStyles = (index: number) => {
  const angle = (index * 45) % 360;
  const delay = index * 0.1;
  
  return css`
    transform: rotate(${angle}deg) translateX(20px) rotate(-${angle}deg);
    animation: ${orbit} 3s linear infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const Field = styled.div<{ $active: boolean }>`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid #4A148C;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;

  ${props => props.$active && css`
    opacity: 0.3;
    animation: ${pulse} 1.5s infinite;
  `}
`;

const Particle = styled.div<{ $active: boolean }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #4A148C;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${props => props.$active && css`
    opacity: 1;
  `}

  ${[...Array(8)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateParticleStyles(i)}
    }
  `)}
`;

const Button = styled.button`
  background: #4A148C;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: #6A1B9A;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(74, 20, 140, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const MagneticFieldButton: React.FC<MagneticFieldButtonProps> = ({
  children = 'Magnetic',
  className = '',
  onClick
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ButtonContainer 
      className={className}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <Button onClick={onClick}>
        {children}
      </Button>
      <Field $active={isActive} />
      {[...Array(8)].map((_, i) => (
        <Particle key={i} $active={isActive} />
      ))}
    </ButtonContainer>
  );
};

export default MagneticFieldButton; 