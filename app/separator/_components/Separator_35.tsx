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

const MagneticFieldSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#f97316",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const poles = 3;
  const fieldLines = 12;
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
      {/* Magnetic Poles */}
      {[...Array(poles)].map((_, i) => (
        <motion.div
          key={`pole-${i}`}
          className="absolute"
          style={{
            width: thickness / 2,
            height: thickness / 2,
            backgroundColor: `${color}33`,
            border: `2px solid ${color}`,
            borderRadius: "50%",
            left: `${25 + i * 25}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    `0 0 10px ${color}66`,
                    `0 0 20px ${color}66`,
                    `0 0 10px ${color}66`,
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

      {/* Magnetic Field Lines */}
      {[...Array(fieldLines)].map((_, i) => {
        const yOffset = (i - fieldLines / 2) * (thickness / fieldLines);
        return (
          <motion.div
            key={`field-${i}`}
            className="absolute"
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: color,
              top: `calc(50% + ${yOffset}px)`,
              opacity: 0.2,
              transformOrigin: "center",
            }}
            animate={
              animated
                ? {
                    scaleX: [0.95, 1.05, 0.95],
                    opacity: [0.1, 0.3, 0.1],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Magnetic Particles */}
      {[...Array(particles)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: thickness / 6,
            height: thickness / 6,
            backgroundColor: color,
            borderRadius: "50%",
            opacity: 0.6,
          }}
          animate={
            animated
              ? {
                  x: [
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                  ],
                  y: [
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                  ],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.6, 0.3],
                }
              : {}
          }
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Magnetic Force Field */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}00, ${color}22)`,
        }}
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
                opacity: [0, 0.3, 0],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Energy Pulse */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, 
            transparent,
            ${color}11 20%,
            ${color}33 50%,
            ${color}11 80%,
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
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Magnetic Distortion */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            ${isHorizontal ? "90deg" : "0deg"},
            transparent,
            ${color}11 2px,
            transparent 4px
          )`,
          opacity: 0.3,
        }}
        animate={
          animated
            ? {
                backgroundPosition: ["0px 0px", "10px 0px"],
                opacity: [0.2, 0.4, 0.2],
              }
            : {}
        }
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default MagneticFieldSeparator; 