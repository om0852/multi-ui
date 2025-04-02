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

const HologramGridSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#06b6d4",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const gridLines = 8;
  const dataPoints = 6;

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
      {/* Base Grid */}
      {[...Array(gridLines)].map((_, i) => (
        <React.Fragment key={i}>
          {/* Horizontal Lines */}
          <motion.div
            className="absolute"
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: color,
              top: `${(i * 100) / (gridLines - 1)}%`,
              opacity: 0.2,
            }}
            animate={
              animated
                ? {
                    opacity: [0.1, 0.3, 0.1],
                    scaleY: [1, 1.5, 1],
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

          {/* Vertical Lines */}
          <motion.div
            className="absolute"
            style={{
              width: "1px",
              height: "100%",
              backgroundColor: color,
              left: `${(i * 100) / (gridLines - 1)}%`,
              opacity: 0.2,
            }}
            animate={
              animated
                ? {
                    opacity: [0.1, 0.3, 0.1],
                    scaleX: [1, 1.5, 1],
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
        </React.Fragment>
      ))}

      {/* Data Points */}
      {[...Array(dataPoints)].map((_, i) => (
        <motion.div
          key={`data-${i}`}
          className="absolute"
          style={{
            width: thickness / 3,
            height: thickness / 3,
            left: `${(i * 100) / (dataPoints - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Holographic Circle */}
          <motion.div
            className="absolute inset-0"
            style={{
              border: `2px solid ${color}`,
              borderRadius: "50%",
              boxShadow: `0 0 10px ${color}`,
            }}
            animate={
              animated
                ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 180, 360],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />

          {/* Inner Glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${color}44, transparent)`,
              borderRadius: "50%",
            }}
            animate={
              animated
                ? {
                    scale: [0.8, 1.1, 0.8],
                    opacity: [0.2, 0.5, 0.2],
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
        </motion.div>
      ))}

      {/* Scanning Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, 
            transparent,
            ${color}22,
            ${color}44,
            ${color}22,
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

      {/* Holographic Flicker */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${
            isHorizontal ? "90deg" : "0deg"
          }, transparent, ${color}11)`,
          mixBlendMode: "screen",
        }}
        animate={
          animated
            ? {
                opacity: [0, 0.3, 0],
                scale: [0.95, 1.05, 0.95],
              }
            : {}
        }
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Data Stream */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "100%",
            backgroundColor: color,
            left: `${20 + i * 30}%`,
            opacity: 0.3,
          }}
          animate={
            animated
              ? {
                  y: ["-100%", "100%"],
                  opacity: [0, 0.3, 0],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default HologramGridSeparator; 