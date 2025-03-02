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

const NebulaFlowSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#d946ef",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const particles = 15;

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
      {/* Nebula Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}33, ${color}11, transparent)`,
          filter: "blur(4px)",
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

      {/* Cosmic Dust */}
      {[...Array(particles)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: thickness / 6,
            height: thickness / 6,
            backgroundColor: color,
            borderRadius: "50%",
            left: `${(i * 100) / particles}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(1px)",
          }}
          animate={
            animated
              ? {
                  y: [
                    -thickness / 3,
                    thickness / 3,
                    -thickness / 3,
                  ],
                  x: [
                    thickness / 4,
                    -thickness / 4,
                    thickness / 4,
                  ],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.2, 0.8, 0.2],
                }
              : {}
          }
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          {/* Particle Glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${color}, transparent)`,
              filter: "blur(2px)",
              transform: "scale(2)",
            }}
            animate={
              animated
                ? {
                    opacity: [0.2, 0.6, 0.2],
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

      {/* Energy Streams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${
              isHorizontal ? "90deg" : "0deg"
            }, transparent, ${color}22, transparent)`,
            transform: `translateY(${(i - 1) * 30}%)`,
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
            duration: 4 - i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Nebula Swirls */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`swirl-${i}`}
          className="absolute"
          style={{
            width: thickness * 2,
            height: thickness * 2,
            border: `1px solid ${color}`,
            borderRadius: "50%",
            left: i === 0 ? "25%" : "75%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.3,
          }}
          animate={
            animated
              ? {
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.2, 0.4, 0.2],
                }
              : {}
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default NebulaFlowSeparator; 