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

const CyberCircuitSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#2dd4bf",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const nodes = 6;
  const nodeSize = thickness / 4;

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
      {/* Main Circuit Path */}
      <motion.div
        className="absolute"
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: color,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.5,
        }}
      />

      {/* Circuit Nodes and Branches */}
      {[...Array(nodes)].map((_, i) => (
        <React.Fragment key={i}>
          <motion.div
            className="absolute"
            style={{
              width: nodeSize,
              height: nodeSize,
              backgroundColor: `${color}22`,
              border: `2px solid ${color}`,
              borderRadius: i % 2 === 0 ? "20%" : "50%",
              left: `${(i * 100) / (nodes - 1)}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={
              animated
                ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                    rotate: i % 2 === 0 ? [0, 90, 0] : [0, -90, 0],
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

          {/* Vertical Branches */}
          {i % 2 === 0 && (
            <>
              <motion.div
                className="absolute"
                style={{
                  width: "2px",
                  height: thickness / 2,
                  backgroundColor: color,
                  left: `${(i * 100) / (nodes - 1)}%`,
                  top: "25%",
                  opacity: 0.5,
                }}
                animate={
                  animated
                    ? {
                        opacity: [0.2, 0.5, 0.2],
                        height: [thickness / 2, thickness / 1.5, thickness / 2],
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

              {/* Branch Endpoints */}
              <motion.div
                className="absolute"
                style={{
                  width: nodeSize / 2,
                  height: nodeSize / 2,
                  backgroundColor: color,
                  borderRadius: "2px",
                  left: `${(i * 100) / (nodes - 1)}%`,
                  top: "0",
                  transform: "translate(-50%, 0)",
                }}
                animate={
                  animated
                    ? {
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            </>
          )}
        </React.Fragment>
      ))}

      {/* Data Flow Effect */}
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
          ease: "linear",
        }}
      />

      {/* Digital Pulse Effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute"
          style={{
            width: nodeSize,
            height: nodeSize,
            backgroundColor: "transparent",
            border: `2px solid ${color}`,
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default CyberCircuitSeparator;