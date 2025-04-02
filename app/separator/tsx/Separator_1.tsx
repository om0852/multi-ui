"use client";
import React from "react";
import { motion } from "framer-motion";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  length?: string;
  animated?: boolean;
}

const RainbowWaveSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 6,
  length = "100%",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <motion.div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "200% 50%"],
          y: animated ? [0, -10, 0] : 0,
        }}
        transition={{
          backgroundPosition: {
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 25%, rgba(255,255,255,0.3) 26%, transparent 27%)",
          backgroundSize: "20px 20px",
        }}
        animate={{
          x: [-20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default RainbowWaveSeparator;
