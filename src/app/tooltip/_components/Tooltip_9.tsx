"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type TooltipProps = {}; // You can add props here if needed in the future

const Tooltip: React.FC<TooltipProps> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;
  return (
    <StyledWrapper>
      <div className="tooltip">
        <div className="icon">i</div>
        <div className="tooltiptext">This is a cool tooltip!</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-family: "Arial", sans-serif;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 50%;
    margin-left: -100px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltiptext::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
  }

  .tooltip .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
  }`;

export default Tooltip;
