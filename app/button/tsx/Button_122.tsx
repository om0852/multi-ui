'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{ $isActive: boolean }>`
  .btn {
    color: #00bcd4;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #00bcd4;
    padding: 16px 32px;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 1.2s ease;
    overflow: hidden;
    border-radius: 4px;
    letter-spacing: 2px;
    box-shadow: 0 2px 10px rgba(0, 188, 212, 0.2);

    &:hover {
      color: white;
      box-shadow: 0 4px 20px rgba(0, 188, 212, 0.4);
    }

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 0%;
      top: 0;
      left: -40px;
      transform: skewX(45deg);
      background-color: #00bcd4;
      z-index: -1;
      transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    &:hover::before {
      width: 160%;
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 10px rgba(0, 188, 212, 0.2);
      transition: all 0.1s ease;
    }
  }
`;

const DiagonalSwipeButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledWrapper $isActive={isActive}>
      <button 
        className="btn"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        {children}
      </button>
    </StyledWrapper>
  );
};

export default DiagonalSwipeButton; 