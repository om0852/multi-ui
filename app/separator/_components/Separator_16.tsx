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

const PulseNetworkSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 20,
  length = "100%",
  color = "#0ea5e9",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const nodes = 5;
  const nodeSize = thickness / 3;

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
      {/* Connection Lines */}
      <svg
        className="absolute inset-0"
        width="100%"
        height="100%"
        style={{ opacity: 0.3 }}
      >
        {[...Array(nodes - 1)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${(i * 100) / (nodes - 1)}%`}
            y1="50%"
            x2={`${((i + 1) * 100) / (nodes - 1)}%`}
            y2="50%"
            stroke={color}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={
              animated
                ? {
                    pathLength: [0, 1],
                    opacity: [0.2, 1, 0.2],
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
      </svg>

      {/* Nodes */}
      {[...Array(nodes)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: nodeSize,
            height: nodeSize,
            backgroundColor: color,
            left: `${(i * 100) / (nodes - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    `0 0 0 0 ${color}33`,
                    `0 0 10px 5px ${color}66`,
                    `0 0 0 0 ${color}33`,
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

      {/* Pulse Effect */}
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
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default PulseNetworkSeparator; 