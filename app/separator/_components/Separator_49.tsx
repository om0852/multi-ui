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

const NeuralNetworkSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#10b981",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const nodes = 8;

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
      {/* Neural Nodes */}
      {[...Array(nodes)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute"
          style={{
            width: thickness / 3,
            height: thickness / 3,
            backgroundColor: `${color}22`,
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
                  opacity: [0.5, 1, 0.5],
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

      {/* Synaptic Connections */}
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
            opacity: 0.3,
          }}
          animate={
            animated
              ? {
                  opacity: [0.2, 0.6, 0.2],
                  scaleX: [0.8, 1, 0.8],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Data Flow */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`flow-${i}`}
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
                  x: ["-10%", "110%"],
                  y: [
                    -thickness / 4,
                    thickness / 4,
                    -thickness / 4,
                  ],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0, 0.8, 0],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Neural Field */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}22, transparent)`,
        }}
        animate={
          animated
            ? {
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Activation Waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
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
    </div>
  );
};

export default NeuralNetworkSeparator; 