'use client';

import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .btn {
    color: #ff4081;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #ff4081;
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
    box-shadow: 0 2px 10px rgba(255, 64, 129, 0.2);

    &:hover {
      color: white;
      box-shadow: 0 4px 20px rgba(255, 64, 129, 0.4);
    }

    &::before {
      content: "";
      position: absolute;
      height: 0%;
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: #ff4081;
      z-index: -1;
      transition: all 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:hover::before {
      height: 100%;
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 10px rgba(255, 64, 129, 0.2);
      transition: all 0.1s ease;
    }
  }
`;

const SlideUpButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledWrapper>
      <button className="btn">
        {children}
      </button>
    </StyledWrapper>
  );
};

export default SlideUpButton; 