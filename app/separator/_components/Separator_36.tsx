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

const RippleWaveSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#0ea5e9",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const ripples = 5;
  const rippleSize = thickness * 2;

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
      <motion.div
        className="absolute"
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: color,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.3,
        }}
      />

      {/* Ripple Effects */}
      {[...Array(ripples)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: rippleSize,
            height: rippleSize,
            border: `2px solid ${color}`,
            borderRadius: "50%",
            left: `${(i * 100) / (ripples - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [0, 1.5],
                  opacity: [0.8, 0],
                  borderWidth: ["2px", "1px"],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Water Drops */}
      {[...Array(ripples)].map((_, i) => (
        <motion.div
          key={`drop-${i}`}
          className="absolute"
          style={{
            width: thickness / 4,
            height: thickness / 4,
            backgroundColor: color,
            borderRadius: "50%",
            left: `${(i * 100) / (ripples - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 0.8, 1],
                  opacity: [0.8, 0.4, 0.8],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wave Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, 
            transparent,
            ${color}22 20%,
            ${color}44 50%,
            ${color}22 80%,
            transparent
          )`,
          filter: "blur(8px)",
        }}
        animate={
          animated
            ? {
                x: ["-100%", "100%"],
                opacity: [0, 0.5, 0],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}00, ${color}22, ${color}00)`,
        }}
        animate={
          animated
            ? {
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 0.3, 0],
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

export default RippleWaveSeparator; 