import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

interface LoaderProps {
  width?: string;
  height?: string;
  radius?: string; // Custom prop renamed to avoid DOM leakage
  animation?: "wave" | "pulse" | "none";
  speed?: number; // Speed of animation
  baseColor?: string;
  highlightColor?: string;
  className?: string;
}

const waveAnimation = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pulseAnimation = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

// Styled component for Loader
const StyledLoader = styled.div<LoaderProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1rem"};
  border-radius: ${(props) => props.radius || "0.5rem"};
  background: ${(props) => props.baseColor || "#e0e0e0"};

  ${(props) =>
    props.animation === "wave" &&
    css`
      background: linear-gradient(
        90deg,
        ${props.baseColor || "#e0e0e0"} 25%,
        ${props.highlightColor || "#f3f3f3"} 50%,
        ${props.baseColor || "#e0e0e0"} 75%
      );
      background-size: 200%;
      animation: ${waveAnimation} ${props.speed || 1.5}s infinite;
    `}

  ${(props) =>
    props.animation === "pulse" &&
    css`
      animation: ${pulseAnimation} ${props.speed || 1.5}s infinite;
    `}
`;

const Loader: React.FC<LoaderProps> = ({
  width,
  height,
  radius,
  animation = "wave",
  speed = 1.5,
  baseColor = "#e0e0e0",
  highlightColor = "#f3f3f3",
  className,
}) => {
  const [isClient, setIsClient] = useState(false);

  // Ensure animation only runs on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const effectiveAnimation = isClient ? animation : "none";

  return (
    <StyledLoader
      width={width}
      height={height}
      radius={radius}
      animation={effectiveAnimation}
      speed={speed}
      baseColor={baseColor}
      highlightColor={highlightColor}
      className={className}
    />
  );
};

export default Loader;
