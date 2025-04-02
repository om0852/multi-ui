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

const NeonPulseSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#ec4899",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const segments = 8;
  const segmentLength = 100 / segments;

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
      {/* Base Neon Line */}
      <motion.div
        className="absolute"
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: color,
          top: "50%",
          transform: "translateY(-50%)",
          filter: `drop-shadow(0 0 4px ${color})`,
        }}
        animate={
          animated
            ? {
                opacity: [0.5, 1, 0.5],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Neon Segments */}
      {[...Array(segments)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: `${segmentLength}%`,
            height: thickness / 2,
            left: `${i * segmentLength}%`,
            top: "50%",
            transform: "translateY(-50%)",
            background: `linear-gradient(90deg, 
              ${color}00,
              ${color}66,
              ${color}00
            )`,
            filter: `blur(4px)`,
          }}
          animate={
            animated
              ? {
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
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
      ))}

      {/* Pulsating Orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute"
          style={{
            width: thickness / 3,
            height: thickness / 3,
            borderRadius: "50%",
            backgroundColor: `${color}33`,
            border: `2px solid ${color}`,
            left: `${25 * (i + 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 10px ${color}`,
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    `0 0 10px ${color}`,
                    `0 0 20px ${color}`,
                    `0 0 10px ${color}`,
                  ],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy Wave */}
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
          filter: "blur(8px)",
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
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Flicker Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}22, transparent)`,
        }}
        animate={
          animated
            ? {
                opacity: [0, 0.3, 0],
                scale: [0.9, 1.1, 0.9],
              }
            : {}
        }
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default NeonPulseSeparator; 