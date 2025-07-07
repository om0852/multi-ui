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

const DNAHelixSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 20,
  length = "100%",
  color = "#a855f7",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const dots = 12;
  const radius = thickness / 2;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}11`,
        borderRadius: thickness / 2,
      }}
    >
      {[...Array(dots)].map((_, index) => (
        <React.Fragment key={index}>
          <motion.div
            className="absolute rounded-full"
            style={{
              width: radius / 2,
              height: radius / 2,
              backgroundColor: color,
              left: `${(index * 100) / dots}%`,
            }}
            animate={
              animated
                ? {
                    y: [
                      radius * Math.sin((index * Math.PI) / 2),
                      radius * Math.sin((index * Math.PI) / 2 + Math.PI),
                      radius * Math.sin((index * Math.PI) / 2 + 2 * Math.PI),
                    ],
                    opacity: [0.2, 1, 0.2],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: radius / 2,
              height: radius / 2,
              backgroundColor: `${color}aa`,
              left: `${(index * 100) / dots}%`,
            }}
            animate={
              animated
                ? {
                    y: [
                      -radius * Math.sin((index * Math.PI) / 2),
                      -radius * Math.sin((index * Math.PI) / 2 + Math.PI),
                      -radius * Math.sin((index * Math.PI) / 2 + 2 * Math.PI),
                    ],
                    opacity: [1, 0.2, 1],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </React.Fragment>
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${color}00, ${color}22, ${color}00)`,
        }}
        animate={
          animated
            ? {
                x: ["-100%", "100%"],
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

export default DNAHelixSeparator; 