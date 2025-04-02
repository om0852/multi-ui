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

const InfinityLoopSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#6366f1",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const loops = 3;

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
      {/* Infinity Loops */}
      {[...Array(loops)].map((_, loopIndex) => (
        <div
          key={loopIndex}
          className="absolute"
          style={{
            width: thickness * 2,
            height: thickness,
            left: `${25 + loopIndex * 25}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Loop Path */}
          <svg width="100%" height="100%" viewBox="0 0 100 50">
            <motion.path
              d="M25,25 C25,12.5 37.5,12.5 50,25 C62.5,37.5 75,37.5 75,25 C75,12.5 62.5,12.5 50,25 C37.5,37.5 25,37.5 25,25"
              fill="none"
              stroke={color}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={
                animated
                  ? {
                      pathLength: [0, 1],
                      opacity: [0.3, 0.8, 0.3],
                      strokeDashoffset: ["0%", "100%"],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              strokeDasharray="4 4"
            />
          </svg>

          {/* Flow Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute"
              style={{
                width: thickness / 6,
                height: thickness / 6,
                backgroundColor: color,
                borderRadius: "50%",
                filter: "blur(1px)",
              }}
              animate={
                animated
                  ? {
                      offsetPath: `path('M25,25 C25,12.5 37.5,12.5 50,25 C62.5,37.5 75,37.5 75,25 C75,12.5 62.5,12.5 50,25 C37.5,37.5 25,37.5 25,25')`,
                      offsetDistance: ["0%", "100%"],
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.2, 0.6, 0.2],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear",
              }}
            />
          ))}
        </div>
      ))}

      {/* Energy Flow */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${
              isHorizontal ? "90deg" : "0deg"
            }, transparent, ${color}22, transparent)`,
            filter: "blur(4px)",
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
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "linear",
          }}
        />
      ))}

      {/* Loop Glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}33, transparent)`,
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

      {/* Infinity Points */}
      {[...Array(loops * 2)].map((_, i) => (
        <motion.div
          key={`point-${i}`}
          className="absolute"
          style={{
            width: thickness / 4,
            height: thickness / 4,
            backgroundColor: `${color}33`,
            border: `2px solid ${color}`,
            borderRadius: "50%",
            left: `${(i * 100) / (loops * 2 - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                  boxShadow: [
                    `0 0 5px ${color}66`,
                    `0 0 10px ${color}66`,
                    `0 0 5px ${color}66`,
                  ],
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
    </div>
  );
};

export default InfinityLoopSeparator; 