import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  animationSpeed?: number; // Speed in seconds
  className?: string;
}

const StyledSkeleton = styled(motion.div)<SkeletonProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1rem"};
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  background: linear-gradient(
    90deg,
    rgba(240, 240, 240, 1) 25%,
    rgba(220, 220, 220, 1) 50%,
    rgba(240, 240, 240, 1) 75%
  );
  background-size: 200%;
  animation: shimmer ${(props) => props.animationSpeed || 2}s infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius,
  animationSpeed,
  className,
}) => {
  return (
    <StyledSkeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      animationSpeed={animationSpeed}
      className={clsx("shadow-sm", className)}
    />
  );
};
