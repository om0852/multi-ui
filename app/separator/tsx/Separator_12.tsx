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

const MorseCodeSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 8,
  length = "100%",
  color = "#f43f5e",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const morsePattern = [
    "dot", "dash", "dot", "dot", // H
    "space",
    "dot", // E
    "space",
    "dot", "dash", "dash", "dot", // P
  ];

  const getDotWidth = () => {
    return thickness;
  };

  const getDashWidth = () => {
    return thickness * 3;
  };

  const getSpaceWidth = () => {
    return thickness * 2;
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}11`,
        borderRadius: thickness / 2,
        display: "flex",
        alignItems: "center",
        gap: `${thickness / 2}px`,
      }}
    >
      {morsePattern.map((type, index) => (
        <motion.div
          key={index}
          className="rounded-full"
          style={{
            width: isHorizontal
              ? type === "dot"
                ? getDotWidth()
                : type === "dash"
                ? getDashWidth()
                : getSpaceWidth()
              : thickness,
            height: isHorizontal
              ? thickness
              : type === "dot"
              ? getDotWidth()
              : type === "dash"
              ? getDashWidth()
              : getSpaceWidth(),
            backgroundColor: type === "space" ? "transparent" : color,
            borderRadius: thickness / 2,
          }}
          animate={
            animated && type !== "space"
              ? {
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1, 0.8],
                }
              : {}
          }
          transition={{
            duration: type === "dot" ? 0.5 : 1,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${color}00, ${color}22, ${color}00)`,
        }}
        animate={
          animated
            ? {
                x: ["-100%", "100%"],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default MorseCodeSeparator; 