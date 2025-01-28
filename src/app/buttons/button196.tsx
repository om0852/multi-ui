import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface NebulaButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const cloudFlow = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg) scale(1.2);
    filter: hue-rotate(360deg);
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const GasCloud = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(
    circle,
    rgba(147, 112, 219, 0.8),
    rgba(75, 0, 130, 0.6),
    transparent
  );
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  filter: blur(15px);
  mix-blend-mode: screen;

  ${[...Array(4)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      top: ${50 + (Math.random() - 0.5) * 100}%;
      left: ${50 + (Math.random() - 0.5) * 100}%;
      animation: ${cloudFlow} ${10 + Math.random() * 5}s linear infinite;
      animation-delay: ${i * -2}s;
    }
  `)}
`;

const Button = styled.button`
  background: linear-gradient(145deg, #483D8B, #4B0082);
  color: #E6E6FA;
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
  text-shadow: 0 0 10px rgba(230, 230, 250, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(147, 112, 219, 0.3),
      0 0 30px rgba(147, 112, 219, 0.2);
    color: white;

    & ~ ${GasCloud} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const NebulaButton: React.FC<NebulaButtonProps> = ({
  children = 'Nebula',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      {[...Array(4)].map((_, i) => (
        <GasCloud key={`cloud-${i}`} />
      ))}
    </ButtonContainer>
  );
};

export default NebulaButton; 