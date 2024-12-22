"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type CardProps = {}; // You can add props here if needed in the future

const Card: React.FC<CardProps> = () => {
  const [mounted, setMounted] = useState(false);

  // Only run on the client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server during hydration

  return (
    <StyledWrapper>
      <div className="cards">
        <div className="card red">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card blue">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card green">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100px;
    width: 250px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
    /* Default card styles */
  }

  .red {
    background-color: #f43f5e;
  }

  .blue {
    background-color: #3b82f6;
  }

  .green {
    background-color: #22c55e;
  }

  .tip {
    font-size: 1em;
    font-weight: 700;
  }

  .second-text {
    font-size: 0.7em;
  }

  .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
`;

export default Card;
