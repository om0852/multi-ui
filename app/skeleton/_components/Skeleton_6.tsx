import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  diameter?: string; // Specific for CircularSkeleton
  animationSpeed?: number; // Speed in seconds
  className?: string;
}

const StyledWaveSkeleton = styled(motion.div)<SkeletonProps>`
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
  animation: shimmer ${(props) => props.animationSpeed || 1.5}s infinite;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "1rem",
  borderRadius = "0.5rem",
  diameter,
  animationSpeed = 1.5,
  className,
}) => {
  // Circular Skeleton
  if (diameter) {
    return (
      <motion.div
        style={{
          width: diameter,
          height: diameter,
          borderRadius: "50%",
          background: "linear-gradient(0deg, #f3f3f3, #e0e0e0, #f3f3f3)",
          backgroundSize: "200%",
        }}
        className={className}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    );
  }

  // Default Rectangular Skeleton
  return (
    <StyledWaveSkeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      animationSpeed={animationSpeed}
      className={className}
    />
  );
};

export default Skeleton;
