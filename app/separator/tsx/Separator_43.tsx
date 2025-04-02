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

const TimeWarpSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#0891b2",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const clockPoints = 12;
  const radius = thickness / 2;

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
      {/* Time Portals */}
      {[...Array(3)].map((_, portalIndex) => (
        <div
          key={portalIndex}
          className="absolute"
          style={{
            width: thickness,
            height: thickness,
            left: `${25 + portalIndex * 25}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Clock Face */}
          {[...Array(clockPoints)].map((_, i) => {
            const angle = (i * 360) / clockPoints;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: 2,
                  height: 2,
                  backgroundColor: color,
                  borderRadius: "50%",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
                animate={
                  animated
                    ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
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

          {/* Clock Hands */}
          {[...Array(2)].map((_, handIndex) => (
            <motion.div
              key={`hand-${handIndex}`}
              className="absolute"
              style={{
                width: handIndex === 0 ? radius : radius * 0.7,
                height: 2,
                backgroundColor: color,
                left: "50%",
                top: "50%",
                transformOrigin: "left center",
              }}
              animate={
                animated
                  ? {
                      rotate: [0, 360],
                    }
                  : {}
              }
              transition={{
                duration: handIndex === 0 ? 6 : 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      ))}

      {/* Time Distortion Waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${
              isHorizontal ? "90deg" : "0deg"
            }, transparent, ${color}22, transparent)`,
            filter: "blur(4px)",
          }}
          animate={
            animated
              ? {
                  x: ["-100%", "100%"],
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8],
                }
              : {}
          }
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Temporal Energy */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`energy-${i}`}
          className="absolute"
          style={{
            width: thickness / 6,
            height: thickness / 6,
            backgroundColor: color,
            borderRadius: "50%",
            left: `${(i * 100) / 7}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(1px)",
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                  y: [
                    -thickness / 4,
                    thickness / 4,
                    -thickness / 4,
                  ],
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
      ))}

      {/* Time Vortex */}
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
                rotate: [0, 360],
              }
            : {}
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default TimeWarpSeparator; 