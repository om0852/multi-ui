'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{ $isActive: boolean }>`
  .btn {
    color: #4caf50;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #4caf50;
    padding: 16px 32px;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.6s;
    overflow: hidden;
    border-radius: 4px;
    letter-spacing: 2px;
    box-shadow: 0 2px 10px rgba(76, 175, 80, 0.2);

    &:hover {
      color: white;
      box-shadow: 0 4px 20px rgba(76, 175, 80, 0.4);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      background-color: #4caf50;
      z-index: -1;
      transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &::before {
      top: 0;
      left: 0;
      border-radius: 0 0 100% 0;
    }

    &::after {
      bottom: 0;
      right: 0;
      border-radius: 100% 0 0 0;
    }

    &:hover::before {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }

    &:hover::after {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 10px rgba(76, 175, 80, 0.2);
    }
  }
`;

const CornerSlideButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export default CornerSlideButton; 