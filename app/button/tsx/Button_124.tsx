'use client';

import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .btn {
    color: #9c27b0;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid #9c27b0;
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
    box-shadow: 0 2px 10px rgba(156, 39, 176, 0.2);

    &:hover {
      color: white;
      box-shadow: 0 4px 20px rgba(156, 39, 176, 0.4);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 100%;
      top: 0;
      background-color: #9c27b0;
      z-index: -1;
      transition: all 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &::before {
      left: 50%;
    }

    &::after {
      right: 50%;
    }

    &:hover::before,
    &:hover::after {
      width: 50%;
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 10px rgba(156, 39, 176, 0.2);
      transition: all 0.1s ease;
    }
  }
`;

const SplitFillButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledWrapper>
      <button className="btn">
        {children}
      </button>
    </StyledWrapper>
  );
};

export default SplitFillButton; 