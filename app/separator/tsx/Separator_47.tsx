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

const CrystalPrismSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#ec4899",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const crystals = 5;

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
      {/* Crystal Formations */}
      {[...Array(crystals)].map((_, i) => (
        <motion.div
          key={`crystal-${i}`}
          className="absolute"
          style={{
            width: thickness * 0.8,
            height: thickness * 0.8,
            background: `linear-gradient(45deg, 
              ${color}22,
              ${color}44,
              ${color}22
            )`,
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            left: `${(i * 100) / (crystals - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3],
                }
              : {}
          }
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light Refractions */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`refraction-${i}`}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${
              45 + i * 45
            }deg, transparent, ${color}33, transparent)`,
            filter: "blur(4px)",
          }}
          animate={
            animated
              ? {
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180],
                }
              : {}
          }
          transition={{
            duration: 2 + i,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
        />
      ))}

      {/* Prismatic Glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            ${color}44,
            ${color}22,
            transparent
          )`,
          filter: "blur(8px)",
        }}
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: 2,
            height: 2,
            backgroundColor: color,
            borderRadius: "50%",
            left: `${(i * 100) / 11}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  y: [
                    -thickness / 3,
                    thickness / 3,
                    -thickness / 3,
                  ],
                  scale: [1, 2, 1],
                  opacity: [0.2, 0.8, 0.2],
                }
              : {}
          }
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default CrystalPrismSeparator; 