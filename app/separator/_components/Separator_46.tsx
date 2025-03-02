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

const QuantumTunnelSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#3b82f6",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const particles = 8;
  const tunnelRings = 4;

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
      {/* Quantum Tunnel */}
      {[...Array(tunnelRings)].map((_, i) => (
        <motion.div
          key={`tunnel-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: thickness * 0.8,
            border: `1px solid ${color}`,
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.3,
          }}
          animate={
            animated
              ? {
                  scale: [1 - i * 0.2, 1.2 - i * 0.2],
                  opacity: [0.1, 0.3],
                  rotate: [0, 360],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        />
      ))}

      {/* Quantum Particles */}
      {[...Array(particles)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: thickness / 6,
            height: thickness / 6,
            backgroundColor: color,
            borderRadius: "50%",
            filter: "blur(1px)",
          }}
          animate={
            animated
              ? {
                  x: [
                    `${-50 + (i * 100) / particles}%`,
                    `${50 + (i * 100) / particles}%`,
                  ],
                  y: [
                    -thickness / 4,
                    thickness / 4,
                    -thickness / 4,
                  ],
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                }
              : {}
          }
          transition={{
            duration: 2 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy Field */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}33, transparent)`,
        }}
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Quantum Waves */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, 
            transparent,
            ${color}22 20%,
            ${color}44 50%,
            ${color}22 80%,
            transparent
          )`,
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
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default QuantumTunnelSeparator;