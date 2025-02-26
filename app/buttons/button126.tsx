'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  color: #e91e63;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px 32px;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  background: #1a1a1a;
  position: relative;
  transition: all 1.2s ease;
  border: none;
  letter-spacing: 2px;
  box-shadow: 0 2px 10px rgba(233, 30, 99, 0.2);

  &:hover {
    box-shadow: 0 4px 20px rgba(233, 30, 99, 0.4);

    &::before {
      animation: ${rotate} 2s linear infinite;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    top: -2px;
    left: -2px;
    background: linear-gradient(45deg, #e91e63, #ff9800, #e91e63);
    background-size: 300% 300%;
    z-index: -1;
    transition: all 1.2s ease;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #1a1a1a;
    z-index: -1;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 10px rgba(233, 30, 99, 0.2);
    transition: all 0.1s ease;
  }
`;

const BorderRotateButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default BorderRotateButton; 