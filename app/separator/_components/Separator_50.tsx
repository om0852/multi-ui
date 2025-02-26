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

const GalacticOrbitSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#0ea5e9",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const orbits = 3;
  const planets = 4;

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
      {/* Orbital Paths */}
      {[...Array(orbits)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: thickness * 0.8,
            border: `1px solid ${color}33`,
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  rotate: [0, 360],
                  scale: [1 - i * 0.2, 1.1 - i * 0.2],
                  opacity: [0.2, 0.4, 0.2],
                }
              : {}
          }
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Celestial Bodies */}
      {[...Array(planets)].map((_, i) => (
        <motion.div
          key={`planet-${i}`}
          className="absolute"
          style={{
            width: thickness / 4,
            height: thickness / 4,
            backgroundColor: color,
            borderRadius: "50%",
            filter: "blur(1px)",
          }}
          animate={
            animated
              ? {
                  x: [
                    `${25 + i * 15}%`,
                    `${75 - i * 15}%`,
                    `${25 + i * 15}%`,
                  ],
                  y: [
                    -thickness / 3,
                    thickness / 3,
                    -thickness / 3,
                  ],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.7, 0.3],
                }
              : {}
          }
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Star Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            width: 2,
            height: 2,
            backgroundColor: color,
            borderRadius: "50%",
            left: `${(i * 100) / 19}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [0.8, 1.5, 0.8],
                  opacity: [0.2, 0.6, 0.2],
                }
              : {}
          }
          transition={{
            duration: 1 + Math.random(),
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Galactic Core */}
      <motion.div
        className="absolute"
        style={{
          width: thickness * 0.6,
          height: thickness * 0.6,
          background: `radial-gradient(circle at 50% 50%, 
            ${color}66,
            ${color}33,
            transparent
          )`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(4px)",
        }}
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Space Dust */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${
              isHorizontal ? "90deg" : "0deg"
            }, transparent, ${color}22, transparent)`,
            filter: "blur(8px)",
          }}
          animate={
            animated
              ? {
                  x: ["-100%", "100%"],
                  opacity: [0, 0.3, 0],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default GalacticOrbitSeparator; 