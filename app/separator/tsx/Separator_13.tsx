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

const CircuitBoardSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 16,
  length = "100%",
  color = "#22c55e",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const nodes = 6;
  const nodeSize = thickness / 3;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}11`,
        borderRadius: "2px",
      }}
    >
      {/* Main Circuit Line */}
      <motion.div
        className="absolute"
        style={{
          width: isHorizontal ? "100%" : "2px",
          height: isHorizontal ? "2px" : "100%",
          backgroundColor: color,
          top: isHorizontal ? "50%" : "0",
          left: isHorizontal ? "0" : "50%",
          transform: isHorizontal ? "translateY(-50%)" : "translateX(-50%)",
        }}
      />

      {/* Circuit Nodes */}
      {[...Array(nodes)].map((_, index) => (
        <React.Fragment key={index}>
          <motion.div
            className="absolute rounded-full"
            style={{
              width: nodeSize,
              height: nodeSize,
              backgroundColor: color,
              left: isHorizontal ? `${(index * 100) / (nodes - 1)}%` : "50%",
              top: isHorizontal ? "50%" : `${(index * 100) / (nodes - 1)}%`,
              transform: "translate(-50%, -50%)",
              boxShadow: `0 0 5px ${color}`,
            }}
            animate={
              animated
                ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
          {/* Branch Lines */}
          {index % 2 === 0 && (
            <>
              <motion.div
                className="absolute"
                style={{
                  width: isHorizontal ? "2px" : thickness / 2,
                  height: isHorizontal ? thickness / 2 : "2px",
                  backgroundColor: color,
                  left: isHorizontal ? `${(index * 100) / (nodes - 1)}%` : "50%",
                  top: isHorizontal ? "0" : `${(index * 100) / (nodes - 1)}%`,
                  transform: isHorizontal ? "translateX(-50%)" : "translateY(-50%)",
                }}
              />
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: nodeSize / 1.5,
                  height: nodeSize / 1.5,
                  backgroundColor: color,
                  left: isHorizontal ? `${(index * 100) / (nodes - 1)}%` : "50%",
                  top: isHorizontal ? "0" : `${(index * 100) / (nodes - 1)}%`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={
                  animated
                    ? {
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
              />
            </>
          )}
        </React.Fragment>
      ))}

      {/* Data Flow Animation */}
      <motion.div
        className="absolute"
        style={{
          width: isHorizontal ? "30%" : "100%",
          height: isHorizontal ? "100%" : "30%",
          background: `linear-gradient(${
            isHorizontal ? "90deg" : "0deg"
          }, transparent, ${color}44, transparent)`,
        }}
        animate={
          animated
            ? {
                x: isHorizontal ? ["-100%", "400%"] : 0,
                y: isHorizontal ? 0 : ["-100%", "400%"],
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

export default CircuitBoardSeparator; 