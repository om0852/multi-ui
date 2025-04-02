import React from 'react';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const StarEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, 
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.4),
    transparent 70%
  );
  opacity: 0;
  pointer-events: none;
  animation: ${twinkle} 2s ease-in-out infinite;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #191970, #000080);
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    color: white;

    & ~ ${StarEffect} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const StarlightButton: React.FC<{
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({
  children = 'Starlight',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <StarEffect />
    </ButtonContainer>
  );
};

export default StarlightButton; 