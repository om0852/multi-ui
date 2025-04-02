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

const CrystalFormationSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#a855f7",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const crystals = 5;

  const getCrystalPath = (index: number) => {
    const height = thickness;
    const width = height * 0.8;
    const paths = [
      `M${width/2},0 L${width},${height/2} L${width/2},${height} L0,${height/2} Z`,
      `M${width/2},0 L${width},${height*0.7} L${width/2},${height} L0,${height*0.7} Z`,
      `M${width/2},0 L${width*0.8},${height*0.6} L${width/2},${height} L${width*0.2},${height*0.6} Z`,
    ];
    return paths[index % paths.length];
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
      {/* Crystal Formations */}
      {[...Array(crystals)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: thickness,
            height: thickness,
            left: `${(i * 100) / (crystals - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg width="100%" height="100%" viewBox={`0 0 ${thickness} ${thickness}`}>
            <motion.path
              d={getCrystalPath(i)}
              fill={`${color}33`}
              stroke={color}
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                animated
                  ? {
                      pathLength: [0, 1],
                      opacity: [0, 1],
                      scale: [0.8, 1],
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
          </svg>

          {/* Crystal Inner Glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${color}44, transparent)`,
              filter: "blur(2px)",
            }}
            animate={
              animated
                ? {
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.8, 1.1, 0.8],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Connecting Line */}
      <div
        className="absolute"
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: `${color}33`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* Shimmer Effect */}
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

      {/* Sparkle Effects */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            width: 4,
            height: 4,
            backgroundColor: "white",
            borderRadius: "50%",
            left: `${25 + i * 25}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default CrystalFormationSeparator; 