'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{ $isActive: boolean }>`
  .btn {
    color: #673ab7;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #673ab7;
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
    box-shadow: 0 2px 10px rgba(103, 58, 183, 0.2);

    &:hover {
      color: white;
      box-shadow: 0 4px 20px rgba(103, 58, 183, 0.4);
    }

    &::before {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      background-color: #673ab7;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: -1;
    }

    &:hover::before {
      transform: translate(-50%, -50%) scale(8);
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 10px rgba(103, 58, 183, 0.2);
    }
  }
`;

const CircleExpandButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export default CircleExpandButton; 