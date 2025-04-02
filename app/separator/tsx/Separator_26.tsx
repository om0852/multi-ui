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

const CosmicDustSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#c026d3",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const particles = 20;
  const particleSize = thickness / 8;

  const getRandomOffset = () => {
    return Math.random() * thickness - thickness / 2;
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
      {/* Nebula Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}22, ${color}11, transparent)`,
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

      {/* Cosmic Dust Particles */}
      {[...Array(particles)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: particleSize,
            height: particleSize,
            backgroundColor: color,
            borderRadius: "50%",
            left: `${(i * 100) / particles}%`,
            top: "50%",
            filter: "blur(1px)",
          }}
          animate={
            animated
              ? {
                  y: [
                    getRandomOffset(),
                    -getRandomOffset(),
                    getRandomOffset(),
                  ],
                  x: [
                    getRandomOffset() / 2,
                    -getRandomOffset() / 2,
                    getRandomOffset() / 2,
                  ],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.2, 0.8, 0.2],
                }
              : {}
          }
          transition={{
            duration: 3 + Math.random() * 2,
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
                    opacity: [0.2, 0.6, 0.2],
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
        </motion.div>
      ))}

      {/* Cosmic Energy Flow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, 
            transparent,
            ${color}11 20%,
            ${color}22 50%,
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

      {/* Star Twinkle Effect */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: particleSize * 2,
            height: particleSize * 2,
            backgroundColor: "white",
            borderRadius: "50%",
            left: `${20 + i * 15}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default CosmicDustSeparator; 