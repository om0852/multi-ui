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
      <div className="tooltip-container">
        <span className="tooltip">Uiverse.io</span>
        <span className="text">Tooltip 👆</span>
        <span>Hello! 👋</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* This is an example, feel free to delete this code */
  .tooltip-container {
    --background: #333333;
    --color: #e8e8e8;
    position: relative;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    font-size: 18px;
    font-weight: 600;
    color: var(--color);
    padding: 0.7em 1.8em;
    border-radius: 8px;
    text-transform: uppercase;
    height: 60px;
    width: 180px;
    display: grid;
    place-items: center;
    border: 2px solid var(--color);
  }

  .text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    transform-origin: -100%;
    transform: scale(1);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .tooltip-container span:last-child {
    position: absolute;
    top: 0%;
    left: 100%;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    opacity: 1;
    background-color: var(--background);
    z-index: -1;
    border: 2px solid var(--background);
    transform: scale(0);
    transform-origin: 0;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    display: grid;
    place-items: center;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.3em 0.6em;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    background: var(--background);
    z-index: -1;
    border-radius: 8px;
    scale: 0;
    transform-origin: 0 0;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  }

  .tooltip::before {
    position: absolute;
    content: "";
    height: 0.6em;
    width: 0.6em;
    bottom: -0.2em;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    background: var(--background);
  }

  .tooltip-container:hover .tooltip {
    top: -100%;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    scale: 1;
    animation: shake 0.5s ease-in-out both;
  }

  .tooltip-container:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    color: white;
    border-color: transparent;
  }

  .tooltip-container:hover span:last-child {
    transform: scale(1);
    left: 0;
  }

  .tooltip-container:hover .text {
    opacity: 0;
    top: 0%;
    left: 100%;
    transform: scale(0);
  }

  @keyframes shake {
    0% {
      rotate: 0;
    }

    25% {
      rotate: 7deg;
    }

    50% {
      rotate: -7deg;
    }

    75% {
      rotate: 1deg;
    }

    100% {
      rotate: 0;
    }
  }`;

export default Tooltip;
