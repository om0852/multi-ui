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

const LiquidWaveSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 12,
  length = "100%",
  color = "#14b8a6",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}22`,
        borderRadius: thickness / 2,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${isHorizontal ? "90deg" : "0deg"},
            transparent 0%,
            ${color}66 50%,
            transparent 100%
          )`,
          backgroundSize: isHorizontal ? "200% 100%" : "100% 200%",
        }}
        animate={
          animated
            ? {
                backgroundPosition: isHorizontal
                  ? ["0% 0%", "200% 0%"]
                  : ["0% 0%", "0% 200%"],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute"
        style={{
          width: "100%",
          height: "100%",
          background: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 20 50 10 T100 10' stroke='${encodeURIComponent(
            color
          )}' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100%",
          opacity: 0.5,
        }}
        animate={
          animated
            ? {
                x: [0, -100],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}22 0%, transparent 70%)`,
        }}
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default LiquidWaveSeparator;
