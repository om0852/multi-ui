"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const hexArray = Array.from({ length: 3 * 6 }, (_, index) => index);

  return (
    <StyledWrapper size={200} color="#000000" speed={2}>
      <div className="socket">
        {hexArray.map((_, index) => (
          <div key={index} className={`gel hex-${index % 3}`}>
            <div className="hex-brick h1" />
            <div className="hex-brick h2" />
            <div className="hex-brick h3" />
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ size: number; color: string; speed: number }>`
  .socket {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .hex-brick {
    background: ${({ color }) => color};
    width: ${({ size }) => size / 7}px;
    height: ${({ size }) => size / 14}px;
    position: absolute;
    top: 5px;
    animation: fade ${({ speed }) => speed}s infinite;
  }

  .h2 {
    transform: rotate(60deg);
  }

  .h3 {
    transform: rotate(-60deg);
  }

  .gel {
    height: ${({ size }) => size / 7}px;
    width: ${({ size }) => size / 7}px;
    position: absolute;
    top: 50%;
    left: 50%;
    animation: pulse ${({ speed }) => speed}s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.01);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes fade {
    0% {
      background: #252525;
    }
    50% {
      background: ${({ color }) => color};
    }
    100% {
      background: #353535;
    }
  }
`;

export default Loader;
