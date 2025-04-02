import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface SupernovaButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const explode = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(4);
    opacity: 0;
  }
`;

const shockwave = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const ExplosionCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #FFD700, #FF0000, transparent);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  mix-blend-mode: screen;

  &.active {
    animation: ${explode} 1.5s ease-out forwards;
  }
`;

const Shockwave = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  border: 4px solid rgba(255, 215, 0, 0.5);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;

  ${[...Array(3)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      animation: ${shockwave} ${2 + i * 0.5}s ease-out infinite;
      animation-delay: ${i * 0.2}s;
    }
  `)}
`;

const Button = styled.button`
  background: linear-gradient(145deg, #FFD700, #FFA500);
  color: #FFFFFF;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: visible;
  z-index: 1;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(255, 215, 0, 0.3),
      0 0 30px rgba(255, 215, 0, 0.2);
    color: white;

    & ~ ${ExplosionCore},
    & ~ ${Shockwave} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const SupernovaButton: React.FC<SupernovaButtonProps> = ({
  children = 'Supernova',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <ExplosionCore />
      {[...Array(3)].map((_, i) => (
        <Shockwave key={`wave-${i}`} />
      ))}
    </ButtonContainer>
  );
};

export default SupernovaButton; 