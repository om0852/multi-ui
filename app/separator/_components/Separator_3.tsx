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

const NeonLineSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 4,
  length = "100%",
  color = "#10b981",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <motion.div
      className="relative"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}`,
          borderRadius: "4px",
        }}
        animate={
          animated
            ? {
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  `0 0 10px ${color}, 0 0 20px ${color}`,
                  `0 0 20px ${color}, 0 0 40px ${color}`,
                  `0 0 10px ${color}, 0 0 20px ${color}`,
                ],
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
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          opacity: 0.5,
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

export default NeonLineSeparator;
