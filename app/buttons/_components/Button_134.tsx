'use client';

import React from 'react';
import styled from 'styled-components';

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  position: relative;
  padding: 16px 30px;
  font-size: 1.5rem;
  color: var(--color);
  border: 2px solid rgba(0, 255, 170, 0.5);
  border-radius: 4px;
  text-shadow: 0 0 15px var(--color);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: 0.5s;
  z-index: 1;
  background: transparent;
  cursor: pointer;
  --color: #00ffa6;

  &:hover {
    color: #fff;
    border: 2px solid rgba(0, 255, 170, 0);
    box-shadow: 0 0 0px var(--color);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color);
    z-index: -1;
    transform: scale(0);
    transition: 0.5s;
  }

  &:hover::before {
    transform: scale(1);
    transition-delay: 0.1s;
    box-shadow: 0 0 10px var(--color),
      0 0 30px var(--color),
      0 0 60px var(--color);
  }
`;

const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  className = '',
  onClick
}) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default GlowingButton; 