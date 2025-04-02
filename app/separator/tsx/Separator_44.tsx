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

const EnergyFieldSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#f59e0b",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const nodes = 6;

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
      {/* Energy Field Base */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}33, transparent)`,
          filter: "blur(4px)",
        }}
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
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

      {/* Energy Nodes */}
      {[...Array(nodes)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute"
          style={{
            width: thickness / 3,
            height: thickness / 3,
            backgroundColor: `${color}33`,
            border: `2px solid ${color}`,
            borderRadius: "50%",
            left: `${(i * 100) / (nodes - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    `0 0 10px ${color}66`,
                    `0 0 20px ${color}66`,
                    `0 0 10px ${color}66`,
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

      {/* Energy Connections */}
      {[...Array(nodes - 1)].map((_, i) => (
        <motion.div
          key={`connection-${i}`}
          className="absolute"
          style={{
            width: `${100 / (nodes - 1)}%`,
            height: 2,
            backgroundColor: color,
            left: `${(i * 100) / (nodes - 1)}%`,
            top: "50%",
            transform: "translateY(-50%)",
            transformOrigin: "left center",
            opacity: 0.5,
          }}
          animate={
            animated
              ? {
                  opacity: [0.3, 0.7, 0.3],
                  scaleX: [0.8, 1, 0.8],
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

      {/* Energy Pulses */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${
              isHorizontal ? "90deg" : "0deg"
            }, transparent, ${color}44, transparent)`,
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

      {/* Field Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: 2,
            height: 2,
            backgroundColor: color,
            borderRadius: "50%",
            left: `${(i * 100) / 11}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  y: [
                    -thickness / 3,
                    thickness / 3,
                    -thickness / 3,
                  ],
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.8, 0.2],
                }
              : {}
          }
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy Aura */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${
            isHorizontal ? "90deg" : "0deg"
          }, ${color}00, ${color}22, ${color}00)`,
        }}
        animate={
          animated
            ? {
                opacity: [0.3, 0.6, 0.3],
                scale: [0.95, 1.05, 0.95],
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

export default EnergyFieldSeparator;