"use client";
import React from "react";
import { motion } from "framer-motion";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  length?: string;
  animated?: boolean;
}

const GradientPulseSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 6,
  length = "100%",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <motion.div
      className="relative overflow-hidden rounded-full"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #f472b6, #8b5cf6, #3b82f6, #8b5cf6, #f472b6)",
          backgroundSize: "200% 100%",
        }}
        animate={
          animated
            ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                scale: [1, 1.05, 1],
              }
            : {}
        }
        transition={{
          backgroundPosition: {
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        }}
        animate={
          animated
            ? {
                x: ["-100%", "100%"],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default GradientPulseSeparator;
