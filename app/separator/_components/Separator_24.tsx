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

const FireworksSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#f43f5e",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const bursts = 5;
  const particles = 8;

  const getParticlePositions = () => {
    const positions = [];
    for (let i = 0; i < particles; i++) {
      const angle = (i * 2 * Math.PI) / particles;
      positions.push({
        x: Math.cos(angle),
        y: Math.sin(angle),
      });
    }
    return positions;
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
      {/* Firework Bursts */}
      {[...Array(bursts)].map((_, burstIndex) => (
        <div
          key={burstIndex}
          className="absolute"
          style={{
            left: `${(burstIndex * 100) / (bursts - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {getParticlePositions().map((pos, particleIndex) => (
            <motion.div
              key={particleIndex}
              className="absolute"
              style={{
                width: 4,
                height: 4,
                backgroundColor: color,
                borderRadius: "50%",
                left: "50%",
                top: "50%",
              }}
              animate={
                animated
                  ? {
                      x: [0, pos.x * thickness],
                      y: [0, pos.y * thickness],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: burstIndex * 0.3,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Center Glow */}
          <motion.div
            className="absolute"
            style={{
              width: thickness / 3,
              height: thickness / 3,
              backgroundColor: color,
              borderRadius: "50%",
              left: "50%",
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
              duration: 1.5,
              repeat: Infinity,
              delay: burstIndex * 0.3,
              ease: "easeOut",
            }}
          />
        </div>
      ))}

      {/* Sparkle Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}00, ${color}22, ${color}00)`,
        }}
        animate={
          animated
            ? {
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 0.3, 0],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light Trail */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${color}00, ${color}33, ${color}00)`,
          filter: "blur(4px)",
        }}
        animate={
          animated
            ? {
                x: ["-100%", "100%"],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default FireworksSeparator; 