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

const BubbleFlowSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#06b6d4",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const bubbles = 12;

  const getBubbleSize = (index: number) => {
    const sizes = [thickness / 4, thickness / 3, thickness / 2];
    return sizes[index % sizes.length];
  };

  const getBubblePosition = (index: number) => {
    return `${(index * 100) / (bubbles - 1)}%`;
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
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${
            isHorizontal ? "90deg" : "0deg"
          }, ${color}11, ${color}22, ${color}11)`,
        }}
      />

      {/* Bubbles */}
      {[...Array(bubbles)].map((_, i) => {
        const size = getBubbleSize(i);
        const position = getBubblePosition(i);
        const delay = i * 0.2;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: size,
              height: size,
              [isHorizontal ? "left" : "top"]: position,
              [isHorizontal ? "top" : "left"]: "50%",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              animated
                ? {
                    y: isHorizontal
                      ? [
                          thickness * 0.3,
                          -thickness * 0.3,
                          thickness * 0.3,
                        ]
                      : 0,
                    x: isHorizontal
                      ? 0
                      : [
                          thickness * 0.3,
                          -thickness * 0.3,
                          thickness * 0.3,
                        ],
                    scale: [0.8, 1, 0.8],
                    opacity: [0.4, 0.8, 0.4],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            {/* Bubble */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${color}aa, ${color})`,
                boxShadow: `inset -2px -2px 4px rgba(0,0,0,0.2), 
                           inset 2px 2px 4px rgba(255,255,255,0.2)`,
              }}
            />
            {/* Bubble Highlight */}
            <div
              className="absolute rounded-full"
              style={{
                width: "30%",
                height: "30%",
                background: "rgba(255,255,255,0.6)",
                top: "20%",
                left: "20%",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default BubbleFlowSeparator; 