'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{ $isActive: boolean }>`
  .btn {
    color: #f44336;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #f44336;
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
    box-shadow: 0 2px 10px rgba(244, 67, 54, 0.2);

    &:hover {
      color: white;
      box-shadow: 0 4px 20px rgba(244, 67, 54, 0.4);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 50%;
      background-color: #f44336;
      transform: skewX(25deg);
      transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
      z-index: -1;
    }

    &::before {
      top: 0;
      left: -10%;
    }

    &::after {
      bottom: 0;
      right: -10%;
      transform: skewX(-25deg);
    }

    &:hover::before,
    &:hover::after {
      width: 120%;
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 10px rgba(244, 67, 54, 0.2);
    }
  }
`;

const SliceSlideButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export default SliceSlideButton; 