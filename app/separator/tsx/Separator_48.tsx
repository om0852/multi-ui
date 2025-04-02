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

const PlasmaStormSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#8b5cf6",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const plasmaNodes = 6;

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
      {/* Plasma Core */}
      {[...Array(plasmaNodes)].map((_, i) => (
        <motion.div
          key={`plasma-${i}`}
          className="absolute"
          style={{
            width: thickness * 0.6,
            height: thickness * 0.6,
            background: `radial-gradient(circle at 50% 50%, 
              ${color}66,
              ${color}33,
              transparent
            )`,
            left: `${(i * 100) / (plasmaNodes - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(4px)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                }
              : {}
          }
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Lightning Arcs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`arc-${i}`}
          className="absolute"
          style={{
            width: "30%",
            height: 2,
            backgroundColor: color,
            left: `${20 + i * 15}%`,
            top: "50%",
            transform: "translateY(-50%)",
            filter: "blur(1px)",
          }}
          animate={
            animated
              ? {
                  scaleX: [1, 1.5, 1],
                  opacity: [0, 0.8, 0],
                  rotate: [-15, 15, -15],
                }
              : {}
          }
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Storm Clouds */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${
              isHorizontal ? "90deg" : "0deg"
            }, transparent, ${color}33, transparent)`,
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
            delay: i * 0.8,
            ease: "linear",
          }}
        />
      ))}

      {/* Energy Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: 3,
            height: 3,
            backgroundColor: color,
            borderRadius: "50%",
            left: `${(i * 100) / 14}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  y: [
                    -thickness / 2,
                    thickness / 2,
                    -thickness / 2,
                  ],
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.8, 0.2],
                }
              : {}
          }
          transition={{
            duration: 1.5 + Math.random(),
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Plasma Field */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            ${color}22,
            transparent 70%
          )`,
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
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default PlasmaStormSeparator; 