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

const GeometricPatternSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 20,
  length = "100%",
  color = "#f97316",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const shapes = 8;
  const shapeSize = thickness * 0.8;

  const getShapeStyles = (index: number) => {
    const shapes = [
      // Triangle
      {
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        rotation: 180,
      },
      // Square
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        rotation: 45,
      },
      // Pentagon
      {
        clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        rotation: 360,
      },
      // Hexagon
      {
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        rotation: 60,
      },
    ];
    return shapes[index % shapes.length];
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}11`,
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {[...Array(shapes)].map((_, i) => {
        const shapeStyle = getShapeStyles(i);
        return (
          <motion.div
            key={i}
            className="relative"
            style={{
              width: shapeSize,
              height: shapeSize,
            }}
            animate={
              animated
                ? {
                    rotate: [0, shapeStyle.rotation],
                    scale: [0.8, 1, 0.8],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: color,
                clipPath: shapeStyle.clipPath,
                opacity: 0.8,
              }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(45deg, ${color}00, ${color}66)`,
                clipPath: shapeStyle.clipPath,
              }}
              animate={
                animated
                  ? {
                      opacity: [0, 0.5, 0],
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
          </motion.div>
        );
      })}

      {/* Connecting Line */}
      <div
        className="absolute"
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: `${color}33`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}00, ${color}11, ${color}00)`,
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
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GeometricPatternSeparator; 