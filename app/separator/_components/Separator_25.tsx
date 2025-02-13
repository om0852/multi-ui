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

const DNASpiralSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#0ea5e9",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const segments = 20;
  const dotSize = thickness / 6;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}11`,
        borderRadius: "4px",
      }}
    >
      {/* Base Line */}
      <div
        className="absolute"
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: `${color}22`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* DNA Strands */}
      {[...Array(segments)].map((_, i) => (
        <React.Fragment key={i}>
          {/* Top Strand */}
          <motion.div
            className="absolute"
            style={{
              width: dotSize,
              height: dotSize,
              backgroundColor: color,
              borderRadius: "50%",
              left: `${(i * 100) / segments}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={
              animated
                ? {
                    y: [
                      -thickness / 3,
                      0,
                      thickness / 3,
                      0,
                      -thickness / 3,
                    ],
                    opacity: [0.2, 1, 0.2, 1, 0.2],
                    scale: [0.8, 1, 0.8, 1, 0.8],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />

          {/* Bottom Strand */}
          <motion.div
            className="absolute"
            style={{
              width: dotSize,
              height: dotSize,
              backgroundColor: `${color}cc`,
              borderRadius: "50%",
              left: `${(i * 100) / segments}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={
              animated
                ? {
                    y: [
                      thickness / 3,
                      0,
                      -thickness / 3,
                      0,
                      thickness / 3,
                    ],
                    opacity: [0.2, 1, 0.2, 1, 0.2],
                    scale: [0.8, 1, 0.8, 1, 0.8],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />

          {/* Connecting Lines */}
          <motion.div
            className="absolute"
            style={{
              width: "2px",
              height: thickness * 0.6,
              backgroundColor: `${color}44`,
              left: `${(i * 100) / segments}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={
              animated
                ? {
                    rotate: [45, -45, 45],
                    opacity: [0.2, 0.4, 0.2],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        </React.Fragment>
      ))}

      {/* Energy Flow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${color}00, ${color}22, ${color}00)`,
          filter: "blur(4px)",
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

export default DNASpiralSeparator; 