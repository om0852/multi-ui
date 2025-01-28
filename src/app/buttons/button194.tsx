import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface SolarFlareButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const flareErupt = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.5) rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
`;

const plasmaFlow = keyframes`
  0%, 100% {
    transform: translateX(-10px) scale(1);
    filter: hue-rotate(0deg);
  }
  50% {
    transform: translateX(10px) scale(1.2);
    filter: hue-rotate(180deg);
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const SolarFlare = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #FFD700, #FF4500, transparent);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  filter: blur(5px);

  ${[...Array(6)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      top: ${50 + (Math.random() - 0.5) * 100}%;
      left: ${50 + (Math.random() - 0.5) * 100}%;
      animation: ${flareErupt} ${2 + Math.random()}s ease-out infinite;
      animation-delay: ${i * 0.3}s;
    }
  `)}
`;

const PlasmaField = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 69, 0, 0.2), transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  animation: ${plasmaFlow} 3s ease-in-out infinite;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #FF8C00, #FF4500);
  color: #FFE4B5;
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
  text-shadow: 0 0 10px rgba(255, 228, 181, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(255, 69, 0, 0.3),
      0 0 30px rgba(255, 69, 0, 0.2);
    color: white;

    & ~ ${SolarFlare},
    & ~ ${PlasmaField} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const SolarFlareButton: React.FC<SolarFlareButtonProps> = ({
  children = 'Solar Flare',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <PlasmaField />
      {[...Array(6)].map((_, i) => (
        <SolarFlare key={`flare-${i}`} />
      ))}
    </ButtonContainer>
  );
};

export default SolarFlareButton; 