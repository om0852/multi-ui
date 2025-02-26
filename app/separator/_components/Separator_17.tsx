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

const ConstellationSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#8b5cf6",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const stars = 7;
  const starSize = thickness / 4;

  // Generate random star positions
  const getStarPosition = (index: number) => {
    const xPos = `${(index * 100) / (stars - 1)}%`;
    const yOffset = index % 2 === 0 ? -thickness / 4 : thickness / 4;
    return { x: xPos, y: `calc(50% + ${yOffset}px)` };
  };

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
      {/* Connecting Lines */}
      <svg
        className="absolute inset-0"
        width="100%"
        height="100%"
        style={{ opacity: 0.3 }}
      >
        {[...Array(stars - 1)].map((_, i) => {
          const start = getStarPosition(i);
          const end = getStarPosition(i + 1);
          return (
            <motion.line
              key={i}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={color}
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={
                animated
                  ? {
                      pathLength: [0, 1],
                      opacity: [0.2, 0.6, 0.2],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear",
              }}
            />
          );
        })}
      </svg>

      {/* Stars */}
      {[...Array(stars)].map((_, i) => {
        const pos = getStarPosition(i);
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: starSize,
              height: starSize,
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
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
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: color,
                clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                boxShadow: `0 0 10px ${color}`,
              }}
            />
          </motion.div>
        );
      })}

      {/* Sparkle Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}00, ${color}11, ${color}00)`,
        }}
        animate={
          animated
            ? {
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 0.2, 0],
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

export default ConstellationSeparator; 