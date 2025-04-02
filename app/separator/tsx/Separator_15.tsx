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

const MatrixRainSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 30,
  length = "100%",
  color = "#22c55e",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const columns = 15;
  const chars = "01";

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}11`,
        display: "flex",
        gap: "2px",
      }}
    >
      {[...Array(columns)].map((_, i) => (
        <div key={i} className="flex-1 relative">
          {[...Array(3)].map((_, j) => (
            <motion.div
              key={j}
              className="absolute text-xs font-bold"
              style={{
                color: color,
                opacity: 0.8,
                left: "50%",
                transform: "translateX(-50%)",
              }}
              initial={{ y: -20 }}
              animate={
                animated
                  ? {
                      y: ["-100%", "200%"],
                      opacity: [0, 1, 0],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1 + j * 0.3,
                ease: "linear",
              }}
            >
              {chars[Math.floor(Math.random() * chars.length)]}
            </motion.div>
          ))}
        </div>
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${isHorizontal ? "90deg" : "0deg"}, 
            transparent 0%,
            ${color}22 50%,
            transparent 100%
          )`,
        }}
        animate={
          animated
            ? {
                x: isHorizontal ? ["-100%", "100%"] : 0,
                y: isHorizontal ? 0 : ["-100%", "100%"],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default MatrixRainSeparator; 