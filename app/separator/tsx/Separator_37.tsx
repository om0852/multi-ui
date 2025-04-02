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

const AuroraGlowSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#10b981",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const waves = 3;

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
      {/* Aurora Waves */}
      {[...Array(waves)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg,
              transparent,
              ${color}${22 + i * 11} 20%,
              ${color}${44 + i * 11} 50%,
              ${color}${22 + i * 11} 80%,
              transparent
            )`,
            filter: `blur(${4 + i * 2}px)`,
            transform: `translateY(${(i - 1) * 30}%)`,
          }}
          animate={
            animated
              ? {
                  x: ["-100%", "100%"],
                  opacity: [0.3, 0.7, 0.3],
                }
              : {}
          }
          transition={{
            duration: 8 - i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: thickness / 6,
            height: thickness / 6,
            backgroundColor: "white",
            borderRadius: "50%",
            filter: `blur(1px)`,
            left: `${(i * 100) / 7}%`,
            top: "50%",
          }}
          animate={
            animated
              ? {
                  y: [
                    -thickness / 3,
                    thickness / 3,
                    -thickness / 3,
                  ],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.2, 0.6, 0.2],
                }
              : {}
          }
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy Flow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}33, transparent)`,
        }}
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }
            : {}
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shimmering Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            width: 2,
            height: 2,
            backgroundColor: "white",
            borderRadius: "50%",
            left: `${20 + i * 15}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AuroraGlowSeparator; 