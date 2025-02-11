import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  animationSpeed?: number;
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
`;

export const PulseSkeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    borderRadius,
    className,
  }) => {
    return (
      <motion.div
        style={{
          width: width || "100%",
          height: height || "1rem",
          borderRadius: borderRadius || "0.5rem",
          backgroundColor: "#e0e0e0",
        }}
        className={className}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "ease-in",
        }}
      />
    );
  };
  