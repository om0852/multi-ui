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

const QuantumWaveSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#3b82f6",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const particles = 15;
  const wavePoints = 100;

  const getWavePath = () => {
    let path = `M 0,${thickness / 2} `;
    for (let i = 0; i <= wavePoints; i++) {
      const x = (i / wavePoints) * 100;
      const y = thickness / 2 + Math.sin(i * 0.2) * (thickness / 4);
      path += `L ${x},${y} `;
    }
    return path;
  };

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
      {/* Quantum Wave */}
      <svg
        className="absolute inset-0"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <motion.path
          d={getWavePath()}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            animated
              ? {
                  pathLength: [0, 1],
                  opacity: [0.3, 0.6, 0.3],
                  strokeDashoffset: [0, -8],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Quantum Particles */}
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
                    opacity: [0.2, 0.5, 0.2],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Wave Function Collapse Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}00, ${color}22, ${color}00)`,
        }}
        animate={
          animated
            ? {
                scale: [1, 1.5, 1],
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

      {/* Quantum Field Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`field-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${color}44, transparent)`,
            top: `${30 + i * 20}%`,
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

      {/* Energy Flow */}
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
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default QuantumWaveSeparator; 