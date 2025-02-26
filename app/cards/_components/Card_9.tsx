"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type CardProps = {}; // You can add props here if needed in the future

const Card: React.FC<CardProps> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-details">
          <p className="text-title">Card title</p>
          <p className="text-body">Here are the details of the card</p>
        </div>
        <button className="card-button">More info</button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   width: 190px;
   height: 254px;
   border-radius: 20px;
   background: #f5f5f5;
   position: relative;
   padding: 1.8rem;
   border: 2px solid #c3c6ce;
   transition: 0.5s ease-out;
   overflow: visible;
  }

  .card-details {
   color: black;
   height: 100%;
   gap: .5em;
   display: grid;
   place-content: center;
  }

  .card-button {
   transform: translate(-50%, 125%);
   width: 60%;
   border-radius: 1rem;
   border: none;
   background-color: #008bf8;
   color: #fff;
   font-size: 1rem;
   padding: .5rem 1rem;
   position: absolute;
   left: 50%;
   bottom: 0;
   opacity: 0;
   transition: 0.3s ease-out;
  }

  .text-body {
   color: rgb(134, 134, 134);
  }

  /*Text*/
  .text-title {
   font-size: 1.5em;
   font-weight: bold;
  }

  /*Hover*/
  .card:hover {
   border-color: #008bf8;
   box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
   transform: translate(-50%, 50%);
   opacity: 1;
  }`;

export default Card;
