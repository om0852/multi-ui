'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{ $isActive: boolean }>`
  .btn {
    color: #3f51b5;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #3f51b5;
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
    box-shadow: 0 2px 10px rgba(63, 81, 181, 0.2);

    &:hover {
      color: white;
      box-shadow: 0 4px 20px rgba(63, 81, 181, 0.4);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      background-color: #3f51b5;
      transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
      z-index: -1;
    }

    &::before {
      width: 0%;
      height: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &::after {
      width: 100%;
      height: 0%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &:hover::before {
      width: 100%;
    }

    &:hover::after {
      height: 100%;
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 10px rgba(63, 81, 181, 0.2);
    }
  }
`;

const CrossRevealButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export default CrossRevealButton; 