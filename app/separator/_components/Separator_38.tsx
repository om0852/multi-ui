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

const DigitalRainSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#22c55e",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const columns = 20;
  const chars = "01";

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
      {/* Digital Rain Columns */}
      {[...Array(columns)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: `${100 / columns}%`,
            height: "100%",
            left: `${(i * 100) / columns}%`,
          }}
        >
          {[...Array(3)].map((_, j) => (
            <motion.div
              key={`${i}-${j}`}
              className="absolute text-xs font-mono"
              style={{
                color: color,
                left: "50%",
                transform: "translateX(-50%)",
                opacity: 0,
              }}
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

      {/* Base Line */}
      <motion.div
        className="absolute"
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: color,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.3,
        }}
      />

      {/* Digital Glitch Effect */}
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
          mixBlendMode: "screen",
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
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Data Stream Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: 2,
            height: 2,
            backgroundColor: color,
            left: `${(i * 100) / 9}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  y: [-10, 10, -10],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy Field */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}22, transparent)`,
        }}
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default DigitalRainSeparator; 