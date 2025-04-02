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

const VortexPortalSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#8b5cf6",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const portals = 3;
  const rings = 3;

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
      {/* Portal Centers */}
      {[...Array(portals)].map((_, portalIndex) => (
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
          {/* Rotating Rings */}
          {[...Array(rings)].map((_, ringIndex) => (
            <motion.div
              key={`ring-${ringIndex}`}
              className="absolute"
              style={{
                width: "100%",
                height: "100%",
                border: `2px solid ${color}`,
                borderRadius: "50%",
                opacity: 0.3,
              }}
              animate={
                animated
                  ? {
                      rotate: [0, 360],
                      scale: [1 - ringIndex * 0.2, 1 - ringIndex * 0.1],
                      opacity: [0.2, 0.4, 0.2],
                    }
                  : {}
              }
              transition={{
                duration: 3 + ringIndex,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Portal Core */}
          <motion.div
            className="absolute"
            style={{
              width: "30%",
              height: "30%",
              backgroundColor: color,
              borderRadius: "50%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              filter: `blur(2px) drop-shadow(0 0 4px ${color})`,
            }}
            animate={
              animated
                ? {
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.5, 1, 0.5],
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
      ))}

      {/* Energy Stream */}
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
          ease: "linear",
        }}
      />

      {/* Vortex Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: 3,
            height: 3,
            backgroundColor: "white",
            borderRadius: "50%",
            left: "50%",
            top: "50%",
          }}
          animate={
            animated
              ? {
                  x: [0, (Math.cos(i * 30) * thickness) / 2],
                  y: [0, (Math.sin(i * 30) * thickness) / 2],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
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
      ))}

      {/* Portal Glow */}
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
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default VortexPortalSeparator; 