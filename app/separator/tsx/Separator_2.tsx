"use client";
import React from "react";
import { motion } from "framer-motion";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  color?: string;
  length?: string; // For custom width/height
  animated?: boolean;
  type?: "solid" | "dashed" | "dotted" | "gradient" | "glowing"; // Different separator types
}

const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 2,
  color = "#e5e7eb", // Default color (Tailwind bg-gray-200)
  length = "100%", // Full width/height by default
  animated = false,
  type = "solid",
}) => {
  const isHorizontal = orientation === "horizontal";
  const separatorStyles = {
    width: isHorizontal ? length : `${thickness}px`,
    height: isHorizontal ? `${thickness}px` : length,
    borderRadius: "4px", // Rounded edges
  };

  // Custom Tailwind classes for different separator types
  const getSeparatorType = () => {
    switch (type) {
      case "dashed":
        return {
          borderStyle: "dashed",
          borderWidth: `${thickness}px`,
          borderSpacing: `${thickness * 2}px`, // Adjust space between dashes based on thickness
        };
      case "dotted":
        return {
          borderStyle: "dotted",
          borderWidth: `${thickness}px`,
          borderSpacing: `${thickness * 2}px`, // Adjust space between dots based on thickness
        };
      case "gradient":
        return `bg-gradient-to-r from-${color} to-white`; // Tailwind gradient
      case "glowing":
        return "border-2 border-transparent bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 animate-pulse"; // Glowing effect
      default:
        return "border-solid"; // Solid separator
    }
  };

  return (
    <motion.div
      initial={animated ? { scaleX: 0, scaleY: 0 } : undefined}
      animate={animated ? { scaleX: 1, scaleY: 1 } : undefined}
      transition={animated ? { duration: 0.5, ease: "easeOut" } : undefined}
      className={`flex ${isHorizontal ? "w-full" : "h-full"} border-t ${getSeparatorType()}`}
      style={separatorStyles}
    />
  );
};

export default Separator;
