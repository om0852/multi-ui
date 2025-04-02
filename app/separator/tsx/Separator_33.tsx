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

const FractalTreeSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#22c55e",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const branches = 5;
  const subBranches = 3;

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
      {/* Main Branch */}
      <motion.div
        className="absolute"
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: color,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.7,
        }}
        animate={
          animated
            ? {
                opacity: [0.4, 0.7, 0.4],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Branch Points */}
      {[...Array(branches)].map((_, i) => (
        <React.Fragment key={i}>
          {/* Branch Node */}
          <motion.div
            className="absolute"
            style={{
              width: thickness / 4,
              height: thickness / 4,
              backgroundColor: `${color}33`,
              border: `2px solid ${color}`,
              borderRadius: "50%",
              left: `${(i * 100) / (branches - 1)}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={
              animated
                ? {
                    scale: [1, 1.2, 1],
                    borderWidth: ["2px", "3px", "2px"],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />

          {/* Sub Branches */}
          {[...Array(subBranches)].map((_, j) => {
            const angle = ((j - 1) * Math.PI) / 4; // -45°, 0°, 45°
            const length = thickness * 0.6;
            return (
              <motion.div
                key={`sub-${i}-${j}`}
                className="absolute"
                style={{
                  width: "2px",
                  height: length,
                  backgroundColor: color,
                  left: `${(i * 100) / (branches - 1)}%`,
                  top: "50%",
                  transformOrigin: "bottom center",
                  transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                  opacity: 0.5,
                }}
                animate={
                  animated
                    ? {
                        height: [0, length],
                        opacity: [0.2, 0.5],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2 + j * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Leaf */}
                <motion.div
                  className="absolute"
                  style={{
                    width: thickness / 6,
                    height: thickness / 6,
                    backgroundColor: color,
                    borderRadius: "50% 50% 50% 0",
                    top: 0,
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(45deg)",
                    opacity: 0.7,
                  }}
                  animate={
                    animated
                      ? {
                          scale: [0, 1],
                          opacity: [0.3, 0.7],
                          rotate: ["45deg", "60deg", "45deg"],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2 + j * 0.1,
                    ease: "easeOut",
                  }}
                />
              </motion.div>
            );
          })}
        </React.Fragment>
      ))}

      {/* Growing Effect */}
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

      {/* Energy Flow */}
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
          filter: "blur(4px)",
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
          ease: "linear",
        }}
      />
    </div>
  );
};

export default FractalTreeSeparator; 