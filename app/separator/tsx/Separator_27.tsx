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

const RetroWaveSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#f472b6",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const gridLines = 10;

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
      {/* Grid Lines */}
      {[...Array(gridLines)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: isHorizontal ? "100%" : "1px",
            height: isHorizontal ? "1px" : "100%",
            backgroundColor: color,
            opacity: 0.3,
            top: isHorizontal ? `${(i * 100) / gridLines}%` : 0,
            left: isHorizontal ? 0 : `${(i * 100) / gridLines}%`,
            transform: isHorizontal 
              ? `perspective(100px) rotateX(45deg)`
              : `perspective(100px) rotateY(45deg)`,
          }}
          animate={
            animated
              ? {
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0.95, 1, 0.95],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sun Effect */}
      <motion.div
        className="absolute"
        style={{
          width: thickness * 1.5,
          height: thickness * 1.5,
          background: `radial-gradient(circle at 50% 50%, ${color}, transparent)`,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={
          animated
            ? {
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.6, 0.3],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Horizontal Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            top: `${30 + i * 20}%`,
          }}
          animate={
            animated
              ? {
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.95, 1, 0.95],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glow Effect */}
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
    </div>
  );
};

export default RetroWaveSeparator; 