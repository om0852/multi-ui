"use client";
import React from "react";
import { motion } from "framer-motion";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  color?: string;
  length?: string; // For custom width/height
  animated?: boolean;
}

const ZigzagSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 4,
  color = "#e5e7eb", // Default color (Tailwind bg-gray-200)
  length = "100%", // Full width/height by default
  animated = false,
}) => {
  const isHorizontal = orientation === "horizontal";
  const separatorStyles = {
    width: isHorizontal ? length : `${thickness}px`,
    height: isHorizontal ? `${thickness}px` : length,
  };

  return (
    <motion.div
      initial={animated ? { scaleX: 0, scaleY: 0 } : undefined}
      animate={animated ? { scaleX: 1, scaleY: 1 } : undefined}
      transition={animated ? { duration: 0.5, ease: "easeOut" } : undefined}
      className={`relative ${isHorizontal ? "w-full" : "h-full"}`}
      style={separatorStyles}
    >
      {/* Zigzag pattern */}
      <div
        className="absolute inset-0 bg-transparent"
        style={{
          clipPath: isHorizontal
            ? `polygon(0% 0%, 10% 100%, 20% 0%, 30% 100%, 40% 0%, 50% 100%, 60% 0%, 70% 100%, 80% 0%, 90% 100%, 100% 0%)`
            : `polygon(0% 0%, 10% 100%, 20% 0%, 30% 100%, 40% 0%, 50% 100%, 60% 0%, 70% 100%, 80% 0%, 90% 100%, 100% 0%)`,
          backgroundColor: color, // Set the background color for the zigzag
        }}
      />
    </motion.div>
  );
};

export default ZigzagSeparator;
