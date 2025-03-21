import React from 'react';
import styled, { keyframes } from 'styled-components';

interface WormholeButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const spaceWarp = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(0);
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const WormholeEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent,
    rgba(138, 43, 226, 0.2) 45deg,
    rgba(138, 43, 226, 0.4) 90deg,
    rgba(138, 43, 226, 0.2) 135deg,
    transparent 180deg,
    rgba(138, 43, 226, 0.2) 225deg,
    rgba(138, 43, 226, 0.4) 270deg,
    rgba(138, 43, 226, 0.2) 315deg,
    transparent
  );
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  animation: ${spaceWarp} 3s linear infinite;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #4B0082, #8B008B);
  color: #E6E6FA;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  z-index: 1;
  text-shadow: 0 0 10px rgba(230, 230, 250, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(138, 43, 226, 0.3);
    color: white;

    & ~ ${WormholeEffect} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const WormholeButton: React.FC<WormholeButtonProps> = ({
  children = 'Wormhole',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <WormholeEffect />
    </ButtonContainer>
  );
};

export default WormholeButton; 