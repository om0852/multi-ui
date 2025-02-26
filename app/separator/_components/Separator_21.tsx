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

const PixelFlowSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 20,
  length = "100%",
  color = "#9333ea",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const pixels = 15;
  const pixelSize = thickness / 2;
  const gap = 2;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}11`,
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: `${gap}px`,
      }}
    >
      {[...Array(pixels)].map((_, i) => (
        <motion.div
          key={i}
          className="relative"
          style={{
            width: pixelSize,
            height: pixelSize,
          }}
          animate={
            animated
              ? {
                  y: [
                    0,
                    i % 2 === 0 ? -thickness / 3 : thickness / 3,
                    0,
                  ],
                  rotate: [0, i % 2 === 0 ? 180 : -180, 0],
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        >
          {/* Pixel */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundColor: color,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              opacity: 0.8,
            }}
            animate={
              animated
                ? {
                    opacity: [0.4, 0.8, 0.4],
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

          {/* Pixel Glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              boxShadow: `0 0 10px ${color}66`,
              opacity: 0,
            }}
            animate={
              animated
                ? {
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.2, 1],
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
        </motion.div>
      ))}

      {/* Flow Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${
            isHorizontal ? "90deg" : "0deg"
          }, transparent, ${color}22, transparent)`,
        }}
        animate={
          animated
            ? {
                x: isHorizontal ? ["-100%", "100%"] : 0,
                y: isHorizontal ? 0 : ["-100%", "100%"],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default PixelFlowSeparator; 