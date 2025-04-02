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

const PulseRingSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 16,
  length = "100%",
  color = "#ec4899",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const rings = 3;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `${color}22`,
          borderRadius: thickness / 2,
        }}
      />
      {[...Array(rings)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: thickness,
            height: thickness,
            borderRadius: "50%",
            border: `2px solid ${color}`,
            left: `calc(${(index + 1) * 25}% - ${thickness / 2}px)`,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0, 0.8],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}44, transparent)`,
        }}
        animate={
          animated
            ? {
                x: ["-100%", "100%"],
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

export default PulseRingSeparator;
