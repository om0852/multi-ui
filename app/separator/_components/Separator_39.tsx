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

const LaserBeamSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#ef4444",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const beams = 3;

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
      {/* Main Laser Beam */}
      <motion.div
        className="absolute"
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: color,
          top: "50%",
          transform: "translateY(-50%)",
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
        }}
        animate={
          animated
            ? {
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  `0 0 10px ${color}, 0 0 20px ${color}`,
                  `0 0 20px ${color}, 0 0 40px ${color}`,
                  `0 0 10px ${color}, 0 0 20px ${color}`,
                ],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Beams */}
      {[...Array(beams)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: color,
            top: "50%",
            transform: `translateY(${(i - 1) * 4}px)`,
            opacity: 0.3,
          }}
          animate={
            animated
              ? {
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0.95, 1, 0.95],
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

      {/* Energy Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: thickness / 6,
            height: thickness / 6,
            backgroundColor: color,
            borderRadius: "50%",
            left: `${(i * 100) / 7}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(1px)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                }
              : {}
          }
          transition={{
            duration: 1 + Math.random(),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Laser Glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${
            isHorizontal ? "90deg" : "0deg"
          }, transparent, ${color}33, transparent)`,
          filter: "blur(4px)",
        }}
        animate={
          animated
            ? {
                opacity: [0.3, 0.6, 0.3],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Energy Burst */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`burst-${i}`}
          className="absolute"
          style={{
            width: thickness,
            height: thickness,
            borderRadius: "50%",
            border: `2px solid ${color}`,
            left: i === 0 ? "25%" : "75%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [0, 1.5, 0],
                  opacity: [0.8, 0, 0.8],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default LaserBeamSeparator; 