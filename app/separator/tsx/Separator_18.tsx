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

const HeartbeatSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 16,
  length = "100%",
  color = "#ef4444",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const lineWidth = 2;

  const heartbeatPath = `M 0,50 
    Q 12.5,50 25,50 
    L 37.5,50 
    L 42.5,10 
    L 47.5,90 
    L 52.5,30 
    L 57.5,50 
    L 75,50 
    Q 87.5,50 100,50`;

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
          height: lineWidth,
          backgroundColor: `${color}44`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* Heartbeat SVG */}
      <svg
        className="absolute inset-0"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d={heartbeatPath}
          fill="none"
          stroke={color}
          strokeWidth={lineWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            animated
              ? {
                  pathLength: [0, 1],
                  opacity: [0, 1],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Glow Effect */}
      <motion.div
        className="absolute"
        style={{
          width: "20%",
          height: "100%",
          background: `linear-gradient(90deg, ${color}00, ${color}33, ${color}00)`,
          filter: "blur(4px)",
        }}
        animate={
          animated
            ? {
                x: ["-100%", "500%"],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Heart Pulse */}
      <motion.div
        className="absolute"
        style={{
          width: "4px",
          height: "4px",
          backgroundColor: color,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={
          animated
            ? {
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  `0 0 0 0 ${color}66`,
                  `0 0 20px 10px ${color}33`,
                  `0 0 0 0 ${color}66`,
                ],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default HeartbeatSeparator; 