'use client';

import React from 'react';
import styled from 'styled-components';

interface GradientBorderButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = styled.button`
  position: relative;
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    background-size: 400%;
    z-index: -1;
    animation: gradientMove 20s linear infinite;
    border-radius: 6px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    border-radius: 4px;
    z-index: -1;
  }

  &:hover::before {
    animation: gradientMove 1s linear infinite;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const GradientBorderButton: React.FC<GradientBorderButtonProps> = ({
  children = 'Gradient',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default GradientBorderButton; 