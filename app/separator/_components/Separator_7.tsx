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

const DoubleLineSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 3,
  length = "100%",
  color = "#8b5cf6",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const gap = thickness * 2;

  return (
    <div
      className="relative"
      style={{
        width: isHorizontal ? length : `${thickness * 2 + gap}px`,
        height: isHorizontal ? `${thickness * 2 + gap}px` : length,
      }}
    >
      <motion.div
        className="absolute"
        style={{
          width: isHorizontal ? "100%" : `${thickness}px`,
          height: isHorizontal ? `${thickness}px` : "100%",
          backgroundColor: color,
          borderRadius: "4px",
          top: isHorizontal ? 0 : 0,
          left: isHorizontal ? 0 : 0,
        }}
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
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
        className="absolute"
        style={{
          width: isHorizontal ? "100%" : `${thickness}px`,
          height: isHorizontal ? `${thickness}px` : "100%",
          backgroundColor: color,
          borderRadius: "4px",
          bottom: isHorizontal ? 0 : 0,
          right: isHorizontal ? 0 : 0,
        }}
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
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
        className="absolute"
        style={{
          background: `linear-gradient(${isHorizontal ? "90deg" : "0deg"}, transparent, ${color}, transparent)`,
          width: isHorizontal ? "20%" : "100%",
          height: isHorizontal ? "100%" : "20%",
          opacity: 0.3,
        }}
        animate={
          animated
            ? {
                x: isHorizontal ? ["-100%", "500%"] : 0,
                y: isHorizontal ? 0 : ["-100%", "500%"],
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

export default DoubleLineSeparator;
