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

const SonicWaveSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#06b6d4",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const waves = 3;
  const segments = 20;

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
      {/* Sonic Waves */}
      {[...Array(waves)].map((_, waveIndex) => (
        <motion.div
          key={`wave-${waveIndex}`}
          className="absolute inset-0"
          style={{
            opacity: 0.3,
          }}
        >
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <motion.path
              d={`M 0,${thickness / 2} ${[...Array(segments)]
                .map((_, i) => {
                  const x = (i / (segments - 1)) * 100;
                  const y =
                    thickness / 2 +
                    Math.sin((i / segments) * Math.PI * 4) * (thickness / 4);
                  return `L ${x},${y}`;
                })
                .join(" ")}`}
              fill="none"
              stroke={color}
              strokeWidth={2 - waveIndex * 0.5}
              initial={{ pathLength: 0 }}
              animate={
                animated
                  ? {
                      pathLength: [0, 1],
                      opacity: [0.2, 0.6, 0.2],
                      strokeDashoffset: ["0%", "100%"],
                    }
                  : {}
              }
              transition={{
                duration: 2 + waveIndex,
                repeat: Infinity,
                ease: "linear",
              }}
              strokeDasharray="4 4"
            />
          </svg>
        </motion.div>
      ))}

      {/* Energy Pulses */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute"
          style={{
            width: thickness / 3,
            height: thickness / 3,
            backgroundColor: color,
            borderRadius: "50%",
            left: `${(i * 100) / 3}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(1px)",
          }}
          animate={
            animated
              ? {
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.2, 0.6, 0.2],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wave Glow */}
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
                scale: [0.95, 1.05, 0.95],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Frequency Ripples */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="absolute"
          style={{
            width: thickness * 2,
            height: thickness * 2,
            border: `1px solid ${color}`,
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [0, 2],
                  opacity: [0.4, 0],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default SonicWaveSeparator;