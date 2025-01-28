'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{ $isActive: boolean }>`
  .btn {
    color: #2196f3;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #2196f3;
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
    box-shadow: 0 2px 10px rgba(33, 150, 243, 0.2);

    &:hover {
      color: white;
      box-shadow: 0 4px 20px rgba(33, 150, 243, 0.4);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 50%;
      height: 0%;
      background-color: #2196f3;
      z-index: -1;
      transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &::before {
      top: 0;
      left: 0;
    }

    &::after {
      bottom: 0;
      right: 0;
    }

    &:hover::before,
    &:hover::after {
      height: 100%;
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 10px rgba(33, 150, 243, 0.2);
    }
  }
`;

const ShutterButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export default ShutterButton; 