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

const DashFlowSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 4,
  length = "100%",
  color = "#0ea5e9",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const dashCount = 15;
  const dashLength = 20;
  const dashGap = 15;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}11`,
        borderRadius: thickness / 2,
      }}
    >
      {[...Array(dashCount)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: isHorizontal ? dashLength : thickness,
            height: isHorizontal ? thickness : dashLength,
            backgroundColor: color,
            borderRadius: thickness / 2,
            left: isHorizontal ? `${index * (dashLength + dashGap)}px` : 0,
            top: isHorizontal ? 0 : `${index * (dashLength + dashGap)}px`,
          }}
          animate={
            animated
              ? {
                  x: isHorizontal ? [0, dashLength + dashGap] : 0,
                  y: isHorizontal ? 0 : [0, dashLength + dashGap],
                  opacity: [0.3, 1, 0.3],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "linear",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${isHorizontal ? "90deg" : "0deg"}, 
            transparent 0%,
            ${color}22 30%,
            ${color}22 70%,
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

export default DashFlowSeparator;
