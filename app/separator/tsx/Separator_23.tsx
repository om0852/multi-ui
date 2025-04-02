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

const LightningBoltSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 20,
  length = "100%",
  color = "#eab308",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const bolts = 5;
  const boltWidth = thickness * 1.5;

  const getBoltPath = () => {
    const height = thickness;
    return `M0,${height / 2} 
            L${height * 0.3},0 
            L${height * 0.7},${height * 0.4} 
            L${height},0 
            L${height * 0.7},${height} 
            L${height * 0.3},${height * 0.6} 
            L0,${height} Z`;
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
      {/* Lightning Bolts */}
      {[...Array(bolts)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: boltWidth,
            height: thickness,
            left: `${(i * 100) / (bolts - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 1, 0.3],
                }
              : {}
          }
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        >
          <svg width="100%" height="100%" viewBox={`0 0 ${thickness} ${thickness}`}>
            <motion.path
              d={getBoltPath()}
              fill={color}
              initial={{ opacity: 0 }}
              animate={
                animated
                  ? {
                      opacity: [0.4, 1, 0.4],
                      filter: [
                        "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
                        "drop-shadow(0 0 8px rgba(255,255,255,0.8))",
                        "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 0.3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Electric Field Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}00, ${color}22, ${color}00)`,
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
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Energy Flow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${color}00, ${color}44, ${color}00)`,
          filter: "blur(8px)",
        }}
        animate={
          animated
            ? {
                x: ["-100%", "100%"],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default LightningBoltSeparator; 