'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{ $isActive: boolean }>`
  .btn {
    color: #009688;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    padding: 16px 32px;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.6s;
    border-radius: 4px;
    letter-spacing: 2px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &::before {
      background-color: #009688;
      transform: scaleX(0);
      transform-origin: right;
      z-index: -2;
    }

    &::after {
      border: 2px solid #009688;
      box-shadow: 0 2px 10px rgba(0, 150, 136, 0.2);
    }

    &:hover {
      color: white;

      &::before {
        transform: scaleX(1);
        transform-origin: left;
      }

      &::after {
        border-color: transparent;
        box-shadow: 0 4px 20px rgba(0, 150, 136, 0.4);
      }
    }

    &:active {
      transform: translateY(2px);
      &::after {
        box-shadow: 0 2px 10px rgba(0, 150, 136, 0.2);
      }
    }

    span {
      position: relative;
      z-index: 1;
    }
  }
`;

const DoubleLayerButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledWrapper $isActive={isActive}>
      <button 
        className="btn"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <span>{children}</span>
      </button>
    </StyledWrapper>
  );
};

export default DoubleLayerButton; 