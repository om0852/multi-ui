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

const PlasmaFieldSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#8b5cf6",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const plasmaBlobs = 6;
  const blobSize = thickness * 0.8;

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
      {/* Base Energy Field */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}22, ${color}11)`,
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
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Plasma Blobs */}
      {[...Array(plasmaBlobs)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: blobSize,
            height: blobSize,
            left: `${(i * 100) / (plasmaBlobs - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Plasma Core */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundColor: color,
              borderRadius: "50%",
              filter: "blur(4px)",
            }}
            animate={
              animated
                ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }
                : {}
            }
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />

          {/* Plasma Aura */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${color}66, transparent)`,
              borderRadius: "50%",
              transform: "scale(1.5)",
            }}
            animate={
              animated
                ? {
                    scale: [1.2, 1.8, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 180, 360],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Energy Streams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: thickness / 6,
            background: `linear-gradient(90deg, 
              transparent,
              ${color}33,
              transparent
            )`,
            top: `${30 + i * 20}%`,
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
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
        />
      ))}

      {/* Plasma Field Fluctuations */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent, ${color}22)`,
          mixBlendMode: "screen",
        }}
        animate={
          animated
            ? {
                scale: [1, 1.5, 1],
                opacity: [0, 0.3, 0],
                rotate: [0, 180, 360],
              }
            : {}
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Electric Arcs */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`arc-${i}`}
          className="absolute"
          style={{
            width: thickness / 2,
            height: thickness / 2,
            border: `2px solid ${color}`,
            borderRadius: "50%",
            left: `${30 + i * 40}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                  rotate: i % 2 === 0 ? [0, 180] : [180, 0],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default PlasmaFieldSeparator; 