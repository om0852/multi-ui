"use client";
import React from "react";
import { motion } from "framer-motion";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  length?: string;
  color?: string;
  animated?: boolean;
}

const ShimmerLineSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 4,
  length = "100%",
  color = "#6366f1",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <motion.div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: color,
        borderRadius: "2px",
      }}
      animate={
        animated
          ? {
              opacity: [0.8, 1, 0.8],
            }
          : {}
      }
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 100%
          )`,
          transform: "skewX(-20deg)",
        }}
        animate={
          animated
            ? {
                x: ["-100%", "200%"],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg,
            ${color}33 0%,
            ${color}66 50%,
            ${color}33 100%
          )`,
        }}
        animate={
          animated
            ? {
                x: ["-100%", "100%"],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default ShimmerLineSeparator;