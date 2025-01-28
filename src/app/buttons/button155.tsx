'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface BubbleButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const float = keyframes`
  0% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(1.5);
    opacity: 0;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const generateBubbleStyles = (index: number) => css`
  left: ${10 + (index * 8)}%;
  animation: ${float} 2s ease-in infinite;
  animation-delay: ${index * 0.2}s;
`;

const Bubble = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(100, 200, 255, 0.5);
  pointer-events: none;
  opacity: 0;

  ${[...Array(10)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateBubbleStyles(i)}
    }
  `)}
`;

const Button = styled.button`
  background: #03A9F4;
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
    background: #039BE5;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(3, 169, 244, 0.4);

    & ~ ${Bubble} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const BubbleButton: React.FC<BubbleButtonProps> = ({
  children = 'Bubble',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      {[...Array(10)].map((_, i) => (
        <Bubble key={i} />
      ))}
    </ButtonContainer>
  );
};

export default BubbleButton; 