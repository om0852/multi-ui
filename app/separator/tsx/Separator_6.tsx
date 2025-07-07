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

const ParticleFlowSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 20,
  length = "100%",
  color = "#60a5fa",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const particles = 12;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}22`,
        borderRadius: "10px",
      }}
    >
      {[...Array(particles)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: thickness / 4,
            height: thickness / 4,
            backgroundColor: color,
            left: `${(index * 100) / particles}%`,
            boxShadow: `0 0 10px ${color}`,
          }}
          animate={
            animated
              ? {
                  y: [0, -(thickness / 2), 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${color}11, ${color}33, ${color}11)`,
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

export default ParticleFlowSeparator;
