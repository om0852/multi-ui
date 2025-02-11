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
        Hover me
        <div className="tooltiptext">Hi there !</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
    background-color: #282828;
    color: #f1f1f1;
    padding: 1em 3em;
    border-radius: 1em;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: #28282817;
    color: #282828;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    border-width: 8px;
    border-style: solid;
    border-color: #28282817 transparent transparent transparent;
    transform: translateX(-50%);
  }`;

export default Tooltip;
